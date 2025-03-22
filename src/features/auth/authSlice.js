import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  otpSent: false,
  otp: "",
  otpVerified: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPhone: (state, action) => {
      state.phone = action.payload; // ✅ Only updates phone
    },
    setOtpSent: (state) => {
        state.otpSent = true;
    },
    setOtp: (state, action) => {
      state.otp = action.payload; // ✅ Only updates otp
    },
    setOtpVerified: (state, action) => {
      state.otpVerified = action.payload; // ✅ Only updates otpVerified
    },
  },
});

export const { setPhone, setOtpSent, setOtp, setOtpVerified } = authSlice.actions;
export default authSlice.reducer;
