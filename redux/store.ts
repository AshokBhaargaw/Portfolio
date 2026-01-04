import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "@/redux/slices/projectSlice";
import experienceReducer from "@/redux/slices/experienceSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    experience: experienceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
