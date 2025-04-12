import LoginForm from "@/components/LoginForm";
import Otp from "@/components/Otp";
import { useSelector } from "react-redux";

const Login = () => {
  const isOtpScreen = useSelector((state) => state.auth.isOtpScreen);
  return <div>{isOtpScreen ? <Otp /> : <LoginForm />}</div>;
};

export default Login;