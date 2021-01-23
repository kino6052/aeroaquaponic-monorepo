import {
  FieldIntegrationService,
  FieldService,
  StateService,
} from "./field01.refactored.service";
import { Service } from "./service";
import { StateSubject } from "./state.service";

beforeEach(() => {
  FieldService.resetInstance();
  StateService.resetInstance();
  FieldIntegrationService.resetInstance();
});

describe("Field 001 Integration", () => {
  it("should update value on event", () => {
    const fieldService = FieldService.getInstance();
    const stateService = StateService.getInstance();
    FieldIntegrationService.getInstance(fieldService, stateService);
    Service.EventSubject.next(["change", fieldService.id, "123"]);
    expect(fieldService.getValue()).toBe("(123");
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
