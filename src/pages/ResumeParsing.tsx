import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { Upload, FileText, CheckCircle, AlertCircle, TrendingUp, Download, Eye } from "lucide-react";
import { toast } from "sonner";

const ResumeParsing = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock analysis results
  const analysisResults = {
    overallScore: 85,
    atsCompatibility: 92,
    sections: {
      contactInfo: { score: 95, status: "excellent" },
      summary: { score: 80, status: "good" },
      experience: { score: 90, status: "excellent" },
      education: { score: 85, status: "good" },
      skills: { score: 75, status: "needs-improvement" },
      formatting: { score: 88, status: "good" }
    },
    extractedSkills: [
      "JavaScript", "React", "Node.js", "Python", "SQL", "Git", 
      "AWS", "Docker", "MongoDB", "TypeScript", "Express.js", "REST APIs"
    ],
    experience: {
      totalYears: 3.5,
      roles: [
        { title: "Full Stack Developer", company: "Tech Corp", duration: "2 years" },
        { title: "Frontend Developer", company: "StartupXYZ", duration: "1.5 years" }
      ]
    },
    suggestions: [
      "Add more quantifiable achievements in your experience section",
      "Include more relevant keywords for ATS optimization",
      "Consider adding a projects section to showcase your work",
      "Update your skills section with more recent technologies",
      "Add certifications if available to boost credibility"
    ],
    matchedJobs: [
      { title: "Senior Full Stack Developer", match: 92, company: "TechCorp Inc." },
      { title: "React Developer", match: 88, company: "Innovation Labs" },
      { title: "Frontend Lead", match: 85, company: "Digital Solutions" },
      { title: "JavaScript Developer", match: 82, company: "WebTech Solutions" }
    ]
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf' || file.type.includes('document')) {
        setUploadedFile(file);
        toast.success("Resume uploaded successfully!");
      } else {
        toast.error("Please upload a PDF or Word document");
      }
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.type === 'application/pdf' || file.type.includes('document')) {
        setUploadedFile(file);
        toast.success("Resume uploaded successfully!");
      } else {
        toast.error("Please upload a PDF or Word document");
      }
    }
  };

  const startAnalysis = () => {
    if (!uploadedFile) {
      toast.error("Please upload a resume first");
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      toast.success("Resume analysis completed!");
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-success';
      case 'good': return 'text-primary';
      case 'needs-improvement': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return <CheckCircle className="h-4 w-4 text-success" />;
      case 'good': return <CheckCircle className="h-4 w-4 text-primary" />;
      case 'needs-improvement': return <AlertCircle className="h-4 w-4 text-destructive" />;
      default: return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="p-3 bg-gradient-success rounded-lg">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold">Resume Parsing & Analysis</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Upload your resume for AI-powered analysis, ATS compatibility check, and personalized improvement suggestions
            </p>
          </div>

          {!analysisComplete ? (
            <div className="space-y-8">
              {/* Upload Section */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Upload Your Resume</CardTitle>
                  <CardDescription>
                    Supported formats: PDF, DOC, DOCX (Max size: 10MB)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {uploadedFile ? (
                      <div className="space-y-4">
                        <div className="p-4 bg-success/10 rounded-lg inline-block">
                          <FileText className="h-8 w-8 text-success mx-auto" />
                        </div>
                        <div>
                          <p className="font-medium">{uploadedFile.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <Button variant="outline" onClick={(e) => {
                          e.stopPropagation();
                          setUploadedFile(null);
                        }}>
                          Remove File
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-4 bg-primary/10 rounded-lg inline-block">
                          <Upload className="h-8 w-8 text-primary mx-auto" />
                        </div>
                        <div>
                          <p className="font-medium">Drop your resume here</p>
                          <p className="text-sm text-muted-foreground">
                            or click to browse files
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  {uploadedFile && (
                    <div className="mt-6">
                      <Button 
                        variant="hero" 
                        onClick={startAnalysis}
                        disabled={isAnalyzing}
                        className="w-full"
                      >
                        {isAnalyzing ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                            Analyzing Resume...
                          </>
                        ) : (
                          <>
                            <TrendingUp className="h-4 w-4 mr-2" />
                            Start AI Analysis
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Analysis Progress */}
              {isAnalyzing && (
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>Analyzing Your Resume</CardTitle>
                    <CardDescription>
                      Our AI is processing your resume and extracting insights...
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Extracting text and formatting</span>
                        <span>100%</span>
                      </div>
                      <Progress value={100} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Analyzing content structure</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Extracting skills and experience</span>
                        <span>70%</span>
                      </div>
                      <Progress value={70} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>ATS compatibility check</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            <div className="space-y-8">
              {/* Overall Score */}
              <Card className="bg-gradient-success border-border/50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-success-foreground mb-2">
                      {analysisResults.overallScore}%
                    </div>
                    <p className="text-success-foreground/80">Overall Resume Score</p>
                    <div className="mt-4">
                      <Badge variant="secondary" className="bg-success-foreground/20 text-success-foreground">
                        ATS Compatible: {analysisResults.atsCompatibility}%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section Analysis */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Section Analysis</CardTitle>
                  <CardDescription>
                    Detailed breakdown of each resume section
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(analysisResults.sections).map(([section, data]) => (
                      <div key={section} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(data.status)}
                          <span className="capitalize font-medium">
                            {section.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold ${getStatusColor(data.status)}`}>
                            {data.score}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Extracted Skills */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Extracted Skills</CardTitle>
                  <CardDescription>
                    Skills identified from your resume
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {analysisResults.extractedSkills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience Summary */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Experience Summary</CardTitle>
                  <CardDescription>
                    Professional experience overview
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="font-medium">Total Experience: {analysisResults.experience.totalYears} years</p>
                    </div>
                    <div className="space-y-2">
                      {analysisResults.experience.roles.map((role, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                          <div>
                            <p className="font-medium">{role.title}</p>
                            <p className="text-sm text-muted-foreground">{role.company}</p>
                          </div>
                          <Badge variant="outline">{role.duration}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job Matches */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Job Matches</CardTitle>
                  <CardDescription>
                    Jobs that match your resume profile
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analysisResults.matchedJobs.map((job, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div>
                          <p className="font-medium">{job.title}</p>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-success">{job.match}% match</div>
                          <Progress value={job.match} className="w-20 h-2 mt-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Improvement Suggestions */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Improvement Suggestions</CardTitle>
                  <CardDescription>
                    AI-powered recommendations to enhance your resume
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analysisResults.suggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{suggestion}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
                <Button variant="outline" className="flex-1">
                  <Eye className="h-4 w-4 mr-2" />
                  View Detailed Analysis
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => {
                    setUploadedFile(null);
                    setAnalysisComplete(false);
                  }}
                  className="flex-1"
                >
                  Analyze New Resume
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeParsing;