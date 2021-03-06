import stageHonors from '../utils/stageHonors';
import _includes from 'lodash/includes';
import _find from 'lodash/find';

const honors = stageHonors.map((h) => (h.key));

export const setActiveManager = (store, manager, edition) => {
  const current = store.state.editions[edition];
  const managers = current.managers.map((item) => (
    item.name === manager.name ?
      {...item, active: true} :
      {...item, active: false}
  ));
  current.managers = managers;
  store.setState({ edition: current });
}

export const filterStageHonors = (store, manager) => {
  const teams = manager.teams.map((t) => (t.name));
  const stages = store.state.stages.map((stage) => {
    honors.forEach((honor) => {
      const team = stage[honor].team;
      if (team) {
        const hasTeam = _includes(teams, team)
        if (!hasTeam) {
          stage[honor].hide = true;
        } else {
          stage[honor].hide = false;
        }
      }
    });
    return stage;
  });
  store.setState({ stages });
}

export const setActiveTeam = (store, name, edition) => {
  const current = store.state.editions[edition];
  const team = _find(current.teams, (team) => { return team.name === name});
  if (team.picked) {
    return;
  }
  const teams = current.teams.map((item) => (
    item.name === team.name ? {...item, picked: true} : item
  ));
  const managers = current.managers.map((item) => (
    item.active ?
      {...item, teams: [...item.teams, {name: team.name}]} :
      item
  ));
  current.teams = teams;
  current.managers = managers;

  store.setState({ edition: current });

  // log global state
  console.log('*', store.state);
}

export const setReleasedTeam = (store, team, manager) => {
  const teams = store.state.teams.map((item) => (
    item.name === team.name ? {...item, picked: false} : item
  ));
  const managers = store.state.managers.map((item) => (
    item.name === manager.name ?
      {...item, teams: item.teams.filter((t) => t.name !== team.name)} :
      item
  ));
  store.setState({ teams, managers });

  // log global state
  console.log(store.state);
}
