// ServiceSection Component

import ServiceSection from '../molicules/ServiceSection';
import { assets } from '../utils/assets';

// ServicesSections Component
const ServicesSections = () => {
  const services = [
    {
      title: 'Upskill Course',
      description:
        'Elevate your tech career with Data Skills Hub’s cutting-edge upskilling courses, tailored to today’s most in-demand fields: Project & Product Management, Data Analyst, Business Analyst, Full Stack Development, Digital Marketing, and Data Science. Whether you’re mastering Agile leadership, uncovering insights with SQL and Tableau, bridging business and tech as a Business Analyst, coding end-to-end solutions, driving online success through digital strategies, or decoding complex data with Python and machine learning, our hands-on programs deliver practical skills and industry know-how. Designed for beginners and professionals alike, these courses empower you to stay ahead in the fast-paced IT world and unlock limitless career opportunities.',
      videoUrl: assets.upskillService,
    },
    {
      title: 'Job Exploration',
      description:
        'Embark on your next career adventure with Data Skills Hub’s Job Exploration service, designed to connect you with exciting opportunities across the US and Canada. We take the guesswork out of job hunting by matching your skills—whether in IT, data analysis, development, or digital marketing—with top-tier employers in North America’s thriving tech markets. With personalized guidance, access to exclusive job listings, and insights into industry trends, we empower you to explore, apply, and secure roles that align with your ambitions, opening doors to a world of professional growth and success.',
      videoUrl:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Resume Building',
      description:
        'Stand out in the competitive tech job market with Data Skills Hub’s Resume Building service, crafted to showcase your skills and experience with impact. Our expert team works with you to create a polished, professional resume tailored to your career goals—whether you’re a data analyst, developer, or project manager. We highlight your strengths, optimize keywords for applicant tracking systems, and ensure your accomplishments shine, giving you the edge to impress employers in the US, Canada, and beyond. Transform your resume into a powerful tool that opens doors to your dream IT career!',
      videoUrl:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Cover Letter Writing',
      description:
        'Make a lasting first impression with Data Skills Hub’s Cover Letter Writing service, designed to complement your resume and win over employers. Our experts craft personalized, compelling cover letters that highlight your unique skills, passion, and fit for roles in IT, data science, digital marketing, and more. Tailored to specific job opportunities in the US and Canada, we ensure your story stands out, showcasing why you’re the perfect candidate. Let us help you turn a simple letter into a powerful pitch that opens the door to your next big career move!',
      videoUrl:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Resume Marketing',
      description:
        'Get your resume in front of top employers with Data Skills Hub’s Resume Marketing service, your fast track to landing interviews with leading companies in the US and Canada. We don’t just polish your resume—we strategically promote it to our network of industry partners and recruiters in high-demand tech fields like data analysis, full stack development, and digital marketing. With personalized marketing strategies and insider access to job opportunities, we amplify your visibility, ensuring your skills catch the eye of decision-makers and propel you toward your dream IT career.',
      videoUrl:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Software Development',
      description:
        'Bring your ideas to life with Data Skills Hub’s Software Development service, where innovation meets technical expertise. Our skilled developers deliver custom solutions—from robust web applications to scalable mobile platforms—tailored to your business needs. Whether you’re a startup looking to launch a product or an enterprise seeking to optimize operations, we leverage cutting-edge technologies like Python, JavaScript, and cloud platforms to create reliable, user-friendly software. Partner with us to transform your vision into reality and stay ahead in the ever-evolving tech landscape!',
      videoUrl:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  return (
    <div className='py-12 bg-gray-50 font-open-sans'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-zinc-800 mb-12'>
          Our Services
        </h2>
        <div className='space-y-12'>
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
