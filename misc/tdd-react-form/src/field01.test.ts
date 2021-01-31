import { EventSubject } from "./EventWrapper";
import {
  FieldIntegrationService,
  FieldService,
  Field,
} from "./field01.service";
import { StateService } from "./state.service";

beforeEach(() => {
  FieldService.resetInstance();
  StateService.resetInstance();
  FieldIntegrationService.resetInstance();
});

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Extra Tests", () => {
  it("should not create instance when there is one already", () => {
    expect(FieldService.getInstance()).toEqual(FieldService.getInstance());
    expect(StateService.getInstance()).toEqual(StateService.getInstance());
    expect(FieldIntegrationService.getInstance()).toEqual(
      FieldIntegrationService.getInstance()
    );
  });
});

describe("Field 001 Integration", () => {
  it("should update value on event", () => {
    const service = FieldIntegrationService.getInstance();
    EventSubject.next(["change", service.fieldService.id, "123"]);
    expect(service.fieldService.getValue()).toBe("(123");
  });

  it("should update value on event", () => {
    const service = FieldIntegrationService.getInstance();
    EventSubject.next(["change", service.fieldService.id, undefined]);
    expect(service.fieldService.getValue()).toBe("");
  });

  it("state should update when value udpates", () => {
    const service = FieldIntegrationService.getInstance();
    expect(service.stateService.getValue(service.fieldService.id)).toBe("");
    service.fieldService.setValue("123");
    expect(service.stateService.getValue(service.fieldService.id)).toBe("(123");
  });

  it.skip("should validate on button click", () => {
    const service = FieldIntegrationService.getInstance();
    const spy = jest
      .spyOn(service.fieldService, "validate")
      .mockImplementation(jest.fn());
    EventSubject.next(["click", service.fieldService.buttonId, ""]);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe("Field 001", () => {
  it("should get/set value", () => {
    const fieldService = new Field();
    expect(fieldService.getValue()).toBe("");
    fieldService.setValue("123");
    expect(fieldService.getValue()).toBe("(123");
  });

  it("should get/set value", () => {
    const fieldService = new Field();
    expect(fieldService.getIsTouched()).toBe(false);
    fieldService.setValue("123");
    expect(fieldService.getIsTouched()).toBe(true);
  });

  it("should validate", async () => {
    const fieldService = new Field();
    fieldService.setValue("123");
    await fieldService.validate();
    const error = fieldService.getError();
    expect(error).toBeTruthy();
  });

  it("should validate", async () => {
    const fieldService = new Field();
    fieldService.setValue("");
    await fieldService.validate();
    const error = fieldService.getError();
    expect(error).toBeTruthy();
  });

  it("should validate", async () => {
    const fieldService = new Field();
    fieldService.setValue("1234567890");
    await fieldService.validate();
    const error = fieldService.getError();
    expect(error).toBeFalsy();
  });

  it("should be disabled on validate", async () => {
    const fieldService = new Field();
    fieldService.setValue("123");
    fieldService.validate();
    const isDisabled = fieldService.getIsDisabled();
    expect(isDisabled).toBe(true);
  });

  it("should be disabled on validate", async () => {
    const fieldService = new Field();
    fieldService.setValue("123");
    await fieldService.validate();
    const isDisabled = fieldService.getIsDisabled();
    expect(isDisabled).toBe(false);
  });

  describe("Formatting", () => {
    it("should correctly format", () => {
      const service = new Field();
      expect(service.formatPhone()).toBe("");
      expect(service.formatPhone("a")).toBe("");
      expect(service.formatPhone("12345")).toBe("(123) 45");
      expect(service.formatPhone("1234567890")).toBe("(123) 456-7890");
    });
  });
});
