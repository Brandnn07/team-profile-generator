// Starter file provided by Instructor (03/09/2021) AC

const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");
const test = new Intern('whatever', 42, 'whatever@gmail.com', 'UNCC');

it("Can set school via constructor", () => {
    expect(test.school).toBe('UNCC')
});

it("getRole() should return \"Intern\"", () => {
    expect(test.getRole()).toBe('Intern')
});

it("Can get school via getSchool()", () => {
    expect(test.getSChool()).toEqual(test.school)
});
