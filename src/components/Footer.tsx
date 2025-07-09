import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart, Code2 } from 'lucide-react';
import toast from 'react-hot-toast';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'About Me', href: '/about' },
    { label: 'My Projects', href: '/projects' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Tech Events', href: '/events' },
    { label: 'Get in Touch', href: '/contact' },
  ];


  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  let email = 'iam.dharunkumarsh@gmail.com';


  return (
    <footer className="relative overflow-hidden bg-gray-900 border-t z-0 border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center mb-2">
              <img
                src="/icon.svg"
                alt="Logo"
                className="h-11 w-11"
              />
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-5 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Aspiring React Developer passionate about building modern, responsive web interfaces and bringing interactive UIs to life with code.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/10"
                >
                  <social.icon size={18} className="text-gray-400 hover:text-cyan-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    onClick={() => window.location.href = link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>No:32/27, Kutty Street, Perumalpet</p>
              <p>Chennai - 600007</p>
              <div className='space-y-2'>
                <a onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(email);
                  toast.success('Email copied to clipboard!');
                }} className="text-cyan-400 cursor-pointer font-semibold">{email}</a>
              </div>

            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-14 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p variants={itemVariants} className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dharun Kumar S H. All rights reserved.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>Made with</span>
              <Heart size={16} className="text-red-400" />
              <span>and lots of</span>
              <Code2 size={16} className="text-cyan-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;