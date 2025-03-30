import Login from "@/components/Login"
import Otp from "@/components/Otp"
import { useSelector } from "react-redux"

const LoginPage = () => {
  const otpSent = useSelector((state) => state.auth.otpSent)
  return (
    <div>
      {otpSent ? <Otp/> : <Login/> }
    </div>
  )
}

export default LoginPage