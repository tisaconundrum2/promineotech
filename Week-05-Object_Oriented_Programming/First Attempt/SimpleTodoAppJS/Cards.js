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


module.exports = {
    Owner: Owner,
    Item: Item
}
