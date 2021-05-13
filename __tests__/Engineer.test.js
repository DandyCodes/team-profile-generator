import Engineer from "../lib/Engineer";

describe(`Engineer`, () => {
  describe(`must have a valid name, id and email`, () => {
    it(`throws when no name is passed to the constructor`, () => {
      expect(() => new Engineer()).toThrow("Must have a name, id and email");
    });
    it(`throws when no id is passed to the constructor`, () => {
      expect(() => new Engineer("Erlich Bachman")).toThrow(
        "Must have a name, id and email"
      );
    });
    it(`throws when no email is passed to the constructor`, () => {
      expect(() => new Engineer("Erlich Bachman", 1)).toThrow(
        "Must have a name, id and email"
      );
    });

    describe(`must have a positive integer for the id`, () => {
      it(`throws when passed "1" for the id`, () => {
        expect(
          () => new Engineer("Erlich Bachman", "1", "erlich@siliconvalley.com")
        ).toThrow("Must have a positive integer for the id");
      });
      it(`throws when passed "0" for the id`, () => {
        expect(
          () => new Engineer("Erlich Bachman", "0", "erlich@siliconvalley.com")
        ).toThrow("Must have a positive integer for the id");
      });
      it(`throws when passed 0 for the id`, () => {
        expect(
          () => new Engineer("Erlich Bachman", 0, "erlich@siliconvalley.com")
        ).toThrow("Must have a positive integer for the id");
      });
      it(`throws when passed -10 for the id`, () => {
        expect(
          () => new Engineer("Erlich Bachman", -1, "erlich@siliconvalley.com")
        ).toThrow("Must have a positive integer for the id");
      });
    });
  });

  it(`must have or inherit name, id and email properties and getName, getId, getEmail and getRole object methods`, () => {
    const engineer = Object.freeze(
      new Engineer("Erlich Bachman", 1, "erlich@siliconvalley.com", "erlich")
    );
    expect("name" in engineer).toEqual(true);
    expect("id" in engineer).toEqual(true);
    expect("email" in engineer).toEqual(true);
    expect("getName" in engineer).toEqual(true);
    expect("getId" in engineer).toEqual(true);
    expect("getEmail" in engineer).toEqual(true);
    expect("getRole" in engineer).toEqual(true);
  });

  describe(`returns the correct values using associated object methods`, () => {
    const engineerOne = Object.freeze(
      new Engineer("Erlich Bachman", 1, "erlich@siliconvalley.com", "erlich")
    );
    const engineerTwo = Object.freeze(
      new Engineer("Gilfoyle", 99, "gilfoyle@siliconvalley.com", "gilfoyle")
    );
    it(`returns the associated engineer name when getName is called on each engineer`, () => {
      expect(engineerOne.getName()).toEqual("Erlich Bachman");
      expect(engineerTwo.getName()).toEqual("Gilfoyle");
    });
    it(`returns the associated engineer id when getId is called on each engineer`, () => {
      expect(engineerOne.getId()).toEqual(1);
      expect(engineerTwo.getId()).toEqual(99);
    });
    it(`returns the associated engineer email when getEmail is called on each engineer`, () => {
      expect(engineerOne.getEmail()).toEqual("erlich@siliconvalley.com");
      expect(engineerTwo.getEmail()).toEqual("gilfoyle@siliconvalley.com");
    });
    it(`returns "Engineer" when getRole is called on each engineer`, () => {
      expect(engineerOne.getRole()).toEqual("Engineer");
      expect(engineerTwo.getRole()).toEqual("Engineer");
    });
    it(`returns the associated engineer github when getGithub is called on each engineer`, () => {
      expect(engineerOne.getGithub()).toEqual("erlich");
      expect(engineerTwo.getGithub()).toEqual("gilfoyle");
    });
  });

  describe(`must have a github`, () => {
    it(`throws when no github is passed to the constructor`, () => {
      expect(
        () => new Engineer("Erlich Bachman", 1, "erlich@siliconvalley.com")
      ).toThrow("Must have a github");
    });
  });
  it(`must have or inherit a github property and a getGithub object method`, () => {
    const engineer = Object.freeze(
      new Engineer("Erlich Bachman", 1, "erlich@siliconvalley.com", "erlich")
    );
    expect("github" in engineer).toEqual(true);
    expect("getGithub" in engineer).toEqual(true);
  });
});
