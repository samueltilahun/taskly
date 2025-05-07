'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function FeaturesSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const features = [
    {
      title: 'Task Management',
      desc: 'Organize your tasks, set deadlines, and manage your projects all in one place.',
      icon: '/Images/icons/task-icon.svg',
    },
    {
      title: 'Collaboration',
      desc: 'Work together with your team, share updates, and track progress in real-time.',
      icon: '/Images/icons/collaboration-icon.svg',
    },
    {
      title: 'Smart Notifications',
      desc: 'Receive real-time updates and reminders to keep you on top of your tasks.',
      icon: '/Images/icons/notification-icon.svg',
    },
    {
      title: 'Powerful Analytics',
      desc: 'Dive deep into your progress with detailed reports and insights to optimize your workflow.',
      icon: '/Images/icons/analytics-icon.svg',
    },
    {
      title: 'Seamless Integration',
      desc: 'Integrate with the tools you already use like Google Calendar, Slack, and more.',
      icon: '/Images/icons/integration-icon.svg',
    },
    {
      title: 'Top-notch Security',
      desc: 'Your data is safe with us. We use the latest encryption technologies to protect your work.',
      icon: '/Images/icons/secure-icon.svg',
    },
  ];

  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
          Powerful Features to Boost Your Productivity
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="feature-card text-center p-6 bg-white shadow-lg rounded-xl transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
              custom={i}
              initial="hidden"
              animate={animate ? 'visible' : 'hidden'}
              variants={cardVariants}
            >
              <div className="mb-6">
                <img src={feature.icon} alt={feature.title} className="mx-auto h-32 w-32" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
