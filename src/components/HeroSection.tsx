import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Static Diagonal Stripes Background - Purple Gradient */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[700px] h-[700px] lg:w-[900px] lg:h-[900px] rotate-[30deg]">
                    {/* Diagonal Stripes */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-20"
                        style={{
                            background: 'linear-gradient(90deg, hsl(0, 0%, 5%) 0%, hsl(270, 50%, 25%) 20%, hsl(270, 60%, 40%) 50%, hsl(270, 50%, 25%) 80%, hsl(0, 0%, 5%) 100%)',
                            boxShadow: '0 0 60px hsl(270, 60%, 30% / 0.8)',
                        }}
                    />
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-24 translate-y-[-100px]"
                        style={{
                            background: 'linear-gradient(90deg, hsl(0, 0%, 5%) 0%, hsl(270, 55%, 30%) 20%, hsl(270, 65%, 45%) 50%, hsl(270, 55%, 30%) 80%, hsl(0, 0%, 5%) 100%)',
                            boxShadow: '0 0 80px hsl(270, 65%, 35% / 0.7)',
                        }}
                    />
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-28 translate-y-[-220px]"
                        style={{
                            background: 'linear-gradient(90deg, hsl(0, 0%, 5%) 0%, hsl(270, 60%, 35%) 20%, hsl(270, 70%, 50%) 50%, hsl(270, 60%, 35%) 80%, hsl(0, 0%, 5%) 100%)',
                            boxShadow: '0 0 100px hsl(270, 70%, 40% / 0.6)',
                        }}
                    />
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-32 translate-y-[-360px]"
                        style={{
                            background: 'linear-gradient(90deg, hsl(0, 0%, 5%) 0%, hsl(270, 65%, 40%) 20%, hsl(280, 75%, 55%) 50%, hsl(270, 65%, 40%) 80%, hsl(0, 0%, 5%) 100%)',
                            boxShadow: '0 0 120px hsl(280, 75%, 45% / 0.5)',
                        }}
                    />
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-24 translate-y-[100px]"
                        style={{
                            background: 'linear-gradient(90deg, hsl(0, 0%, 5%) 0%, hsl(270, 55%, 28%) 20%, hsl(270, 65%, 42%) 50%, hsl(270, 55%, 28%) 80%, hsl(0, 0%, 5%) 100%)',
                            boxShadow: '0 0 80px hsl(270, 65%, 33% / 0.7)',
                        }}
                    />
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-20 translate-y-[220px]"
                        style={{
                            background: 'linear-gradient(90deg, hsl(0, 0%, 5%) 0%, hsl(270, 50%, 22%) 20%, hsl(270, 60%, 35%) 50%, hsl(270, 50%, 22%) 80%, hsl(0, 0%, 5%) 100%)',
                            boxShadow: '0 0 60px hsl(270, 60%, 28% / 0.8)',
                        }}
                    />
                </div>
            </div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background pointer-events-none" />

            {/* Floating Elements */}
            <motion.div
                className="absolute top-32 left-[10%] hidden lg:flex items-center gap-2 glass-card px-4 py-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                transition={{
                    opacity: { delay: 0.6 },
                    x: { delay: 0.6 },
                    y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                }}
            >
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">NIFTY +1.2%</span>
            </motion.div>

            <motion.div
                className="absolute top-40 right-[10%] hidden lg:flex items-center gap-2 glass-card px-4 py-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 0.8 },
                    x: { delay: 0.8 },
                    y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 },
                }}
            >
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Live Updates</span>
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-sm text-primary font-medium">Trusted by 10,000+ Traders</span>
                    </motion.div>

                    {/* STONKZZ Branding */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6"
                    >
                        <h1
                            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-black tracking-tighter mb-4"
                            style={{
                                textShadow: '0 0 30px hsl(270 70% 60% / 0.6)',
                            }}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600">
                                STONKZZ
                            </span>
                        </h1>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                        />
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6"
                    >
                        India's Simplest Daily{' '}
                        <span className="gradient-text">Stock Market</span> Report
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance leading-relaxed"
                    >
                        NIFTY, Market News, FII/DII, Gold, Silver — All in 1 Smart Page.
                        Stop scrolling endlessly for insights. Start your day with one clean,
                        data-rich report.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 shadow-[var(--shadow-button)] glow-effect group"
                        >
                            View Sample Report
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-border hover:bg-secondary/50 hover:border-primary/50 text-lg px-8 py-6 transition-all duration-300 group"
                        >
                            <span className="group-hover:text-primary transition-colors">
                                How It Works
                            </span>
                        </Button>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-sm text-muted-foreground italic"
                    >
                        "There's beauty in smart investing"
                    </motion.p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1.5 h-3 bg-primary rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
