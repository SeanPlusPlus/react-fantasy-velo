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
    rows.each((i, td) => {
      const tds = $(td).children();
      tds.each((idx, a) => {
        console.log($(a).text().trim());
      });
    });
  });
}

const resources = ['rankings']
const base = 'https://www.letour.fr/en'
const urls = resources.map((r) => (`${base}/${r}`))

getData(urls).then(handleData)