class Employee {


    constructor(name, email, id) {

        this.name = name;

        this.id = id;

        this.email = email;

        this.officenumber = this.officenumber;

        this.role = "Employee"

    }

    getName() {

        return this.name;

    }
    getId() {

        return this.id;

    }
    getEmail() {

        return this.email;

    }

    getRole() {

        return this.role;
    }
    getOfficeNumber() {

        return this.officenumber;

    }
}

module.exports = Employee;