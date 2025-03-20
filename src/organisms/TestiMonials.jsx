import {
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

import Heading from '../atoms/TypoGraphy/Heading';
import Paragraph from '../atoms/TypoGraphy/Paragraph';

const TestimonialComponent = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya S.',
      role: 'Data Analyst',
      avatar: 'https://i.pravatar.cc/150?img=4',
      rating: 5,
      text: 'I used to crunch sales numbers, but Data Skills Hub showed me how to turn that into a full-on Data Analyst career. The training was so practical, and within 3 months, I landed a role I love!',
    },
    {
      id: 2,
      name: 'Mark T.',
      role: 'Data Analyst',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: 'I was stuck in QA, but their hands-on courses changed everything. Now I’m a Data Analyst at a top tech firm – couldn’t have done it without them!',
    },
    {
      id: 3,
      name: 'Aisha R.',
      role: 'Business Analyst',
      avatar: 'https://i.pravatar.cc/150?img=6',
      rating: 5,
      text: 'Switching from marketing to Business Analyst felt daunting, but Data Skills Hub made it so easy. The instructors were amazing, and the placement support landed me a job I’m thrilled about!',
    },
    {
      id: 4,
      name: 'Rahul K.',
      role: 'Data Scientist',
      avatar: 'https://i.pravatar.cc/150?img=7',
      rating: 5,
      text: 'Their Data Science program was a game-changer – super practical and fun. I’m now a Data Scientist at a cool startup, living my dream!',
    },
    {
      id: 5,
      name: 'Sophie L.',
      role: 'Data Analyst',
      avatar: 'https://i.pravatar.cc/150?img=8',
      rating: 5,
      text: 'From knowing nothing about data to landing a Data Analyst job in 4 months – Data Skills Hub’s training is pure magic!',
    },
    {
      id: 6,
      name: 'Vikram M.',
      role: 'Project Manager',
      avatar: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      text: 'I never thought I’d go from sales to managing projects, but Data Skills Hub made it happen. The structured courses and mentors were top-notch. Now I’m thriving in my new role!',
    },
    {
      id: 7,
      name: 'Emily W.',
      role: 'Product Manager',
      avatar: 'https://i.pravatar.cc/150?img=10',
      rating: 5,
      text: 'Data Skills Hub gave me the confidence and skills to pivot into a Product Manager role. The real-world focus of their training was exactly what I needed!',
    },
    {
      id: 8,
      name: 'Arjun P.',
      role: 'Business Analyst',
      avatar: 'https://i.pravatar.cc/150?img=11',
      rating: 5,
      text: 'Their training was fast and effective – I went from no experience to a Business Analyst role at a Fortune 500 company in no time!',
    },
    {
      id: 9,
      name: 'Lila D.',
      role: 'QA Specialist',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'I sharpened my testing skills with their QA course and landed a dream job. Data Skills Hub knows how to get results!',
    },
    {
      id: 10,
      name: 'James H.',
      role: 'Full Stack Developer',
      avatar: 'https://i.pravatar.cc/150?img=13',
      rating: 5,
      text: 'From coding basics to advanced skills, their program was spot-on. The placement team helped me score a Full Stack Developer role – so grateful!',
    },
    {
      id: 11,
      name: 'Neha G.',
      role: 'Software Engineer',
      avatar: 'https://i.pravatar.cc/150?img=14',
      rating: 5,
      text: 'Data Skills Hub turned my curiosity into a Software Engineer career. The practical approach and support made all the difference – I’m loving my job!',
    },
    {
      id: 12,
      name: 'Omar F.',
      role: 'Data Scientist',
      avatar: 'https://i.pravatar.cc/150?img=15',
      rating: 5,
      text: 'I was a QA tester dreaming of Data Science, and Data Skills Hub made it real. Their expert guidance and placement help got me a gig at a tech giant. Can’t thank them enough!',
    },
    {
      id: 13,
      name: 'Sara B.',
      role: 'Business Analyst',
      avatar: 'https://i.pravatar.cc/150?img=16',
      rating: 5,
      text: 'Their course was engaging and fast-paced – exactly what I needed. Now I’m a Business Analyst and enjoying every day!',
    },
    {
      id: 14,
      name: 'Kunal J.',
      role: 'Product Manager',
      avatar: 'https://i.pravatar.cc/150?img=17',
      rating: 5,
      text: 'Switching from marketing to Product Manager seemed tough, but Data Skills Hub made it smooth and exciting. The training was so relevant, and I landed my dream job in weeks!',
    },
    {
      id: 15,
      name: 'Tanya R.',
      role: 'Data Analyst',
      avatar: 'https://i.pravatar.cc/150?img=18',
      rating: 5,
      text: 'The training felt so real-world, and the placement support was incredible. I’m now a Data Analyst at an awesome company – thank you, Data Skills Hub!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth < 768; // Simple mobile detection (can be improved with useMediaQuery)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        isMobile
          ? (prevIndex + 1) % testimonials.length
          : (prevIndex + 1) % Math.ceil(testimonials.length / 2)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length, isMobile]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      isMobile
        ? (prevIndex + 1) % testimonials.length
        : (prevIndex + 1) % Math.ceil(testimonials.length / 2)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      isMobile
        ? (prevIndex - 1 + testimonials.length) % testimonials.length
        : (prevIndex - 1 + Math.ceil(testimonials.length / 2)) %
          Math.ceil(testimonials.length / 2)
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-4 sm:w-5 h-4 sm:h-5 ${
          index < rating ? 'text-yellow-400' : 'text-zinc-300'
        }`}
      />
    ));
  };

  const getCurrentTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    } else {
      const startIndex = currentIndex * 2;
      return [
        testimonials[startIndex % testimonials.length],
        testimonials[(startIndex + 1) % testimonials.length],
      ].filter(Boolean); // Filter out undefined in case of odd number
    }
  };

  const currentTestimonials = getCurrentTestimonials();

  return (
    <section className='bg-gradient-to-b from-white to-zinc-50 py-12 sm:py-16'>
      <div className='max-w-[95%] sm:max-w-7xl mx-auto px-4 sm:px-6 text-center'>
        {/* Header */}
        <Heading title='Success Stories' />
        <Paragraph
          className='mb-6 sm:mb-8'
          data='Hear from professionals who transformed their careers with us.'
        />

        {/* Testimonial Carousel */}
        <div className='relative'>
          <div className='w-full overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
              {currentTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className='bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-zinc-200 transition-all duration-500 hover:shadow-xl hover:scale-105'
                  role='article'
                  aria-label={`Testimonial by ${testimonial.name}`}
                >
                  <FaQuoteLeft className='text-zinc-400 w-6 sm:w-8 h-6 sm:h-8 mb-4 mx-auto' />
                  <p className='text-base sm:text-lg text-zinc-700 mb-6 leading-relaxed italic'>
                    {testimonial.text}
                  </p>
                  <FaQuoteRight className='text-zinc-400 w-6 sm:w-8 h-6 sm:h-8 mb-6 mx-auto' />

                  <div className='flex items-center justify-center gap-4'>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className='w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover border-2 border-zinc-200'
                    />
                    <div>
                      <h4 className='text-lg sm:text-xl font-semibold text-zinc-900'>
                        {testimonial.name}
                      </h4>
                      <p className='text-xs sm:text-sm text-zinc-600'>
                        {testimonial.role}
                      </p>
                      <div className='flex justify-center mt-2'>
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className='absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-400'
            aria-label='Previous testimonials'
          >
            <FaArrowLeft className='w-5 sm:w-6 h-5 sm:h-6 text-zinc-800' />
          </button>
          <button
            onClick={handleNext}
            className='absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-400'
            aria-label='Next testimonials'
          >
            <FaArrowRight className='w-5 sm:w-6 h-5 sm:h-6 text-zinc-800' />
          </button>
        </div>

        {/* Indicators */}
        <div className='flex justify-center mt-6 sm:mt-8 gap-2'>
          {Array.from({
            length: isMobile
              ? testimonials.length
              : Math.ceil(testimonials.length / 2),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full ${
                index === currentIndex ? 'bg-zinc-800' : 'bg-zinc-300'
              } transition-colors duration-300`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
