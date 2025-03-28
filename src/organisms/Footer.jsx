/* eslint-disable no-irregular-whitespace */
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import { User, Briefcase, BookOpen, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <footer className='bg-gradient-to-t from-zinc-900 to-zinc-800 text-zinc-100 py-12'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Main Footer Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-10'>
          {/* Branding Section */}
          <div className='flex flex-col items-start space-y-6'>
            <h3 className='text-3xl font-extrabold text-zinc-100 mb-2 drop-shadow-md'>
              Data Skills Hub
            </h3>
            <p className='text-zinc-400 text-base leading-relaxed'>
              Empowering your career with personalized training and job
              placement support.
            </p>
            <div className='flex gap-4'>
              <a
<<<<<<< HEAD
                href='https://www.facebook.com/profile.php?id=61558433937480'
=======
                href='https://facebook.com'
>>>>>>> 5fc7e2743e67c20921242aff1ad42a9715a1db31
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all duration-300'
                aria-label='Visit our Facebook page'
              >
                <FaFacebook className='w-6 h-6' />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all duration-300'
                aria-label='Visit our Twitter page'
              >
                <FaTwitter className='w-6 h-6' />
              </a>
              <a
<<<<<<< HEAD
                href='https://www.instagram.com/dataskillshub/'
=======
                href='https://instagram.com'
>>>>>>> 5fc7e2743e67c20921242aff1ad42a9715a1db31
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all duration-300'
                aria-label='Visit our Instagram page'
              >
                <FaInstagram className='w-6 h-6' />
              </a>
              <a
<<<<<<< HEAD
                href='https://www.linkedin.com/company/data-skills-hub/'
=======
                href='https://linkedin.com'
>>>>>>> 5fc7e2743e67c20921242aff1ad42a9715a1db31
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all duration-300'
                aria-label='Visit our LinkedIn page'
              >
                <FaLinkedin className='w-6 h-6' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-6'>
            <h4 className='text-xl font-semibold text-zinc-100'>Quick Links</h4>
            <ul className='space-y-4 grid grid-cols-2'>
              <li className='flex items-center gap-3'>
                <User className='text-zinc-400 w-5 h-5' />
                <Link
                  to='/about'
                  className='text-zinc-300 text-base hover:text-zinc-100 hover:underline transition-all duration-300'
                  aria-label='Learn more about us'
                >
                  About Us
                </Link>
              </li>
              <li className='flex items-center gap-3'>
                <Briefcase className='text-zinc-400 w-5 h-5' />
                <Link
                  to='/service'
                  className='text-zinc-300 text-base hover:text-zinc-100 hover:underline transition-all duration-300'
                  aria-label='Explore our services'
                >
                  Services
                </Link>
              </li>
              <li className='flex items-center gap-3'>
                <BookOpen className='text-zinc-400 w-5 h-5' />
                <Link
                  to='/jobs'
                  className='text-zinc-300 text-base hover:text-zinc-100 hover:underline transition-all duration-300'
                  aria-label='Read our blogs'
                >
                  Jobs
                </Link>
              </li>
              <li className='flex items-center gap-3'>
                <BookOpen className='text-zinc-400 w-5 h-5' />
                <Link
                  to='/courses'
                  className='text-zinc-300 text-base hover:text-zinc-100 hover:underline transition-all duration-300'
                  aria-label='Read our blogs'
                >
<<<<<<< HEAD
                  Courses
                </Link>
              </li>
              {/* <li className='flex items-center gap-3'>
                <Mail className='text-zinc-400 w-5 h-5' />
                <Link
                  to='/contacts'
=======
                  Course
                </Link>
              </li>
              <li className='flex items-center gap-3'>
                <Mail className='text-zinc-400 w-5 h-5' />
                <Link
                  to='/contact'
>>>>>>> 5fc7e2743e67c20921242aff1ad42a9715a1db31
                  className='text-zinc-300 text-base hover:text-zinc-100 hover:underline transition-all duration-300'
                  aria-label='Contact us'
                >
                  Contact
                </Link>
<<<<<<< HEAD
              </li> */}
=======
              </li>
>>>>>>> 5fc7e2743e67c20921242aff1ad42a9715a1db31
            </ul>
          </div>

          <div className='space-y-6'>
            <h4 className='text-xl font-semibold text-zinc-100'>
              Get in Touch
            </h4>
            <ul className='space-y-4'>
              <li className='flex items-center gap-3'>
                <FaEnvelope className='text-zinc-400 w-5 h-5' />
                <a
                  href='mailto:support@dataskillshub.com'
                  className='text-zinc-300 text-base hover:text-zinc-100 hover:underline transition-all duration-300'
                  aria-label='Email us at support@dataskillshub.com'
                >
                  support@dataskillshub.com
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <span className='text-zinc-400 text-base flex gap-4'>
                  <Phone /> +1 (551) 226 6170
                </span>
              </li>
              <li className='space-y-4 gap-3'>
                <span className='text-zinc-400 text-base flex gap-4'>
                  <MapPin />
                  221 W 10th Street 4th Floors, Wilmington, DE 19801, United
                  States
                </span>
                <span className='text-zinc-400 text-base flex gap-4'>
                  <MapPin /> BHIVE, Mahalakshmi Chambers, 29, MG Rd,
                  Bengaluru 560001, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-zinc-700 pt-6 text-center'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-2'>
            <p className='text-zinc-400 text-sm'>
              © {new Date().getFullYear()} Data Skills Hub. All rights reserved.
            </p>
            <div className='flex gap-4'>
              <Link
                to='/privacy-policy'
                className='text-zinc-400 text-sm hover:text-zinc-100 hover:underline transition-all duration-300'
                aria-label='View our Privacy Policy'
              >
                Privacy Policy
              </Link>
              <Link
                to='/terms-of-service'
                className='text-zinc-400 text-sm hover:text-zinc-100 hover:underline transition-all duration-300'
                aria-label='View our Terms of Service'
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
