const AboutSection = () => (
    <section id="about" className="py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
          About Me
        </h2>
        <p className="text-gray-300 mb-12 text-sm">✨ Driven by curiosity, delivered with code ✨</p>
  
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="text-left md:w-1/2">
            <h3 className="text-4xl font-bold mb-4 text-white">
              Hello, I’m <span className="text-fuchsia-500">Venkateswara Reddy</span>
            </h3>
            <p className="text-gray-300 mb-4">
              MERN Stack Developer with a passion for full-stack web apps. Hackathon winner with a knack for rapid problem-solving.
              Fast learner who adapts quickly to new technologies. Driven by curiosity, creativity, and clean code.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="/pdf/VenkateswaraReddy.pdf" 
                download
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md"
              >
                📄 Download CV
              </a>
              <a
                href="#projects"
                className="border border-purple-500 text-purple-500 hover:bg-purple-700 hover:text-white py-2 px-4 rounded-md"
              >
                🚀 View Projects
              </a>
            </div>
          </div>
  
          {/* Profile Image */}
          <div className="relative">
            <img
              src="/images/Profile.jpeg"
              alt="Venkateswara Reddy"
              className="w-60 h-60 rounded-full border-4 border-purple-500 shadow-lg object-cover"
            />
          </div>
        </div>
  
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-sm text-white">
          {/* Total Projects */}
          <div className="bg-[#1e293b] p-6 rounded-lg border border-purple-600 text-center">
            <div className="text-xl font-bold text-purple-400">6</div>
            <p className="text-gray-300">Total Projects</p>
            <p className="text-gray-500 text-xs mt-1">Innovative web solutions crafted</p>
          </div>
  
          {/* Certificates */}
          <div className="bg-[#1e293b] p-6 rounded-lg border border-purple-600 text-center">
            <div className="text-xl font-bold text-purple-400">6</div>
            <p className="text-gray-300">Certificates</p>
            <p className="text-gray-500 text-xs mt-1">Professional skills validated</p>
          </div>
  
          {/* Experience */}
          <div className="bg-[#1e293b] p-6 rounded-lg border border-purple-600 text-center">
            <div className="text-xl font-bold text-purple-400">0</div>
            <p className="text-gray-300">Years of Experience</p>
            <p className="text-gray-500 text-xs mt-1">Continuous learning journey</p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default AboutSection;
  