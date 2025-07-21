import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
// import { useUserPlan } from "@/hooks/use-plan-protection"; // Not exported
import createSupabaseClient from "@/lib/supabase";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Crown,
  MessageSquare,
  Sparkles,
  Users,
  Globe,
  Lock,
  CheckCircle,
<<<<<<< HEAD
=======
  Star,
  Database,
  TrendingUp,
  Target,
  Cpu,
  Settings,
  Award,
>>>>>>> d00e2eb5ad145375cc805bf4fa27fea383d58b50
} from "lucide-react";

// Mock useUserPlan hook since it's not exported
const useUserPlan = () => ({ plan: 'pro' });

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { plan } = useUserPlan();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Check if user is logged in
    const checkAuth = async () => {
      const supabase = createSupabaseClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsLoggedIn(!!user);
    };
    checkAuth();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

<<<<<<< HEAD
=======
  // Plan-based routing logic for CTA buttons
  const handleDashboardClick = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      navigate("/signin");
    } else {
      navigate("/dashboard");
    }
  };

  const handleCRMToolsClick = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      navigate("/signin");
    } else if (
      plan === "crm" ||
      plan === "enterprise" ||
      plan === "white_label"
    ) {
      navigate("/partnertech");
    } else {
      navigate("/upgrade");
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

>>>>>>> d00e2eb5ad145375cc805bf4fa27fea383d58b50
  return (
    <div className="min-h-screen bg-charcoal-900 text-white relative">
      {/* Hero Background Image */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
<<<<<<< HEAD
          backgroundImage: `linear-gradient(135deg, rgba(16, 22, 28, 0.6) 0%, rgba(16, 22, 28, 0.5) 100%), url('https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F317f7c64793d47ab90d506bd066bedbb?format=webp&width=800')`,
=======
          backgroundImage: `linear-gradient(135deg, rgba(16, 22, 28, 0.8) 0%, rgba(16, 22, 28, 0.6) 100%),
                                                    url('https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F317f7c64793d47ab90d506bd066bedbb?format=webp&width=800')`,
>>>>>>> d00e2eb5ad145375cc805bf4fa27fea383d58b50
          backgroundAttachment: "fixed",
          zIndex: 1,
        }}
      />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="flex items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F863b231460314ff6a606ebae2dd4912a?format=webp&width=800"
                alt="SaintVisionAI Logo"
                className="w-16 h-16 object-contain transition-all duration-300 hover:scale-105"
                style={{
                  filter: "brightness(1.3) contrast(1.1) saturate(1.2)",
                }}
              />
            </div>
          </div>
          <div className="ml-1">
            <h1 className="text-2xl font-bold text-white tracking-tight font-dialien drop-shadow-lg">
              SaintVisionAI™
            </h1>
            <p className="text-xs text-gold-300 -mt-1 font-medium drop-shadow-sm">
              Cookin' Knowledge
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/dashboard" className="text-white/80 hover:text-gold-300 transition-colors">
            Dashboard
          </Link>
          <Link to="/pricing" className="text-white/80 hover:text-gold-300 transition-colors">
            Pricing
          </Link>
<<<<<<< HEAD
          <Link to="/why" className="text-white/80 hover:text-gold-300 transition-colors flex items-center space-x-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F4f08aaff66374bf3bd72e740c34ecf44"
              alt="SaintSal + You"
              className="w-6 h-6 object-contain"
            />
            <span>Why Us</span>
=======
          <Link
            to="/why"
            className="text-white/80 hover:text-gold-300 transition-colors"
          >
            Why Us
>>>>>>> d00e2eb5ad145375cc805bf4fa27fea383d58b50
          </Link>
          <Link to="/help" className="text-white/80 hover:text-gold-300 transition-colors">
            Help
          </Link>
          <Link to="/signin">
            <Button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 bg-transparent border-none shadow-none hover:bg-transparent font-semibold hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
              Sign In
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 bg-transparent border-none shadow-none hover:bg-transparent font-semibold hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">
              Start Cookin'
            </Button>
          </Link>
        </div>

        {/* Mobile menu button - visible on mobile */}
        <div className="md:hidden">
          <Button
            className="text-white hover:text-gold-300 bg-transparent border-none shadow-none cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('/dashboard');
            }}
          >
            Menu
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-40 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <div className={`transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="mb-8">
            <div className="relative inline-block -mt-1 -mb-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F5af1b2848cdd4695bab7fa0b4affb339"
                alt="SaintVisionAI Logo"
                className="h-60 object-contain mx-auto mb-11"
                style={{
                  width: "367px",
                  filter: "brightness(1.2) contrast(1.1) saturate(1.1)",
                }}
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="saintvision-gradient-text font-dialien">SaintSal™</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gold-300 mb-6 font-medium font-dropline">
            Cookin' Knowledge.
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl">
            AI doesn't just answer. It{" "}
            <span className="text-blue-400 font-medium">adapts</span>. It{" "}
            <span className="text-purple-400 font-medium">empowers</span>. It becomes
            <span className="text-gold-300 font-semibold"> your enterprise companion</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-8">
            <Button
              size="lg"
<<<<<<< HEAD
              onClick={() => navigate("/dashboard")}
              className="text-yellow-400 hover:text-yellow-300 text-xl font-semibold transition-all duration-200 bg-transparent border-none shadow-none hover:bg-transparent group hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.9)]"
=======
              onClick={handleDashboardClick}
              className="text-yellow-400 hover:text-yellow-300 text-xl font-semibold transition-all duration-200 bg-transparent border-none shadow-none hover:bg-transparent group hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.9)] cursor-pointer"
>>>>>>> d00e2eb5ad145375cc805bf4fa27fea383d58b50
            >
              Start Cookin' Knowledge
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
<<<<<<< HEAD
              onClick={() => navigate("/partnertech")}
              className="text-blue-400 hover:text-blue-300 text-lg font-semibold transition-all duration-200 bg-transparent border-none shadow-none hover:bg-transparent hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.9)]"
=======
              onClick={handleCRMToolsClick}
              className="text-blue-400 hover:text-blue-300 text-lg font-semibold transition-all duration-200 bg-transparent border-none shadow-none hover:bg-transparent hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.9)] cursor-pointer"
>>>>>>> d00e2eb5ad145375cc805bf4fa27fea383d58b50
            >
              Try CRM Tools
              <Shield className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="glass-morphism rounded-full px-6 py-3 mb-8">
            <p className="text-gold-300 font-semibold text-sm uppercase tracking-wider">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Enterprise Ready
            </p>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="relative z-40 py-32 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white font-dialien">
              Elite Technology
            </h2>
            <p className="text-xl text-gold-300 font-medium mb-4">
              ENTERPRISE READY
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Dual AI systems handle your business operations while you focus on what matters - growing your empire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-morphism p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-gold-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-gold-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Strategy</h3>
              <p className="text-white/70 leading-relaxed">
                AI that analyzes market trends, automates research, and strategizes planning powered by dual AI engines.
              </p>
            </div>

            <div className="glass-morphism p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">CRM Integration</h3>
              <p className="text-white/70 leading-relaxed">
                Seamlessly connect with GoHighLevel, automate follow-ups, and intelligent lead scoring.
              </p>
            </div>

            <div className="glass-morphism p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-green-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth Analytics</h3>
              <p className="text-white/70 leading-relaxed">
                Real-time insights with actionable intelligence to scale faster with smarter business decisions.
=======
      {/* What Separates Us Section */}
      <section className="relative z-40 py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 saintvision-gradient-text">
              What Separates Us?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover why thousands choose SaintSal™ as their enterprise AI companion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dual AI Power */}
            <div className="glass-morphism p-8 rounded-xl hover:saintvision-glow-soft transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                  <Cpu className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Dual AI Power</h3>
              </div>
              <p className="text-blue-300 font-semibold mb-3">GPT-4o + Azure Cognitive Services</p>
              <p className="text-white/80 mb-4">
                Advanced dual AI architecture combining OpenAI's GPT-4o with Azure Cognitive Services
                for unmatched intelligence and reliability.
              </p>
            </div>

            {/* Enterprise Security */}
            <div className="glass-morphism p-8 rounded-xl hover:saintvision-glow-soft transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Enterprise Security</h3>
              </div>
              <p className="text-green-300 font-semibold mb-3">Faith-aligned, private, and secure</p>
              <p className="text-white/80 mb-4">
                Bank-grade encryption meets faith-centered values. Your data protected with military-grade
                security and ethical business practices.
              </p>
            </div>

            {/* Elite Technology */}
            <div className="glass-morphism p-8 rounded-xl hover:saintvision-glow-soft transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mr-4">
                  <Crown className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Elite Technology</h3>
              </div>
              <p className="text-gold-300 font-semibold mb-3">Premium infrastructure & reliability</p>
              <p className="text-white/80 mb-4">
                Enterprise-grade infrastructure with 99.99% uptime, premium support, and cutting-edge
                technology stack designed for scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PartnerTech AI Section */}
      <section className="relative z-40 py-20 px-6 lg:px-12 bg-black/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              PartnerTech AI
            </h2>
            <p className="text-gold-300 text-xl font-semibold mb-6">Premium Tier</p>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              When you're ready to scale. Advanced CRM integration, Chrome extension automation, AI-triggered workflows,
              and intelligent client routing systems.
            </p>
          </div>

          <div className="glass-morphism p-8 rounded-xl max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Crown className="w-8 h-8 text-gold-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">PartnerTech AI</h3>
              </div>
              <span className="bg-gold-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                PREMIUM
              </span>
            </div>

            <p className="text-white/80 mb-6">
              When you're ready to scale. Advanced CRM integration, Chrome extension automation, AI-triggered workflows,
              and intelligent client routing systems.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white/80">Enterprise CRM Integration</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white/80">Chrome extension automation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white/80">AI workflow triggers</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white/80">Intelligent client routing</span>
              </div>
            </div>

            <Button className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold py-3 rounded-lg transition-all duration-300 hover:saintvision-glow">
              Unlock Partner Access
            </Button>
          </div>

          {/* Integration Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="glass-morphism p-6 rounded-lg text-center">
              <Database className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-medium">CRM</p>
              <p className="text-white/60 text-sm">PartnerTech</p>
            </div>
            <div className="glass-morphism p-6 rounded-lg text-center">
              <Globe className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-white font-medium">Chrome</p>
              <p className="text-white/60 text-sm">Extension Automation</p>
            </div>
            <div className="glass-morphism p-6 rounded-lg text-center">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-white font-medium">Triggers</p>
              <p className="text-white/60 text-sm">AI Workflows</p>
            </div>
            <div className="glass-morphism p-6 rounded-lg text-center">
              <Brain className="w-8 h-8 text-gold-400 mx-auto mb-2" />
              <p className="text-white font-medium">AI Logic</p>
              <p className="text-white/60 text-sm">Intelligent Routing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Technology Section */}
      <section className="relative z-40 py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Elite Technology
            </h2>
            <p className="text-gold-300 text-xl font-semibold mb-6">ENTERPRISE READY</p>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Dual AI systems handle your business operations while you focus on what matters - growing
              your empire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-morphism p-8 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Business Strategy</h3>
              <p className="text-white/80">
                AI-driven research, and strategies planning powered by dual AI engines.
              </p>
            </div>

            <div className="glass-morphism p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">CRM Integration</h3>
              <p className="text-white/80">
                Seamlessly connect with GoHighLevel, Generate leads and intelligent routing.
              </p>
            </div>

            <div className="glass-morphism p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Growth Analytics</h3>
              <p className="text-white/80">
                Advanced analytics and business intelligence to scale faster with smarter business decisions.
>>>>>>> d00e2eb5ad145375cc805bf4fa27fea383d58b50
              </p>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Security & Vault Section */}
      <section className="relative z-40 py-32 bg-charcoal-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white font-dialien">
              Vault & Security
            </h2>
            <p className="text-xl text-gold-300 font-medium mb-4">
              Faith-Aligned Data Protection
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Bank-grade security meets faith-centered values. Your data protected with military-grade encryption and ethical business practices.
            </p>
          </div>

          <div className="flex gap-8 max-lg:flex-col items-start justify-center mb-16">
            <div className="flex flex-col w-[400px] max-lg:w-full">
              <div className="glass-morphism p-8 rounded-2xl border border-green-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-8 h-8 text-green-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Faith-Aligned Vault</h3>
                    <p className="text-green-300 text-sm">Secure. Private. Moral.</p>
                  </div>
                </div>

                <p className="text-white/80 mb-6 leading-relaxed">
                  Your conversations, billing data, and personal information protected with ethical encryption and faith-based principles.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white">Secure Private Vault</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white">End-to-end encryption</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white">Secure Stripe billing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white">Bank-based encryption</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white">Faith-centered data practices</span>
                  </li>
                </ul>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 font-medium">Enterprise Security</span>
                  </div>
=======
      {/* Vault & Security Section */}
      <section className="relative z-40 py-20 px-6 lg:px-12 bg-black/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Vault & Security
            </h2>
            <p className="text-green-300 text-xl font-semibold mb-6">Faith-Aligned Data Protection</p>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Bank-grade security meets faith-centered values. Your data protected with military-grade
              encryption and ethical business practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Faith-Aligned Vault */}
            <div className="glass-morphism p-8 rounded-xl border-2 border-green-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Faith-Aligned Vault</h3>
              </div>
              <p className="text-green-300 font-semibold mb-4">End-to-end encryption</p>
              <p className="text-white/80 mb-6">
                Your conversations, billing data, and personal information are protected with ethical encryption
                and faith-based practices.
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-white/80 text-sm">Secure Private Vault</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-white/80 text-sm">End-to-end encryption</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-white/80 text-sm">Secure Stripe billing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-white/80 text-sm">Bank-based encryption</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-white/80 text-sm">Faith-centered data practices</span>
>>>>>>> d00e2eb5ad145375cc805bf4fa27fea383d58b50
                </div>
              </div>
            </div>

<<<<<<< HEAD
            <div className="flex flex-col w-[400px] max-lg:w-full">
              <div className="glass-morphism p-8 rounded-2xl border border-blue-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Lock className="w-8 h-8 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Protected Data Vault</h3>
                    <p className="text-blue-300 text-sm">Military-Grade Protection</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Encryption Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-300 font-medium">AES-256 Active</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Data Location</span>
                    <span className="text-blue-300 font-medium">Private Cloud</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Access Control</span>
                    <span className="text-purple-300 font-medium">Role-Based</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Ethics Compliance</span>
                    <span className="text-gold-300 font-medium">Faith-Aligned</span>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-blue-300" />
                    <span className="text-blue-300 font-medium">99.99% Uptime SLA</span>
                  </div>
=======
            {/* Protected Data Vault */}
            <div className="glass-morphism p-8 rounded-xl border-2 border-blue-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Protected Data Vault</h3>
              </div>
              <p className="text-blue-300 font-semibold mb-4">Military-Grade Protection</p>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Encryption Status</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-green-400 font-semibold">AES-256 Active</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Data Location</span>
                  <span className="text-white/80">Private Cloud</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Access Control</span>
                  <span className="text-white/80">Role-Based</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Ethics Compliance</span>
                  <span className="text-white/80">Faith-Aligned</span>
                </div>
              </div>

              <div className="bg-blue-500/10 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-300 text-sm">99.99% Uptime SLA</span>
                  <CheckCircle className="w-4 h-4 text-green-400" />
>>>>>>> d00e2eb5ad145375cc805bf4fa27fea383d58b50
                </div>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="glass-morphism p-6 rounded-xl text-center border border-green-500/10">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-300" />
              </div>
              <h4 className="font-semibold mb-2 text-green-300">AES-256</h4>
              <p className="text-white/70 text-sm">Military-grade encryption</p>
            </div>
            <div className="glass-morphism p-6 rounded-xl text-center border border-blue-500/10">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-blue-300" />
              </div>
              <h4 className="font-semibold mb-2 text-blue-300">Zero-Trust</h4>
              <p className="text-white/70 text-sm">Role-based access control</p>
            </div>
            <div className="glass-morphism p-6 rounded-xl text-center border border-purple-500/10">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-purple-300" />
              </div>
              <h4 className="font-semibold mb-2 text-purple-300">Private Cloud</h4>
              <p className="text-white/70 text-sm">Dedicated infrastructure</p>
            </div>
            <div className="glass-morphism p-6 rounded-xl text-center border border-gold-500/10">
              <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-gold-300" />
              </div>
              <h4 className="font-semibold mb-2 text-gold-300">Faith-Aligned</h4>
              <p className="text-white/70 text-sm">Ethical data practices</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/60 mb-6">Trusted by thousands of faith-based businesses</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/40 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4" />
                <span>GDPR Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Faith-Centered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>99.99% Uptime</span>
=======
          {/* Security Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-morphism p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <h4 className="text-white font-bold mb-1">AES-256</h4>
              <p className="text-white/60 text-sm">Military-grade encryption</p>
            </div>
            <div className="glass-morphism p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-white font-bold mb-1">Zero-Trust</h4>
              <p className="text-white/60 text-sm">Role-based access control</p>
            </div>
            <div className="glass-morphism p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-white font-bold mb-1">Private Cloud</h4>
              <p className="text-white/60 text-sm">Dedicated infrastructure</p>
            </div>
            <div className="glass-morphism p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-white font-bold mb-1">Faith-Aligned</h4>
              <p className="text-white/60 text-sm">Ethical data practices</p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-white/60 text-center">
              Trusted by thousands of faith-based businesses
            </p>
            <div className="flex justify-center items-center mt-4 space-x-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white/70">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white/70">GDPR Ready</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white/70">Faith-Centered</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white/70">99.99% License</span>
>>>>>>> d00e2eb5ad145375cc805bf4fa27fea383d58b50
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* What Separates Us Section */}
      <section className="relative z-40 py-32 bg-gradient-to-r from-charcoal-800/80 to-charcoal-900/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white font-dialien">
              What Separates <span className="saintvision-gradient-text">SaintVisionAI</span>
            </h2>
            <p className="text-xl text-gold-300 font-medium mb-4">
              FROM PARTNERTECH AI & EVERYONE ELSE
            </p>
            <p className="text-lg text-white/80 max-w-4xl mx-auto">
              While others focus on retail POS systems and generic solutions, we built enterprise AI that understands your business, values, and vision.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/10 p-8 rounded-3xl border border-gold-400/20 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F863b231460314ff6a606ebae2dd4912a?format=webp&width=800"
                    alt="SaintVisionAI"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold saintvision-gradient-text mb-2">SaintVisionAI™</h3>
                <p className="text-gold-300 font-medium">Enterprise AI Companion</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">Faith-aligned business intelligence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">Dual AI systems (GPT-4o + Azure)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">GoHighLevel CRM integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">Real-time business strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">Patent-protected proprietary tech</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">Enterprise-grade security vault</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">Natural conversation interface</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-500/10 to-gray-600/10 p-8 rounded-3xl border border-gray-400/20 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-400">PT</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-300 mb-2">PartnerTech AI</h3>
                <p className="text-gray-400 font-medium">Retail POS Solutions</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">Self-checkout hardware focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">Retail/hospitality industry specific</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">POS terminal integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">Transaction fraud prevention</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">Hardware-dependent solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">Limited to point-of-sale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">No business intelligence</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-gold-900/30 to-gold-800/30 rounded-3xl p-12 border border-gold-500/20 backdrop-blur-sm">
            <h3 className="text-4xl font-bold mb-6 saintvision-gradient-text">
              The Clear Choice for Business Leaders
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-gold-300">Your Business Partner</h4>
                <p className="text-white/80">
                  Not just software - an AI companion that understands your industry, values, and vision for growth.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-gold-300">Complete Solution</h4>
                <p className="text-white/80">
                  From strategy to execution, CRM to analytics - everything you need in one faith-aligned platform.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-gold-300">Enterprise Ready</h4>
                <p className="text-white/80">
                  Patent-protected technology with bank-grade security that scales with your business empire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movement/CTA Section */}
      <section className="relative z-40 py-32 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.8) contrast(1.2) saturate(1.1)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/95 via-charcoal-900/75 to-charcoal-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 via-transparent to-charcoal-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-12">
            <p className="text-gold-300 font-medium text-sm uppercase tracking-wider mb-4 drop-shadow-2xl">
              THE MOVEMENT
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white font-dialien drop-shadow-2xl">
              Elite AI Sanctuary
            </h2>
            <div className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-gold-500/30 max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-lg">
                Built for those who refuse to compromise on excellence, privacy, or values. Join thousands who've discovered their GOTTA GUY®.
=======
      {/* Elite AI Sanctuary Section */}
      <section className="relative z-40 py-20 px-6 lg:px-12 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <p className="text-gold-300 text-sm font-bold uppercase tracking-wider mb-4">
              THE MOVEMENT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Elite AI Sanctuary
            </h2>
            <div className="glass-morphism p-8 rounded-xl mb-8">
              <p className="text-xl text-white/90 mb-6">
                Built for those who refuse to compromise on excellence, privacy, or values. Join
                thousands who've discovered their GOTTA GUY®.
>>>>>>> d00e2eb5ad145375cc805bf4fa27fea383d58b50
              </p>
            </div>
          </div>

<<<<<<< HEAD
          <div className="glass-morphism p-8 rounded-2xl max-w-4xl mx-auto mb-12 border border-gold-500/20">
            <div className="flex items-center justify-center mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F43517f7e94d44c8495e4734412e8899d"
                alt="SaintSal Logo"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-gold-300">
                  SAINTSAL® • Cookin' Knowledge
                </h3>
              </div>
            </div>

            <blockquote className="text-lg md:text-xl text-white/90 italic mb-6 leading-relaxed">
              "We built this for the builders, the believers, the ones who
              demand more than chatbots. This is enterprise AI with a soul,
              technology with values, innovation with integrity."
            </blockquote>

            <div className="text-center">
              <p className="text-gold-300 font-medium mb-2">
                ✦ SaintVisionAI™ Access
              </p>
              <p className="text-white/70 text-sm">
                Azure Cognitive Services • OpenAI GPT-4o ⚊⚊ Premium Infrastructure
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-900 text-xl font-bold px-12 py-4 rounded-xl transition-all duration-300 hover:scale-105 saintvision-glow"
              >
                Join The Movement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Link to="/why">
              <Button
                size="lg"
                variant="outline"
                className="border-gold-400/30 text-gold-300 hover:bg-gold-400/10 text-xl font-semibold px-12 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Discover Your Guy
              </Button>
            </Link>
          </div>
=======
          {/* Quote Section */}
          <div className="glass-morphism p-8 rounded-xl mb-12 max-w-3xl mx-auto">
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F863b231460314ff6a606ebae2dd4912a?format=webp&width=800"
                alt="SaintSal Logo"
                className="w-8 h-8 mr-3"
              />
              <div>
                <p className="text-gold-300 font-bold">SAINTSAL® • Cookin' Knowledge</p>
              </div>
            </div>
            <blockquote className="text-lg italic text-white/90 mb-6">
              "We built this for the builders, the believers, the ones who demand more than chatbots. This is
              enterprise AI with a soul, technology with values, innovation with integrity."
            </blockquote>
            <div className="text-center">
              <p className="text-gold-300 font-semibold">● SaintVisionAI™ Access</p>
              <p className="text-white/70 text-sm">Azure Cognitive Services • OpenAI GPT-4o — Premium Infrastructure</p>
            </div>
          </div>

          {/* Final CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleDashboardClick}
              className="bg-gold-500 hover:bg-gold-600 text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:saintvision-glow cursor-pointer"
            >
              Join The Movement
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate("/why");
              }}
              className="border border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              Discover Your Guy
            </Button>
          </div>

          {/* Footer Links */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
              <div>
                <div className="flex items-center mb-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F863b231460314ff6a606ebae2dd4912a?format=webp&width=800"
                    alt="SaintVisionAI Logo"
                    className="w-6 h-6 mr-2"
                  />
                  <h4 className="text-white font-bold">SaintVisionAI™</h4>
                </div>
                <p className="text-white/60 text-sm">Cookin' Knowledge</p>
                <div className="mt-4 space-y-2">
                  <Link to="/console" className="block text-white/70 hover:text-gold-300 text-sm transition-colors">
                    Console
                  </Link>
                  <Link to="/crm" className="block text-white/70 hover:text-gold-300 text-sm transition-colors">
                    CRM
                  </Link>
                  <Link to="/upgrade" className="block text-white/70 hover:text-gold-300 text-sm transition-colors">
                    Upgrade
                  </Link>
                  <Link to="/hacp" className="block text-white/70 hover:text-gold-300 text-sm transition-colors">
                    HACP™ Patent
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-3">Platform</h4>
                <div className="space-y-2">
                  <Link to="/dashboard" className="block text-white/70 hover:text-gold-300 text-sm transition-colors">
                    Dashboard
                  </Link>
                  <Link to="/partnertech" className="block text-white/70 hover:text-gold-300 text-sm transition-colors">
                    PartnerTech
                  </Link>
                  <Link to="/pricing" className="block text-white/70 hover:text-gold-300 text-sm transition-colors">
                    Pricing
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-3">Legal & Support</h4>
                <div className="space-y-2">
                  <Link to="/help" className="block text-white/70 hover:text-gold-300 text-sm transition-colors">
                    Help
                  </Link>
                  <Link to="/terms" className="block text-white/70 hover:text-gold-300 text-sm transition-colors">
                    Terms of Service
                  </Link>
                  <Link to="/data-processing" className="block text-white/70 hover:text-gold-300 text-sm transition-colors">
                    Data Processing
                  </Link>
                </div>
              </div>

              <div>
                <div className="space-y-2">
                  <Link to="/privacy" className="block text-white/70 hover:text-gold-300 text-sm transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/gdpr" className="block text-white/70 hover:text-gold-300 text-sm transition-colors">
                    GDPR Compliance
                  </Link>
                  <Link to="/security" className="block text-white/70 hover:text-gold-300 text-sm transition-colors">
                    Security Policy
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-white/50 text-sm">
                © 2024 Saint Vision Group LLC. All rights reserved. Powered Limited Partnership.
              </p>
              <div className="flex justify-center items-center mt-2 space-x-4 text-xs text-white/40">
                <span>●GDPR • CCPA • SOC2</span>
                <span>●Enterprise Security</span>
                <span>●US Patent 10,394</span>
              </div>
            </div>
          </div>
>>>>>>> d00e2eb5ad145375cc805bf4fa27fea383d58b50
        </div>
      </section>

      <Footer />
    </div>
  );
}
