const Manager = require("../lib/Manager");

test("set officenumber with contstructor", () => {

    const value = 1234;
    const managerobject = new Manager("veedit", 12, "veedit@gmail.com", value);
    expect(managerobject.officenumber).toBe(value);

});

test("set name with contstructor", () => {

    const value = "Veedit";
    const managerobject = new Manager(value, 12, "veedit@gmail.com", 2147);
    expect(managerobject.name).toBe(value);

})