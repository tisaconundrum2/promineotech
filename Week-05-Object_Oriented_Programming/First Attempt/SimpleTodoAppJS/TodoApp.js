
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
[x] Welcome to the JS Todo App
[x] Select a board
[ ] 0) John's Board            // these come from a list         
[ ] 1) Nicholas's Board        // these come from a list             
[ ] e) Exit                    // separate exit, breaks out of while
[ ] Make a selection           // standard output
[ ] Selection: 1

[ ] You selected Nicholas's Board
[ ] Select a Todo item to view
[ ] 0) complete app
[ ] 1) submit app idea
[ ] e) Exit
[ ] Selection: 1

[x] 0 - complete app:
[x] You have an app that you need to complete!
[ ] 0) Mark as complete
[ ] e) Exit
[ ] Selection: 0

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

const prompt = require('./Console').prompt;
const Owner = require('./Cards').Owner;
const Item = require('./Cards').Item;


class TodoApp {
    constructor() {
        this.owners = []
    }

    addOwner(name) {
        this.owners.push(new Owner(name))
    }

    delOwner(index) {
        // TODO Implement later
        // this.owners.splice(index, 1)
    }

    addItem(index, name, description) {
        this.owners[index].push(new Item(name, description))
    }

    delItem() {
        // TODO Implement later
    }

    setup() {
        this.addOwner(prompt(
            `
            Welcome to the JS Todo App
            Please add an Owner
            `
        ))
    }

    start() {

    }
}