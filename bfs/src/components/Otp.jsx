import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Chilltamoto } from '../assets/chillTamoto.svg'
import { ReactComponent as LeftArrow } from '../assets/leftArrowIcon.svg'
import { ReactComponent as EditIcon } from '../assets/editIcon.svg'
import { ReactComponent as Alert } from '../assets/alert.svg'
import { setCoutdown, setOtp, setOtpSent, setResendDisabled } from '@/features/auth/authSlice'
import { useRef, useEffect } from 'react'

const Otp = () => {
    const dispatch = useDispatch()
    const phone = useSelector((state) => state.auth.phone)
    const otp = useSelector((state) => state.auth.otp)
    const countdown = useSelector((state) => state.auth.countdown)
    const resend = useSelector((state) => state.auth.resendDisabled)
    const inputRefs = useRef([])

    //
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                dispatch(setCoutdown(countdown - 1))
            }, 1000);
            return () => clearTimeout(timer)
        } else {
            dispatch(setResendDisabled(false))
        }
    }, [dispatch, countdown])


    //
    const handleOtpChange = (value, index) => {
        if (!/^\d?$/.test(value)) return; // Allow only digits
        dispatch(setOtp({ value, index }))
        if (value && index < 5 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus()
        }
    }
    //
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0)
            inputRefs.current[index - 1].focus()
    }
    //
    const handlePaste = (event) => {
        event.preventDefault()
        const pastedData = event.clipboardData.getData('text').trim()
        if (!/^\d{6}$/.test(pastedData)) return; // Ensure it's a valid 6-digit number
        const pastedOtp = pastedData.split('')
        dispatch(setOtp({ pastedOtp }))
        pastedOtp.forEach((element, index) => {
            inputRefs.current[index].value = element
        });
        inputRefs.current[5]?.focus();
    }
    //
    return (
        //div contains otp form and other element, dynamically view port height
        <div className=' flex flex-col justify-center items-center h-dvh'>
            <div onClick={() => dispatch(setOtpSent(false))} className='max-w-6 max-h-6 absolute top-5 left-5'>
                <LeftArrow />
            </div>
            <Chilltamoto className='min-w-[6.875rem]' />
            <h3 className='mt-[2.625rem] font-inria font-bold text-xl text-[#232323] text-center min-w-[5.5rem] min-h-5'>Enter OTP</h3>
            <div className='relative mx-[2.1875rem] mt-[1.375rem] '>
                <div className='min-w-56 flex item-center max-h-5 font-inria font-normal text-base text-center'>
                    OTP sent to +91 {phone}
                    <div className='ml-1 min-w-5 min-h-5 flex items-center'>
                        <EditIcon />
                    </div>
                </div>
                <div className='mt-5 min-h-10 flex' onPaste={handlePaste}>
                    {otp.map((element, index) =>
                        <input
                            key={index}
                            type="number"
                            maxLength={1}
                            value={element}
                            onChange={(e) => handleOtpChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(element) => inputRefs.current[index] = element}
                            className='px-[0.9375rem] py-[0.625rem] mr-[0.625rem] max-w-10 min-h-10 border-[0.025rem] border-[#999999] rounded-[0.625rem]'
                        />
                    )}
                </div>
                {resend ?
                    <p className='flex justify-end mt-5 font-inria font-normal text-sm text-[#999999] min-w-[6.75rem] min-h-5'>Resend in {countdown} sec</p>
                    :
                    <div className='flex justify-between mt-5'>
                        {!otp ?
                            <></> : <div className=' min-w-[8.5rem] min-h-5 flex items-center font-lato font-normal text-sm text-[#E21931]' ><Alert className='mr-2'/> OTP is incorect :/</div>
                        }
                        <button className='font-inria font-normal text-sm min-w-[3.125rem] min-h-5 text-[#286C11 ]'>Resend</button>
                    </div>
                }
            </div>
            <button className='mt-[6.375rem] min-w-[18.75rem] min-h-[3.125rem] font-inria font-bold text-base text-[#286C11] border-[0.1rem] border-[#286C11] rounded-[1.5625rem]'>Verify</button>

        </div>
    )
}

export default Otp