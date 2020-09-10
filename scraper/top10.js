const fetch = require('node-fetch')
const cheerio = require('cheerio');

async function getData(items) {
  const data = Promise.all(
    items.map(async (i) => await (await fetch(i)).text())
  )
  return data
}

const handleData = (documents) => {
  documents.forEach((document) => {
    const $ = cheerio.load(document);
    const rows = $('.rankingTables__row');
    const riders = [];
    rows.each((i, td) => {
      const tds = $(td).children();
      tds.each((idx, el) => {
        const classNameRider = 'rankingTables__row__profile runner';
        if ($(el).attr('class') === classNameRider) {
          const children = $(el).children();
          children.each((index, child) => {
            const element = $(child)
            const href = element.attr('href');
            if (href) {
              const name = element.text().trim();
              riders.push({ name });
            }
          });
        }
        const classNameTime = 'is-alignCenter time';
        if ($(el).attr('class') === classNameTime) {
          if (idx === 6) {
            const time = $(el).text().trim().replace(/['"]+/g, '');
            riders[riders.length - 1].time = time;
          }
        }
      });
    });
    const target = 10;
    const data = Array(target).fill().map((_, i) => {
      return {
        rank: (i + 1),
        ...riders[i],
      };
    });
    console.log(data);
  });
}

const letour = 'https://www.letour.fr'
const rankings = `${letour}/en/rankings`
fetch(rankings)
  .then(res => res.text())
  .then(body => {
    const $ = cheerio.load(body);
    const resources = [];
    $('.js-tabs-ranking').each((i, el) => { 
      const itg = JSON.parse($(el).attr('data-ajax-stack')).itg
      itg && resources.push(itg);
    });
    const urls = resources.map((r) => (`${letour}/${r}`))
    getData(urls).then(handleData)
  });
