import { BehaviorSubject } from "rxjs";

export enum Id {
  Input01 = "1",
  Input02 = "2",
  Input03 = "3",
  Submit = "submit",
}

export interface AppState {
  [Id.Input01]: {
    value: string;
    error: string;
  };
}

export const initialState = {
  [Id.Input01]: {
    value: "",
    error: "",
  },
  [Id.Input02]: {
    value: "",
    error: "",
  },
  [Id.Input03]: {
    value: "",
    error: "",
  },
};

export type InputType = "change" | "click" | "focus";

export type IInput = [InputType, string, string];

export const formatPhone = (s: string) => {
  const r = s.replace(/\D/g, ""); // Replace all non-digit characters with empty
  const m = r.match(/^(\d{1,3})(\d{1,3})?(\d{1,})?$/); // Find three groups
  const first = (m?.[1] && `(${m[1]}`) ?? ""; // First group of max three digits (123)
  const second = (m?.[2] && `) ${m[2]}`) ?? ""; // Second group of max three digits
  const third = (m?.[3] && `-${m[3].substring(0, 4)}`) ?? ""; // four group of max four digits
  return first + second + third;
};

export const StateSubject = new BehaviorSubject(initialState);

const onSubmit = (state: typeof initialState) => {
  const input01 = state[Id.Input01];
  const input02 = state[Id.Input02];
  const input03 = state[Id.Input03];
  const error01 =
    (!input01.value && "Cannot be empty") ||
    (input01.value.replace(/\D/g, "").length !== 10 &&
      "Enter full phone number") ||
    "";
  const newInput01: typeof input01 = { ...input01, error: error01 };
  const error02 =
    (!input02.value && "Cannot be empty") ||
    (newInput01.error && "Fix phone number") ||
    "";
  const newInput02: typeof input01 = { ...input02, error: error02 };
  const error03 =
    (!input03.value && "Cannot be empty") ||
    (newInput02.value !== input03.value && "Does not match") ||
    "";
  const newInput03: typeof input01 = { ...input03, error: error03 };
  return {
    ...state,
    [Id.Input01]: newInput01,
    [Id.Input02]: newInput02,
    [Id.Input03]: newInput03,
  };
};

const onChange = (id: string, value: string, state: typeof initialState) => {
  if (id === Id.Input01) {
    const input = state[Id.Input01];
    const newInput = { ...input, value: formatPhone(value) };
    return {
      ...state,
      [Id.Input01]: newInput,
    };
  } else if (id === Id.Input02) {
    const input = state[Id.Input02];
    const newInput = { ...input, value };
    return {
      ...state,
      [Id.Input02]: newInput,
    };
  } else {
    const input = state[Id.Input03];
    const newInput = { ...input, value };
    return {
      ...state,
      [Id.Input03]: newInput,
    };
  }
};

export const getAct = () => {};

export const act = <T extends Record<string, unknown>>(state: T) => ([
  type,
  id,
  value,
]: IInput): T => {
  // Input Change
  const isChange = type === "change";
  const onChangeResult = isChange && onChange(id, value, state);

  // Submit
  const isSubmit = type === "click" && id === Id.Submit;
  const onSubmitResult = isSubmit && onSubmit(state);

  return onChangeResult || onSubmitResult || state;
};
