const Employee = require("../lib/Employee");

test("set email with contstructor", () => {

    const value = "Kelly";
    const employeeobject = new Employee(value, "kelly@gmail.com", 1234);
    expect(employeeobject.name).toBe(value);

});
test("set Id with contstructor", () => {

    const value = 101;
    const employeeobject = new Employee("Kelly", "kelly@gmail.com", value);
    expect(employeeobject.getId()).toBe(value);

});