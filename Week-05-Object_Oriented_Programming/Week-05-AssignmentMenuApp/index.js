

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

const prompt = require('prompt-sync')();

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

class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

/*
class Menu {
    constructor() {
        this.owners = []
    }

    start() {
        this.showTitle();
        while (true) {
            if (this.owners.length === 0) {
                console.log('Create a new board')
                // this.owners.push(prompt("Name of board: "))
                this.owners.push("John")
            } else {
                this.showTitle();
                console.log("Select a board: ")
                for (let i = 0; i < this.owners.length; i++){
                    console.log()
                }
            }
        }
    }

    showTitle() {
        console.log('Welcome to the JS Todo App');
    }

}

let menu = new Menu();
menu.start();
*/
