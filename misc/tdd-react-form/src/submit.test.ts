import { EventSubject } from "./EventWrapper";
import { FieldService as Field01Service } from "./field01.service";
import { FieldService as Field02Service } from "./field02.service";
import { FieldService as Field03Service } from "./field03.service";
import { SubmitId, SubmitService } from "./submit.service";

beforeEach(() => {
  SubmitService.resetInstance();
  Field01Service.resetInstance();
  Field02Service.resetInstance();
  Field03Service.resetInstance();
});

describe("Extra Tests", () => {
  it("should not create instance when there is one already", () => {
    expect(SubmitService.getInstance()).toEqual(SubmitService.getInstance());
  });
});

describe("Submit Integration", () => {
  it("should call submit on click", () => {
    const submitService = SubmitService.getInstance();
    const spy = jest.spyOn(submitService, "submit");
    EventSubject.next(["click", SubmitId, ""]);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe("Submit", () => {
  it("should submit", async (done) => {
    const submitService = SubmitService.getInstance();
    const field01Service = Field01Service.getInstance();
    const spy01 = jest.spyOn(field01Service, "validate");
    const field02Service = Field02Service.getInstance();
    const spy02 = jest.spyOn(field02Service, "validate");
    const field03Service = Field03Service.getInstance();
    const spy03 = jest.spyOn(field03Service, "validate");
    await submitService.submit();
    expect(spy01).toHaveBeenCalledTimes(1);
    expect(spy02).toHaveBeenCalledTimes(1);
    expect(spy03).toHaveBeenCalledTimes(1);
    done();
  });
});
