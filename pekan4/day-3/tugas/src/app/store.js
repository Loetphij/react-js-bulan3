import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import usersReducer from '../features/usersSlice';
import todosReducer from '../features/todosSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat((store) => (next) => (action) => {
      console.log('Action dikirim:', action);
      const result = next(action);
      console.log('State sekarang:', store.getState());
      return result;
    }),
});
