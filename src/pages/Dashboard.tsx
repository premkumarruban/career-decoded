import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Brain, FileCheck, Target, User, TrendingUp, Clock, Award } from "lucide-react";

const Dashboard = () => {
  const dashboardStats = [
    {
      title: "Career Match",
      value: "85%",
      description: "Based on your profile",
      icon: TrendingUp,
      color: "text-success"
    },
    {
      title: "Assessments",
      value: "2/3",
      description: "Completed",
      icon: Award,
      color: "text-primary"
    },
    {
      title: "Job Matches",
      value: "12",
      description: "Available",
      icon: Target,
      color: "text-career-foreground"
    },
    {
      title: "Profile",
      value: "90%",
      description: "Complete",
      icon: User,
      color: "text-success"
    }
  ];

  const mainFeatures = [
    {
      icon: Brain,
      title: "Career Guidance",
      description: "Take aptitude tests and get personalized career recommendations based on AI analysis",
      buttonText: "Start Assessment",
      route: "/career-guidance",
      gradient: "bg-gradient-primary",
      features: [
        "Personality assessment (OCEAN model)",
        "Aptitude tests for students",
        "Professional experience analysis",
        "Skill gap identification"
      ]
    },
    {
      icon: FileCheck,
      title: "Resume Parsing",
      description: "Upload your resume for AI-powered analysis and get insights on job compatibility",
      buttonText: "Upload Resume",
      route: "/resume-parsing",
      gradient: "bg-gradient-success",
      features: [
        "Automated skill extraction",
        "Experience timeline analysis",
        "ATS compatibility check",
        "Improvement recommendations"
      ]
    },
    {
      icon: Target,
      title: "Job Role Suggestions",
      description: "Discover perfect job opportunities matched to your profile and career goals",
      buttonText: "View Jobs",
      route: "/job-suggestions",
      gradient: "bg-gradient-hero",
      features: [
        "AI-powered job matching",
        "Salary range insights",
        "Company culture fit",
        "Growth potential analysis"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        {/* Header Section */}
        <section className="py-8 px-4 bg-gradient-card">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
                <p className="text-muted-foreground">
                  Continue your career journey with AI-powered insights
                </p>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Last active: Today</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dashboardStats.map((stat, index) => (
                <Card key={index} className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.title}</p>
                      <p className="text-xs text-muted-foreground">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Career Tools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Access powerful AI-driven tools to enhance your career journey. 
                Each tool is designed to provide personalized insights and recommendations.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
                  <CardHeader className="text-center">
                    <div className={`mx-auto p-4 ${feature.gradient} rounded-xl w-fit group-hover:shadow-glow transition-all duration-300`}>
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <Link to={feature.route} className="block">
                      <Button variant="hero" className="w-full">
                        {feature.buttonText}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Recent Activity</h3>
              
              <div className="space-y-4">
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <Brain className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Completed Personality Assessment</p>
                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gradient-success rounded-lg">
                        <FileCheck className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Resume Analysis Complete</p>
                        <p className="text-sm text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gradient-hero rounded-lg">
                        <Target className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">New Job Matches Available</p>
                        <p className="text-sm text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;