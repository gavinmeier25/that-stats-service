import { RESTDataSource } from 'apollo-datasource-rest';

export default class Teams extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://statsapi.web.nhl.com/api/v1/teams';
  }

  mapTeamResponse(team) {
    return {
      id: team.id,
      name: team.name,
      abbreviation: team.abbreviation,
      yearStarted: team.firstYearOfPlay,
      venue: team.venue.name,
      division: team.division.name,
      conference: team.conference.name,
      websiteUrl: team.officialSiteUrl,
    };
  }

  async getTeams() {
    const teamData = await this.get('');

    return teamData.teams.map(team => {
      return this.mapTeamResponse(team);
    });
  }
}
