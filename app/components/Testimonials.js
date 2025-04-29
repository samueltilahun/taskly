import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO of Company X',
      content: 'This service has transformed the way we do business. The team is professional, and the results speak for themselves. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Director at Brand Y',
      content: 'I am incredibly impressed with the customer support and the attention to detail. This platform is a game changer!',
      image: 'https://randomuser.me/api/portraits/women/20.jpg',
    },
    {
      name: 'Michael Johnson',
      role: 'Founder of Startup Z',
      content: 'Their innovative solutions have helped us scale rapidly. I can’t thank them enough for their dedication and expertise!',
      image: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-xs p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={testimonial.image}
                  alt={`${testimonial.name}'s photo`}
                />
              </div>
              <p className="text-lg font-semibold text-gray-700 mb-2">{testimonial.name}</p>
              <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
