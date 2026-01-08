import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/lib/api";
import { Response } from "@/redux/types/response";

type ResponseState = {
  responses: Response[];
  loading: boolean;
  error: string | null;
};

const initialState: ResponseState = {
  responses: [],
  loading: false,
  error: null,
};

// Async thunk to fetch responses
export const fetchResponses = createAsyncThunk<
  Response[],
  void,
  { rejectValue: string }
>("responses/fetchResponses", async (_, { rejectWithValue }) => {
  try {
    return await api.get<Response[]>("/api/responses");
  } catch (error: unknown) {
    return rejectWithValue((error as Error).message || "Failed to fetch responses");
  }
});

// Async thunk to submit a response
export const submitResponse = createAsyncThunk<
  Response,
  Omit<Response, "_id" | "createdAt" | "updatedAt">,
  { rejectValue: string }
>("responses/submitResponse", async (responseData, { rejectWithValue }) => {
  try {
    return await api.post<Response>("/api/responses", responseData);
  } catch (error: unknown) {
    return rejectWithValue((error as Error).message || "Failed to submit response");
  }
});

export const responseSlice = createSlice({
  name: "responses",
  initialState,
  reducers: {
    clearResponseError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch responses
      .addCase(fetchResponses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResponses.fulfilled, (state, action) => {
        state.loading = false;
        state.responses = action.payload;
        state.error = null;
      })
      .addCase(fetchResponses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch responses";
      })

      // Submit response
      .addCase(submitResponse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitResponse.fulfilled, (state, action) => {
        state.loading = false;
        state.responses.push(action.payload);
        state.error = null;
      })
      .addCase(submitResponse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to submit response";
      });
  },
});

export const { clearResponseError } = responseSlice.actions;
export default responseSlice.reducer;
