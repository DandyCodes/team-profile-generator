import Employee from "../lib/Employee";

describe(`Employee`, () => {
  describe(`must have a valid name, id and email`, () => {
    it(`throws when no name is passed to the constructor`, () => {
      expect(() => new Employee()).toThrow("Must have a name, id and email");
    });
    it(`throws when no id is passed to the constructor`, () => {
      expect(() => new Employee("Erlich Bachman")).toThrow(
        "Must have a name, id and email"
      );
    });
    it(`throws when no email is passed to the constructor`, () => {
      expect(() => new Employee("Erlich Bachman", 1)).toThrow(
        "Must have a name, id and email"
      );
    });
    describe(`must have a positive integer for the id`, () => {
      it(`throws when passed "1" for the id`, () => {
        expect(
          () => new Employee("Erlich Bachman", "1", "erlich@siliconvalley.com")
        ).toThrow("Must have a positive integer for the id");
      });
      it(`throws when passed "0" for the id`, () => {
        expect(
          () => new Employee("Erlich Bachman", "0", "erlich@siliconvalley.com")
        ).toThrow("Must have a positive integer for the id");
      });
      it(`throws when passed 0 for the id`, () => {
        expect(
          () => new Employee("Erlich Bachman", 0, "erlich@siliconvalley.com")
        ).toThrow("Must have a positive integer for the id");
      });
      it(`throws when passed -10 for the id`, () => {
        expect(
          () => new Employee("Erlich Bachman", -1, "erlich@siliconvalley.com")
        ).toThrow("Must have a positive integer for the id");
      });
    });
  });
  it(`must have or inherit name, id and email properties and getName, getId, getEmail and getRole object methods`, () => {
    const employee = Object.freeze(
      new Employee("Erlich Bachman", 1, "erlich@siliconvalley.com")
    );
    expect("name" in employee).toEqual(true);
    expect("id" in employee).toEqual(true);
    expect("email" in employee).toEqual(true);
    expect("getName" in employee).toEqual(true);
    expect("getId" in employee).toEqual(true);
    expect("getEmail" in employee).toEqual(true);
    expect("getRole" in employee).toEqual(true);
  });
  describe(`returns the correct values using associated object methods`, () => {
    const employeeOne = Object.freeze(
      new Employee("Erlich Bachman", 1, "erlich@siliconvalley.com")
    );
    const employeeTwo = Object.freeze(
      new Employee("Gilfoyle", 99, "gilfoyle@siliconvalley.com")
    );
    it(`returns the associated employee name when getName is called on each employee`, () => {
      expect(employeeOne.getName()).toEqual("Erlich Bachman");
      expect(employeeTwo.getName()).toEqual("Gilfoyle");
    });
    it(`returns the associated employee id when getId is called on each employee`, () => {
      expect(employeeOne.getId()).toEqual(1);
      expect(employeeTwo.getId()).toEqual(99);
    });
    it(`returns the associated employee email when getEmail is called on each employee`, () => {
      expect(employeeOne.getEmail()).toEqual("erlich@siliconvalley.com");
      expect(employeeTwo.getEmail()).toEqual("gilfoyle@siliconvalley.com");
    });
    it(`returns "Employee" when getRole is called on each employee`, () => {
      expect(employeeOne.getRole()).toEqual("Employee");
      expect(employeeTwo.getRole()).toEqual("Employee");
    });
  });
});
