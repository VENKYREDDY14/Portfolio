import { useEffect, useState } from "react";
import { Mail, Instagram, Github, Phone, Linkedin, Code2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6 text-white">
      <h2
        className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4"
        data-aos="fade-down"
      >
        Contact Me
      </h2>
      <p className="text-center text-gray-400 mb-12" data-aos="fade-up">
        Got a question? Send me a message, and I’ll get back to you soon.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div
          className="bg-[#1e293b] p-6 rounded-xl shadow-md"
          data-aos="fade-right"
        >
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Get in Touch</h3>
          <p className="text-gray-400 text-sm mb-6">
            Have something to discuss? Send me a message and let’s talk.
          </p>

          <form
            action="https://formspree.io/f/xjkrwznw"
            method="POST"
            className="space-y-5"
          >
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0f172a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div
          className="bg-[#1e293b] p-6 rounded-xl shadow-md"
          data-aos="fade-left"
        >
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Connect With Me</h3>
          <div className="space-y-4">
            <ContactLink
              icon={<Linkedin className="text-blue-500" />}
              label="Let's Connect"
              value="on LinkedIn"
              link="https://www.linkedin.com/in/venkateswara-reddy-yarramreddy-3b252925a/"
            />
            <ContactLink
              icon={<Instagram className="text-pink-500" />}
              label="Instagram"
              value="@venkyreddy18"
              link="https://instagram.com/venkyreddy18"
            />
            <ContactLink
              icon={<Code2 className="text-red-500" />}
              label="Leetcode"
              value="@VENKATESWARAREDDY14"
              link="https://leetcode.com/u/VENKATESWARAREDDY14/"
            />
            <ContactLink
              icon={<Github className="text-white" />}
              label="GitHub"
              value="@VENKYREDDY14"
              link="https://github.com/VENKYREDDY14/"
            />
            <ContactLink
              icon={<Phone className="text-green-500" />}
              label="Call Me"
              value="on Mobile"
              link="tel:+919948167365"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ icon, label, value, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between px-4 py-3 rounded-md bg-[#0f172a] hover:bg-[#1a202e] border border-gray-700 transition"
    data-aos="zoom-in"
  >
    <div className="flex items-center gap-3 text-sm">
      {icon}
      <span className="font-medium">{label}</span>
    </div>
    <span className="text-xs text-gray-400">{value}</span>
  </a>
);

export default ContactSection;
