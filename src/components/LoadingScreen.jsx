import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RING_DURATION = 2.2; // seconds for ring to complete
const FLY_DURATION = 0.55; // seconds for logo to fly to navbar

const LoadingScreen = ({ onFinish }) => {
  const logoRef = useRef(null);
  const [phase, setPhase] = useState('enter'); // 'enter' | 'ring' | 'fly' | 'done'
  const [flyTarget, setFlyTarget] = useState(null);
  const [logoRect, setLogoRect] = useState(null);

  // Kick off ring phase shortly after mount
  useEffect(() => {
    const t = setTimeout(() => setPhase('ring'), 300);
    return () => clearTimeout(t);
  }, []);

  // After ring finishes, calculate positions and start fly phase
  useEffect(() => {
    if (phase !== 'ring') return;
    const ringDurationMs = RING_DURATION * 1000 + 350; // ring duration + small beat pause
    const t = setTimeout(() => {
      // Capture flying logo's current center-screen rect
      if (logoRef.current) {
        setLogoRect(logoRef.current.getBoundingClientRect());
      }
      // Find navbar logo's exact DOM position
      const navLogo = document.getElementById('navbar-logo');
      if (navLogo) {
        setFlyTarget(navLogo.getBoundingClientRect());
      }
      setPhase('fly');
    }, ringDurationMs);
    return () => clearTimeout(t);
  }, [phase]);

  // After fly animation, call onFinish to unmount
  useEffect(() => {
    if (phase !== 'fly') return;
    const t = setTimeout(() => {
      setPhase('done');
      onFinish();
    }, FLY_DURATION * 1000 + 250);
    return () => clearTimeout(t);
  }, [phase, onFinish]);

  // Circumference for SVG ring
  const radius = 72;
  const circumference = 2 * Math.PI * radius;

  // Calculate fly animation values (translate from center to navbar logo position)
  const getFlyAnimation = () => {
    if (!flyTarget || !logoRect) return {};
    const targetCenterX = flyTarget.left + flyTarget.width / 2;
    const targetCenterY = flyTarget.top + flyTarget.height / 2;
    const currentCenterX = logoRect.left + logoRect.width / 2;
    const currentCenterY = logoRect.top + logoRect.height / 2;
    const dx = targetCenterX - currentCenterX;
    const dy = targetCenterY - currentCenterY;
    const scaleRatio = flyTarget.height / 280; // 280px is the loading logo height
    return { x: dx, y: dy, scale: scaleRatio, opacity: 0 };
  };

  const isFlying = phase === 'fly';
  const flyAnim = isFlying ? getFlyAnimation() : {};

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="loader-overlay"
          className="fixed inset-0 flex items-center justify-center bg-[#0A0A0A]"
          style={{ zIndex: 9999 }}
          initial={{ opacity: 1 }}
          animate={{ opacity: isFlying ? 0 : 1 }}
          transition={{ duration: FLY_DURATION, ease: 'easeInOut' }}
        >
          {/* Ambient orange glow background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[600px] h-[600px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,106,0,0.07) 0%, transparent 70%)',
              }}
            />
          </div>

          {/* Center content: ring + logo — ring is fixed-size & centered; logo overflows so only X sits inside */}
          <div className="relative flex items-center justify-center" style={{ width: `${radius * 2 + 24}px`, height: `${radius * 2 + 24}px`, overflow: 'visible' }}>
            {/* SVG ring drawn around the logo */}
            <svg
              width={radius * 2 + 24}
              height={radius * 2 + 24}
              className="absolute inset-0"
              style={{ transform: 'rotate(-90deg)' }}
            >
              {/* Static background track ring */}
              <circle
                cx={radius + 12}
                cy={radius + 12}
                r={radius}
                fill="none"
                stroke="rgba(255,106,0,0.12)"
                strokeWidth="3"
              />
              {/* Animated orange ring */}
              <motion.circle
                cx={radius + 12}
                cy={radius + 12}
                r={radius}
                fill="none"
                stroke="#FF6A00"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference, opacity: 0 }}
                animate={
                  phase === 'ring' || isFlying
                    ? { strokeDashoffset: 0, opacity: 1 }
                    : { strokeDashoffset: circumference, opacity: 0 }
                }
                style={{ filter: 'drop-shadow(0 0 6px rgba(255,106,0,0.8))' }}
                transition={{
                  strokeDashoffset: { duration: RING_DURATION, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.3 },
                }}
              />
            </svg>

            {/* Logo — animates from center of screen to navbar position */}
            <motion.img
              ref={logoRef}
              src="/images/logo2.png"
              alt="Nexus Solutions"
              className="relative z-10 select-none pointer-events-none"
              style={{ height: '280px', width: 'auto', objectFit: 'contain' }}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={
                isFlying
                  ? {
                      opacity: flyAnim.opacity ?? 0,
                      scale: flyAnim.scale ?? 1,
                      x: flyAnim.x ?? 0,
                      y: flyAnim.y ?? 0,
                    }
                  : { opacity: 1, scale: 1, x: 0, y: 0 }
              }
              transition={
                isFlying
                  ? { duration: FLY_DURATION, ease: [0.4, 0, 0.2, 1] }
                  : { duration: 0.5, ease: 'easeOut' }
              }
            />
          </div>

          {/* Brand name text below logo */}
          <motion.p
            className="absolute tracking-[0.35em] text-xs font-semibold uppercase text-white/35 pointer-events-none"
            style={{ top: 'calc(50% + 70px)' }}
            initial={{ opacity: 0, y: 8 }}
            animate={
              isFlying
                ? { opacity: 0, y: -4 }
                : phase === 'ring'
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 8 }
            }
            transition={{ duration: 0.4, delay: phase === 'ring' ? 0.6 : 0 }}
          >
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
