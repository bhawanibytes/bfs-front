import Login from "@/components/Login"
import Otp from "@/components/Otp"
import { useSelector } from "react-redux"

const LoginPage = () => {
  const isOtpScreen = useSelector((state) => state.auth.isOtpScreen)
  return (
    <div>
      {isOtpScreen ? <Otp/> : <Login/> }
    </div>
  )
}

export default LoginPage