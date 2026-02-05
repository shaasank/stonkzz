import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity, BarChart3, Newspaper, ArrowRight, Sparkles, DollarSign, LineChart } from 'lucide-react';
import stonkzLogo from '@/assets/stonkz-logo.png';
import niftyChart from '@/assets/nifty-chart.png';

const heatmapStocks = [
  { name: 'RIL', change: '+1.2%', positive: true },
  { name: 'TCS', change: '+0.8%', positive: true },
  { name: 'ITC', change: '-0.5%', positive: false },
  { name: 'INFY', change: '-1.5%', positive: false },
  { name: 'HAL', change: '+0.3%', positive: true },
  { name: 'IOCL', change: '-2.1%', positive: false },
];

const keyStocks = [
  { name: 'Reliance', price: '₹2,456', change: '+1.2%', positive: true },
  { name: 'TCS', price: '₹3,890', change: '+0.8%', positive: true },
  { name: 'HDFC Bank', price: '₹1,645', change: '-0.5%', positive: false },
  { name: 'Infosys', price: '₹1,523', change: '+1.5%', positive: true },
];

const newsBulletin = [
  'RBI maintains repo rate at 6.5%, signals cautious stance',
  'IT sector shows strong Q3 earnings, TCS leads the pack',
  'Auto stocks rally on improved rural demand outlook',
  'Banking sector faces headwinds amid asset quality concerns',
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Report Preview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            What It <span className="gradient-text">Contains</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here's a sample of what you get in your daily report. Clean, comprehensive, and actionable insights.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Stonkzz Score */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold">Stonkzz Score</h3>
            </div>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold text-loss">0% Bullish</p>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Strongly Bearish</span>
              <span>Bearish</span>
              <span>Bullish</span>
              <span>Strongly Bullish</span>
            </div>
            <div className="h-2 rounded-full bg-gradient-to-r from-loss via-neutral to-gain relative">
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full border-2 border-loss shadow-lg"
                initial={{ left: '50%' }}
                whileInView={{ left: '0%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Market sentiment index combining multiple indicators
            </p>
          </motion.div>

          {/* NIFTY50 Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold">NIFTY50 Heatmap</h3>
              </div>
              <span className="text-xs text-muted-foreground">4 Gainers • 2 Losers</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {heatmapStocks.map((stock, index) => (
                <motion.div
                  key={stock.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className={`p-3 rounded-lg text-center transition-all duration-300 hover:scale-105 ${stock.positive ? 'bg-gain/20 text-gain border border-gain/20' : 'bg-loss/20 text-loss border border-loss/20'
                    }`}
                >
                  <p className="font-semibold text-sm">{stock.name}</p>
                  <p className="text-xs">{stock.change}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-loss" /> -3%+
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-neutral" /> ±0.5%
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-gain" /> +2%+
              </span>
            </div>
          </motion.div>

          {/* Gold & Silver */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold">Gold & Silver</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-gold/10 border border-gold/20 hover:border-gold/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-lg">Au</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gold">Gold</p>
                    <p className="text-xs text-muted-foreground">Per 10g</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">₹1,23,700</p>
                  <p className="text-sm text-gain flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +0.8%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-silver/10 border border-silver/20 hover:border-silver/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-silver/20 flex items-center justify-center">
                    <span className="text-lg">Ag</span>
                  </div>
                  <div>
                    <p className="font-semibold text-silver">Silver</p>
                    <p className="text-xs text-muted-foreground">Per 10g</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">₹2,100</p>
                  <p className="text-sm text-loss flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" /> -0.3%
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FII/DII Activity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold">FII/DII Activity</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary border border-border/50 hover:border-primary/30 transition-colors">
                <div>
                  <p className="font-semibold">FII</p>
                  <p className="text-xs text-muted-foreground">Foreign Institutional</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gain">₹2,340 Cr</p>
                  <p className="text-sm text-gain">Bought</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary border border-border/50 hover:border-primary/30 transition-colors">
                <div>
                  <p className="font-semibold">DII</p>
                  <p className="text-xs text-muted-foreground">Domestic Institutional</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gain">₹1,890 Cr</p>
                  <p className="text-sm text-gain">Bought</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Nifty50 Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <LineChart className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold">Nifty50 Analysis</h3>
            </div>
            <div className="rounded-lg overflow-hidden border border-border/50">
              <img src={niftyChart} alt="NIFTY 50 Technical Analysis Chart" className="w-full h-auto" />
            </div>
          </motion.div>

          {/* Key Stocks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold">Key Stocks</h3>
            </div>
            <div className="space-y-3">
              {keyStocks.map((stock, index) => (
                <motion.div
                  key={stock.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-transparent hover:border-primary/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                >
                  <span className="font-medium">{stock.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground font-mono">{stock.price}</span>
                    <span className={`font-mono ${stock.positive ? 'text-gain' : 'text-loss'}`}>{stock.change}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* News Bulletin - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="lg:col-span-3 glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold">News Bulletin</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {newsBulletin.map((news, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-transparent hover:border-primary/20"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 animate-pulse-glow" />
                  <p className="text-sm text-muted-foreground">{news}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto border-primary/30 neon-border">
            <h3 className="text-xl font-display font-semibold mb-3">Want the Full Report?</h3>
            <p className="text-muted-foreground mb-6">
              You're seeing just a snapshot! The complete version includes Global Indices, Currency Rates, SGX NIFTY, OI Analysis, and a wealth of in-depth market insights.
            </p>
            <a href="#pricing">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-3 rounded-lg shadow-[var(--shadow-button)] transition-all group inline-flex items-center gap-2">
                Join Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
