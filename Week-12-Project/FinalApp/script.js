class EmployeeModel {
    id;
    employee_name;
    employee_salary;
    employee_age;
    profile_image;
    url;

    constructor(id, employee_name, employee_salary, employee_age, profile_image) {
        this.id = id;
        this.employee_name = employee_name;
        this.employee_salary = employee_salary;
        this.employee_age = employee_age;
        this.profile_image = profile_image;
    }
}


class EmployeeController {
    url;
    offlineData;

    constructor() {
        this.url = "https://dummy.restapiexample.com/api/v1";
        this.offlineData = {
            "status": "success",
            "data": [
                {
                    "id": 1,
                    "employee_name": "Tiger Nixon",
                    "employee_salary": 320800,
                    "employee_age": 61,
                    "profile_image": ""
                },
                {
                    "id": 2,
                    "employee_name": "Garrett Winters",
                    "employee_salary": 170750,
                    "employee_age": 63,
                    "profile_image": ""
                },
                {
                    "id": 3,
                    "employee_name": "Ashton Cox",
                    "employee_salary": 86000,
                    "employee_age": 66,
                    "profile_image": ""
                },
                {
                    "id": 4,
                    "employee_name": "Cedric Kelly",
                    "employee_salary": 433060,
                    "employee_age": 22,
                    "profile_image": ""
                },
                {
                    "id": 5,
                    "employee_name": "Airi Satou",
                    "employee_salary": 162700,
                    "employee_age": 33,
                    "profile_image": ""
                },
                {
                    "id": 6,
                    "employee_name": "Brielle Williamson",
                    "employee_salary": 372000,
                    "employee_age": 61,
                    "profile_image": ""
                },
                {
                    "id": 7,
                    "employee_name": "Herrod Chandler",
                    "employee_salary": 137500,
                    "employee_age": 59,
                    "profile_image": ""
                },
                {
                    "id": 8,
                    "employee_name": "Rhona Davidson",
                    "employee_salary": 327900,
                    "employee_age": 55,
                    "profile_image": ""
                },
                {
                    "id": 9,
                    "employee_name": "Colleen Hurst",
                    "employee_salary": 205500,
                    "employee_age": 39,
                    "profile_image": ""
                },
                {
                    "id": 10,
                    "employee_name": "Sonya Frost",
                    "employee_salary": 103600,
                    "employee_age": 23,
                    "profile_image": ""
                },
                {
                    "id": 11,
                    "employee_name": "Jena Gaines",
                    "employee_salary": 90560,
                    "employee_age": 30,
                    "profile_image": ""
                },
                {
                    "id": 12,
                    "employee_name": "Quinn Flynn",
                    "employee_salary": 342000,
                    "employee_age": 22,
                    "profile_image": ""
                },
                {
                    "id": 13,
                    "employee_name": "Charde Marshall",
                    "employee_salary": 470600,
                    "employee_age": 36,
                    "profile_image": ""
                },
                {
                    "id": 14,
                    "employee_name": "Haley Kennedy",
                    "employee_salary": 313500,
                    "employee_age": 43,
                    "profile_image": ""
                },
                {
                    "id": 15,
                    "employee_name": "Tatyana Fitzpatrick",
                    "employee_salary": 385750,
                    "employee_age": 19,
                    "profile_image": ""
                },
                {
                    "id": 16,
                    "employee_name": "Michael Silva",
                    "employee_salary": 198500,
                    "employee_age": 66,
                    "profile_image": ""
                },
                {
                    "id": 17,
                    "employee_name": "Paul Byrd",
                    "employee_salary": 725000,
                    "employee_age": 64,
                    "profile_image": ""
                },
                {
                    "id": 18,
                    "employee_name": "Gloria Little",
                    "employee_salary": 237500,
                    "employee_age": 59,
                    "profile_image": ""
                },
                {
                    "id": 19,
                    "employee_name": "Bradley Greer",
                    "employee_salary": 132000,
                    "employee_age": 41,
                    "profile_image": ""
                },
                {
                    "id": 20,
                    "employee_name": "Dai Rios",
                    "employee_salary": 217500,
                    "employee_age": 35,
                    "profile_image": ""
                },
                {
                    "id": 21,
                    "employee_name": "Jenette Caldwell",
                    "employee_salary": 345000,
                    "employee_age": 30,
                    "profile_image": ""
                },
                {
                    "id": 22,
                    "employee_name": "Yuri Berry",
                    "employee_salary": 675000,
                    "employee_age": 40,
                    "profile_image": ""
                },
                {
                    "id": 23,
                    "employee_name": "Caesar Vance",
                    "employee_salary": 106450,
                    "employee_age": 21,
                    "profile_image": ""
                },
                {
                    "id": 24,
                    "employee_name": "Doris Wilder",
                    "employee_salary": 85600,
                    "employee_age": 23,
                    "profile_image": ""
                }
            ],
            "message": "Successfully! All records has been fetched."
        }
    }

