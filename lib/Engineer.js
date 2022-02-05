const Employee = require("./Employee");


class Engineer extends Employee {

    constructor(name, engineerid, email, github) {

        super(name, engineerid, email);
        this.github = github;
        this.id = engineerid;
        this.email = email;
        this.role = "Engineer";
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

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;