import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  isOtpScreen: false,
  otp: ['','','','','',''],
  countdown: 60,
  isResendDisabled: true,
  incorrectOtpWarning: false,
  isVerifingLoader: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPhone: (state, action) => {
      state.phone = action.payload; // ✅ Only updates phone
    },
    setOtpScreen: (state, action ) => {
        state.isOtpScreen = action.payload;
    },
    setOtp: (state, action) => {
        const {value, index, pastedOtp} = action.payload
        !pastedOtp ? state.otp[index] = value : state.otp = pastedOtp// ✅ Only updates otp
        console.log(!pastedOtp)
        console.log(state.otp)
    },
    setCountdown: (state, action) => {
        state.countdown = action.payload;
    },
    setIsResendDisabled: (state, action) => {
        state.isResendDisabled = action.payload;
    },
    setIncorrectOtpWarning: (state, action) => {
      state.incorrectOtpWarning = action.payload; // ✅ Only updates otpVerified
    },
    setIsVerifingLoader: (state, action) => {
      state.isVerifingLoader = action.payload
    }
  },
});

export const { setPhone, setOtpScreen, setOtp, setCountdown, setIsResendDisabled, setIncorrectOtpWarning, setIsVerifingLoader} = authSlice.actions;
export default authSlice.reducer;
