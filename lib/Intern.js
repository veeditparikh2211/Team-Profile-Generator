const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, internid, email, school) {

        super(name, internid, email);
        this.school = school;
        this.id = internid;
        this.email = email;
        this.role = "Intern";
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

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;