import login_veg from '@/assets/smlogin.png'
import sabjiwala_wordmark from '@/assets/sabjiwala_wordmark.png'
import { useDispatch } from 'react-redux'
import { setPhone } from '@/features/auth/authSlice'
import { useRef } from 'react'

const Login = () => {
  const dispatch = useDispatch()
  const phoneRef = useRef()

  const handleChange = () => {
    // regex count 10 digit, only include first digit that is non-zero 
    const regex = /^[1-9]\d{9}$/;
    if (regex.test(phoneRef.current.value)) {
      dispatch(setPhone(phoneRef.current.value))
    } else {
      console.log('invalid phone number')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = phoneRef.current.value
    const regex = /^[1-9]\d{9}$/;
    if (regex.test(phone) && phone.length == 10) {
      console.log(phone, 'from if')
    } else {
      console.log('invalid phone number from submit')
    }
  }


  return (
     // div contains form and other element, dynamically view port height
    <div className='flex justify-center items-center h-dvh'>
      {/* absolutely positioned to top left corner */}
      <img src={login_veg} alt="Laal Tamatar" className='absolute top-0 left-0' />
      {/* form in center of top level div container with some margin as well*/}
      <form onSubmit={handleSubmit} autoComplete='on' className='mx-8 min-w-[19rem] flex flex-col items-center'>
        <img src={sabjiwala_wordmark} alt="Welcome to Sabjiwala" className='max-w-40' />
        <h3 className='mt-9 font-inria font-bold text-xl text-center'>Freshest Fruits & Veggies, <br /> Delivered to Your Doorstep!</h3>
        <div className='mt-9 flex justify-center items-center'>
          <hr className='border-t-2 min-w-14' />
          <h4 className='font-inria font-normal text-base '>Log in or sign up</h4>
          <hr className='border-t-2 min-w-14' />
        </div>
        <div className='min-w-56 min-h-10 mt-5  py-[10.5px] border-[#999999] border-[0.4px] rounded-[10px]'>
          <div className='flex justify-center items-center'>
            <p>+91</p>
            <input type="number" name="phone" id="phone" ref={phoneRef} placeholder='Enter Phone Number' onChange={handleChange} maxLength={10} minLength={3} className=' max-w-36 ml-3 placeholder:font-inria placeholder:font-normal placeholder:text-base' />
          </div>
        </div>
        <button type="submit" className='mt-5 min-w-56 min-h-[3.13rem] bg-[#286C11] rounded-3xl text-white font-inria font-bold text-base'>Continue</button>
      </form>
      {/* diclaimer positioned absolutly, don't know how it is horizontally in middle  */}
      <p className='absolute bottom-10 max-w-52 text-[#999999] text-[0.8125rem] text-center '>By continuing, you agree to our Terms of Service Privacy Policy Content Policy</p>
    </div>
  )
}

export default Login