    /**
     * Take in an EmployeeModel and add it to the database
     * @param {EmployeeModel} employeeModel 
     * @returns returns 200 when an Employee is created
     */
    create(employeeModel) {
        const employee = {
            "name": employeeModel.employee_name,
            "salary": employeeModel.employee_salary,
            "age": employeeModel.employee_age
        };
        return $.post(this.url + "/create", employee);
    }

    /**
     * Read all the employees from the payload and return them as an array
     * @returns [EmployeeModel, ...]
     */
    readAll() {
        let employees = [];
        // let payload = $.get(this.url + "/employees");
        let payload = this.offlineData;
        for (let employee of payload["data"]) {
            employees.push(
                new EmployeeModel(
                    employee["id"],
                    employee["employee_name"],
                    employee["employee_salary"],
                    employee["employee_age"],
                    employee["profile_image"]
                )
            )
        }
        return employees;
    }

    /**
     * Read a single employee from an ID
     * @param {int} id 
     * @returns a sing EmployeeModel
     */
    readOne(id) {
        let employee = $.get(this.url + "/employee/" + id);
        return new EmployeeModel(
            employee["data"]["id"],
            employee["data"]["employee_name"],
            employee["data"]["employee_salary"],
            employee["data"]["employee_age"],
            employee["data"]["profile_image"]
        )
    }

    /**
     * Take an EnployeeModel and update it in the database
     * @param {EmployeeModel} employeeModel 
     * @returns a potential 200 code that it successfully updated employee
     */
    update(employeeModel) {
        return $.ajax({
            url: this.url + "/update/" + employeeModel.id,
            dataType: 'JSON',
            data: JSON.stringify(employeeModel),
            contentType: 'application/json',
            type: 'PUT'
        });
    }

    /**
     * Takes an id and deletes the employee from the databse
     * @param {int} id 
     * @returns a potential 200 code that employee has been updated
     */
    delete(id) {
        return $.get(this.url + "/delete/" + id);
    }
}


class EmployeeView {
    render() {
        /**
         * Get the EmployeeModel from the EmployeeController
         * Render everything here using a for loop
        * that loops through the array of returned items
         *
         * for each item returned from the script
         */
        $("#table").empty();
        let employees = new EmployeeController().readAll();
        for (let employee of employees) {
            $("#table").append(`
                    <tr>
                        <td>${employee.id}</td>
                        <td>${employee.employee_name}</td>
                        <td>${employee.employee_salary}</td>
                        <td>${employee.employee_age}</td>
                        <td>${employee.profile_image}</td>
                        <td><button class="btn btn-primary" id="${employee.id}">Edit</button></td>
                        <td><button class="btn btn-danger" id="${employee.id}"">Delete</button></td>
                    </tr>
                    `)
        }
    }

    create(name, salary, age) {
        console.log(name.val())
        console.log(salary.val())
        console.log(age.val())
    }

    edit(id) { }

    delete(id) { }
}

new EmployeeView().render();

// Create
$("#create-house").on("click", () => {
    new EmployeeView().create(
        $("#new-employee-name")
        , $("#new-employee-salary")
        , $("#new-employee-age")
    )
}
)

//Edit

//Delete