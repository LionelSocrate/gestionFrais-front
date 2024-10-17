import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

const persistSlice = createSlice({
  name: 'persistInfos',
  initialState,
  reducers: {
    updatePersistInfos: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    },
  },
});

export const { updatePersistInfos } = persistSlice.actions;
export default persistSlice.reducer;
