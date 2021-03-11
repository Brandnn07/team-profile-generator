// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const { expect } = require("@jest/globals");
const test = new Manager('whatever', 42, 'whatever@gmail.com', 1337)

it("Can set office number via constructor argument", () => {
    expect(test.officeNumber).toBe(1337)
});

it('getRole() should return "Manager"', () => {
    expect(test.getRole()).toBe("Manager")
});

it("Can get office number via getOffice()", () => {
    expect(test.getOffice()).toEqual(test.office)
});
