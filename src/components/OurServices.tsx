"use client"
import { useEffect, useRef } from 'react';
import Image from 'next/image';

type Service = {
  title: string;
  description: string;
  image: string;
  iconClass: string;
};

const services: Service[] = [
  {
    title: 'Always Fresh',
    description:
      'With schools closed in NSW and Victoria, and childcare workers in Food places.',
    image: '/images/service-2-1.jpg',
    iconClass: 'icon-salad',
  },
  {
    title: 'Organic Solutions',
    description:
      'With schools closed in NSW and Victoria, and childcare workers in Food places.',
    image: '/images/service-2-2.jpg',
    iconClass: 'icon-management',
  },
  {
    title: 'Organic Product',
    description:
      'With schools closed in NSW and Victoria, and childcare workers in Food places.',
    image: '/images/service-2-3.jpg',
    iconClass: 'icon-agronomy',
  },
];

const OurServices = () => {
  /* Intersection-Observer => add .reveal once */
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLElement>('[data-card]');
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={root} className="bg-[#f6f8ef] py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* ---------- Heading ---------- */}
        <div className="mb-14 text-center">
          <p className="relative mb-3 inline-block text-lg font-medium text-green-600">
            <i className="icofont-leaf mr-1" />
            OUR BEST SERVICES
            <i className="icofont-leaf ml-1" />
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-800">
            Services This Working
          </h2>
        </div>

        {/* ---------- Cards ---------- */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              data-card
              className="fade-in-up group relative overflow-hidden rounded-xl border border-[#e7e7e7] bg-white shadow-sm"
            >
              {/* top picture with padding and reduced width */}
              <div className="relative h-64 w-full px-4 pt-4">
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="z-10 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* ---------- Content area ---------- */}
              <div className="relative px-10 pb-16 pt-20 text-center">
                {/* floating icon */}
                <span className="absolute left-1/2 top-0 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-5xl text-green-600 shadow-md transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <i className={s.iconClass} />
                </span>

                <h3 className="mb-3 text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">
                  <a href="service-d-fresh.html">{s.title}</a>
                </h3>

                <p className="text-base leading-7 text-gray-600 transition-colors duration-300 group-hover:text-gray-300">
                  {s.description}
                </p>
              </div>

              {/* full card overlay that slides down from top */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-0 bg-black transition-all duration-1000 ease-in-out group-hover:h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;