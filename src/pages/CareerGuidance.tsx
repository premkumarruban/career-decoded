import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import { Brain, GraduationCap, Briefcase, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const CareerGuidance = () => {
  const [step, setStep] = useState<'selection' | 'student-test' | 'professional-form' | 'results'>('selection');
  const [userType, setUserType] = useState<'student' | 'professional'>('student');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [professionalData, setProfessionalData] = useState({
    projects: '',
    domain: '',
    experience: '',
    skills: '',
    interests: ''
  });

  const aptitudeQuestions = [
    {
      question: "What do you enjoy most about learning?",
      options: [
        "Solving complex mathematical problems",
        "Understanding how things work",
        "Creating artistic expressions",
        "Helping and teaching others",
        "Analyzing data and patterns"
      ]
    },
    {
      question: "Which activity appeals to you most?",
      options: [
        "Building or fixing things",
        "Writing stories or articles",
        "Organizing events or leading teams",
        "Conducting scientific experiments",
        "Creating digital content or designs"
      ]
    },
    {
      question: "What motivates you the most?",
      options: [
        "Recognition and achievement",
        "Making a positive impact on society",
        "Financial stability and growth",
        "Creative freedom and expression",
        "Learning and discovery"
      ]
    },
    {
      question: "How do you prefer to work?",
      options: [
        "Independently with minimal supervision",
        "In small collaborative teams",
        "Leading large groups",
        "One-on-one with people",
        "Following structured procedures"
      ]
    },
    {
      question: "What type of environment energizes you?",
      options: [
        "Fast-paced and dynamic",
        "Quiet and contemplative",
        "Social and interactive",
        "Structured and organized",
        "Creative and flexible"
      ]
    }
  ];

  const oceanResults = {
    student: {
      openness: 85,
      conscientiousness: 75,
      extraversion: 60,
      agreeableness: 80,
      neuroticism: 30
    },
    professional: {
      openness: 90,
      conscientiousness: 85,
      extraversion: 70,
      agreeableness: 85,
      neuroticism: 25
    }
  };

  const careerSuggestions = {
    student: [
      "Software Engineer - Your analytical skills and problem-solving abilities make this an excellent fit",
      "Data Scientist - Your interest in patterns and analysis aligns perfectly with this field",
      "UX/UI Designer - Your creativity combined with logical thinking suits this career",
      "Product Manager - Your leadership potential and organizational skills are ideal",
      "Research Scientist - Your curiosity and systematic approach match this path"
    ],
    professional: [
      "Senior Software Architect - Your technical experience and leadership skills align well",
      "Engineering Manager - Your project management experience and technical background fit perfectly",
      "Technical Consultant - Your diverse experience can help businesses solve complex problems",
      "Startup CTO - Your technical expertise and business understanding are valuable",
      "Tech Lead - Your combination of technical skills and mentoring abilities suit this role"
    ]
  };

  const handleUserTypeSelection = (type: 'student' | 'professional') => {
    setUserType(type);
    setStep(type === 'student' ? 'student-test' : 'professional-form');
  };

  const handleAnswerSelect = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < aptitudeQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep('results');
      toast.success("Assessment completed! Analyzing your results...");
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleProfessionalSubmit = () => {
    if (professionalData.projects && professionalData.domain && professionalData.experience) {
      setStep('results');
      toast.success("Profile analysis completed! Generating recommendations...");
    } else {
      toast.error("Please fill in all required fields");
    }
  };

  const progress = userType === 'student' ? ((currentQuestion + 1) / aptitudeQuestions.length) * 100 : 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="p-3 bg-gradient-primary rounded-lg">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold">AI Career Guidance</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get personalized career recommendations based on your profile, interests, and AI analysis
            </p>
          </div>

          {/* User Type Selection */}
          {step === 'selection' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-center mb-8">Choose Your Path</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card 
                  className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-card border-border/50"
                  onClick={() => handleUserTypeSelection('student')}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto p-4 bg-gradient-primary rounded-xl w-fit group-hover:shadow-glow transition-all duration-300">
                      <GraduationCap className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">I'm a Student</CardTitle>
                    <CardDescription>
                      Take aptitude tests and personality assessments to discover your ideal career path
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-success mr-2" />
                        Comprehensive aptitude assessment
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-success mr-2" />
                        OCEAN personality analysis
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-success mr-2" />
                        Educational path recommendations
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-success mr-2" />
                        Skill development roadmap
                      </li>
                    </ul>
                    <Button variant="hero" className="w-full mt-6">
                      Start Student Assessment
                    </Button>
                  </CardContent>
                </Card>

                <Card 
                  className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-card border-border/50"
                  onClick={() => handleUserTypeSelection('professional')}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto p-4 bg-gradient-success rounded-xl w-fit group-hover:shadow-glow transition-all duration-300">
                      <Briefcase className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">I'm a Professional</CardTitle>
                    <CardDescription>
                      Share your experience and get career advancement recommendations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-success mr-2" />
                        Experience-based analysis
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-success mr-2" />
                        Career advancement paths
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-success mr-2" />
                        Skill gap identification
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-success mr-2" />
                        Industry transition guidance
                      </li>
                    </ul>
                    <Button variant="success" className="w-full mt-6">
                      Start Professional Analysis
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Student Aptitude Test */}
          {step === 'student-test' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between mb-6">
                <Button 
                  variant="outline" 
                  onClick={() => setStep('selection')}
                  className="flex items-center"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {aptitudeQuestions.length}
                  </p>
                  <Progress value={progress} className="w-32 mt-2" />
                </div>
              </div>

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {aptitudeQuestions[currentQuestion].question}
                  </CardTitle>
                  <CardDescription>
                    Choose the option that best describes you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={answers[currentQuestion] || ""} 
                    onValueChange={handleAnswerSelect}
                  >
                    {aptitudeQuestions[currentQuestion].options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  
                  <div className="flex justify-between mt-8">
                    <Button 
                      variant="outline" 
                      onClick={handlePreviousQuestion}
                      disabled={currentQuestion === 0}
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    <Button 
                      variant="hero" 
                      onClick={handleNextQuestion}
                      disabled={!answers[currentQuestion]}
                    >
                      {currentQuestion === aptitudeQuestions.length - 1 ? 'Complete Assessment' : 'Next'}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Professional Form */}
          {step === 'professional-form' && (
            <div className="space-y-8">
              <div className="flex items-center mb-6">
                <Button 
                  variant="outline" 
                  onClick={() => setStep('selection')}
                  className="flex items-center"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </div>

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Professional Profile Analysis</CardTitle>
                  <CardDescription>
                    Tell us about your professional experience to get personalized recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="projects">Projects & Achievements *</Label>
                    <Textarea
                      id="projects"
                      placeholder="Describe your key projects, achievements, and responsibilities..."
                      value={professionalData.projects}
                      onChange={(e) => setProfessionalData({...professionalData, projects: e.target.value})}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="domain">Domain & Industry *</Label>
                    <Textarea
                      id="domain"
                      placeholder="What industry/domain do you work in? What's your specialization?"
                      value={professionalData.domain}
                      onChange={(e) => setProfessionalData({...professionalData, domain: e.target.value})}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Textarea
                      id="experience"
                      placeholder="How many years of experience do you have? What roles have you held?"
                      value={professionalData.experience}
                      onChange={(e) => setProfessionalData({...professionalData, experience: e.target.value})}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="skills">Key Skills</Label>
                    <Textarea
                      id="skills"
                      placeholder="List your technical and soft skills..."
                      value={professionalData.skills}
                      onChange={(e) => setProfessionalData({...professionalData, skills: e.target.value})}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interests">Career Interests</Label>
                    <Textarea
                      id="interests"
                      placeholder="What are your career goals and interests for the future?"
                      value={professionalData.interests}
                      onChange={(e) => setProfessionalData({...professionalData, interests: e.target.value})}
                      className="mt-2"
                    />
                  </div>

                  <Button variant="hero" onClick={handleProfessionalSubmit} className="w-full">
                    Analyze My Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Results */}
          {step === 'results' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <div className="p-4 bg-gradient-success rounded-xl w-fit mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Analysis Complete!</h2>
                <p className="text-muted-foreground">Here are your personalized career recommendations</p>
              </div>

              {userType === 'student' && (
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>OCEAN Personality Analysis</CardTitle>
                    <CardDescription>
                      Your personality traits based on the Big Five model
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(oceanResults.student).map(([trait, score]) => (
                      <div key={trait} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="capitalize font-medium">{trait}</span>
                          <span className="text-sm text-muted-foreground">{score}%</span>
                        </div>
                        <Progress value={score} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Career Recommendations</CardTitle>
                  <CardDescription>
                    AI-generated career suggestions based on your {userType === 'student' ? 'aptitude test' : 'professional profile'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {careerSuggestions[userType].map((suggestion, index) => (
                      <div key={index} className="p-4 bg-muted/30 rounded-lg">
                        <p className="font-medium text-sm">{suggestion}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    <Button variant="hero" className="flex-1">
                      Save Results
                    </Button>
                    <Button variant="outline" onClick={() => setStep('selection')} className="flex-1">
                      Take Another Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;