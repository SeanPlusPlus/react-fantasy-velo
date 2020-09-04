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

const resources = ['a7d677cfcfd6a3b14e0c66f610c43fa6/none']
const base = 'https://www.letour.fr/en/ajax/ranking/7/itg'
const urls = resources.map((r) => (`${base}/${r}`))

getData(urls).then(handleData)