import { createSelector } from 'reselect';

export const selectAuth = (state: any) => state.books;

export const selectBooksList = createSelector([selectAuth], (books) => books.list.result);
