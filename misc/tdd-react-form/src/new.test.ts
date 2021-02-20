const inputId01 = "1";
const inputId02 = "2";
const inputId03 = "3";
const submitId = "submit";

const initialState = {
  [inputId01]: {
    value: "",
    error: "",
  },
  [inputId02]: {
    value: "",
    error: "",
  },
  [inputId03]: {
    value: "",
    error: "",
  },
} as const;

type InputType = "change";

type IInput = [InputType, string, string];

const formatPhone = (s: string) => {
  const r = s.replace(/\D/g, ""); // Replace all non-digit characters with empty
  const m = r.match(/^(\d{1,3})(\d{1,3})?(\d{1,})?$/); // Find three groups
  const first = (m?.[1] && `(${m[1]}`) ?? ""; // First group of max three digits (123)
  const second = (m?.[2] && `) ${m[2]}`) ?? ""; // Second group of max three digits
  const third = (m?.[3] && `-${m[3].substring(0, 4)}`) ?? ""; // four group of max four digits
  return first + second + third;
};

const act = (input: Array<IInput>) => {
  return input.reduce((state, [type, id, value]) => {
    if (id === inputId01 && type === "change") {
      const input = state[inputId01];
      const newInput = { ...input, value };
      return {
        ...state,
        [inputId01]: {
          value: formatPhone(value),
          error: "",
        },
      };
    }
    return state;
  }, initialState);
};

it("should format phone", () => {
  expect(act([["change", inputId01, "1"]])).toMatchSnapshot();
  expect(act([["change", inputId01, "12"]])).toMatchSnapshot();
  expect(act([["change", inputId01, "123"]])).toMatchSnapshot();
  expect(act([["change", inputId01, "1234"]])).toMatchSnapshot();
  expect(act([["change", inputId01, "12345"]])).toMatchSnapshot();
  expect(act([["change", inputId01, "123456"]])).toMatchSnapshot();
  expect(act([["change", inputId01, "1234567"]])).toMatchSnapshot();
  expect(act([["change", inputId01, "12345678"]])).toMatchSnapshot();
  expect(act([["change", inputId01, "123456789"]])).toMatchSnapshot();
  expect(act([["change", inputId01, "1234567890"]])).toMatchSnapshot();
});
