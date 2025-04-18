// import frontend from "./images/frontend.png"


const features = [
  { 
    name: 'Engineering & Development',
    description: 'Full-stack development expertise with modern web technologies like React and Next.js, combining technical knowledge with creative problem-solving for innovative solutions.'
  },
  { 
    name: 'Technical Education',
    description: 'Experienced instructor specializing in making complex concepts accessible and enjoyable to learn, with a proven track record of engaging curriculum development and delivery.'
  },
  { 
    name: 'Product Design & UX',
    description: 'Skilled in user-centered design principles and creating intuitive interfaces, focusing on meaningful user experiences and impactful digital solutions.'
  },
  { 
    name: 'Leadership & Communication',
    description: 'Engaging public speaker and team leader, experienced in technical presentations, workshop facilitation, and mentoring emerging developers.'
  }
];
  
export default function ProductPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Hi, I'm Kathryn<span className="text-indigo-600">.</span>
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed mb-16">
            Based in NYC, I'm a technical instructor and engineer passionate about creating impactful learning experiences. 
            I combine my love for technology, education, and creativity to build innovative solutions and empower others in their tech journey.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
          {features.map((feature) => (
            <div 
              key={feature.name} 
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-indigo-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-4">
                  {feature.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-sm text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more 
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}