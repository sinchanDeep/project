import React from 'react'
import { useNavigate } from 'react-router-dom';

function ServiceMale() {
  const navigate=useNavigate();
  const price=()=>{
    navigate("/ServicePrice");
  }
  return (
    <>  
         <div className="flex flex-col gap-4">
          <div className="flex flex-col p-2 m-2 md:flex-row-reverse gap-2 pt-9  mt-5 pl-14 pr-14 ml-3 mr-3 ">
          <div className='sm:mt-0 md:mt-5'>
              <img className="sm:w-full"src="images/mService1.jpg"></img>
            </div>
            <div className="texts1 font-sans">
            <h1 className="sm:pl-0 pr-0 pb-0 pt-0 md:pl-8 pr-8 pb-5 pt-4 heading1">Hair Cut</h1>
            <p className='para1 sm:pl-0 pr-0 pt-0 pb-0 justify-center  md:pl-8 pr-8 pt-4 pb-0 ml-5'>
            Style your hair with the best hands. At naturals, we create nice<br/>
            looks for all events. Be a show-stopper at all events with our “go-to hairdressers.”
                </p>
                <div className='p-8 text-center'>
                <button class="price1" onClick={price}>VIEW PRICE</button>
                </div>
            </div>
            

          </div>

          <div className='flex flex-col p-2 m-2 md:flex-row gap-2 pt-9  mt-5 pl-14 pr-14 ml-3 mr-3'>
              <div className="sm:mt-0 p-0 md:mt-5">
                <img className="h-full" src="images/mService2.jpg"></img>
              </div>
              <div className='texts1'>
                <h1 className='sm:pl-0 pr-0 pb-0 pt-0 md:pl-8 pr-8 pb-5 pt-4 heading1'>Beard trim / shave</h1>
                <p className='para1 sm:pl-0 pr-0 pt-0 pb-0 justify-center md:pl-8 pr-8 pt-4 pb-0 ml-5'>
                Style your hair with the best hands. At naturals, we create nice looks for all events.<br/>
                 Be a show-stopper at all events with our “go-to hairdressers.”
                </p>
                <div className='p-8 pb-0 text-center'>
                <button class="price1" onClick={price}>VIEW PRICE</button>
                </div>
              </div>
          </div>

          <div className='flex flex-col p-2 m-2 md:flex-row-reverse gap-2 pt-9  mt-5 pl-14 pr-14 ml-3 mr-3'>
              <div className="sm:mt-0 p-0 md:mt-5">
                <img className="h-full" src="images/mService3.jpg"></img>
              </div>
              <div className='texts1'>
                <h1 className='sm:pl-0 pr-0 pb-0 pt-0 md:pl-8 pr-8 pb-5 pt-4 heading1'>Hair colour</h1>
                <p className='para1 sm:pl-0 pr-0 pt-0 pb-0 justify-center md:pl-8 pr-8 pt-4 pb-0 ml-5 justify-left'>
                Hairstyles shine and luster with good chemical free colours.<br/>
                 Give that dash of spunk with our super friendly services.
                </p>
                <div className='p-8 pb-0 text-center md:p-8 pb-0 text-left lg:text-left'>
                <button class="price1" onClick={price}>VIEW PRICE</button>
                </div>
              </div>
          </div>

          <div className='flex flex-col p-2 m-2 md:flex-row gap-2 pt-9  mt-5 pl-14 pr-14 ml-3 mr-3'>
              <div className="sm:mt-0 p-0 md:mt-5">
                <img className="h-full" src="images/mService4.jpg"></img>
              </div>
              <div className='texts1'>
                <h1 className='heading1 sm:p-0 md:pl-8 pr-8 pb-5 pt-4'>Head Massage</h1>
                <p className='para1 sm:pl-0 pr-0 pt-0 pb-0 justify-center md:pl-8 pr-8 pt-4 pb-0 ml-5 justify-left'>
                Massage to your hair means relaxing your hair follicles and regenerating them for hair growth.<br/>
                Come experience a natural treatment suitable for all hair types.    


                </p>
                <div className='p-8 pb-0 text-center md:p-8 pb-0 text-left lg:text-left'>
                <button class="price1" onClick={price}>VIEW PRICE</button>
                </div>
              </div>
          </div>

          <div className='flex flex-col p-2 m-2 md:flex-row-reverse gap-2 pt-9  mt-5 pl-14 pr-14 ml-3 mr-3'>
              <div className="sm:mt-0 p-0 md:mt-5">
                <img className="h-full" src="images/mService5.jpg"></img>
              </div>
              <div className='sm:text-center md:text-left texts1'>
                <h1 className='sm:text-center md:text-left md:pl-8 pr-8 pb-5 pt-4 heading1'>Hair spa</h1>
                <p className='para1 sm:pl-0 pr-0 pt-0 pb-0 justify-center md:pl-8 pr-8 pt-4 pb-0 ml-5 justify-left'>
                Experience the joy of a hair salon just like home with our services.<br/>
                 Naturals spa is a miracle booster that every human needs.
                </p>
                <div className='p-8 pb-0 text-center md:p-8 pb-0 text-left lg:text-left'>
                <button class="price1" onClick={price}>VIEW PRICE</button>
                </div>
              </div>   
         </div>

         <div className='flex flex-col p-2 m-2 md:flex-row gap-2 pt-9  mt-5 pl-14 pr-14 ml-3 mr-3'>
              <div className="sm:mt-0 p-0 md:mt-5">
                <img className="h-full" src="images/mService6.jpg"></img>
              </div>
              <div className='sm:text-center md:text-left texts1'>
                <h1 className='sm:text-center md:text-left md:pl-8 pr-8 pb-5 pt-4 heading1'>Hair Straightening or smoothening
</h1>
                <p className='para1 sm:pl-0 pr-0 pt-0 pb-0 justify-center md:pl-8 pr-8 pt-4 pb-0 ml-5 justify-left'>
                Mane matters for every man at Naturals hair care comes first and our salonists prescribe the best style first and smoothening next.<br/>
                Scalp treatment (Anti hair fall & Anti dandruff) We take care of everything from hair fall and dandruff. Naturals redefines<br/>
                you with its best hair care treatment. Style it with Naturals.
                </p>
                <div className='p-8 pb-0 text-center md:p-8 pb-0 text-left lg:text-left'>
                <button class="price1" onClick={price}>VIEW PRICE</button>
                </div>
              </div>   
         </div>


      </div>
    </>
  )
}

export default ServiceMale
