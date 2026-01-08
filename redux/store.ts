import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "@/redux/slices/projectSlice";
import experienceReducer from "@/redux/slices/experienceSlice";
import responseReducer from "@/redux/slices/responseSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    experience: experienceReducer,
    responses: responseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
