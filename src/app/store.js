import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { projectsReducer } from '../features/projects/ProjectsSlice';


export const store = configureStore({
  reducer: {
    projects: projectsReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

