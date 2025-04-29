'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faUsers, faCloud, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default function BenefitsSection() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Why Choose Taskly?
        </h2>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeIn">
            <div className="mb-4 p-4 rounded-full">
              <FontAwesomeIcon icon={faClipboardList} className="text-3xl text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Task Management</h3>
            <p className="text-gray-600">
              Stay organized and keep track of all your tasks in one place. Taskly simplifies task management.
            </p>
          </div> 

          {/* Benefit 2 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeIn animate__delay-1s">
            <div className="mb-4 p-4 rounded-full">
              <FontAwesomeIcon icon={faUsers} className="text-3xl text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Team Collaboration</h3>
            <p className="text-gray-600">
              Collaborate with your team efficiently with real-time task updates and notifications.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeIn animate__delay-2s">
            <div className="mb-4 p-4 rounded-full">
              <FontAwesomeIcon icon={faCloud} className="text-3xl text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Cloud Sync</h3>
            <p className="text-gray-600">
              Access your tasks and data from anywhere with cloud synchronization across devices.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeIn animate__delay-3s">
            <div className="mb-4 p-4 rounded-full">
              <FontAwesomeIcon icon={faShieldAlt} className="text-3xl text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Security</h3>
            <p className="text-gray-600">
              We prioritize the security of your data with advanced encryption and protection measures.
            </p>
          </div>
        </div>

        {/* Optional CTA Button */}
        <div className="mt-12">
          <a
            href="#"
            className="btn btn-primary"
          >
            Get Started with Taskly
          </a>
        </div>
      </div>
    </section>
  );
}
