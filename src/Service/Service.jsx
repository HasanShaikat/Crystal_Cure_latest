const Service = () => {

  return (
    <div className='container mx-auto px-4 my-4'>
        <div className="grid md:grid-cols-2">
            <div className="grid content-center">
                <img src="/public/images/about.jpg" alt="Service left side" />
            </div>
            <div className='px-4'>
                <p className='text-red-800 font-bold text-2xl'>WHAT WE OFFER</p>
                <p className="text-4xl py-4">Our Services</p>
                <span className=''>As one of the premier pest control companies in the industry, we offer advanced protection against many common pests</span>
                <div className='sm:pt-4'>
                    <div className="grid xl:grid-cols-1 justify-center gap-y-2">
                        <div className=' text-justify grid gap-y-4 justify-items-start'>
                        <span className='font-bold text-red-800 text-xl text-end pt-6'>Rodent Treatment</span>
                        <span >Looking for a reliable pest control service for rodent removal? Our team of experts are here to help eliminate pesky rodents from your home or business. Contact us today for fast and effective rodent removal solutions.</span>
                        <button type="button" className='px-8 py-2 rounded bg-red-800 hover:bg-red-900 text-white w-48'>See More</button>
                        </div>
                        <div className=' text-justify grid gap-y-4 justify-items-end'>
                        <span className='font-bold text-red-800 text-xl text-end pt-6'>Bed Bugs Treatment</span>
                        <span >Looking for a reliable pest control service for rodent removal? Our team of experts are here to help eliminate pesky rodents from your home or business. Contact us today for fast and effective rodent removal solutions.</span>
                        <button type="button" className='px-8 py-2 rounded bg-red-800 hover:bg-red-900 text-white w-48'>See More</button>
                        </div>
                        <div className=' text-justify grid gap-y-4 justify-items-start'>
                        <span className='font-bold text-red-800 text-xl text-end pt-6'>Termite Treatment</span>
                        <span >Looking for a reliable pest control service for rodent removal? Our team of experts are here to help eliminate pesky rodents from your home or business. Contact us today for fast and effective rodent removal solutions.</span>
                        <button type="button" className='px-8 py-2 rounded bg-red-800 hover:bg-red-900 text-white w-48'>See More</button>
                        </div>
                        <div className=' text-justify grid gap-y-4 justify-items-end'>
                        <span className='font-bold text-red-800 text-xl text-end pt-6'>Cockroach</span>
                        <span >Looking for a reliable pest control service for rodent removal? Our team of experts are here to help eliminate pesky rodents from your home or business. Contact us today for fast and effective rodent removal solutions.</span>
                        <button type="button" className='px-8 py-2 rounded bg-red-800 hover:bg-red-900 text-white w-48'>See More</button>
                        </div>
                        <div className=' text-justify grid gap-y-4 justify-items-start'>
                        <span className='font-bold text-red-800 text-xl text-end pt-6'>Mosquito</span>
                        <span >Looking for a reliable pest control service for rodent removal? Our team of experts are here to help eliminate pesky rodents from your home or business. Contact us today for fast and effective rodent removal solutions.</span>
                        <button type="button" className='px-8 py-2 rounded bg-red-800 hover:bg-red-900 text-white w-48'>See More</button>
                        </div>                      
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Service;
