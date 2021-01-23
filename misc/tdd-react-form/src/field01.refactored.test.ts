import { FieldService } from "./field01.refactored.service";

beforeEach(() => {});

describe("Field 001", () => {
  it("should get/set value", () => {
    const fieldService = FieldService.getInstance();
    expect(fieldService.getValue()).toBe("");
    fieldService.setValue("123");
    expect(fieldService.getValue()).toBe("(123");
  });

  it("should get/set value", () => {
    const fieldService = FieldService.getInstance();
    expect(fieldService.getIsTouched()).toBe(false);
    fieldService.setValue("123");
    expect(fieldService.getIsTouched()).toBe(true);
  });

  it("should validate", async () => {
    const fieldService = FieldService.getInstance();
    fieldService.setValue("123");
    await fieldService.validate();
    const error = fieldService.getError();
    expect(error).toBeTruthy();
  });

  it("should be disabled on validate", async () => {
    const fieldService = FieldService.getInstance();
    fieldService.setValue("123");
    fieldService.validate();
    const isDisabled = fieldService.getIsDisabled();
    expect(isDisabled).toBe(true);
  });

  it("should be disabled on validate", async () => {
    const fieldService = FieldService.getInstance();
    fieldService.setValue("123");
    await fieldService.validate();
    const isDisabled = fieldService.getIsDisabled();
    expect(isDisabled).toBe(false);
  });
});
