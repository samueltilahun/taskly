'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
  }, []);

  return (
    <section
      className="relative w-full px-8 md:px-16 pt-24 pb-16 bg-cover bg-center h-180 dark:bg-gray-800"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="flex flex-col gap-6 max-w-xl z-10">
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white animate__animated animate__fadeIn animate__delay-1s"
            style={{ animationDuration: '1s' }}
          >
            Manage Tasks, <br />
            <span className="text-primary dark:text-teal-400">Boost Productivity</span>
          </h1>
          <p
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl animate__animated animate__fadeIn animate__delay-1.5s"
            style={{ animationDuration: '1s' }}
          >
            Organize your work, collaborate seamlessly, and get things done with Taskly.
          </p>
          <div className="mt-6">
            <Link
              href="/signup"
              className="btn"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden w-110 md:block mt-10 md:mt-0 z-10">
          <img
            src="/Images/hero-image6.svg"
            alt="Task Management Illustration"
            className={`w-full max-w-md ${animate ? 'animate__animated animate__bounce' : ''}`}
            style={{ animationDuration: '1.5s' }}
          />
        </div>
      </div>
    </section>
  );
}

