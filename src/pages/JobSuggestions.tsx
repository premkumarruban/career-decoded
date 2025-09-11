import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import { Target, MapPin, DollarSign, Clock, Building, Filter, Heart, ExternalLink, Bookmark } from "lucide-react";
import { toast } from "sonner";

const JobSuggestions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [savedJobs, setSavedJobs] = useState<Set<number>>(new Set());

  const jobSuggestions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3-5 years",
      salary: "$90,000 - $130,000",
      match: 95,
      description: "Join our innovative team to build cutting-edge web applications using React, Node.js, and modern technologies.",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      posted: "2 days ago",
      remote: true,
      benefits: ["Health Insurance", "401k", "Flexible Hours", "Remote Work"]
    },
    {
      id: 2,
      title: "Frontend React Developer",
      company: "Innovation Labs",
      location: "New York, NY",
      type: "Full-time",
      experience: "2-4 years",
      salary: "$75,000 - $105,000",
      match: 88,
      description: "Create beautiful, responsive user interfaces for our SaaS platform using React and modern CSS frameworks.",
      skills: ["React", "JavaScript", "CSS", "Redux", "Jest"],
      posted: "1 day ago",
      remote: false,
      benefits: ["Health Insurance", "Dental", "Stock Options", "Learning Budget"]
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "Digital Solutions",
      location: "Austin, TX",
      type: "Contract",
      experience: "3-6 years",
      salary: "$85,000 - $120,000",
      match: 82,
      description: "Work on diverse projects ranging from e-commerce platforms to data visualization tools.",
      skills: ["JavaScript", "Python", "React", "Django", "PostgreSQL"],
      posted: "3 days ago",
      remote: true,
      benefits: ["Flexible Schedule", "Project Bonuses", "Remote Work"]
    },
    {
      id: 4,
      title: "JavaScript Developer",
      company: "WebTech Solutions",
      location: "Seattle, WA",
      type: "Full-time",
      experience: "1-3 years",
      salary: "$70,000 - $95,000",
      match: 78,
      description: "Develop and maintain client websites and web applications using modern JavaScript frameworks.",
      skills: ["JavaScript", "Vue.js", "Node.js", "HTML", "CSS"],
      posted: "5 days ago",
      remote: true,
      benefits: ["Health Insurance", "PTO", "Professional Development"]
    },
    {
      id: 5,
      title: "React Native Developer",
      company: "Mobile First Tech",
      location: "Los Angeles, CA",
      type: "Full-time",
      experience: "2-5 years",
      salary: "$80,000 - $115,000",
      match: 75,
      description: "Build cross-platform mobile applications for iOS and Android using React Native.",
      skills: ["React Native", "JavaScript", "Redux", "iOS", "Android"],
      posted: "1 week ago",
      remote: false,
      benefits: ["Health Insurance", "Stock Options", "Gym Membership"]
    },
    {
      id: 6,
      title: "Backend Node.js Developer",
      company: "CloudScale Systems",
      location: "Denver, CO",
      type: "Full-time",
      experience: "3-7 years",
      salary: "$85,000 - $125,000",
      match: 73,
      description: "Design and implement scalable backend systems and APIs for our cloud-based platform.",
      skills: ["Node.js", "Express", "MongoDB", "AWS", "Docker"],
      posted: "4 days ago",
      remote: true,
      benefits: ["Health Insurance", "401k", "Unlimited PTO", "Remote Work"]
    }
  ];

  const handleSaveJob = (jobId: number) => {
    const newSavedJobs = new Set(savedJobs);
    if (savedJobs.has(jobId)) {
      newSavedJobs.delete(jobId);
      toast.success("Job removed from saved list");
    } else {
      newSavedJobs.add(jobId);
      toast.success("Job saved successfully!");
    }
    setSavedJobs(newSavedJobs);
  };

  const getMatchColor = (match: number) => {
    if (match >= 90) return "text-success";
    if (match >= 80) return "text-primary";
    if (match >= 70) return "text-career-foreground";
    return "text-muted-foreground";
  };

  const getMatchBadgeVariant = (match: number) => {
    if (match >= 90) return "default";
    if (match >= 80) return "secondary";
    return "outline";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="p-3 bg-gradient-hero rounded-lg">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold">Job Role Suggestions</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover job opportunities perfectly matched to your skills and career goals using AI-powered recommendations
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8 bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filter Jobs
              </CardTitle>
              <CardDescription>
                Refine your job search to find the perfect match
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Input
                    placeholder="Search jobs, companies, skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
                      <SelectItem value="new-york">New York, NY</SelectItem>
                      <SelectItem value="austin">Austin, TX</SelectItem>
                      <SelectItem value="seattle">Seattle, WA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                      <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Results */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                {jobSuggestions.length} Jobs Found
              </h2>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Heart className="h-4 w-4" />
                <span>{savedJobs.size} Saved</span>
              </div>
            </div>

            {jobSuggestions.map((job) => (
              <Card key={job.id} className="group hover:shadow-primary transition-all duration-300 bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <Badge 
                          variant={getMatchBadgeVariant(job.match)}
                          className={`${getMatchColor(job.match)} font-bold`}
                        >
                          {job.match}% Match
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {job.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                          {job.remote && (
                            <Badge variant="outline" className="ml-2 text-xs">
                              Remote
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.posted}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-2 text-success" />
                            <span className="font-medium">{job.salary}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-primary" />
                            <span>{job.type} • {job.experience}</span>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Benefits:</p>
                          <div className="flex flex-wrap gap-1">
                            {job.benefits.slice(0, 3).map((benefit, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {benefit}
                              </Badge>
                            ))}
                            {job.benefits.length > 3 && (
                              <span className="text-xs text-muted-foreground">
                                +{job.benefits.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSaveJob(job.id)}
                        className={savedJobs.has(job.id) ? "text-success border-success" : ""}
                      >
                        <Bookmark className={`h-4 w-4 ${savedJobs.has(job.id) ? "fill-current" : ""}`} />
                      </Button>
                      <Button variant="hero" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Apply
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Jobs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSuggestions;