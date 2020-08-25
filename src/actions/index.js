export const setActiveManager = (store, manager) => {
  const managers = store.state.managers.map((item) => (
    item.name === manager.name ?
      {...item, active: true} :
      {...item, active: false}
  ));
  store.setState({ managers });

  // log global state
  console.log(store.state);
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
  store.setState({ teams, managers });
  
  // log global state
  console.log(store.state);
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
