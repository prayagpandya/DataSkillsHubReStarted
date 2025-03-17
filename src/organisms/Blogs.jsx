import React from 'react';
import { Link } from 'react-router-dom';

import { assets } from '../utils/assets';

const PopularBlogsComponent = () => {
  // Sample blog data (replace with your own data or fetch from an API)
  const blogs = [
    {
      id: 1,
      date: '04-06-2024',
      title: 'Choosing the Right Online Course: A Step-by-Step Guide',
      description:
        'Here is a step-by-step guide to help you navigate through the plethora of options and choose the online course that suits your needs.',
      image: assets.b1, // Placeholder image
    },
    {
      id: 2,
      date: '05-06-2024',
      title: 'Maximizing Productivity While Studying Online',
      description:
        'Discover effective strategies to boost your productivity while studying online and achieve your learning goals efficiently.',
      image: assets.b2,
    },
    {
      id: 3,
      date: '06-06-2024',
      title: 'The Importance of Lifelong Learning',
      description:
        'Understand the significance of lifelong learning and how it can benefit your personal and professional life.',
      image: assets.b3,
    },
  ];

  return (
    <section className='bg-gradient-to-b from-white to-zinc-50 py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='flex justify-between items-center mb-10'>
          <h2 className='text-4xl font-extrabold text-zinc-900 drop-shadow-md'>
            Popular Blogs
          </h2>
          <Link
            to='/blogs'
            className='inline-block px-6 py-3 bg-gradient-to-r from-zinc-100 to-zinc-200 text-zinc-800 font-semibold rounded-lg shadow-md hover:from-zinc-800 hover:to-zinc-900 hover:text-white border border-zinc-300 hover:border-zinc-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-400'
            aria-label='View more blogs'
          >
            View More
          </Link>
        </div>

        {/* Blog Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className='bg-white rounded-xl overflow-hidden shadow-md border border-zinc-200 transform transition-all duration-300 hover:shadow-lg hover:scale-105'
              role='article'
              aria-label={`Blog: ${blog.title}`}
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                {/* Date */}
                <p className='text-sm text-zinc-600 mb-2'>{blog.date}</p>
                {/* Title */}
                <h3 className='text-xl font-semibold text-zinc-900 mb-3 leading-tight'>
                  {blog.title}
                </h3>
                {/* Description */}
                <p className='text-base text-zinc-700 leading-relaxed line-clamp-3'>
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBlogsComponent;
