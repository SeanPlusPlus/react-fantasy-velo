const fetch = require('node-fetch')
const cheerio = require('cheerio');

async function getData(items) {
  const data = Promise.all(
    items.map(async (i) => await (await fetch(i)).text())
  )
  return data
}

const handleData = (document) => {
  document.forEach((document) => {
    const $ = cheerio.load(document);
    const rows = $('.rankingTables__row');
    const riders = [];
    rows.each((i, td) => {
      const tds = $(td).children();
      tds.each((idx, el) => {
        const className = 'rankingTables__row__profile runner';
        if ($(el).attr('class') === className) {
          const children = $(el).children();
          children.each((index, child) => {
            const element = $(child)
            const href = element.attr('href');
            if (href) {
              const text = element.text().trim();
              riders.push(text);
              console.log(text);
            }
          });
        }
      });
    });

    console.log(riders.length);
    console.log(riders[0]);
    console.log(riders[1]);
    console.log(riders[2]);
    console.log(riders[3]);
  });
}

const resources = ['a7d677cfcfd6a3b14e0c66f610c43fa6/none']
const base = 'https://www.letour.fr/en/ajax/ranking/7/itg'
const urls = resources.map((r) => (`${base}/${r}`))

getData(urls).then(handleData)