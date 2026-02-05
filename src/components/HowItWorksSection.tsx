import { motion } from 'framer-motion';
import { Clock, Database, Brain, Send, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Data Collection',
    description: 'We collect real-time data from 50+ trusted sources including NSE, BSE, RBI, and financial news outlets.',
    icon: Database,
  },
  {
    number: '02',
    title: 'AI Analysis',
    description: 'Our AI-powered system analyzes and compiles data into beautiful, easy-to-read visual reports every morning.',
    icon: Brain,
  },
  {
    number: '03',
    title: 'Instant Delivery',
    description: 'Get insights as a PDF report delivered directly to your WhatsApp daily.',
    icon: Send,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From data collection to delivery, we've streamlined the entire process to give you the most accurate and timely market insights.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-[2px]">
                  <div className="h-full bg-gradient-to-r from-primary/50 to-transparent" />
                  <motion.div
                    className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-primary to-transparent"
                    animate={{ x: ['0%', '1000%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              )}

              <div className="glass-card p-6 text-center h-full">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Time Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="glass-card p-6 text-center border-primary/30 animate-border-glow">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-primary" />
              <h4 className="text-lg font-display font-semibold">Updated Daily at 8:00 AM IST</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              Get fresh insights every morning before market opens. Never miss important market movements again.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
