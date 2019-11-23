export default {
  Query: {
    Hello: (_, args, { dataSources: { Teams } }) => {
      Teams.getTeams();
      return 'Hello';
    },
    Teams: (_, args, { dataSources: { Teams } }) => {
      return Teams.getTeams();
    },
  },
};
