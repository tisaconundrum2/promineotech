import { EmployeeController } from "./EmployeeController.js";

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
        let employees = new EmployeeController().read();
        for (const employee of employees) {
            $("#table").prepend(`
                    <tr>
                        <td>${employee.id}</td>
                        <td>Tiger Nixon</td>
                        <td>320800</td>
                        <td>61</td>
                        <td>""</td>
                        <td><button class="btn btn-primary">Edit</button></td>
                        <td><button class="btn btn-danger">Delete</button></td>
                    </tr>
                    `)
        }
    }
}

new EmployeeView().render();