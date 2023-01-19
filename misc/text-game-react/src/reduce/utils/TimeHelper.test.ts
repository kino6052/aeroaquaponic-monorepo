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
  });
});
