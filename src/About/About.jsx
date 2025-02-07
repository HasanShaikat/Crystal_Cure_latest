import './About.css'

const About=()=>{
    
    return(
        <div className='my-4'>
        {/* <div className="flex justify-center text-3xl uppercase font-semibold">About Me</div> */}
        <div className="container mx-auto my-6 grid md:grid-cols-2 px-4" >
            <div className='px-4 text-justify'>
                <p className="text-2xl text-red-600 pt-4">About Our Pest Service</p>
                <p className='text-4xl md:py-6 sm:py-2'>Welcome to ClearWay -  a Leading Pest Control Company</p>
                <span className='text-black-300'>Crystal Cure Pest Control since 2019. <br /><br />

Crystal Cure Pest Control is a dedicated and reliable pest management service that aims to provide comprehensive solutions for residential and commercial spaces. With a focus on quality and customer satisfaction, Your satisfaction is our priority. our expert team employs modern and eco-friendly methods to address and eliminate various pest issues. <br /><br />

We understand that each pest problem is unique, which is why our approach is personalized to suit the specific needs of our clients. From common household pests like ants, cockroaches, and rodents to more complex issues involving termites or bed bugs, we are equipped to handle a wide range of infestations. <br /><br />

Our services are not just about extermination but also about prevention. We believe in educating our clients about proactive measures to prevent future infestations. Crystal Cure Pest Control is committed to creating pest-free environments, ensuring the safety and well-being of our customers. <br /><br />

No hidden surprises. Crystal Cure maintains transparent communication throughout the process, from the initial inspection to the final treatment, keeping you informed every step of the way. <br /><br />
Thank you for choosing our pest control services. <br /> <br />

Best <br />
Crystal Cure Pest Control</span>
            </div>
            <div>
                <img src="/public/images/about.jpg" alt="About US" className='flex flex-center' />
            </div>
        </div>
        <hr className='bg-blue-100 py-2' />
        </div>
    )
}
export default About;