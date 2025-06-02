'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HomePageData } from '@/types/home/home';





const iconFadeIn = {
  hidden: { opacity: 1, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 1.5, ease: 'easeOut' },
  }),
};

const statCardVariant = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
};


interface ScrollSectionProps{
  data:HomePageData
}
export default function ScrollSection({data}:ScrollSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollLockRef = useRef(false);

  const [ref, inView] = useInView({ threshold: 0.5 });
  const sections = [
    {
      title: `${data?.Title1}`,
      description: `${data?.Description1}`,
      image: '/card/red.png',
      rotate: 20,
      icons: [
        { src: '/home/card-icons/plane.png', className: '-top-7 left-80' },
        { src: '/home/card-icons/location.png', className: ' right-20 ' },
        { src: '/home/card-icons/coin.png', className: 'top-0 -left-10 h-28 ' },
        { src: '/home/card-icons/stat-card.png', className: 'top-50 -left-10' },
      ],
    },
    {
      title: `${data?.Title2}`,
      description: `${data?.Description2}`,
      image: '/card/red.png',
      rotate: -10,
      icons: [
        { src: '/home/card-icons/lock.png', className: '-top-30 left-70' },
        { src: '/home/card-icons/shield.png', className: '-bottom-16 right-10 rotate-340' },
        { src: '/home/card-icons/coin.png', className: 'top-24 -left-18 h-28 ' },
        { src: '/home/card-icons/stat-card2.png', className: 'top-50 ' },
      ],
    },
    {
      title: `${data?.Title3}`,
      description: `${data?.Description3}`,
      image: '/card/red.png',
      rotate: 10,
      icons: [
        { src: '/home/card-icons/arrow.png', className: '-top-20 left-80' },
        { src: '/home/card-icons/shield.png', className: '-bottom-29 right-10' },
        { src: '/home/card-icons/watch.png', className: 'top-10 -left-17 h-28 ' },
        { src: '/home/card-icons/stat-card3.png', className: 'top-50' },
      ],
    },
  ];
  // Scroll logic
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!inView) return;

      if (scrollLockRef.current) return;
      e.preventDefault();

      scrollLockRef.current = true;

      if (e.deltaY > 0 && activeIndex < sections.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }

      setTimeout(() => {
        scrollLockRef.current = false;
      }, 1000);
    };

    const container = containerRef.current;
    container?.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container?.removeEventListener('wheel', handleWheel);
    };
  }, [activeIndex, inView]);

  // Lock body scroll only while in the section and in the range
  useEffect(() => {
    const isScrollingSlides = inView && activeIndex > 0 && activeIndex < sections.length - 1;
    document.body.style.overflow = isScrollingSlides ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [inView, activeIndex]);

  const current = sections[activeIndex];

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden bg-[#FDF0ED]">
      <div ref={containerRef} className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6 lg:px-24">
        <div className="max-w-md text-left">
          <motion.h2
            key={current.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-[#E74529] leading-snug"
          >
            {current.title}
          </motion.h2>

          <motion.p
            key={current.description}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-[#263244] text-base md:text-lg w-[60%]"
          >
            {current.description}
          </motion.p>
        </div>

        <div className="relative mt-10 md:mt-0 md:ml-20 w-full max-w-md">
          <motion.div
            key={current.image}
            initial={{ opacity: 0, y: -100, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: current.rotate }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              src={current.image}
              alt={current.title}
              width={550}
              height={350}
              className="object-contain w-full h-auto"
            />
          </motion.div>

          <AnimatePresence mode="wait">
            {current.icons.map((icon, i) => {
              const isStatCard = icon.src.includes('stat-card');
              if (!isStatCard) return null;

              return (
                <motion.div
                  key={icon.src}
                  variants={statCardVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={cn('absolute', icon.className)}
                >
                  <Image src={icon.src} alt={`stat-${i}`} width={160} height={80} />
                </motion.div>
              );
            })}
          </AnimatePresence>

          {current.icons.map((icon, i) => {
            const isStatCard = icon.src.includes('stat-card');
            if (isStatCard) return null;

            return (
              <motion.div
                key={icon.src}
                custom={0.4 + i * 0.1}
                variants={iconFadeIn}
                initial="hidden"
                animate="visible"
                className={cn('absolute', icon.className)}
              >
                <Image src={icon.src} alt={`icon-${i}`} width={120} height={80} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );

}

