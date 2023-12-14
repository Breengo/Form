import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface DataState {
  phone: string;
  email: string;
  name: string;
  nickname: string;
  sername: string;
  sex: "man" | "woman";
  advantages: string[];
  radio: number;
  checkboxes: number[];
  about: string;
}

// Define the initial state using that type
const initialState: DataState = {
  phone: "79138788479",
  email: "s.fedoseev813@gmail.com",
  name: "",
  nickname: "",
  sername: "",
  sex: "man",
  advantages: [],
  radio: 1,
  checkboxes: [],
  about: "",
};

export const dataSlice = createSlice({
  name: "data",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMain: (state, { payload }) => {
      state.phone = payload.phone;
      state.email = payload.email;
    },

    setFirst: (state, { payload }) => {
      state.name = payload.name;
      state.nickname = payload.nickname;
      state.sername = payload.sername;
      state.sex = payload.sex;
    },

    setSecond: (state, { payload }) => {
      state.advantages = payload.advantages;
      state.checkboxes = payload.checkboxes;
      state.radio = payload.radio;
    },

    setThird: (state, { payload }) => {
      state.about = payload.about;
    },
  },
});

export const { setMain, setFirst, setSecond, setThird } = dataSlice.actions;

export default dataSlice.reducer;
