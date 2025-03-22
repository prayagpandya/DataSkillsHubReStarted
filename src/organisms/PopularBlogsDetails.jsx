import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { assets } from '../utils/assets';

const PopularBlogDetailPage = () => {
  const { id } = useParams();

  // Blog data (could be fetched from an API in a real app)
  const blogs = [
    {
      id: '1',
      date: '04-06-2024',
      title: 'Choosing the Right Online Course: A Step-by-Step Guide',
      image: assets.b1,
      content: (
        <>
          <p className='text-lg text-zinc-700 leading-relaxed mb-6'>
            The abundance of online courses available today can be both a
            blessing and a challenge. While the variety caters to diverse
            interests and learning needs, selecting the right online course
            demands careful consideration. Here is a step-by-step guide to help
            you navigate through the plethora of options and choose the online
            course that aligns with your goals and preferences.
          </p>
          <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
            Identify Your Goals
          </h3>
          <p className='text-base text-zinc-700 leading-relaxed mb-6'>
            Start by defining your learning objectives and goals. Are you
            seeking professional development, a career change, or simply
            exploring a personal interest? Clearly understanding your purpose
            will guide your course selection.
          </p>
          <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
            Research Course Providers
          </h3>
          <p className='text-base text-zinc-700 leading-relaxed mb-6'>
            Look for reputable course providers and platforms. Check their
            accreditation, reviews, and the qualifications of the instructors.
          </p>
          <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
            Consider Course Format
          </h3>
          <p className='text-base text-zinc-700 leading-relaxed mb-6'>
            Decide whether you prefer self-paced courses, live classes, or a
            hybrid format. Each has its own advantages and disadvantages.
          </p>
          <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
            Evaluate Course Content
          </h3>
          <p className='text-base text-zinc-700 leading-relaxed mb-6'>
            Review the course syllabus and materials to ensure they cover the
            topics you want to learn.
          </p>
          <p className='text-lg text-zinc-700 leading-relaxed'>
            By following this step-by-step guide, you can streamline the process
            of choosing the right online course, ensuring that your learning
            journey is both enjoyable and fruitful. Whether you're looking to
            acquire new skills, advance your career, or explore a passion, the
            right online course can be a transformative experience.
          </p>
        </>
      ),
    },
    {
      id: '2',
      date: '05-06-2024',
      title: 'Maximizing Productivity While Studying Online',
      image: assets.b2,
      content: (
        <>
          <p className='text-lg text-zinc-700 leading-relaxed mb-6'>
            Studying online offers flexibility but also comes with challenges in
            maintaining productivity. Here are some effective strategies to help
            you stay focused and make the most out of your online study
            sessions.
          </p>
          <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
            Set Clear Goals
          </h3>
          <p className='text-base text-zinc-700 leading-relaxed mb-6'>
            Define what you want to achieve in each study session. Clear goals
            keep you focused and motivated.
          </p>
          <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
            Create a Study Schedule
          </h3>
          <p className='text-base text-zinc-700 leading-relaxed mb-6'>
            Allocate specific times for studying and stick to your schedule as
            closely as possible.
          </p>
          <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
            Eliminate Distractions
          </h3>
          <p className='text-base text-zinc-700 leading-relaxed mb-6'>
            Identify and remove anything that distracts you from your study
            environment. This might include turning off notifications and
            finding a quiet place to work.
          </p>
          <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
            Take Regular Breaks
          </h3>
          <p className='text-base text-zinc-700 leading-relaxed mb-6'>
            Short breaks can help you maintain focus and avoid burnout. Use
            techniques like the Pomodoro method to manage your time effectively.
          </p>
          <p className='text-lg text-zinc-700 leading-relaxed'>
            By implementing these productivity strategies, you can enhance your
            focus and efficiency while studying online, leading to a more
            successful and rewarding learning experience.
          </p>
        </>
      ),
    },
    {
      id: '3',
      date: '06-06-2024',
      title: 'The Importance of Lifelong Learning',
      image: assets.b3,
      content: (
        <>
          <p className='text-lg text-zinc-700 leading-relaxed mb-6'>
            Lifelong learning is essential for personal growth and professional
            development. Embracing continuous learning can help you stay
            competitive in your career and lead a more fulfilling life.
          </p>
          <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
            Stay Relevant
          </h3>
          <p className='text-base text-zinc-700 leading-relaxed mb-6'>
            In a rapidly changing world, continuous learning helps you stay
            up-to-date with new knowledge and skills.
          </p>
          <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
            Enhance Employability
          </h3>
          <p className='text-base text-zinc-700 leading-relaxed mb-6'>
            Lifelong learning improves your adaptability and makes you more
            attractive to potential employers.
          </p>
          <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
            Foster Personal Growth
          </h3>
          <p className='text-base text-zinc-700 leading-relaxed mb-6'>
            Engaging in lifelong learning can lead to personal enrichment,
            increased confidence, and a broader perspective.
          </p>
          <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
            Encourage Innovation
          </h3>
          <p className='text-base text-zinc-700 leading-relaxed mb-6'>
            Continuous learning stimulates creativity and innovation, allowing
            you to bring fresh ideas and solutions to various aspects of your
            life.
          </p>
          <p className='text-lg text-zinc-700 leading-relaxed'>
            Embracing lifelong learning can significantly enhance your personal
            and professional life. By continually expanding your knowledge and
            skills, you can achieve greater success and satisfaction in all your
            endeavors.
          </p>
        </>
      ),
    },
    // Additional Blog 1
    // {
    //   id: '4',
    //   date: '07-06-2024',
    //   title: 'How AI is Revolutionizing Online Education',
    //   image: assets.b4, // Assuming you have more assets
    //   content: (
    //     <>
    //       <p className='text-lg text-zinc-700 leading-relaxed mb-6'>
    //         Artificial Intelligence (AI) is transforming online education by
    //         personalizing learning experiences and improving accessibility. This
    //         blog explores how AI is reshaping the future of education.
    //       </p>
    //       <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
    //         Personalized Learning Paths
    //       </h3>
    //       <p className='text-base text-zinc-700 leading-relaxed mb-6'>
    //         AI analyzes your learning style and progress to tailor course
    //         content, ensuring you learn at your own pace.
    //       </p>
    //       <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
    //         Automated Grading
    //       </h3>
    //       <p className='text-base text-zinc-700 leading-relaxed mb-6'>
    //         AI-powered tools can grade assignments and quizzes instantly,
    //         providing immediate feedback to students.
    //       </p>
    //       <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
    //         Enhanced Accessibility
    //       </h3>
    //       <p className='text-base text-zinc-700 leading-relaxed mb-6'>
    //         AI-driven translations and voice recognition make courses accessible
    //         to a global audience, breaking language barriers.
    //       </p>
    //       <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
    //         Virtual Tutors
    //       </h3>
    //       <p className='text-base text-zinc-700 leading-relaxed mb-6'>
    //         AI chatbots act as 24/7 tutors, answering questions and guiding
    //         learners through complex topics.
    //       </p>
    //       <p className='text-lg text-zinc-700 leading-relaxed'>
    //         As AI continues to evolve, its integration into online education
    //         promises a more efficient, inclusive, and engaging learning
    //         environment for students worldwide.
    //       </p>
    //     </>
    //   ),
    // },
    // // Additional Blog 2
    // {
    //   id: '5',
    //   date: '08-06-2024',
    //   title: 'Top Skills to Learn Online in 2025',
    //   image: assets.b5, // Assuming you have more assets
    //   content: (
    //     <>
    //       <p className='text-lg text-zinc-700 leading-relaxed mb-6'>
    //         As technology advances, certain skills are becoming essential for
    //         career success. Here are the top skills to learn online in 2025 to
    //         stay ahead in the job market.
    //       </p>
    //       <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
    //         Data Analysis
    //       </h3>
    //       <p className='text-base text-zinc-700 leading-relaxed mb-6'>
    //         Master tools like Python and Tableau to interpret data and drive
    //         business decisions.
    //       </p>
    //       <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
    //         Artificial Intelligence
    //       </h3>
    //       <p className='text-base text-zinc-700 leading-relaxed mb-6'>
    //         Learn AI fundamentals and machine learning to tap into this growing
    //         field.
    //       </p>
    //       <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
    //         Digital Marketing
    //       </h3>
    //       <p className='text-base text-zinc-700 leading-relaxed mb-6'>
    //         Understand SEO, social media strategies, and analytics to boost
    //         online presence.
    //       </p>
    //       <h3 className='text-2xl font-semibold text-zinc-900 mb-4'>
    //         Cybersecurity
    //       </h3>
    //       <p className='text-base text-zinc-700 leading-relaxed mb-6'>
    //         Protect digital assets with skills in ethical hacking and network
    //         security.
    //       </p>
    //       <p className='text-lg text-zinc-700 leading-relaxed'>
    //         Investing in these skills in 2025 can position you as a valuable
    //         asset in any industry, opening doors to new opportunities and career
    //         growth.
    //       </p>
    //     </>
    //   ),
    // },
  ];

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <section className='bg-zinc-50 py-16'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h1 className='text-3xl font-bold text-zinc-900 mb-4'>
            Blog Not Found
          </h1>
          <p className='text-zinc-700 mb-6'>
            Sorry, we couldn’t find that blog post.
          </p>
          <Link
            to='/blogs'
            className='inline-block px-6 py-3 bg-zinc-800 text-white font-semibold rounded-lg hover:bg-zinc-900 transition-all duration-300'
          >
            Back to Blogs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className='bg-gradient-to-b from-white to-zinc-50 py-16'>
      <div className='max-w-4xl mx-auto px-4'>
        {/* Breadcrumb */}
        <nav className='mb-6'>
          <Link
            to='/blogs'
            className='text-zinc-600 hover:text-zinc-900 transition'
          >
            Blogs
          </Link>
          <span className='mx-2 text-zinc-500'>/</span>
          <span className='text-zinc-900'>{blog.title}</span>
        </nav>

        {/* Blog Header */}
        <img
          src={blog.image}
          alt={blog.title}
          className='w-full h-72 object-cover rounded-lg shadow-md mb-8'
        />
        <h1 className='text-4xl font-extrabold text-zinc-900 mb-4'>
          {blog.title}
        </h1>
        <p className='text-sm text-zinc-600 mb-8'>{blog.date}</p>

        {/* Blog Content */}
        <div className='prose prose-zinc max-w-none'>{blog.content}</div>

        {/* Back Button */}
        <div className='mt-12'>
          <Link
            to='/'
            className='inline-block px-6 py-3 bg-gradient-to-r from-zinc-100 to-zinc-200 text-zinc-800 font-semibold rounded-lg shadow-md hover:from-zinc-800 hover:to-zinc-900 hover:text-white transition-all duration-300'
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularBlogDetailPage;
