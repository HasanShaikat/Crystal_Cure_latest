import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What kinds of pests do you handle?',
      answer:
        'Crystal Cure Pest Control deals with a wide range of pests, including but not limited to ants, cockroaches, termites, rodents, bed bugs, mosquitoes, and other common household pests.',
    },
    {
      question: 'Are your methods safe for children and pets?',
      answer:
        'Yes, our methods are safe for children and pets. We utilize eco-friendly and approved solutions to ensure the safety of your family and pets.',
    },
    {
      question: 'How often do I need pest control services?',
      answer:
        'The frequency of pest control services depends on various factors like the type of pest problem, the severity of infestation, and the preventive measures in place. We recommend regular inspections and treatments to maintain a pest-free environment.',
    },
    {
        question: 'Do you offer a guarantee for your services?',
        answer:
          'Yes, we stand by the quality of our services. We offer guarantees and follow-up inspections to ensure the effectiveness of our pest control solutions.',
      },
      {
        question: 'Are your treatments environmentally friendly?',
        answer:
          'Absolutely. We use environmentally friendly methods and products to address pest problems. Our commitment is not only to eliminate pests but also to minimize the impact on the environment.',
      },
  ];

  return (
    <section id="Faq">
    <div className="max-w-4xl mx-auto my-12 px-4">
      
      <h2 className="text-3xl font-semibold text-center mb-6 text-red-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg">
            <div
              className="cursor-pointer p-4 border-b flex justify-between items-center"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span className="text-lg">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="p-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Faq;