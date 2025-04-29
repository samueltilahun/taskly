'use client';
import { useEffect, useState } from 'react';

export default function FeaturesSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
  }, []);

  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 animate__animated animate__fadeIn animate__delay-1s">
          Powerful Features to Boost Your Productivity
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Feature 1 */}
          <div className={`feature-card text-center p-6 bg-white shadow-lg rounded-lg transform ${animate ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}`}>
            <div className="mb-6">
              <img src="/Images/icons/task-icon.svg" alt="Task Management" className="mx-auto h-40 w-40 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Task Management</h3>
            <p className="text-gray-600">
              Organize your tasks, set deadlines, and manage your projects all in one place.
            </p>
          </div>

          {/* Feature 2 */}
          <div className={`feature-card text-center p-6 bg-white shadow-lg rounded-lg transform ${animate ? 'animate__animated animate__fadeInUp animate__delay-1.5s' : ''}`}>
            <div className="mb-6">
              <img src="/Images/icons/collaboration-icon.svg" alt="Collaboration" className="mx-auto h-40 w-40 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Collaboration</h3>
            <p className="text-gray-600">
              Work together with your team, share updates, and track progress in real-time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className={`feature-card text-center p-6 bg-white shadow-lg rounded-lg transform ${animate ? 'animate__animated animate__fadeInUp animate__delay-2s' : ''}`}>
            <div className="mb-6">
              <img src="/Images/icons/notification-icon.svg" alt="Notifications" className="mx-auto h-40 w-40 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Smart Notifications</h3>
            <p className="text-gray-600">
              Receive real-time updates and reminders to keep you on top of your tasks.
            </p>
          </div>

          {/* Feature 4 */}
          <div className={`feature-card text-center p-6 bg-white shadow-lg rounded-lg transform ${animate ? 'animate__animated animate__fadeInUp animate__delay-2.5s' : ''}`}>
            <div className="mb-6">
              <img src="/Images/icons/analytics-icon.svg" alt="Analytics" className="mx-auto h-40 w-40 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Powerful Analytics</h3>
            <p className="text-gray-600">
              Dive deep into your progress with detailed reports and insights to optimize your workflow.
            </p>
          </div>

          {/* Feature 5 */}
          <div className={`feature-card text-center p-6 bg-white shadow-lg rounded-lg transform ${animate ? 'animate__animated animate__fadeInUp animate__delay-3s' : ''}`}>
            <div className="mb-6">
              <img src="/Images/icons/integration-icon.svg" alt="Integration" className="mx-auto h-40 w-40 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Seamless Integration</h3>
            <p className="text-gray-600">
              Integrate with the tools you already use like Google Calendar, Slack, and more.
            </p>
          </div>

          {/* Feature 6 */}
          <div className={`feature-card text-center p-6 bg-white shadow-lg rounded-lg transform ${animate ? 'animate__animated animate__fadeInUp animate__delay-3.5s' : ''}`}>
            <div className="mb-6">
              <img src="/Images/icons/secure-icon.svg" alt="Security" className="mx-auto h-40 w-40 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Top-notch Security</h3>
            <p className="text-gray-600">
              Your data is safe with us. We use the latest encryption technologies to protect your work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
