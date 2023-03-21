import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.value;
export const getLoadingStatus = state => state.contacts.isLoading;

export const getFilterSelector = createSelector(
  // Масив вхідних селекторів
  [getContacts, getFilter],
  // Функція перетворювач
  contacts => {
    // Виконуємо обчислення та повертаємо результат
    return contacts.getFilter(contact =>
      contact.name.toLowerCase().includes(getFilter.toLowerCase())
    );
  }
);
