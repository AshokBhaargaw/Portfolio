import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Experience } from "@/redux/types/experience";
import { api } from "@/lib/api";

/* ========================= STATE TYPE ========================= */
interface ExperienceState {
  experiences: Experience[];
  loading: boolean;
  error: string | null;
}

const initialState: ExperienceState = {
  experiences: [],
  loading: false,
  error: null,
};

/* ========================= THUNKS ========================= */

/* -------- GET ALL -------- */
export const fetchExperiences = createAsyncThunk<
  Experience[],
  void,
  { rejectValue: string }
>("experience/fetchExperiences", async (_, { rejectWithValue }) => {
  try {
    return await api.get<Experience[]>("/api/experience");
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch experiences";
    return rejectWithValue(message);
  }
});

/* -------- CREATE -------- */
export const uploadExperience = createAsyncThunk<
  Experience,
  Omit<Experience, "_id">,
  { rejectValue: string }
>("experience/uploadExperience", async (data, { rejectWithValue }) => {
  try {
    return await api.post<Experience>("/api/experience", data);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to upload experience";
    return rejectWithValue(message);
  }
});

/* -------- UPDATE -------- */
export const updateExperience = createAsyncThunk<
  Experience,
  { id: string; data: Partial<Omit<Experience, "_id">> },
  { rejectValue: string }
>("experience/updateExperience", async ({ id, data }, { rejectWithValue }) => {
  try {
    return await api.put<Experience>(`/api/experience?id=${id}`, data);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to update experience";
    return rejectWithValue(message);
  }
});

/* -------- DELETE -------- */
export const deleteExperience = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("experience/deleteExperience", async (id, { rejectWithValue }) => {
  try {
    await api.delete(`/api/experience?id=${id}`);
    return id;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to delete experience";
    return rejectWithValue(message);
  }
});

/* =========================  SLICE ========================= */
export const experienceSlice = createSlice({
  name: "experience",
  initialState,

  reducers: {
    clearExperienceError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      /* ===== FETCH ===== */
      .addCase(fetchExperiences.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchExperiences.fulfilled,
        (state, action: PayloadAction<Experience[]>) => {
          state.loading = false;
          state.experiences = action.payload;
        },
      )
      .addCase(fetchExperiences.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch experiences";
      })

      /* ===== CREATE ===== */
      .addCase(uploadExperience.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        uploadExperience.fulfilled,
        (state, action: PayloadAction<Experience>) => {
          state.loading = false;
          state.experiences.unshift(action.payload);
        },
      )
      .addCase(uploadExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to upload experience";
      })

      /* ===== UPDATE ===== */
      .addCase(updateExperience.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateExperience.fulfilled,
        (state, action: PayloadAction<Experience>) => {
          state.loading = false;
          const index = state.experiences.findIndex(
            (e) => e._id === action.payload._id,
          );
          if (index !== -1) {
            state.experiences[index] = action.payload;
          }
        },
      )
      .addCase(updateExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update experience";
      })

      /* ===== DELETE ===== */
      .addCase(deleteExperience.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        deleteExperience.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.experiences = state.experiences.filter(
            (e) => e._id !== action.payload,
          );
        },
      )
      .addCase(deleteExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete experience";
      });
  },
});

/* ========================= EXPORTS ========================= */
export const { clearExperienceError } = experienceSlice.actions;
export default experienceSlice.reducer;
