import { useState, useEffect } from 'react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MarqueeTech } from './MarqueeTech';
import { MarqueeStocks } from './MarqueeStocks';
import logo from '@/assets/STONKZZ.svg';
import prasanaImg from '@/assets/prasana.svg';

function CountUp({ to, duration = 2, suffix = "" }: { to: number; duration?: number; suffix?: string }) {
    const [displayValue, setDisplayValue] = useState("0");
    const count = useMotionValue(0);

    useEffect(() => {
        const controls = animate(count, to, {
            duration,
            ease: "easeOut",
            onUpdate: (latest) => {
                setDisplayValue(Math.round(latest).toLocaleString());
            }
        });
        return controls.stop;
    }, [to, duration, count]);

    return <span>{displayValue}{suffix}</span>;
}

export function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-12 overflow-hidden bg-black">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#1a1a1a_0%,_transparent_70%)] opacity-50" />

            {/* Prasana Asset Integration - Left Aligned and Large */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="relative w-full h-full">
                    {/* Seamless gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black z-10" />
                    <img
                        src={prasanaImg}
                        alt=""
                        className="h-full w-auto object-cover object-left filter grayscale brightness-[0.8] contrast-[1.1] blur-none"
                    />
                </div>
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center flex-grow flex flex-col items-center justify-center pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    {/* Brand Logo - Center Content with High Contrast */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mb-10 relative"
                    >
                        {/* High Contrast Glow */}
                        <div className="absolute inset-0 bg-white/10 blur-[60px] rounded-full" />

                        <div
                            className="relative w-72 sm:w-96 h-16 sm:h-24 bg-white"
                            style={{
                                maskImage: `url(${logo})`,
                                WebkitMaskImage: `url(${logo})`,
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center',
                                filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.2))',
                            }}
                        />
                    </motion.div>

                    {/* Headline */}
                    <div className="space-y-2 mb-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white"
                        >
                            The power of AI.
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white/40"
                        >
                            In your pocket.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl sm:text-2xl text-white/50 max-w-2xl mx-auto font-medium mt-8"
                        >
                            Professional-grade market analysis for serious investors.
                        </motion.p>
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col items-center gap-12 mt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
                        >
                            <Button
                                size="lg"
                                className="bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 font-bold text-xl px-12 h-16 rounded-full border border-white/20 shadow-2xl shadow-purple-500/10 transition-all hover:scale-105 active:scale-95 group"
                            >
                                <span className="flex items-center gap-3">
                                    Join Now
                                    <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] group-hover:animate-pulse" />
                                </span>
                            </Button>
                            <button
                                onClick={() => {
                                    const element = document.getElementById('how-it-works');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="px-8 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-black/60 font-semibold text-xl flex items-center gap-2 transition-all hover:scale-105 group"
                            >
                                Learn more
                                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                            </button>
                        </motion.div>

                        {/* Trust Signals with Subtle Animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                            className="flex flex-wrap justify-center gap-6 lg:gap-10 border-t border-white/10 pt-8"
                        >
                            <div className="flex items-center gap-2 text-white/30 font-medium text-sm sm:text-base">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500/50" />
                                Used by <CountUp to={2000} suffix="+" /> investors
                            </div>
                            <div className="flex items-center gap-2 text-white/30 font-medium text-sm sm:text-base">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500/50" />
                                <CountUp to={100} suffix="%" /> data powered
                            </div>
                            <div className="flex items-center gap-2 text-white/30 font-medium text-sm sm:text-base">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500/50" />
                                <CountUp to={50} suffix="+" /> AI-backed insights
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Marquees */}
            <div className="w-full mt-auto space-y-0 border-t border-white/10 bg-black/80 backdrop-blur-md">
                <MarqueeStocks />
                <MarqueeTech />
            </div>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </section>
    );
}
