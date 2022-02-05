const Intern = require("../lib/Intern");

test("set school with contstructor", () => {

    const value = "Carleton University";
    const internobject = new Intern("veedit", 7, "veeditparikh2211@gmail.com", value);
    expect(internobject.getSchool()).toBe(value);

});
test("set email with contstructor", () => {

    const value = "test@gmail.com";
    const internobject = new Intern("veedit", 7, value, "Carleton University");
    expect(internobject.getEmail()).toBe(value);

});