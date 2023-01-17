import { templateParser, updateIntervals } from "../utils";

describe("Utils", () => {
  it("should replace strings", () => {
    expect(
      templateParser("from {{one}} to {{two}}", { one: "1", two: "2" })
    ).toEqual("from 1 to 2");
  });

  it("should update", () => {
    const result = updateIntervals({ i: 1, value: 24 }, [
      {
        interval: 30,
        value: 0,
      },
    ]);
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "interval": 30,
          "value": 0,
        },
      ]
    `);
  });

  it("should update", () => {
    const result = updateIntervals({ i: 1, value: 24 }, [
      {
        interval: 30,
        value: 0,
      },
      {
        interval: 20,
        value: 0,
      },
    ]);
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "interval": 30,
          "value": 0,
        },
        Object {
          "interval": 20,
          "value": 4,
        },
        Object {
          "interval": 100,
          "value": 1,
        },
      ]
    `);
  });
  it("should update", () => {
    const result = updateIntervals({ i: 1, value: 1024 }, [
      {
        interval: 20,
        value: 0,
      },
      {
        interval: 20,
        value: 0,
      },
      {
        interval: 30,
        value: 0,
      },
    ]);
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "interval": 20,
          "value": 0,
        },
        Object {
          "interval": 20,
          "value": 4,
        },
        Object {
          "interval": 30,
          "value": 21,
        },
        Object {
          "interval": 100,
          "value": 1,
        },
      ]
    `);
  });
});
