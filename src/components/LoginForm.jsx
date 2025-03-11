import React from 'react'
import login_veg from '@/assets/login_veg.png'
import sabjiwala_wordmark from '@/assets/sabjiwala_wordmark.png'

const LoginForm = () => {
  return (
    // <div className='flex justify-center items-center h-screen'>
    //   <div className='min-w-[30rem]'>
    //     <div className='min-w-[100%]'>
    //     <div className='flex justify-center items-center absolute z-20 top-80'>
    //       <img src={login_veg} alt="Veg" className='max-w-64 '/>
    //     </div>
    //     <div className='flex flex-col bg-white rounded-xl absolute z-20'>
    //       <div className=' flex justify-center items-center'>
    //         <img src={sabjiwala_wordmark} alt="" className='max-w-56' />

    //       </div>
    //       <br />
    //       <div>
    //         Freshest
    //       </div>
    //       <div>
    //         <br />
    //         <div>Log in or sign up</div>
    //         <br />
    //       </div>
    //       <form action="submit" method="post">v
    //         <input type="number" name="" id="" />
    //         <button type="submit">Continue</button>
    //       </form>
    //       <div>
    //         Need Help?
    //       </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=' flex justify-center items-center h-screen bg-gray-200'>
      <div className='max-w-[30rem] relative pt-40' >
        <div className='flex justify-center items-center absolute bottom-[22rem] left-8 z-10'>
          <img src={login_veg} alt="Veg" className='max-w-80 ' />
        </div>
        <div className='min-w-96 bg-white relative z-20 rounded-xl'>
          <div className='flex justify-center items-center p-3'>
            <img src={sabjiwala_wordmark} alt="" className='max-w-56' />
          </div>
          <hr className='w-full border-t border-gray-300' />
          <div className=' font-inria font-bold text-2xl text-center py-5'>
            Freshest Fruits & Veggies,<br /> Delivered to Your Doorstep!
          </div>
          <div className='flex justify-center items-center '>
            <hr className='w-1/3 border-t border-gray-300' /><h3 className='min-w-36'>Log in or sign up</h3><hr className='w-1/3 border-t border-gray-300' />
          </div>
          <form action="submit" method="post" className='flex flex-col'>
            <div className='min-w-48 my-8 mx-auto flex justify-center border-gray-300 border-2 rounded-sm py-2 text-lg'>
              <select name="" id="country-code" className='outline-none appearance-none'>
                <option value="india">+91</option>
              </select>
              <input type="number" name="" id="" placeholder=' 9876543210' minLength={10} className=' max-w-28 outline-none' />
            </div>
            <button type="submit" className='min-w-48 bg-green-800 mx-auto text-xl text-white rounded-xl py-2 mb-8' >Continue</button>
          </form>
          <div className=' text-center pb-10'>
            Need Help?
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm