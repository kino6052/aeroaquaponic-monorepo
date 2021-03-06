import { EventSubject } from "./EventWrapper";
import { FieldService as SecondFieldService } from "./field02.service";
import { FieldIntegrationService, FieldService } from "./field03.service";
import { StateService } from "./state.service";

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

describe("Field 002 Integration", () => {
  it("should update value on event", () => {
    const fieldService = FieldService.getInstance();
    const stateService = StateService.getInstance();
    FieldIntegrationService.getInstance(fieldService, stateService);
    EventSubject.next(["change", fieldService.id, "abc"]);
    expect(fieldService.getValue()).toBe("abc");
  });

  it("should update value on event", () => {
    const fieldService = FieldService.getInstance();
    const stateService = StateService.getInstance();
    FieldIntegrationService.getInstance(fieldService, stateService);
    EventSubject.next(["change", fieldService.id, undefined]);
    expect(fieldService.getValue()).toBe("");
  });

  it("state should update when value udpates", () => {
    const fieldService = FieldService.getInstance();
    const stateService = StateService.getInstance();
    FieldIntegrationService.getInstance(fieldService, stateService);
    expect(stateService.getValue(fieldService.id)).toBe("");
    fieldService.setValue("abc");
    expect(stateService.getValue(fieldService.id)).toBe("abc");
  });

  it("should validate on button click", () => {
    const fieldService = FieldService.getInstance();
    const stateService = StateService.getInstance();
    FieldIntegrationService.getInstance(fieldService, stateService);
    const spy = jest
      .spyOn(fieldService, "validate")
      .mockImplementation(jest.fn());
    EventSubject.next(["click", fieldService.buttonId, ""]);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe("Field 002", () => {
  it("should get/set value", () => {
    const fieldService = FieldService.getInstance();
    expect(fieldService.getValue()).toBe("");
    fieldService.setValue("abc");
    expect(fieldService.getValue()).toBe("abc");
  });

  it("should get/set value", () => {
    const fieldService = FieldService.getInstance();
    expect(fieldService.getIsTouched()).toBe(false);
    fieldService.setValue("abc");
    expect(fieldService.getIsTouched()).toBe(true);
  });

  it("should validate", async () => {
    const fieldService = FieldService.getInstance();
    fieldService.setValue("");
    await fieldService.validate();
    const error = fieldService.getError();
    expect(error).toBeTruthy();
  });

  it("should validate with error if previous field does NOT match the current", async () => {
    const fieldService = FieldService.getInstance();
    fieldService.setValue("abc");
    const secondFieldSerivce = SecondFieldService.getInstance();
    secondFieldSerivce.setValue("efg");
    await fieldService.validate();
    const error = fieldService.getError();
    expect(error).toBeTruthy();
  });

  it("should validate with NO error if previous field DOES match the current", async () => {
    const fieldService = FieldService.getInstance();
    fieldService.setValue("abc");
    const secondFieldSerivce = SecondFieldService.getInstance();
    secondFieldSerivce.setValue("abc");
    await fieldService.validate();
    const error = fieldService.getError();
    expect(error).toBeFalsy();
  });

  it("should be disabled on validate", async () => {
    const fieldService = FieldService.getInstance();
    fieldService.setValue("abc");
    fieldService.validate();
    const isDisabled = fieldService.getIsDisabled();
    expect(isDisabled).toBe(true);
  });

  it("should be disabled on validate", async () => {
    const fieldService = FieldService.getInstance();
    fieldService.setValue("abc");
    await fieldService.validate();
    const isDisabled = fieldService.getIsDisabled();
    expect(isDisabled).toBe(false);
  });
});
