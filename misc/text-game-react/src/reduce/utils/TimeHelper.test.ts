import { TimeHelper } from "./TimeHelper";

describe("Time Helper", () => {
  it("should update time", () => {
    const helper = new TimeHelper();
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 0,
        "dow": "Monday",
        "hour": 0,
        "minute": 0,
        "month": 0,
        "second": 0,
        "year": 2020,
      }
    `);
    helper.update({ i: 0, value: 1 });
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 0,
        "dow": "Monday",
        "hour": 0,
        "minute": 0,
        "month": 0,
        "second": 1,
        "year": 20,
      }
    `);
    helper.update({ i: 0, value: 60 });
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 0,
        "dow": "Monday",
        "hour": 0,
        "minute": 1,
        "month": 0,
        "second": 1,
        "year": 20,
      }
    `);
  });
  it("should update time", () => {
    const helper = new TimeHelper();
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 0,
        "dow": "Monday",
        "hour": 0,
        "minute": 0,
        "month": 0,
        "second": 0,
        "year": 2020,
      }
    `);
    helper.update({ i: 1, value: 1 });
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 0,
        "dow": "Monday",
        "hour": 0,
        "minute": 1,
        "month": 0,
        "second": 0,
        "year": 20,
      }
    `);
    helper.update({ i: 1, value: 60 });
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 0,
        "dow": "Monday",
        "hour": 1,
        "minute": 1,
        "month": 0,
        "second": 0,
        "year": 20,
      }
    `);
    expect(helper.getIsDayPassed({ i: 1, value: 60 })).toMatchInlineSnapshot(
      `false`
    );
  });
  it("should update time", () => {
    const helper = new TimeHelper();
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 0,
        "dow": "Monday",
        "hour": 0,
        "minute": 0,
        "month": 0,
        "second": 0,
        "year": 2020,
      }
    `);
    helper.update({ i: 2, value: 1 });
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 0,
        "dow": "Monday",
        "hour": 1,
        "minute": 0,
        "month": 0,
        "second": 0,
        "year": 20,
      }
    `);
    helper.update({ i: 2, value: 24 });
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 1,
        "dow": "Tuesday",
        "hour": 1,
        "minute": 0,
        "month": 0,
        "second": 0,
        "year": 20,
      }
    `);
    expect(helper.getIsDayPassed({ i: 2, value: 24 })).toMatchInlineSnapshot(
      `true`
    );
    helper.update({ i: 2, value: 24 * 7 });
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 8,
        "dow": "Tuesday",
        "hour": 1,
        "minute": 0,
        "month": 0,
        "second": 0,
        "year": 20,
      }
    `);
    expect(helper.calculateDOW({ i: 2, value: 0 })).toMatchInlineSnapshot(
      `"Tuesday"`
    );
    expect(helper.calculateDOW({ i: 2, value: 24 * 1 })).toMatchInlineSnapshot(
      `"Wednesday"`
    );
    expect(helper.calculateDOW({ i: 2, value: 24 * 2 })).toMatchInlineSnapshot(
      `"Thursday"`
    );
    expect(helper.calculateDOW({ i: 2, value: 24 * 3 })).toMatchInlineSnapshot(
      `"Friday"`
    );
    expect(helper.calculateDOW({ i: 2, value: 24 * 4 })).toMatchInlineSnapshot(
      `"Saturday"`
    );
    expect(helper.calculateDOW({ i: 2, value: 24 * 5 })).toMatchInlineSnapshot(
      `"Sunday"`
    );
    expect(helper.calculateDOW({ i: 2, value: 24 * 6 })).toMatchInlineSnapshot(
      `"Monday"`
    );
    expect(helper.calculateDOW({ i: 2, value: 24 * 7 })).toMatchInlineSnapshot(
      `"Tuesday"`
    );
    expect(helper.calculateDOW({ i: 5, value: 24 * 7 })).toMatchInlineSnapshot(
      `"Tuesday"`
    );
    helper.update({ i: 2, value: 24 * 7 });
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 15,
        "dow": "Tuesday",
        "hour": 1,
        "minute": 0,
        "month": 0,
        "second": 0,
        "year": 20,
      }
    `);
  });

  it("should check if day is passed", () => {
    const helper = new TimeHelper();
    expect(helper.getIsDayPassed({ i: 1, value: 60 })).toMatchInlineSnapshot(
      `false`
    );
    expect(helper.getIsDayPassed({ i: 2, value: 24 })).toMatchInlineSnapshot(
      `true`
    );
    expect(helper.getIsDayPassed({ i: 3, value: 7 })).toMatchInlineSnapshot(
      `true`
    );
    expect(helper.getIsDayPassed({ i: 4, value: 7 })).toMatchInlineSnapshot(
      `true`
    );
    expect(helper.getIsDayPassed({ i: 4, value: 0 })).toMatchInlineSnapshot(
      `false`
    );
  });

  it("should get days in month", () => {
    const helper = new TimeHelper();
    expect(helper.getDaysInMonth(0)).toMatchInlineSnapshot(`31`);
    expect(helper.getDaysInMonth(1)).toMatchInlineSnapshot(`28`);
    expect(helper.getDaysInMonth(2)).toMatchInlineSnapshot(`31`);
    expect(helper.getDaysInMonth(3)).toMatchInlineSnapshot(`30`);
    expect(helper.getDaysInMonth(4)).toMatchInlineSnapshot(`31`);
    expect(helper.getDaysInMonth(5)).toMatchInlineSnapshot(`30`);
    expect(helper.getDaysInMonth(6)).toMatchInlineSnapshot(`31`);
    expect(helper.getDaysInMonth(7)).toMatchInlineSnapshot(`30`);
    expect(helper.getDaysInMonth(8)).toMatchInlineSnapshot(`31`);
    expect(helper.getDaysInMonth(9)).toMatchInlineSnapshot(`30`);
    expect(helper.getDaysInMonth(10)).toMatchInlineSnapshot(`31`);
    expect(helper.getDaysInMonth(11)).toMatchInlineSnapshot(`30`);
    expect(helper.getDaysInMonth(12)).toMatchInlineSnapshot(`31`);
    expect(helper.getDaysInMonth(13)).toMatchInlineSnapshot(`30`);
  });

  it("should get days in month", () => {
    const helper = new TimeHelper();
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 0,
        "dow": "Monday",
        "hour": 0,
        "minute": 0,
        "month": 0,
        "second": 0,
        "year": 2020,
      }
    `);
    helper.update({ i: 3, value: 29 });
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 29,
        "dow": "Tuesday",
        "hour": 0,
        "minute": 0,
        "month": 0,
        "second": 0,
        "year": 20,
      }
    `);
    helper.update({ i: 3, value: 1 });
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 30,
        "dow": "Wednesday",
        "hour": 0,
        "minute": 0,
        "month": 0,
        "second": 0,
        "year": 20,
      }
    `);
    helper.update({ i: 3, value: 1 });
    expect(helper.getFullDate()).toMatchInlineSnapshot(`
      Object {
        "day": 0,
        "dow": "Thursday",
        "hour": 0,
        "minute": 0,
        "month": 1,
        "second": 0,
        "year": 20,
      }
    `);
  });
});
