const Employee = require("./Employee");


class Manager extends Employee {

    constructor(name, managerid, email, officenumber) {

        super(name, managerid, email);
        this.officenumber = officenumber;
        this.id = managerid;
        this.email = email;
        this.role = "Manager";
    }

    getEmail() {

        return this.email;

    }
    getId() {

        return this.id;
    }
    getRole() {

        return this.role;

    }

    getOfficeNumber() {
        return this.officenumber;
    }
}

module.exports = Manager;