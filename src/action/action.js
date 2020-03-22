import {
  ADD_NEW_CHARACTER,
  SET_STATE_CLIENT_NAME,
  SET_STATE_ADRES,
  SET_TERM_NAME,
  SET_TERM_ADRES,
  SORT_BY,
  APPLY_CHANGE_NAME,
  APPLY_CHANGE_ADRES,
  SET_INPUT_NAME,
  SET_INPUT_ADRES,
  SET_FILTERABLRED_DATA
} from "../constants/constants";

export const addNewCharacter = () => {
  return { type: ADD_NEW_CHARACTER };
};

export const setFilerabledData = array => {
  return { type: SET_FILTERABLRED_DATA, payload: array };
};

export const setClientName = inputText => {
  return { type: SET_STATE_CLIENT_NAME, payload: inputText };
};

export const setInputName = (inputText, id) => {
  return { type: SET_INPUT_NAME, payload: { inputText, id } };
};

export const setInputAdres = inputText => {
  return { type: SET_INPUT_ADRES, payload: inputText };
};

export const setAdres = inputText => {
  return { type: SET_STATE_ADRES, payload: inputText };
};

export const setTermName = inputText => {
  return { type: SET_TERM_NAME, payload: inputText };
};

export const setTermAdres = inputText => {
  return { type: SET_TERM_ADRES, payload: inputText };
};

export const sortBy = text => {
  return { type: SORT_BY, payload: text };
};

export const applyChangeName = (inputText, id) => {
  return { type: APPLY_CHANGE_NAME, payload: { inputText, id } };
};

export const applyChangeAdres = (inputText, id) => {
  return { type: APPLY_CHANGE_ADRES, payload: { inputText, id } };
};
