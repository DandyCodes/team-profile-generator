import Manager from "../lib/Manager";

describe(`Manager`, () => {
  describe(`must have a valid name, id and email`, () => {
    it(`throws when no name is passed to the constructor`, () => {
      expect(() => new Manager()).toThrow("Must have a name, id and email");
    });
    it(`throws when no id is passed to the constructor`, () => {
      expect(() => new Manager("Erlich Bachman")).toThrow(
        "Must have a name, id and email"
      );
    });
    it(`throws when no email is passed to the constructor`, () => {
      expect(() => new Manager("Erlich Bachman", 1)).toThrow(
        "Must have a name, id and email"
      );
    });

    describe(`must have a positive integer for the id`, () => {
      it(`throws when passed "1" for the id`, () => {
        expect(
          () => new Manager("Erlich Bachman", "1", "erlich@siliconvalley.com")
        ).toThrow("Must have a positive integer for the id");
      });
      it(`throws when passed "0" for the id`, () => {
        expect(
          () => new Manager("Erlich Bachman", "0", "erlich@siliconvalley.com")
        ).toThrow("Must have a positive integer for the id");
      });
      it(`throws when passed 0 for the id`, () => {
        expect(
          () => new Manager("Erlich Bachman", 0, "erlich@siliconvalley.com")
        ).toThrow("Must have a positive integer for the id");
      });
      it(`throws when passed -10 for the id`, () => {
        expect(
          () => new Manager("Erlich Bachman", -1, "erlich@siliconvalley.com")
        ).toThrow("Must have a positive integer for the id");
      });
    });
  });

  it(`must have or inherit name, id and email properties and getName, getId, getEmail and getRole object methods`, () => {
    const manager = Object.freeze(
      new Manager("Erlich Bachman", 1, "erlich@siliconvalley.com", 1)
    );
    expect("name" in manager).toEqual(true);
    expect("id" in manager).toEqual(true);
    expect("email" in manager).toEqual(true);
    expect("getName" in manager).toEqual(true);
    expect("getId" in manager).toEqual(true);
    expect("getEmail" in manager).toEqual(true);
    expect("getRole" in manager).toEqual(true);
  });

  describe(`returns the correct values using associated object methods`, () => {
    const managerOne = Object.freeze(
      new Manager("Erlich Bachman", 1, "erlich@siliconvalley.com", 1)
    );
    const managerTwo = Object.freeze(
      new Manager("Gilfoyle", 99, "gilfoyle@siliconvalley.com", 1)
    );
    it(`returns the associated manager name when getName is called on each manager`, () => {
      expect(managerOne.getName()).toEqual("Erlich Bachman");
      expect(managerTwo.getName()).toEqual("Gilfoyle");
    });
    it(`returns the associated manager id when getId is called on each manager`, () => {
      expect(managerOne.getId()).toEqual(1);
      expect(managerTwo.getId()).toEqual(99);
    });
    it(`returns the associated manager email when getEmail is called on each manager`, () => {
      expect(managerOne.getEmail()).toEqual("erlich@siliconvalley.com");
      expect(managerTwo.getEmail()).toEqual("gilfoyle@siliconvalley.com");
    });
    it(`returns "Manager" when getRole is called on each manager`, () => {
      expect(managerOne.getRole()).toEqual("Manager");
      expect(managerTwo.getRole()).toEqual("Manager");
    });
  });

  describe(`must have a valid office number`, () => {
    it(`throws when no office number is passed to the constructor`, () => {
      expect(
        () => new Manager("Erlich Bachman", 1, "erlich@siliconvalley.com")
      ).toThrow("Must have an office number");
    });
    describe(`must have a positive integer for the office number`, () => {
      it(`throws when passed "1" for the office number`, () => {
        expect(
          () =>
            new Manager("Erlich Bachman", 1, "erlich@siliconvalley.com", "1")
        ).toThrow("Must have a positive integer for the office number");
      });
      it(`throws when passed "0" for the office number`, () => {
        expect(
          () =>
            new Manager("Erlich Bachman", 1, "erlich@siliconvalley.com", "0")
        ).toThrow("Must have a positive integer for the office number");
      });
      it(`throws when passed 0 for the office number`, () => {
        expect(
          () => new Manager("Erlich Bachman", 1, "erlich@siliconvalley.com", 0)
        ).toThrow("Must have a positive integer for the office number");
      });
      it(`throws when passed -10 for the office number`, () => {
        expect(
          () => new Manager("Erlich Bachman", 1, "erlich@siliconvalley.com", -1)
        ).toThrow("Must have a positive integer for the office number");
      });
    });
  });
  it(`must have or inherit an officeNumber property`, () => {
    const manager = Object.freeze(
      new Manager("Erlich Bachman", 1, "erlich@siliconvalley.com", 1)
    );
    expect("officeNumber" in manager).toEqual(true);
  });
});
