import Intern from "../lib/Intern";

describe(`Intern`, () => {
  describe(`must have a valid name, id and email`, () => {
    it(`throws when no name is passed to the constructor`, () => {
      expect(() => new Intern()).toThrow("Must have a name, id and email");
    });
    it(`throws when no id is passed to the constructor`, () => {
      expect(() => new Intern("Erlich Bachman")).toThrow(
        "Must have a name, id and email"
      );
    });
    it(`throws when no email is passed to the constructor`, () => {
      expect(() => new Intern("Erlich Bachman", 1)).toThrow(
        "Must have a name, id and email"
      );
    });

    describe(`Id must be a positive integer`, () => {
      it(`throws when passed "1" for the id`, () => {
        expect(
          () => new Intern("Erlich Bachman", "1", "erlich@siliconvalley.com")
        ).toThrow("Id must be a positive integer");
      });
      it(`throws when passed "0" for the id`, () => {
        expect(
          () => new Intern("Erlich Bachman", "0", "erlich@siliconvalley.com")
        ).toThrow("Id must be a positive integer");
      });
      it(`throws when passed 0 for the id`, () => {
        expect(
          () => new Intern("Erlich Bachman", 0, "erlich@siliconvalley.com")
        ).toThrow("Id must be a positive integer");
      });
      it(`throws when passed -10 for the id`, () => {
        expect(
          () => new Intern("Erlich Bachman", -1, "erlich@siliconvalley.com")
        ).toThrow("Id must be a positive integer");
      });
      it(`throws when passed 1.1 for the id`, () => {
        expect(
          () => new Intern("Erlich Bachman", 1.1, "erlich@siliconvalley.com")
        ).toThrow("Id must be a positive integer");
      });
    });
  });

  it(`must have or inherit name, id and email properties and getName, getId, getEmail and getRole object methods`, () => {
    const intern = Object.freeze(
      new Intern(
        "Erlich Bachman",
        1,
        "erlich@siliconvalley.com",
        "Silicon Valley"
      )
    );
    expect("name" in intern).toEqual(true);
    expect("id" in intern).toEqual(true);
    expect("email" in intern).toEqual(true);
    expect("getName" in intern).toEqual(true);
    expect("getId" in intern).toEqual(true);
    expect("getEmail" in intern).toEqual(true);
    expect("getRole" in intern).toEqual(true);
  });

  describe(`must have a school`, () => {
    it(`throws when no school is passed to the constructor`, () => {
      expect(
        () => new Intern("Erlich Bachman", 1, "erlich@siliconvalley.com")
      ).toThrow("Must have a school");
    });

    it(`must have or inherit a school property and a getSchool object method`, () => {
      const intern = Object.freeze(
        new Intern(
          "Erlich Bachman",
          1,
          "erlich@siliconvalley.com",
          "Silicon Valley"
        )
      );
      expect("school" in intern).toEqual(true);
      expect("getSchool" in intern).toEqual(true);
    });
  });

  describe(`returns the correct values using associated object methods`, () => {
    const internOne = Object.freeze(
      new Intern(
        "Erlich Bachman",
        1,
        "erlich@siliconvalley.com",
        "Silicon Valley"
      )
    );
    const internTwo = Object.freeze(
      new Intern(
        "Gilfoyle",
        99,
        "gilfoyle@siliconvalley.com",
        "School of Hard Knocks"
      )
    );
    it(`returns the associated intern name when getName is called on each intern`, () => {
      expect(internOne.getName()).toEqual("Erlich Bachman");
      expect(internTwo.getName()).toEqual("Gilfoyle");
    });
    it(`returns the associated intern id when getId is called on each intern`, () => {
      expect(internOne.getId()).toEqual(1);
      expect(internTwo.getId()).toEqual(99);
    });
    it(`returns the associated intern email when getEmail is called on each intern`, () => {
      expect(internOne.getEmail()).toEqual("erlich@siliconvalley.com");
      expect(internTwo.getEmail()).toEqual("gilfoyle@siliconvalley.com");
    });
    it(`returns "Intern" when getRole is called on each intern`, () => {
      expect(internOne.getRole()).toEqual("Intern");
      expect(internTwo.getRole()).toEqual("Intern");
    });
    it(`returns the associated intern school when getSchool is called on each intern`, () => {
      expect(internOne.getSchool()).toEqual("Silicon Valley");
      expect(internTwo.getSchool()).toEqual("School of Hard Knocks");
    });
  });
});
