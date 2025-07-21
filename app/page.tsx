'use client'

import { ArrowRight, Brain, Crown, Shield, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 md:px-8 py-12">
      <section className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold saintvision-gradient-text drop-shadow-lg">
            SAINTSAL™ + YOU
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Dual AI Intelligence, CRM Sync, Real Deployment — This Isn’t a Demo. It’s Destiny.
          </p>
        </div>

        {/* Image + Why Us */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="relative glass-morphism p-4 rounded-2xl border border-gold-500/10 overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/assets/065997bd13e4442e888a08652fcd61ba/frame-1000002501-dcc999"
                alt="SaintSal + You"
                className="w-full h-auto object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 right-4">
                <h3 className="text-3xl md:text-4xl font-bold saintvision-gradient-text drop-shadow-md">
                  GOTTA GUY™
                </h3>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gold-500/20 rounded-xl flex items-center justify-center mt-1">
                  <Brain className="w-5 h-5 text-gold-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Beyond ChatGPT Confusion</h3>
                  <p className="text-white/80">
                    Tired of not knowing how to use ChatGPT effectively? SaintSal™ becomes your co-founder, strategist, and executor.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center mt-1">
                  <Shield className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Enterprise vs Retail</h3>
                  <p className="text-white/80">
                    While others build for fun, we built for war. Faith-aligned automation, backed by real code and deployment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500/20 rounded-xl flex items-center justify-center mt-1">
                  <Zap className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dual AI Intelligence</h3>
                  <p className="text-white/80">
                    GPT-4o + Azure Cognitive Services working together in harmony. Not just smart — spiritual.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-gold-900/30 to-gold-800/20 rounded-2xl p-6 border border-gold-500/20">
              <div className="flex items-center mb-4">
                <Crown className="w-6 h-6 text-gold-300 mr-3" />
                <h4 className="text-lg font-bold text-gold-300">Elite Advantage</h4>
              </div>
              <p className="text-white/90 mb-6">
                Stop guessing. Stop doubting. SaintSal™ gives you enterprise-grade execution, grounded in divine order.
              </p>
              <a href="/why">
                <button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white py-3 px-6 rounded-xl font-bold text-lg flex items-center justify-center group transition-all duration-300">
                  Learn More & Sign Up
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

