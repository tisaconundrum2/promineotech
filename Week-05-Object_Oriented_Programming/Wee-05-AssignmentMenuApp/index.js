

/*
We will be creating a simple todo app
Starting from the top down, we have a TodoBoard, which can have many TodoItems
each TodoItem will have tickets, along with a title and a description.

A user may instantiate a new TodoBoard like below
let NicholasBoard = new TodoBoard("Nicholas's Board")
NicholasBoard.addNewItem("complete app", "You have an app that you need to complete!")
NicholasBoard.addNewItem("submit app idea", "Go to promineotech and submit your completed app")
NicholasBoard.displayTodoItems()

Now to set it up as an actual usable selection, we'll setup a separate a Main() function.

* Might make sense to have everything in an object
*/
let exampleTodoBoards = []

exampleTodoBoards.push({
    name: "John",
    items: [
        {
            title: "pushups",
            description: "complete 10 pushups",
        },
        {
            title: "pullups",
            description: "complete at least 5 pullups"
        }
    ],
})

exampleTodoBoards.push(
    {
        name: "Nicholas",
        items: [
            {
                title: "complete app",
                description: "You have an app that you need to complete!"
            },
            {
                title: "submit app",
                description: "turn in app before the 10th"
            }
        ]
    }
)
/*
=================== How the app may potentially look ===================
Welcome to the JS Todo App
No boards created
Create a new board


Welcome to the JS Todo App
Select a board
0) John's Board
1) Nicholas's Board
e) Exit
Make a selection
Selection: 1

You selected Nicholas's Board
Select a Todo item to view
0) complete app
1) submit app idea
e) Exit
Selection: 1

0 - complete app:
You have an app that you need to complete!
0) Mark as complete
e) Exit
Selection: 0

You selected Nicholas's Board
Select a Todo item to view
0) submit app idea
e) Exit
Selection: e

Welcome to the JS Todo App
Select a board
0) John's Board
1) Nicholas's Board
e) Exit
Make a selection
Selection: e

>Goodbye

*/

class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

class Owner {
    constructor(name) {
        this.name = name
        this.items = []
    }

    addItem(title, description) {
        this.items.push(new Item(title, description))
    }

    delItem(index) {
        this.items.splice(index, 1)
    }
}

class Menu {
    constructor() {
        this.owners = []
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.createOwner();
                    break;
                case "2":
                    this.viewOwner();
                    break;
                case "3":
                    this.deleteOwner();
                    break;
                case "4":
                    this.displayOwners();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Good bye");
    }

    showTitle() {
        return 'Welcome to the JS Todo App';
    }

    showMainMenuOptions() {
        return prompt(`
            Welcome to the JS Todo App
            Select a board
            0) Exit
            1) Create a new Team
            2) View a Team
            3) Delete a Team
            4) Display all Teams
          `);
    }

    showItemMenuOptions(teamInfo) {
        return prompt(`
            0) Back
            1) Create a new Item
            2) Delete a Player
          ------------------------
          ${teamInfo}
          `);
    }

    createOwner() {
        let name = prompt("Enter name for new Team:");
        let team = new Team(name);
        this.teams.push(team);
    }

    deleteOwner() {
        let index = prompt("Enter index of Team to delete");
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
    }

    displayOwners() {
        let teamString = "";
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ") " + this.teams[i].name + "\n";
        }
        alert(teamString);
    }

    viewOwner() {
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
