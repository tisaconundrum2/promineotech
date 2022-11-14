

/*
We will be creating a simple todo app
Starting from the top down, we have a TodoBoard, which can have many TodoItems
each TodoItem will have tickets, along with a title and a description.

A user may instantiate a new TodoBoard like below
let NicholasBoard = new TodoBoard("Nicholas's Board")
NicholasBoard.addNewItem("complete app", "You have an app that you need to complete!")
NicholasBoard.addNewItem("submit app idea", "Go to promineotech and submit your completed app")
NicholasBoard.displayTodoItems()

Now to set it up as an actual usable owner_selection, we'll setup a separate a Main() function.

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
Make a owner_selection
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
Make a owner_selection
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

let owners = [];
let owner_selection = '';

owners.push(new Owner("John"))
owners.push(new Owner("Nicholas"))
owners[0].addItem("10 pushup", "Hit the Gym and do pushups")
// owners[1].addItem("finish coding", "Finish up your app idea")

while (true) {
    console.log('Welcome to the JS Todo App');
    if (owners.length == 0) {
        console.log('Please name your board');
        owners.push(new Owner(prompt()));
    } else {
        console.log('Select a board')
        let i = 0
        for (const owner of owners) {
            console.log(`${i}) ${owner.name}`)
            i++
        }
        console.log('e) Exit')
        console.log('Make a selection: ')
        owner_selection = prompt();
    }

    if (owner_selection === 'e') {
        console.log('>Goodbye')
        break;
    }

    while (true) {

        console.log("")
        console.log(`You've selected ${owners[owner_selection].name}'s Board`)
        console.log('Do you want to add an item? Y/N')
        let y_n = prompt()

        if (y_n === 'y' || y_n === 'Y') {
            console.log('Add a Todo')
            console.log("Title: ")
            let title = prompt()
            console.log('Add a description')
            console.log('Description: ')
            let description = prompt()
            owners[owner_selection].addItem(title, description)
        }

        console.log('Select a Todo item to view')
        i = 0;
        for (const item of owners[owner_selection].items) {
            console.log(`${i}) ${item.name}`)
            i++;
        }
        console.log('e) Exit')
        console.log('Make a selection: ')
        item_selection = prompt()

        if (item_selection === 'e') {
            console.log('>Goodbye')
            break
        }

        console.log("")
        console.log(`${item_selection} - ${owners[owner_selection].items[item_selection].name}`)
        console.log(`${owners[owner_selection].items[item_selection].description}`)
        console.log("0) Mark as complete")
        console.log("e) Exit")

        complete_selection = prompt()

        if (complete_selection === 'e') {
            console.log('>Goodbye')
            break
        }

        if (complete_selection === '0') {
            owners[owner_selection].items[item_selection].name += " [Completed]";
        }

    }
}
