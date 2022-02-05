const Engineer = require("../lib/Engineer");


test("set github with contstructor", () => {

    const value = "veedit2211";
    const engineerobject = new Engineer("veedit", 7, "veeditparikh2211@gmail.com", value);
    expect(engineerobject.getGithub()).toBe(value);

});

test("set Role should retun \"Engineer\" with contstructor", () => {

    const value = "Engineer";
    const engineerobject = new Engineer("veedit", 7, "veeditparikh2211@gmail.com", "veedit2211");
    expect(engineerobject.getRole()).toBe(value);

});