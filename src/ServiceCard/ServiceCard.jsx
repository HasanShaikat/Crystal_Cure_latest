import { motion } from "motion/react";

function ServiceCard() {

    const ServiceData = [
        {
            "id": 1,
            "img": "/images/rat.png",
            "title": "Rodent Treatment",
            "body": "Rats are small to medium-sized rodents known for their pointed snouts, long tails, and sharp incisor teeth. They are highly adaptable creatures found in various habitats worldwide, often living in close proximity to human dwellings. Rats are known to cause damage by gnawing on structures, wires, and even through food containers. They can transmit diseases and parasites, posing health risks to humans. Due to their rapid breeding and elusive nature, rat infestations can become severe quickly, often requiring professional pest control measures to manage and eliminate them effectively."
          },
          
          {
            "id": 2,
            "img": "/images/Bed-Bugs.png",
            "title": "Bed Bugs Control",
            "body": "Bedbugs are small, reddish-brown insects that feed on blood, typically at night while people are sleeping. These pests can hide in cracks and crevices around beds, furniture, and other items, making them difficult to detect and eradicate. Bedbug bites can cause itchy welts on the skin and, while they are not known to transmit diseases, their presence can lead to stress and sleep disturbances. Effective elimination often requires professional pest control measures to completely eradicate infestations."
          },
          {
            "id": 3,
            "img": "/images/termite.png",
            "title": "Termite Treatment",
            "body": "Termites are small, pale insects that feed on wood and other materials containing cellulose. Known as silent destroyers, they can cause extensive damage to wooden structures, furniture, and even books, clothing, and insulation. Their ability to chew through wood often goes unnoticed until significant damage is done. Forming large colonies, termites work silently, making them a challenging pest to detect and control. Professional pest management is usually necessary to effectively eliminate termite infestations and prevent further structural damage."
          },
          {
            "id": 4,
            "img": "/images/cockroach.png",
            "title": "Cockroach Treatment",
            "body": "Rats are small to medium-sized rodents known for their pointed snouts, long tails, and sharp incisor teeth. They are highly adaptable creatures found in various habitats worldwide, often living in close proximity to human dwellings. Rats are known to cause damage by gnawing on structures, wires, and even through food containers. They can transmit diseases and parasites, posing health risks to humans. Due to their rapid breeding and elusive nature, rat infestations can become severe quickly, often requiring professional pest control measures to manage and eliminate them effectively."
          },
          {
            "id": 5,
            "img": "/images/Mosquito.png",
            "title": "Mosquito Treatment",
            "body": "Mosquitoes are small flying insects known for their slender bodies, two wings, and long, thin mouthparts used for feeding on blood. They are commonly found in various habitats worldwide, particularly in warm and humid environments. While both male and female mosquitoes feed on nectar, it's the female mosquito that requires a blood meal to lay eggs. Their bites can cause itching and, in some cases, transmit diseases such as malaria, dengue fever, Zika virus, and West Nile virus. Mosquito control often involves the elimination of standing water where they breed and can also include the use of repellents and insecticides to reduce their population."
          },
        
      ];
  return (
    <div className="container mx-auto px-4 my-4" id="Service">
        <div className="grid justify-items-center">
            <p className='text-red-800 font-bold text-2xl'>WHAT WE OFFER</p>      
            <span className=''>As one of the premier pest control companies in the industry, we offer advanced protection against many common pests.</span>
        </div>

        <div>
        {ServiceData.map((src, index) => (
            <motion.div key={index} className="relative overflow-hidden rounded-lg shadow-lg gap-6 md:shadow-xl items-center justify-items-center p-4 rounded my-8 md:grid md:grid-cols-2 gap-4" initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 3 }}>
              <img
                src={src.img}
                alt={`Gallery Image ${index + 1}`}
                className="w-72 object-cover transform hover:scale-110 transition-transform duration-300"
              />
              <div className=' text-justify grid gap-y-4 justify-items-start'>
              <p className='font-bold text-red-800 text-xl text-end pt-6'>{src.title}</p>
              <span>{src.body}</span>
              </div>
            </motion.div>
          ))}
          <button type="button" className="shadow-lg px-8 w-fit h-12 rounded-lg text-slate-700">More Services</button>
        </div>
    </div>
  )
}

export default ServiceCard