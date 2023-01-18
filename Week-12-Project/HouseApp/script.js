class House {
    constructor(name) {
        this.name = name;
        this.rooms = [];
    }

    addRoom(name, area) {
        this.rooms.push(new Rooms(name, area))
    }
}

class Rooms {
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
}

class HouseService {
    static url = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

    static getAllHouses() {
        return $.get(this.url);
    }

    static getHouse(id) {
        return $.get(`${this.url}/${id}`);
    }

    static createHouse(house) {
        return $.post(this.url, house);
    }

    static updateHouse(house) {
        return $.ajax({
            url: `${this.url}/${house._id}`,
            dataType: 'JSON',
            data: JSON.stringify(house),
            contentType: 'application/json',
            type: 'PUT'
        });
    }

    static deleteHouse(id) {
        return $.ajax({
            url: `${this.url}/${id}`,
            type: 'DELETE'
        });
    }
}

class DOMManager {
    static houses;

    static getAllHouses() {
        HouseService.getAllHouses().then(houses => this.render(houses));
    }

    static render(houses) {
        this.houses = houses;

        $('#app').empty();

        for (let house of houses) {
            $('#app').prepend(`
        <div id="${house._id}" class="card mt-4">
            <div class="card-header">
                <div class="row">
                    <div class="col-sm">
                        <h2>${house.name}</h2>
                    </div>
                    <div class="col-sm"></div>
                    <div class="col-sm">
                        <button class="btn btn-danger form-control"
                            onclick="DOMManager.deleteHouse('${house._id}')">Delete House</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="card">
                    <div class="row">
                        <div class="col-sm">
                            <input type="text" id="${house._id}-room-name" class="form-control" placeholder="Room Name">
                        </div>
                        <div class="col-sm">
                            <input type="text" id="${house._id}-room-area" class="form-control" placeholder="Room Area">
                        </div>
                        <div class="col-sm">
                            <button id="${house._id}-new-room" onclick="DOMManager.addRoom('${house._id}')"
                                class="btn btn-primary form-control">Add</button>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
            `);

            for (let room of house.rooms) {
                $(`#${house._id}`).find('.card-body').append(
                    `
                    <div class="row mt-4">
                        <div class="col-sm">
                            <span id="name-${room._id}">
                                <strong>Name: </strong>${room.name}
                            </span>
                        </div>
                        <div class="col-sm">
                            <span id="area-${room._id}">
                                <strong>Area: </strong>${room.area}
                            </span>
                        </div>
                        <div class="col-sm">
                            <button class="btn btn-danger form-control"
                                onclick="DOMManager.deleteRoom('${house._id}', '${room._id}')">Delete
                                Room</button>
                        </div>
                    </div>
                    `
                )
            }
        }
    }

    static deleteRoom(id_room_name, id_room_area) {
        return;
    }

    static addRoom(id) {
        for (let house of this.houses) {
            if (house._id == id) {
                var room_name = $(`#${house._id}-room-name`).val();
                var room_area = $(`#${house._id}-room-area`).val();
                house.rooms.push(new Rooms(room_name, room_area));
                HouseService.updateHouse(house)
                    .then(() => {
                        return HouseService.getAllHouses();
                    })
                    .then((houses) => this.render(houses))
            }
        }
    }

    static deleteHouse(house_id) {
        HouseService.deleteHouse(house_id)
            .then(() => {
                return HouseService.getAllHouses();
            })
            .then((houses) => this.render(houses))
    }

    static createHouse(name) {
        HouseService.createHouse(new House(name))
            .then(() => {
                return HouseService.getAllHouses();
            })
            .then((houses) => this.render(houses));
    }
}

$('#create-new-house').click(() => {
    DOMManager.createHouse($('#new-house-name').val());
    $('#new-house-name').val('');
})
DOMManager.getAllHouses();