// Starter file provided by Instructor (03/09/2021) AC

const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");
const test = new Engineer('whatever', 42, 'whatever@gmail.com', 'Brandnn07');

it("Can set GitHUb account via constructor", () => {
    expect(test.github).toBe('Brandnn07')
});

it("getRole() should return \"Engineer\"", () => {
    expect(test.getRole()).toBe("Engineer")
});

it("Can get GitHub username via getGithub()", () => {
    expect(test.getGithub()).toEqual(test.github)
});
