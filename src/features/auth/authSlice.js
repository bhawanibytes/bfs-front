import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  otpSent: false,
  otp: ['','','','','',''],
  countdown: 60,
  resendDisabled: true,
  otpVerified: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPhone: (state, action) => {
      state.phone = action.payload; // ✅ Only updates phone
    },
    setOtpSent: (state, action ) => {
        state.otpSent = action.payload;
    },
    setOtp: (state, action) => {
        const {value, index, pastedOtp} = action.payload
        !pastedOtp ? state.otp[index] = value : state.otp = pastedOtp// ✅ Only updates otp
        console.log(!pastedOtp)
        console.log(state.otp)
    },
    setCoutdown: (state, action) => {
        state.countdown = action.payload;
    },
    setResendDisabled: (state, action) => {
        state.resendDisabled = action.payload;
    },
    setOtpVerified: (state, action) => {
      state.otpVerified = action.payload; // ✅ Only updates otpVerified
    },
  },
});

export const { setPhone, setOtpSent, setOtp, setCoutdown, setResendDisabled, setOtpVerified } = authSlice.actions;
export default authSlice.reducer;
