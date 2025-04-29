'use client';
import { FaTasks, FaCheckCircle, FaRocket } from 'react-icons/fa';

export default function HowItWorksSection() {
  return (
    <>
      <section className="w-full px-8 md:px-16 py-24 bg-gray-300">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            How Taskly Works
          </h2>

          {/* Step-by-Step Process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 p-4 rounded-full">
                <FaTasks className="text-3xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Create Tasks</h3>
              <p className="text-gray-600 mb-4">
                Easily create and manage tasks for yourself or your team, staying organized and on track.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 p-4 rounded-full">
                <FaCheckCircle className="text-3xl text-green-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Track Progress</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with real-time progress tracking, ensuring nothing slips through the cracks.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 p-4 rounded-full">
                <FaRocket className="text-3xl text-yellow-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Achieve Goals</h3>
              <p className="text-gray-600 mb-4">
                Complete your tasks, meet your deadlines, and watch your productivity soar to new heights.
              </p>
            </div>
          </div>

          {/* Optional CTA Button */}
          <div className="mt-12">
            <a
              href="#"
              className="btn btn-primary"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* hr outside the section */}
      <hr className="border-gray-300" />
    </>
  );
}
