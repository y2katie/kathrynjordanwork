import githubImage from './github.png'

const features = [
    { 
      name: 'Technical Instruction', 
      description: 'Experienced in creating and delivering engaging technical curriculum, specializing in making complex concepts accessible and enjoyable to learn.'
    },
    { 
      name: 'Engineering', 
      description: 'Full-stack development expertise with a focus on modern web technologies, including React, Next.js, and cloud infrastructure.'
    },
    { 
      name: 'Product Design', 
      description: 'Skilled in user-centered design principles, creating intuitive interfaces and meaningful user experiences.'
    },
    { 
      name: 'Public Speaking', 
      description: 'Engaging presenter and workshop facilitator, experienced in both technical conferences and educational settings.'
    },
    { 
      name: 'Creative Problem Solving', 
      description: 'Combining technical knowledge with creative thinking to develop innovative solutions to complex challenges.'
    },
    { 
      name: 'Leadership', 
      description: 'Proven track record of leading technical teams and mentoring emerging developers.'
    },
  ];
  
  export default function ProductPage() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hi, I'm Kathryn.</h2>
            <p className="mt-4 text-gray-500">
              Based in NYC, I'm a technical instructor and engineer passionate about creating impactful learning experiences. 
              I combine my love for technology, education, and creativity to build innovative solutions and empower others in their tech journey.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            {/* TODO: Replace these images with relevant portfolio images */}
            <img
              alt="Teaching in action"
              src={githubImage}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="Code development"
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-02.jpg"
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="Product design work"
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-03.jpg"
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="Public speaking"
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-04.jpg"
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    );
  }