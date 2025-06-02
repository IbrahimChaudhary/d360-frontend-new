'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const cards = [
  {
    image: '/card/red.png',
    bg: 'bg-[#FDF0ED]',
    button: 'bg-[#E74529]',
    text: 'text-[#E74529]',
    iconBg: 'bg-[#E74529]',
    border: 'border-[#EB644C] border-[1px]',
    icons: [
      '/card/icons/card.svg',
      '/card/icons/call.svg',
      '/card/icons/bell.svg',
      '/card/icons/mob.svg',
      '/card/icons/stack.svg',
      '/card/icons/fees.svg',
    ],
  },
  {
    image: '/card/green.png',
    bg: 'bg-[#F6F7F8]',
    button: 'bg-[#E74529]',
    text: 'text-[#293242]',
    iconBg: 'bg-[#004118]',
    border: 'border-[#004118] border-[1px]',
    icons: [
      '/card/icons/card-green.svg',
      '/card/icons/call-green.svg',
      '/card/icons/bell-green.svg',
      '/card/icons/mob-green.svg',
      '/card/icons/stack-green.svg',
      '/card/icons/fees-green.svg',
    ],
  },
  {
    image: '/card/white.png',
    bg: 'bg-[#F2EAE5]',
    button: 'bg-[#E74529]',
    text: 'text-[#293242]',
    iconBg: 'bg-[#DCC9BB]',
    border: 'border-[#DCC9BB] border-[1px]',
    icons: [
      '/card/icons/card-gold.svg',
      '/card/icons/call-gold.svg',
      '/card/icons/bell-gold.svg',
      '/card/icons/mob-gold.svg',
      '/card/icons/stack-gold.svg',
      '/card/icons/fees-gold.svg',
    ],
  },
];

const features = [
  'Instant virtual card issuance',
  'Apple Pay & Mada Pay support',
  'Real-time transaction alerts',
  'Full control via the app',
  'Multiple cards under one account',
  'Competitive FX rates with no hidden fees',
];

export default function CardVariants() {
  const [selected, setSelected] = useState(0);
  const [animate, setAnimate] = useState(false);
  const current = cards[selected];

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timeout);
  }, [selected]);

  return (
    <section className={`${current.bg} py-10 lg:px-4`}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-evenly gap-10">
        {/* Text Section */}
        <div className="w-full max-w-md text-left">
          <div className="space-y-2 px-4 lg:px-0 ">
            <h2 className={`text-2xl md:text-3xl font-bold ${current.text}`}>
              Classic Card
            </h2>
            <h3 className={`text-2xl md:text-3xl font-bold ${current.text}`}>
              Simple & Flexible
            </h3>
            <p className="text-[#263244] text-sm md:text-base">
              Ideal for everyday payments with full control.
            </p>
            <button
              className={`${current.button} text-white px-6 py-2 rounded-xl font-medium mt-2`}
            >
              Get Card
            </button>
          </div>

          {/* Features (Shown here only on mobile) */}
          <motion.div
  className="mt-6 grid grid-cols-2 gap-3 px-1 lg:hidden"
  initial={{ x: 50, opacity: 0 }}
  animate={animate ? { x: 0, opacity: 1 } : {}}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  {features.map((feature, i) => (
    <motion.div
      key={feature}
      className={cn(
        'flex items-center bg-white px-4 py-2 rounded-full border text-xs font-medium',
        current.border
      )}
    >
      <div
        className={cn(
          'w-6 h-6 min-w-[24px] rounded-full flex items-center justify-center mr-2',
          current.iconBg
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.icons[i]}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center w-full h-full"
          >
            <Image
              src={current.icons[i]}
              alt={`icon-${i}`}
              width={12}
              height={12}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="text-[#263244]">{feature}</p>
    </motion.div>
  ))}
</motion.div>


          {/* Card Image */}
          <motion.div
            className="hidden lg:block relative h-[250px] sm:h-[300px] w-full max-w-[300px] sm:max-w-[350px] mx-auto mt-8"
            animate={animate ? { rotate: -20, y: 20, opacity: 1 } : {}}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          >
            <Image src={current.image} alt="card" fill className="object-contain" />
          </motion.div>

          <div
            className="block lg:hidden relative h-[300px] w-full max-w-[385px] mx-auto mt-8" >
            <Image src={current.image} alt="card" fill className="object-contain" />
          </div>
        </div>

        {/* Features (only shown on desktop) */}
        <motion.div
          className="hidden lg:block w-full max-w-md space-y-4"
          initial={{ x: 50, opacity: 0 }}
          animate={animate ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              className={cn(
                'flex items-center gap-4 rounded-full px-4 py-3 bg-white text-sm',
                current.border
              )}
            >
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center',
                  current.iconBg
                )}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.icons[i]}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center w-full h-full"
                  >
                    <Image
                      src={current.icons[i]}
                      alt={`icon-${i}`}
                      width={16}
                      height={16}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="text-[#263244] font-semibold">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Selector */}
      <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-between lg:pt-26 pt-10 gap-4 px-4 lg:px-32">
        <p className="text-sm font-medium text-black text-center">
          Free for all D360 customers
        </p>
        <div className="flex justify-center gap-4 relative">
          {cards.map((_, idx) => {
            const colors = ['bg-[#E74529]', 'bg-[#0A6C4D]', 'bg-[#D9D9D9]'];
            const isActive = idx === selected;

            return (
              <div key={idx} className="relative w-4 h-4">
                <button
                  onClick={() => {
                    setSelected(idx);
                    setAnimate(false);
                  }}
                  className={cn('w-4 h-4 rounded-full', colors[idx])}
                />
                {isActive && (
                  <motion.div
                    layoutId="selector-ring"
                    className="absolute top-[2.5px] left-0 w-4 h-4 rounded-full ring-2 ring-black"
                    transition={{ type: 'spring', stiffness: 400, damping: 50 }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
