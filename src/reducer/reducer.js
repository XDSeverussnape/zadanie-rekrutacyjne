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

const initialState = {
  adres: "",
  clientName: "",
  termName: "",
  termAdres: "",
  inputName: "",
  inputAdres: "",
  data: [
    {
      id: 1,
      name: "Jan Kowalski",
      address: "ul. Testowa 1, Pruszcz Gdanski"
    },
    {
      id: 2,
      name: "Andrzej Nowak",
      address: "ul. Programistow 5 Gdansk"
    },
    { id: 3, name: "Piotr Piotrowski", address: "ul. Wiejska 1, Warszawa" }
  ],
  filterableData: []
};

const addNewCharacter = state => {
  const index = state.data.length + 1;
  const newItem = {
    id: index,
    name: state.clientName,
    address: state.adres
  };

  return newItem;
};

const compareBy = key => {
  return function(a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  };
};

const sortBy = (key, state) => {
  let arrayCopy = [...state.data];
  arrayCopy.sort(compareBy(key));
  return [...arrayCopy];
};

const updateListItem = ({ inputText, id }, key, state) => {
  const newArray = state.data.map(item => {
    if (item.id === id) {
      return { ...item, [key]: inputText };
    }
    return item;
  });
  return newArray;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERABLRED_DATA:
      return { ...state, filterableData: [...action.payload] };
    case ADD_NEW_CHARACTER:
      return { ...state, data: [...state.data, addNewCharacter(state)] };
    case SET_STATE_CLIENT_NAME:
      return { ...state, clientName: action.payload };
    case SET_STATE_ADRES:
      return { ...state, adres: action.payload };
    case SET_TERM_NAME:
      return { ...state, termName: action.payload };
    case SET_TERM_ADRES:
      return { ...state, termAdres: action.payload };
    case SET_INPUT_NAME:
      return { ...state, data: action.payload };
    case SET_INPUT_ADRES:
      return { ...state, inputAdres: action.payload };
    case SORT_BY:
      return { ...state, data: sortBy(action.payload, state) };
    case APPLY_CHANGE_NAME:
      return {
        ...state,
        data: updateListItem(action.payload, "name", state)
      };
    case APPLY_CHANGE_ADRES:
      return {
        ...state,
        data: updateListItem(action.payload, "address", state)
      };
    default:
      return state;
  }
};

export default reducer;
