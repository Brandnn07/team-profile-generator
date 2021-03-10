// Starter file provided by Instructor (03/09/2021) AC
const Employee = require("../lib/Employee");
const test = new Employee('Brandon', 42, 'brandcarter4@gmail.com');

it("Can instantiate Employee instance", () => {   
    expect(test instanceof Employee).toBe(true);
});

it("Can set name via constructor arguments", () => {
    expect(test.name).toBe('Brandon');
});

it("Can set id via constructor argument", () => {
    expect(test.id).toBe(42);
});

it("Can set email via constructor argument", () => {
    expect(test.email).toBe('brandcarter4@gmail.com');
});

it("Can get name via getName()", () => {
    expect(test.getName()).toEqual(test.name);
});

it("Can get id via getId()", () => {
    expect(test.getId()).toEqual(test.id);
});

it("Can get email via getEmail()", () => {
    expect(test.getEmail()).toEqual(test.email);
});

it("getRole() should return \"Employee\"", () => {
    expect(test.getRole()).toBe('Employee');
});
