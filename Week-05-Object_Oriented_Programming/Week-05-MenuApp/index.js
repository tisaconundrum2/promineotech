class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  describe() {
    return `${this.name} plays ${this.position}`;
  }
}

class Team {
  constructor(name) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player);
  }

  describe() {
    return `${this.name} has ${this.players.length} players.`;
  }
}

class Menu {
  constructor() {
    this.selectedTeam = null;
    this.teams = [];
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createTeam();
          break;
        case "2":
          this.viewTeam();
          break;
        case "3":
          this.deleteTeam();
          break;
        case "4":
          this.displayAllTeams();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert("Good bye");
  }

  showMainMenuOptions() {
    return prompt(`
        0) Exit
        1) Create a new Team
        2) View a Team
        3) Delete a Team
        4) Display all Teams
        `);
  }

  showTeamMenuOptions(teamInfo) {
    return prompt(`
        0) Back
        1) Create a new Player
        2) Delete a Player
        ------------------------
        ${teamInfo}
        `);
  }

  createTeam() {
    let name = prompt("Enter name for new Team:");
    let team = new Team(name);
    this.teams.push(team);
  }

  deleteTeam() {
    let index = prompt("Enter index of Team to delete");
    if (index > -1 && index < this.teams.length) {
      this.teams.splice(index, 1);
    }
  }

  displayAllTeams() {
    let teamString = "";
    for (let i = 0; i < this.teams.length; i++) {
      teamString += i + ") " + this.teams[i].name + "\n";
    }
    alert(teamString);
  }

  viewTeam() {
    let index = prompt("Enter index of Team to view:");
    if (index > -1 && index < this.teams.length) {
      this.selectedTeam = this.teams[index];
      let description = "Team Name: " + this.selectedTeam.name + "\n";

      console.log("description: ", description);

      for (let i = 0; i < this.selectedTeam.players.length; i++) {
        description +=
          i +
          ") " +
          this.selectedTeam.players[i].name +
          " - " +
          this.selectedTeam.players[i].position +
          "\n";
      }

      console.log("description after: ", description);

      let selection = this.showTeamMenuOptions(description);

      console.log("selection: ", selection);

      switch (selection) {
        case "1":
          this.createPlayer();
          break;
        case "2":
          this.deletePlayer();
          break;
      }
    }
  }

  // dummy change

  createPlayer() {
    let name = prompt("Enter name for new Player:");
    let position = prompt("Enter position for new Player:");
    let player = new Player(name, position);
    this.selectedTeam.players.push(player);
  }

  deletePlayer() {
    let index = prompt("Enter index of Player to delete");
    if (index > -1 && index < this.selectedTeam.players.length) {
      this.selectedTeam.players.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();
