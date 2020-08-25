export const setActiveManager = (store, manager) => {
  const managers = store.state.managers.map((item) => (
    item.name === manager.name ?
      {...item, active: true} :
      {...item, active: false}
  ));
  store.setState({ managers });
}

export const setActiveTeam = (store, team) => {
  if (team.picked) {
    return;
  }
  const teams = store.state.teams.map((item) => (
    item.name === team.name ? {...item, picked: true} : item
  ));
  const managers = store.state.managers.map((item) => (
    item.active ? {...item, teams: [...item.teams, team]} : item
  ));
  console.log(store.state.managers);
  store.setState({ teams, managers });
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
}
