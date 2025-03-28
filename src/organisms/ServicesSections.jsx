// ServiceSection Component

import ServiceSection from '../molicules/ServiceSection';
import { assets } from '../utils/assets';

// ServicesSections Component
const ServicesSections = () => {
  const services = [
    {
      title: 'Upskill Course',
      description:
        'Boost your tech career with Data Skills Hub’s top-tier upskilling courses, designed for in-demand skills like Project Management, Data Analyst training, Business Analyst certification, Full Stack Development, Digital Marketing, and Data Science. Master Agile methodologies, SQL, Tableau, Python, and machine learning through hands-on programs tailored for beginners and seasoned professionals. Our cutting-edge IT training empowers you to excel in the fast-evolving tech industry, unlocking high-paying career opportunities across the US and Canada with practical, job-ready expertise.',
      videoUrl: assets.upskillService,
    },
    {
      title: 'Job Exploration',
      description:
        'Launch your tech career with Data Skills Hub’s Job Exploration service, connecting you to top tech jobs in the US and Canada. Specializing in IT job opportunities, data analyst roles, software development positions, and digital marketing careers, we match your skills with leading North American employers. Enjoy personalized career guidance, exclusive job listings, and industry insights to secure high-demand tech roles. Explore rewarding job opportunities and achieve professional success with our expert job placement support.',
      videoUrl: assets.jobSearchService,
    },
    {
      title: 'Invoicing & Billing Management Software',
      description:
        'Streamline your business with Data Skills Hub’s Invoicing & Billing Management Software, a powerful tool for small businesses and freelancers in the US and Canada. Optimize financial workflows with our user-friendly invoicing software, designed for efficient billing, payment tracking, and expense management. Boost productivity and accuracy with automated invoicing solutions, tailored to meet the needs of tech startups, consultants, and service providers. Discover the best billing software to elevate your business operations today.',
      videoUrl: assets.billingService,
    },
    {
      title: 'Application Development',
      description:
        'Transform your ideas into reality with Data Skills Hub’s Application Development services, offering custom mobile app development and software solutions across the US and Canada. Our expert developers specialize in iOS app development, Android app creation, and cross-platform apps using cutting-edge tools like Swift, Kotlin, and React Native. Whether you’re a startup or enterprise, we deliver scalable, user-friendly applications optimized for performance. Hire top app developers to build innovative solutions and grow your business.',
      videoUrl: assets.androidService,
    },
    {
      title: 'Web Development',
      description:
        'Elevate your online presence with Data Skills Hub’s Web Development services, providing custom website design and development for businesses in the US and Canada. Our skilled web developers craft responsive, SEO-friendly websites using modern technologies like JavaScript, React, and WordPress. From e-commerce platforms to corporate sites, we deliver fast, secure, and visually stunning web solutions. Partner with our expert web development team to boost your brand and drive traffic with professional website creation.',
      videoUrl: assets.webService,
    },
    {
      title: 'Software Development',
      description:
        'Power your business with Data Skills Hub’s Software Development services, offering bespoke software solutions in the US and Canada. Our experienced developers build scalable web applications, enterprise software, and mobile platforms using Python, JavaScript, and cloud technologies. Ideal for startups and established companies, our custom software development services enhance efficiency and innovation. Collaborate with our software development experts to create reliable, cutting-edge solutions tailored to your unique needs.',
      videoUrl: assets.softwareService,
    },
  ];

  return (
    <div className='py-12 bg-gray-50 font-open-sans'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-zinc-800 mb-12'>
          Our Services
        </h2>
        <div>
          {services.map((service, index) => (
            <ServiceSection
              key={index}
              sectionData={service}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSections;
