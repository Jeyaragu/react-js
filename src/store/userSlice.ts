// This file is part of the Redux store for managing user state in the application. It defines the initial state, actions, and reducers related to user authentication and profile management.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  accessMenu: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {
    // state -> Its a draft version of original state created by immer. It wont mutate the original state. state === Draft<State>. Reducer function must be pure and can't do async logic
    login: (state, action) => {
      // Here we are mutating the draft state
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user ?? null,
        accessMenu: action.payload.accessMenu ?? [],
      };
    },
    logOut: (state) => {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        accessMenu: [],
      };
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(asyncThunk.pending, (state) => console.log(pending));
  //   builder.addCase(asyncThunk.fulfilled, (state, action) =>
  //     console.log(action),
  //   );
  //   builder.addCase(asyncThunk.rejected, (state) => console.log("Rejected"));
  // },
});

export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;

// Async thunk Example 1
// const asyncThunk = createAsyncThunk("counter/addasync", async (id) => {
//   try {
//     const response = await fetchData(id);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   } catch (error) {}
// });

// Example 2
// const outerFunction = (amount) => {
//   return (dispatch, getState) => {
//     const prevState =(getState()
//     dispatch(anyFunction(amount));
//   };
// };
