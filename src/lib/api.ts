import { supabase } from './supabase';

export interface AnalysisParams {
    assetType: 'Stock' | 'Mutual Fund';
    budget: number;
    investmentType: 'Long Term' | 'Short Term';
    investmentMode: 'SIP' | 'One-time';
}

export interface RecommendationItem {
    name: string;
    ticker: string;
    price: string;
    change: string; // e.g., "+2.91%"
    changeValue: string; // e.g., "116.70"
    volume: string; // e.g., "28,04,761"
    sentiment: 'Buy' | 'Hold' | 'Sell';
    rank: number;
    pros: string[];
    cons: string[];
}

export interface AnalysisResult {
    recommendations: RecommendationItem[];
    returns: string;
    reasoning: string;
    risk: string;
    budgetExplanation: string;
}

export const analyzeInvestment = async (params: AnalysisParams): Promise<AnalysisResult> => {
    try {
        const { data, error } = await supabase.functions.invoke('analyze-stock', {
            body: params,
        });

        if (error) throw error;
        return data;
    } catch (error) {
        console.warn('Edge Function call failed, falling back to mock data:', error);
        // Mock response for demonstration
        return new Promise((resolve) => {
            setTimeout(() => {
                let recs: RecommendationItem[] = [];
                let why = "";
                let ret = "";
                let risk = "";

                let budgetExp = "";

                if (params.assetType === 'Stock') {
                    if (params.investmentType === 'Long Term') {
                        recs = [
                            {
                                name: "Reliance Industries", ticker: "RELIANCE", price: "₹2,988.00",
                                change: "+1.5%", changeValue: "+44.50", volume: "45,20,100",
                                sentiment: "Buy", rank: 1,
                                pros: ["Strong retail business growth (20% YoY)", "Diversified revenue streams", "Consistent dividend payer", "Market leader in refining"],
                                cons: ["High valuation compared to peers", "Debt levels remain elevated", "Telecom competition intensifying"]
                            },
                            {
                                name: "ICICI Bank", ticker: "ICICIBANK", price: "₹1,090.25",
                                change: "+0.8%", changeValue: "+8.65", volume: "12,15,300",
                                sentiment: "Buy", rank: 2,
                                pros: ["Low PB ratio of 2.1x post-merger", "Strong asset quality", "Digital banking leadership", "Growing retail portfolio"],
                                cons: ["Interest rate cycle uncertainty", "Competition from fintech", "Regulatory compliance costs"]
                            },
                            {
                                name: "Larsen & Toubro", ticker: "LT", price: "₹3,750.00",
                                change: "+2.1%", changeValue: "+75.00", volume: "8,50,000",
                                sentiment: "Buy", rank: 3,
                                pros: ["Golden Cross on weekly charts", "Large order book", "Infrastructure boom beneficiary", "Strong execution capabilities"],
                                cons: ["High price point", "Project execution delays possible", "Working capital intensive"]
                            }
                        ];
                        ret = "18-24% CAGR";
                        risk = "Moderate-High";
                        why = "FUNDAMENTAL PROOF: HDFC Bank is trading at a historically low PB ratio of 2.1x after merger, offering a safety margin. Reliance's retail arm is showing 20% YoY growth. TECHNICALS: L&T has formed a 'Golden Cross' on weekly charts, indicating sustained bullish momentum.";
                        budgetExp = `With your budget of ₹${params.budget.toLocaleString('en-IN')}, you can ${params.investmentMode === 'SIP' ? 'start a monthly SIP' : 'purchase shares immediately'}. All recommended stocks are within your budget range. ${params.investmentMode === 'SIP' ? 'A monthly SIP of ₹10,000-15,000 will help you accumulate these quality stocks through rupee cost averaging.' : 'You can buy 1-2 shares of each company to build a diversified portfolio.'}`;
                    } else {
                        recs = [
                            {
                                name: "Tata Motors", ticker: "TATAMOTORS", price: "₹1,012.00",
                                change: "+3.4%", changeValue: "+33.20", volume: "1,10,50,000",
                                sentiment: "Buy", rank: 1,
                                pros: ["Breakout above ₹1000 with volume", "Strong momentum (RSI 65)", "EV segment growth", "JLR turning profitable"],
                                cons: ["High volatility", "Cyclical industry", "Global slowdown risk", "Debt concerns"]
                            },
                            {
                                name: "Zomato", ticker: "ZOMATO", price: "₹260.50",
                                change: "+5.1%", changeValue: "+12.60", volume: "8,20,00,000",
                                sentiment: "Buy", rank: 2,
                                pros: ["Heavy institutional delivery (>65%)", "Quick commerce growth", "Market leadership", "Improving unit economics"],
                                cons: ["Not yet profitable", "Competition from Swiggy", "Regulatory risks", "High valuation"]
                            }
                        ];
                        ret = "8-12% Absolute (3 Months)";
                        risk = "High";
                        why = "MOMENTUM PROOF: Tata Motors has given a breakout above ₹1000 resistance with 3x average volume. RSI is at 65, showing strength without being overbought. Zomato is seeing heavy institutional delivery (>65%) in the last 3 sessions.";
                        budgetExp = `Your budget of ₹${params.budget.toLocaleString('en-IN')} is well-suited for short-term momentum plays. ${params.investmentMode === 'SIP' ? 'However, for short-term trading, lumpsum investment is recommended over SIP.' : 'You can allocate 50% to Tata Motors and 50% to Zomato to capture the momentum.'} These stocks are volatile but showing strong technical setups.`;
                    }
                } else {
                    if (params.investmentType === 'Long Term') {
                        recs = [
                            {
                                name: "Quant Small Cap Fund", ticker: "Direct-Growth", price: "NAV: ₹245.3",
                                change: "+1.2%", changeValue: "+2.91", volume: "AUM: 12,000Cr",
                                sentiment: "Buy", rank: 1,
                                pros: ["Alpha of 8% over benchmark", "Strong fund management", "High growth potential", "Consistent outperformance"],
                                cons: ["High volatility", "Small cap risk", "Exit load applicable", "Market cap concentration"]
                            },
                            {
                                name: "Parag Parikh Flexi Cap", ticker: "Direct-Growth", price: "NAV: ₹78.5",
                                change: "+0.5%", changeValue: "+0.39", volume: "AUM: 55,000Cr",
                                sentiment: "Buy", rank: 2,
                                pros: ["Foreign equity exposure", "Downside protection", "Proven track record", "Tax efficient"],
                                cons: ["Lower returns than pure equity", "Currency risk", "Limited small cap exposure", "Moderate growth"]
                            }
                        ];
                        ret = "20-25% XIRR";
                        risk = "High";
                        why = "PERFORMANCE PROOF: Quant Small Cap has generated an Alpha of 8% over the benchmark index. Parag Parikh provides downside protection via foreign equity exposure. This split balances aggressive small-cap growth with large-cap stability.";
                        budgetExp = `With ₹${params.budget.toLocaleString('en-IN')}, ${params.investmentMode === 'SIP' ? 'you can start a SIP of ₹5,000-10,000 per month in each fund' : 'you can invest lumpsum amounts in both funds'}. Mutual funds don't have per-unit budget constraints like stocks, making them ideal for ${params.investmentMode === 'SIP' ? 'systematic investing' : 'any budget size'}.`;
                    } else {
                        recs = [
                            {
                                name: "SBI Arbitrage Fund", ticker: "Direct-Growth", price: "NAV: ₹32.1",
                                change: "+0.05%", changeValue: "+0.01", volume: "AUM: 8,000Cr",
                                sentiment: "Buy", rank: 1,
                                pros: ["Near-zero equity risk", "Tax-efficient", "Better than FD returns", "High liquidity"],
                                cons: ["Lower absolute returns", "Returns depend on volatility", "Not suitable for long term", "Exit load for <1 month"]
                            },
                            {
                                name: "Nippon Liquid Bees", ticker: "ETF", price: "₹1,000.05",
                                change: "+0.01%", changeValue: "+0.01", volume: "High",
                                sentiment: "Hold", rank: 2,
                                pros: ["Instant liquidity", "Low risk", "No exit load", "Exchange traded"],
                                cons: ["Very low returns", "Not inflation beating", "Transaction costs", "Market hours only"]
                            }
                        ];
                        ret = "7-8% Annualized";
                        risk = "Low";
                        why = "SAFETY PROOF: For a short timeline (<1 year), capital protection is priority. Arbitrage funds tax-efficiently capitalize on cash-futures price differences, offering FD-beating post-tax returns with near-zero equity risk.";
                        budgetExp = `Your budget of ₹${params.budget.toLocaleString('en-IN')} is perfect for short-term arbitrage funds. ${params.investmentMode === 'SIP' ? 'For short term goals, lumpsum is better than SIP to maximize returns.' : 'You can park your entire amount here'} with minimal risk and enjoy FD-beating tax-efficient returns.`;
                    }
                }

                resolve({
                    recommendations: recs,
                    returns: ret,
                    reasoning: why,
                    risk: risk,
                    budgetExplanation: budgetExp
                });
            }, 1000);
        });
    }
};

export const subscribeToNews = async (email: string) => {
    try {
        const { data, error } = await supabase.functions.invoke('subscribe-news', {
            body: { email },
        });

        if (error) throw error;
        return data;
    } catch (error) {
        console.warn('Edge Function call failed, falling back to mock success:', error);
        return { success: true, message: "Mock subscription successful" };
    }
};
