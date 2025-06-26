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
              {/* top picture */}
              <div className="relative h-64 w-full">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* ---------- Content area ---------- */}
              <div className="relative px-10 pb-16 pt-20 text-center">
                {/* black overlay – only below the image */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-90"
                />

                {/* floating icon */}
                <span className="absolute left-1/2 top-0 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-5xl text-green-600 shadow-md transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <i className={s.iconClass} />
                </span>

                <h3 className="mb-3 text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">
                  <a href="service-d-fresh.html">{s.title}</a>
                </h3>

                <p className="text-base leading-7 text-gray-600 transition-colors duration-300 group-hover:text-gray-300">
                  {s.description}
                </p>

                {/* round arrow at the bottom */}
                <a
                  href="service-d-fresh.html"
                  className="absolute left-1/2 bottom-0 z-10 flex h-14 w-14 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-white text-green-600 text-xl shadow-md transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white"
                >
                  <i className="icofont-arrow-up" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- Dots (static) ---------- */}
        <div className="mt-12 flex justify-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-green-600" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default OurServices;