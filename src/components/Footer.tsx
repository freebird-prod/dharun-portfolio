import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Heart,
  Code2,
  Terminal,
} from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/freebird-prod",
      label: "GitHub",
      color: "text-gray-500",
      bg: "gray-600",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dharun-kumar-sh",
      label: "LinkedIn",
      color: "text-blue-500",
      bg: "blue-500",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/iam.dharunkumar",
      label: "Instagram",
      color: "text-pink-500",
      bg: "pink-500",
    },
    {
      icon: Terminal,
      href: "https://leetcode.com/u/dharunkumarsh",
      label: "LeetCode",
      color: "text-cyan-400",
      bg: "cyan-500",
    },
  ];

  const getTailwindColor = (color: string): string => {
    const colors: Record<string, string> = {
      "gray-600": "#4B5563",
      "blue-500": "#3B82F6",
      "pink-500": "#EC4899",
      "cyan-500": "#06b6d4",
    };
    return colors[color] || "#4B5563";
  };

  const navigate = useNavigate();

  const quickLinks = [
    { label: "About Me", href: "/about" },
    { label: "My Projects", href: "/projects" },
    { label: "Certifications", href: "/certifications" },
    { label: "Tech Events", href: "/events" },
    { label: "Get in Touch", href: "/contact" },
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

  const email = "iam.dharunkumarsh@gmail.com";

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
              <img src="/icon.svg" alt="Logo" className="h-11 w-11" />
              <img src="/logo.svg" alt="Logo" className="h-5 w-auto" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Aspiring React Developer passionate about building modern,
              responsive web interfaces and bringing interactive UIs to life
              with code.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  className="relative group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    onClick={() => window.open(social.href, "_blank")}
                    className={`w-10 h-10 bg-gray-800/50 cursor-pointer backdrop-blur-sm border border-gray-700/50 rounded-lg flex items-center justify-center transition-all duration-300`}
                  >
                    <social.icon
                      className={`${social.color} w-5 h-5 transition-colors`}
                    />
                  </motion.div>

                  {/* Tooltip */}
                  <div
                    style={{ backgroundColor: getTailwindColor(social.bg) }}
                    className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 whitespace-nowrap`}
                  >
                    {social.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    onClick={() => navigate(link.href)}
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
              <div className="space-y-2">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(email);
                    toast.success("Email copied to clipboard!");
                  }}
                  className="text-cyan-400 cursor-pointer font-semibold"
                >
                  {email}
                </a>
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
              © {new Date().getFullYear()} Dharun Kumar S H. All rights
              reserved.
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
