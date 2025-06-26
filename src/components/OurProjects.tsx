import Image from 'next/image';
import React from 'react';

const projects = [
  {
    id: 1,
    src: '/images/project-1-1.jpg',
    alt: 'Gardening',
    category: 'Gardening',
    title: 'Garden Maintenance',
  },
  {
    id: 2,
    src: '/images/project-1-2.jpg',
    alt: 'Greenhouse',
    category: 'Agriculture',
    title: 'Crop Cultivation',
  },
  {
    id: 3,
    src: '/images/project-1-3.jpg',
    alt: 'Harvest',
    category: 'Farming',
    title: 'Harvesting Crops',
  },
  {
    id: 4,
    src: '/images/project-1-4.jpg',
    alt: 'Planting',
    category: 'Horticulture',
    title: 'Seed Planting',
  },
  {
    id: 5,
    src: '/images/project-1-5.jpg',
    alt: 'Tractor',
    category: 'Machinery',
    title: 'Field Preparation',
  },
];

const OurProjects: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12"><br/>Explore Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={`relative overflow-hidden rounded-lg shadow-lg group ${project.id === 1 ? 'lg:col-span-2' : ''}`}>
              <Image
                src={project.src}
                alt={project.alt}
                width={600}
                height={400}
                layout="responsive"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-green-400 text-sm mb-1">{project.category}</p>
                <h3 className="text-white text-2xl font-semibold mb-2">{project.title}</h3>
                <a href="#" className="text-white text-sm flex items-center">
                  View Project
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects; 