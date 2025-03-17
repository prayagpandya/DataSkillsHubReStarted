import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How does the Data Skills Hub process work?',
      answer: (
        <>
          <ul className='list-disc list-inside text-sm text-zinc-600'>
            <li>
              <strong>Initial Consultation and Profile Evaluation:</strong> Data
              Skills Hub begins by thoroughly understanding your career
              aspirations and evaluating your current skills and qualifications.
              This helps them determine which areas need enhancement.
            </li>
            <li>
              <strong>Customized Resume Building:</strong> After evaluating your
              profile, they help optimize your resume to align with industry
              standards, ensuring it highlights your strengths and matches the
              roles you’re applying for.
            </li>
            <li>
              <strong>Technical Skill Training:</strong> Data Skills Hub
              provides targeted training programs based on the job requirements.
              This includes hands-on practice, certifications, and mock
              interviews with industry experts to help you build confidence and
              technical competency.
            </li>
            <li>
              <strong>Profile Marketing:</strong> Once your resume is ready,
              Data Skills Hub markets your profile to companies within their
              network. They use their connections to place you in front of
              relevant employers, which boosts your chances of being considered
              for interviews.
            </li>
            <li>
              <strong>Interview Scheduling and Support:</strong> Data Skills Hub
              assists in scheduling interviews, providing support throughout the
              interview process. This includes offering tips, conducting mock
              interview sessions, and helping you prepare for various interview
              scenarios.
            </li>
            <li>
              <strong>Continuous Monitoring and Feedback:</strong> Throughout
              your job search, Data Skills Hub offers continuous support,
              monitoring your progress, and providing regular feedback. This
              includes adjusting your approach based on interview outcomes and
              guiding you toward the best-fit opportunities.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: 'Are you a consultancy?',
      answer:
        'No, we are not a consultancy. Unlike other consultancies, we not only provide contract jobs (C2C), but we also offer W-2 and full-time positions, which is unique in the market. We help candidates secure full-time jobs with direct clients. Our approach increases your job placement chances by 70%, allowing us to place candidates quickly—most within 30-45 days.',
    },
    {
      question: 'On whose payroll am I going to work?',
      answer:
        'To maximize your job opportunities, we open up 100% of the job market with C2C, W-2, and full-time options. If you secure a C2C job, you will be on Data Skills Hub’s payroll. For W-2 or full-time jobs, you could be on our end-client’s payroll or an implementation partner/vendor’s payroll.',
    },
    {
      question: 'Will the training be one-on-one?',
      answer: 'Yes, we offer one-on-one training sessions.',
    },
    {
      question: 'Are you going to add any fake experience in my resume?',
      answer:
        'No, we do not add any fake experience to your resume. If we include anything in your resume that you don’t know, we will ensure you are trained on that topic before facing your interviewer.',
    },
    {
      question: 'How can you guarantee a job within 60 days?',
      answer:
        'We guarantee a job within 60 days due to our decade of experience and proprietary processes that work in sync. By offering C2C, W-2, and full-time opportunities—boosting your chances by 70%—most candidates are placed within 30-45 days, allowing us to confidently offer this guarantee.',
    },
    {
      question: 'Would you be providing interview support?',
      answer:
        'We believe in preparing you well in advance for interviews. Some payment plans also include dedicated interview support for our candidates.',
    },
    {
      question: 'Will you be helping me in getting my sponsorship?',
      answer:
        'To provide jobs faster, we prioritize full-time/W-2 offers. The employer on whose W-2 you work will handle your visa sponsorship. If you’re on our C2C payroll, we will take care of your visa sponsorship.',
    },
    {
      question: 'What if I lose the job after a few months?',
      answer:
        'We have an agreement with you for one year. If you lose your job within that period, we will assist you and help you secure another job.',
    },
    {
      question: 'Do I need to pay anything upfront?',
      answer:
        'Yes, we charge an upfront amount to invest quality resources in your profile and provide industry-leading services. This enables us to offer a job guarantee, and you can hold us accountable if we fail to deliver.',
    },
    {
      question: 'How can we get started?',
      answer:
        'You can talk to one of our career advisors today, choose the plan that suits your needs the most, and we will get you started right away after that.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title and View All Link */}
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-3xl font-bold text-zinc-900 leading-tight'>
            Frequently Asked Questions
          </h2>
          {/* <Link
            to="/faqs"
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 flex items-center gap-1"
          >
            View all
            <ChevronRight className="w-5 h-5" />
          </Link> */}
        </div>

        {/* FAQ List */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='border-b border-zinc-200 pb-4'>
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full flex justify-between items-center text-left focus:outline-none'
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className={`text-base ${
                    openIndex === index
                      ? 'text-zinc-900 font-semibold'
                      : 'text-zinc-600'
                  } font-medium`}
                >
                  {faq.question}
                </span>
                <ChevronRight
                  className={`w-5 h-5 text-zinc-600 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${index}`}
                className={`mt-2 text-sm text-zinc-600 transition-all duration-200 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
