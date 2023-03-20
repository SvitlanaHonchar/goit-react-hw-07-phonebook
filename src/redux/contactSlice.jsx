import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestContacts } from 'services.api/api';

export const fetchContacts = createAsyncThunk(
  '/contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await requestContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    error: null,
  },
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },

  // fetch contacts from database
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.error = null;
        console.log(payload);
        state.items = [...payload];
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
      }),
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
