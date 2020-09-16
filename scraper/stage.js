const fetch = require('node-fetch')
const cheerio = require('cheerio');
const fs = require('fs');

const honors = [
  'yellow',
  'green',
  'polkadot',
  'white',
  'teams',
  'combativity',
];
const stageHonors = {};
const jerseys = [];
const letour = 'https://www.letour.fr/en/';

// get bonus points
const arg = process.argv[2];
var bonus = 0;
if (arg) {
  bonus = parseInt(arg.split('=')[1], 10)
}

fetch(letour)
  .then(res => res.text())
  .then(body => {
    const $ = cheerio.load(body);
    const stage = parseInt($('h3.winner__title').text().split(' ')[1], 10);
    const winner = $('.winner__rider').text().trim();
    const team = $('.winner__team').text().trim().split('/')[0];
    var points = 3 + bonus;
    stageHonors.winner = {
      rider: winner,
      team: team,
      points: points,
    }
    $('.jersey-wearer').each((i, el) => {
      const jersey = {};
      const teams = $(el).find( $('.team') );
      teams.each((idx, element) => {
        const team = $(element).text().trim()
        jersey.team = team;
      });
      const names = $(el).find( $('.name') );
      names.each((idx, element) => {
        const name = $(element).text() 
        jersey.name = name;
      });
      jersey.honor = (honors[jerseys.length]);
      jerseys.push(jersey);
    });
    jerseys.forEach((jersey) => {
      const honor = jersey.honor;
      const points = honor === 'yellow' ? 2 : 1;
      const rider = jersey.name;
      const team = (jersey.team === '') ? jersey.name : jersey.team;
      stageHonors[honor] = {
        rider: rider,
        team: team,
        points: points,
      }
      if (team === rider) {
        delete stageHonors[honor].rider;
      }
    })

    const path = '../src/data/state.json';
    const state = fs.readFileSync(path);
    const data = JSON.parse(state);

    data.stages.forEach((s) => {
      if (s.number === stage) {
        s.completed = true;
        s.winner = stageHonors.winner;
        honors.forEach((h) => {
          s[h] = stageHonors[h];
        });
        console.log('✅', s);
      }
      return s;
    });

    const json = JSON.stringify(data, null, 2);
    fs.writeFileSync(path, json);
  });
