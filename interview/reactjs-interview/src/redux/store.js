import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slice/todo';
export default configureStore({
  reducer: {
      todos: todoReducer,
  },
});