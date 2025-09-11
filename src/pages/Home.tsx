import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import { Brain, FileCheck, Target, TrendingUp, Users, Zap } from "lucide-react";
import heroImage from "@/assets/career-hero.jpg";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Career Guidance",
      description: "Smart career recommendations based on your profile and interests",
      features: [
        "Personalized aptitude assessments",
        "OCEAN personality analysis",
        "Career path suggestions",
        "Skills gap identification"
      ]
    },
    {
      icon: FileCheck,
      title: "Resume Parsing",
      description: "Advanced AI analysis of your resume for better job matching",
      features: [
        "Automated skill extraction",
        "Experience analysis",
        "ATS compatibility check",
        "Improvement suggestions"
      ]
    },
    {
      icon: Target,
      title: "Job Role Suggestions",
      description: "Discover perfect job opportunities tailored to your profile",
      features: [
        "AI-powered job matching",
        "Salary range estimates",
        "Company culture fit",
        "Growth potential analysis"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Your AI-Powered
                  <span className="bg-gradient-hero bg-clip-text text-transparent block">
                    Career Guide
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover your perfect career path with our advanced AI system. 
                  Get personalized guidance, resume analysis, and job recommendations 
                  tailored specifically for you.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    <Brain className="mr-2 h-5 w-5" />
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Sign In
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>10,000+ Users</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  <span>95% Success Rate</span>
                </div>
                <div className="flex items-center">
                  <Zap className="mr-2 h-4 w-4" />
                  <span>AI-Powered</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl blur-3xl"></div>
              <img
                src={heroImage}
                alt="AI Career Guidance Platform"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything You Need for
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Career Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform combines AI technology with career expertise 
              to provide you with the tools you need to advance your career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of professionals who have already discovered their 
              perfect career path with our AI-powered guidance system.
            </p>
            <Link to="/register">
              <Button variant="hero" size="lg" className="shadow-glow">
                <Brain className="mr-2 h-5 w-5" />
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="p-2 bg-gradient-hero rounded-lg">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg bg-gradient-hero bg-clip-text text-transparent">
              CareerAI
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2024 CareerAI. All rights reserved. Empowering careers with AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;