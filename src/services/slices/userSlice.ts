import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerUserApi,
  loginUserApi,
  getUserApi,
  updateUserApi,
  logoutApi,
  forgotPasswordApi,
  resetPasswordApi
} from '@api';
import type { TRegisterData, TLoginData } from '@api';
import { TUser } from '@utils-types';
import { deleteCookie, setCookie } from '../../utils/cookie';

export interface UserState {
  isLoadong: boolean;
  user: TUser | null;
  isAuthorized: boolean;
  error: string | null;
}

const initialState: UserState = {
  isLoadong: false,
  user: null,
  isAuthorized: false,
  error: null
};

export const loginUserThunk = createAsyncThunk(
  'user/login',
  async (loginData: TLoginData) => {
    const response = await loginUserApi(loginData);
    setCookie('accessToken', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    return response;
  }
);

export const registerUserThunk = createAsyncThunk(
  'user/register',
  async (registerData: TRegisterData) => {
    const response = await registerUserApi(registerData);
    setCookie('accessToken', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    return response;
  }
);

export const logoutUserThunk = createAsyncThunk('user/logout', async () => {
  await logoutApi();
  deleteCookie('accessToken');
  localStorage.removeItem('refreshToken');
});

export const updateUserThunk = createAsyncThunk(
  'user/update',
  (user: Partial<TRegisterData>) => updateUserApi(user)
);

export const forgotPasswordThunk = createAsyncThunk(
  'user/frogotPassword',
  (data: { email: string }) => forgotPasswordApi(data)
);

export const resetPasswordThunk = createAsyncThunk(
  'user/resetPassword',
  (data: { password: string; token: string }) => resetPasswordApi(data)
);

export const getUserThunk = createAsyncThunk('user/get', getUserApi);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserError: (state) => {
      state.error = null;
    }
  },
  selectors: {
    getRequestUser: (state) => state.isLoadong,
    getUserStateSelector: (state) => state,
    getUserSelector: (state) => state.user,
    isAuthorizedSelector: (state) => state.isAuthorized,
    getUserErrorSelector: (state) => state.error
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoadong = true;
        state.error = null;
      })
      .addCase(loginUserThunk.rejected, (state, { error }) => {
        state.isLoadong = false;
        state.error = error.message as string;
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.isLoadong = false;
        state.error = null;
        state.user = payload.user;
        state.isAuthorized = true;
      })
      .addCase(registerUserThunk.pending, (state) => {
        state.isLoadong = true;
        state.error = null;
      })
      .addCase(registerUserThunk.rejected, (state, { error }) => {
        state.isLoadong = false;
        state.error = error.message as string;
      })
      .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        state.isLoadong = false;
        state.error = null;
        state.user = payload.user;
        state.isAuthorized = true;
      })
      .addCase(logoutUserThunk.pending, (state) => {
        state.isLoadong = true;
        state.error = null;
      })
      .addCase(logoutUserThunk.rejected, (state, { error }) => {
        state.isLoadong = false;
        state.error = error.message as string;
      })
      .addCase(logoutUserThunk.fulfilled, (state, { payload }) => {
        state.isLoadong = false;
        state.error = null;
        state.user = null;
        state.isAuthorized = false;
      })
      .addCase(updateUserThunk.pending, (state) => {
        state.isLoadong = true;
        state.error = null;
      })
      .addCase(updateUserThunk.rejected, (state, { error }) => {
        state.isLoadong = false;
        state.error = error.message as string;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.isLoadong = false;
        state.error = null;
        state.user = payload.user;
        state.isAuthorized = true;
      })
      .addCase(forgotPasswordThunk.pending, (state) => {
        state.isLoadong = true;
        state.error = null;
      })
      .addCase(forgotPasswordThunk.rejected, (state, { error }) => {
        state.isLoadong = false;
        state.error = error.message as string;
      })
      .addCase(forgotPasswordThunk.fulfilled, (state) => {
        state.isLoadong = false;
        state.error = null;
      })
      .addCase(resetPasswordThunk.pending, (state) => {
        state.isLoadong = true;
        state.error = null;
      })
      .addCase(resetPasswordThunk.rejected, (state, { error }) => {
        state.isLoadong = false;
        state.error = error.message as string;
      })
      .addCase(resetPasswordThunk.fulfilled, (state) => {
        state.isLoadong = false;
        state.error = null;
      })
      .addCase(getUserThunk.pending, (state) => {
        state.isLoadong = true;
        state.error = null;
      })
      .addCase(getUserThunk.rejected, (state, { error }) => {
        state.isLoadong = false;
        state.error = error.message as string;
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.isLoadong = false;
        state.error = null;
        state.isAuthorized = true;
        state.user = payload.user;
      });
  }
});
export { initialState as userInitialState };
export const { clearUserError } = userSlice.actions;
export const {
  getRequestUser,
  getUserStateSelector,
  getUserSelector,
  isAuthorizedSelector,
  getUserErrorSelector
} = userSlice.selectors;

export default userSlice.reducer;
