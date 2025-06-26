"use client"

import * as React from "react"
import Image from "next/image"

interface WorkProcessCardProps {
  imageSrc: string
  title: string
  description: string
  stepNumber: number
}

const WorkProcessCard: React.FC<WorkProcessCardProps> = ({
  imageSrc,
  title,
  description,
  stepNumber,
}) => {
  return (
    <div className="relative group flex-1 min-w-[280px] max-w-[320px] bg-[#F7F5F0] rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:bg-[#528C4B] pb-16 pt-[100px] text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white overflow-hidden z-10">
        <Image src={imageSrc} alt={title} fill className="rounded-full object-cover" />
      </div>
      <div className="p-6 relative z-0">
        <h3 className="text-xl font-bold mb-3 text-gray-800 transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>
        <p className="text-gray-600 transition-colors duration-300 group-hover:text-white/80">
          {description}
        </p>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-lg">
        {`0${stepNumber}`}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F7F5F0] group-hover:bg-[#528C4B] transition-colors duration-300 ease-in-out"></div>
    </div>
  )
}

const WorkProcessSection: React.FC = () => {
  const processSteps = [
    {
      imageSrc: "/images/faq-1-1.jpg", // Using an existing image for now, will replace with correct one if available
      title: "Discuss Plan",
      description: "We irure dolor reprehenderit velit dolore fugiat",
    },
    {
      imageSrc: "/images/project-1-1.jpg", // Using an existing image for now
      title: "Garden Design",
      description: "We irure dolor reprehenderit velit dolore fugiat",
    },
    {
      imageSrc: "/images/service-2-1.jpg", // Using an existing image for now
      title: "Planting",
      description: "We irure dolor reprehenderit velit dolore fugiat",
    },
    {
      imageSrc: "/images/service-2-2.jpg", // Using an existing image for now
      title: "Finish The Job",
      description: "We irure dolor reprehenderit velit dolore fugiat",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold mb-3 flex items-center justify-center text-lg">
            <span className="mr-2">🌿</span>WORK PROCESS<span className="ml-2">🌿</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            This Work Process is Method
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {processSteps.map((step, index) => (
            <WorkProcessCard
              key={index}
              imageSrc={step.imageSrc}
              title={step.title}
              description={step.description}
              stepNumber={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection; 