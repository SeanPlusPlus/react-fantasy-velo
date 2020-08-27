const total = 21;
Array(total).fill().map((_, i) => ({
  number: i + 1, 
  location: '',
  distance: '',
  type: '',
  completed: false,
  winner: {
    rider: '',
    team: '',
    points: '',
  },
  yellow: {
    rider: '',
    team: '',
    points: '',
  },
  green: {
    rider: '',
    team: '',
    points: '',
  },
  polkadot: {
    rider: '',
    team: '',
    points: '',
  },
  white: {
    rider: '',
    team: '',
    points: '',
  },
  combativity: {
    rider: '',
    team: '',
    points: '',
  },
  teams: {
    team: '',
    points: '',
  },
}));
