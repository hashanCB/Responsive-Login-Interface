import './App.css'
import message from './assets/message.svg'
import padlock from './assets/padlock.svg'
import Saly from './assets/Saly.png'
import apple from './assets/apple.svg'
import google from './assets/google.svg'
import fb from './assets/Facebook.png'
import invisible from './assets/invisible.svg'
import call from './assets/phone-call.svg'



function App() {
  
  return (
  <div className='flex'>
    <div className=' w-full lg:w-1/2   '>
      <div className=' '>
        <div className=' pl-[26px] pt-[18px] lg:pl-[42px] lg:pt-[31px]  '> Your logo </div>

        <div className="ml-[26px]  lg:ml-[124px] mt-[57px]  lg:mt-[89px] mr-[52px]  ">
            <div className=' '>
              <h1 className=' text-[30px] '>Sign in</h1>
              <br/>
              <p>if you don't have an account register <br/> you cab <span className='text-[#0C21C1]'>Register here !</span></p>
            </div>

            <div> 
                <div className='text-[#999999] mt-[52px]'>Email</div>
                <div className='flex  mt-[11px] border-b-black  border-b-[2px] w-full '  >
                  <div className='pt-[4px] '> 
                  
                  <img src={message} alt="non image "  /></div>  
                  <div className="w-full ml-[10px]" > 
                  
                  <input type="text" className=' w-3/4 focus:outline-none' placeholder='Enter your email address'   />
                  
                  </div> 

                  
                </div>
            </div> 

            <div className=' mt-[49px]'> 
                  <div className='text-[#999999]'>Password</div>
                      <div className='flex  mt-[11px] border-b-black  border-b-[2px] w-full '  >
                        <div className='pt-[4px] '> 
                        
                        <img src={padlock} alt="non image "  /></div>  
                        <div className="w-full ml-[10px]" > 
                        
                        <input type="password" className=' w-3/4 focus:outline-none' placeholder='Enter your Password'  />
                        
                        </div> 

                        <div>
                         <img src={invisible} alt="invisible image" />
                        </div>
                      </div>
            </div>

            <div className='flex mt-[17px]'>
                  <div className='flex w-1/2'> 
                  <input className=" mb-[6px]" type="checkbox" name="exampleCheckbox"/>
                    <p className='text-[12px] text-[#000000] opacity-30  ml-[10px]'>Remeber me</p>
                  </div>
                  <div className='flex w-1/2  items-end justify-end '> 
                   <p className='text-left text-[12px] text-[#000000] opacity-30  '> Foreget password ?</p>
                  </div>
            </div>

            <div className='mt-[60px]'>
                <div className='bg-[#0C21C1] text-[#FFFFFF] text-center rounded-full shadow cursor-pointer' >
                  <input type="button" value="Login" className='mt-[4px] mb-[4px] '  />
                </div>
                <div className='mt-[39px]  opacity-30 text-center text-[16px] '> <p > or continue with </p> </div>
            </div>

            <div className='flex gap-[20.73px] mt-[31px] items-center justify-center'>
                <div className=' cursor-pointer'> 
                 <img src={fb} alt="fb"/>  
                </div>
                <div className=' cursor-pointer'>
                <img src={apple} alt="apple"/>  
                </div>
                <div className=' cursor-pointer'> 
                <img src={google} alt="google"/>  
                </div>
            </div>
        </div>


      </div>
    </div>
    <div className=' hidden lg:block w-full lg:w-1/2  bg-[#000842] lg:mt-[21px] lg:mr-[22px] lg:mb-[20px] rounded-lg'>
        
       
         <div className='flex gap-[6px] mt-[29px]  items-end justify-end mr-8'>
            <div className=' my-auto  '>
              <img src={call} alt="call image" width={14} height={14}/>
            </div>
            <div className='text-[15px] text-[#FFFFFF]'>
              +94 0116 789 754
            </div>
         </div>
        

         <div className=' flex items-center justify-center '>
         <img src={Saly} alt="non image "  width={512} height={512} />
         </div>

         <div className='mt-[84px] ml-[98px]'>
          <div className=' font-semibold  text-[#ffffff] text-[40px]'>
          Sign Up to name
          </div>

          <div className='text-[#ffffff] text-[20px] mb-[96px]'>
          Lorem Ipsum is simply
          </div>
         </div>
         
         
         
        
    </div>
  </div>
  )
}

export default App
