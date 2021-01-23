import { FieldIntegrationService } from "./field.integration.service";
import { FieldService } from "./field01.refactored.service";
import { Service } from "./service";
import { StateService } from "./state.refactored.service";

beforeEach(() => {
  FieldService.resetInstance();
  StateService.resetInstance();
  FieldIntegrationService.resetInstance();
});

describe("Extra Tests", () => {
  it("should not create instance when there is one already", () => {
    expect(FieldService.getInstance()).toEqual(FieldService.getInstance());
    expect(StateService.getInstance()).toEqual(StateService.getInstance());
    expect(
      FieldIntegrationService.getInstance(
        FieldService.getInstance(),
        StateService.getInstance()
      )
    ).toEqual(
      FieldIntegrationService.getInstance(
        FieldService.getInstance(),
        StateService.getInstance()
      )
    );
  });
});

describe("Field 001 Integration", () => {
  it("should update value on event", () => {
    const fieldService = FieldService.getInstance();
    const stateService = StateService.getInstance();
    FieldIntegrationService.getInstance(fieldService, stateService);
    Service.EventSubject.next(["change", fieldService.id, "123"]);
    expect(fieldService.getValue()).toBe("(123");
  });

  it("should update value on event", () => {
    const fieldService = FieldService.getInstance();
    const stateService = StateService.getInstance();
    FieldIntegrationService.getInstance(fieldService, stateService);
    Service.EventSubject.next(["change", fieldService.id, undefined]);
    expect(fieldService.getValue()).toBe("");
  });

  it("state should update when value udpates", () => {
    const fieldService = FieldService.getInstance();
    const stateService = StateService.getInstance();
    FieldIntegrationService.getInstance(fieldService, stateService);
    expect(stateService.getValue(fieldService.id)).toBe("");
    fieldService.setValue("123");
    expect(stateService.getValue(fieldService.id)).toBe("(123");
  });

  it("should validate on button click", () => {
    const fieldService = FieldService.getInstance();
    const stateService = StateService.getInstance();
    FieldIntegrationService.getInstance(fieldService, stateService);
    const spy = jest
      .spyOn(fieldService, "validate")
      .mockImplementation(jest.fn());
    Service.EventSubject.next(["click", fieldService.buttonId, ""]);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

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

  it("should validate", async () => {
    const fieldService = FieldService.getInstance();
    fieldService.setValue("");
    await fieldService.validate();
    const error = fieldService.getError();
    expect(error).toBeTruthy();
  });

  it("should validate", async () => {
    const fieldService = FieldService.getInstance();
    fieldService.setValue("1234567890");
    await fieldService.validate();
    const error = fieldService.getError();
    expect(error).toBeFalsy();
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

  describe("Formatting", () => {
    it("should correctly format", () => {
      expect(FieldService.formatPhone()).toBe("");
      expect(FieldService.formatPhone("a")).toBe("");
      expect(FieldService.formatPhone("12345")).toBe("(123) 45");
      expect(FieldService.formatPhone("1234567890")).toBe("(123) 456-7890");
    });
  });
});
