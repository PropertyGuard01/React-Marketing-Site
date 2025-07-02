import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Shield, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Building, 
  TrendingUp, 
  Globe,
  Star,
  ArrowRight,
  Play,
  Menu,
  X,
  Home,
  Zap,
  Target,
  Award,
  DollarSign,
  Clock,
  BarChart3,
  Lock,
  Scale,
  MapPin,
  Database,
  Briefcase
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Homeowner, Cape Town",
      content: "With EWC uncertainty, PropertyGuard gives me peace of mind. My property is fully documented and compliant - I'm protecting what I can control.",
      rating: 5
    },
    {
      name: "Mike van der Merwe", 
      role: "Property Developer, Johannesburg",
      content: "PropertyGuard helped us identify compliance gaps that could have cost millions. In today's uncertain market, proper documentation is everything.",
      rating: 5
    },
    {
      name: "Thandi Mthembu",
      role: "Property Manager, Durban", 
      content: "The platform's EWC protection features give our clients confidence. We can prove compliance and property value with complete documentation.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">PropertyGuard</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
              <div className="flex items-center space-x-4">
                <Button variant="outline">Sign In</Button>
                <Button>Get Started</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline">Sign In</Button>
                  <Button>Get Started</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                  🛡️ Protect What You Can Control
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Property Protection in
                  <span className="text-blue-600"> Uncertain Times</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With EWC uncertainty affecting South African property owners, PropertyGuard ensures your investment 
                  is fully documented, compliant, and protected. Control what you can - your property's digital DNA.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4" onClick={() => window.open('https://app.propertyguard.co.za', '_blank')}>
                  Secure My Property
                  <Shield className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>EWC Protection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Legal Protection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Value Preservation</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>14-Day Free Trial</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Property Dashboard</h3>
                    <Badge className="bg-green-100 text-green-800">98% Compliant</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">5</div>
                      <div className="text-sm text-gray-600">Documents</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">3</div>
                      <div className="text-sm text-gray-600">Warranties</div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600">2</div>
                      <div className="text-sm text-gray-600">Expiring</div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">1</div>
                      <div className="text-sm text-gray-600">Alert</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">Home Insurance</span>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">Roof Warranty</span>
                      <Badge className="bg-yellow-100 text-yellow-800">Expires Soon</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">HVAC Service</span>
                      <Badge className="bg-green-100 text-green-800">Up to Date</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              South African Property Owners Face Unprecedented Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Between EWC uncertainty and insurance claim rejections, your property investment has never been more vulnerable.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">EWC Uncertainty</h3>
                <p className="text-gray-600">
                  Expropriation Without Compensation creates uncertainty for property owners. 
                  Proper documentation could be crucial for any compensation claims.
                </p>
                <div className="mt-4 text-sm text-red-600 font-medium">
                  73% of property owners lack complete documentation
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Insurance Claims Rejected</h3>
                <p className="text-gray-600">
                  R2.3 billion in insurance claims are rejected annually in South Africa due to 
                  inadequate documentation and compliance gaps.
                </p>
                <div className="mt-4 text-sm text-orange-600 font-medium">
                  42% rejection rate for property claims
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Documentation Gaps</h3>
                <p className="text-gray-600">
                  Property owners struggle to maintain comprehensive records of warranties, 
                  compliance certificates, and maintenance history.
                </p>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Average property missing 60% of critical documents
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <Badge className="bg-blue-100 text-blue-800">
              The PropertyGuard Solution
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Control What You Can Control
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While you can't control EWC policy or insurance company decisions, you can ensure your property 
              is fully documented, compliant, and protected with PropertyGuard's comprehensive platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">EWC Protection Through Documentation</h3>
                    <p className="text-gray-600">
                      Maintain tamper-proof records of ownership, improvements, and compliance that could be 
                      crucial for legal proceedings or compensation claims.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Insurance Claim Success</h3>
                    <p className="text-gray-600">
                      Automatically identify coverage gaps and maintain the documentation needed for 
                      successful insurance claims.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Complete Property Intelligence</h3>
                    <p className="text-gray-600">
                      Track warranties, compliance certificates, maintenance records, and property 
                      improvements in one secure platform.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="text-lg px-8 py-4" onClick={() => window.open('https://app.propertyguard.co.za', '_blank')}>
                Start Protecting Your Property
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Property Protection Score</h3>
                    <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">EWC Documentation</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Insurance Coverage</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-22 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Compliance Status</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-24 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">100%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-medium">Property Fully Protected</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Your property documentation is complete and compliant. You're prepared for EWC challenges and insurance claims.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Comprehensive Property Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PropertyGuard provides everything you need to protect your property investment in uncertain times.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>EWC Documentation</CardTitle>
                <CardDescription>
                  Maintain comprehensive ownership and improvement records that could be crucial for EWC proceedings.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Insurance Gap Detection</CardTitle>
                <CardDescription>
                  Automatically identify coverage gaps and ensure you have the documentation needed for successful claims.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Compliance Tracking</CardTitle>
                <CardDescription>
                  Monitor all compliance certificates, warranties, and maintenance records in one secure platform.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Risk Assessment</CardTitle>
                <CardDescription>
                  Get intelligent alerts about potential risks, expiring warranties, and compliance deadlines.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Secure Storage</CardTitle>
                <CardDescription>
                  Bank-grade security ensures your property documents are safe, accessible, and tamper-proof.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>Property Intelligence</CardTitle>
                <CardDescription>
                  Get insights into your property's protection status, value preservation, and compliance health.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your property protection needs. All plans include EWC documentation and insurance gap detection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Basic</CardTitle>
                <CardDescription>Perfect for single property owners</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R299</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>1 Property</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Unlimited Document Storage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>EWC Documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Insurance Gap Detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Warranty Tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Email Support</span>
                  </div>
                </div>
                <Button className="w-full mt-6" onClick={() => window.open('https://app.propertyguard.co.za', '_blank')}>
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-colors">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription>Ideal for property investors</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R599</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Up to 5 Properties</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Everything in Basic</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Advanced Risk Assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Compliance Automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Property Intelligence Reports</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Priority Support</span>
                  </div>
                </div>
                <Button className="w-full mt-6" onClick={() => window.open('https://app.propertyguard.co.za', '_blank')}>
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>For property management companies</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R1,299</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Unlimited Properties</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Everything in Professional</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Multi-User Access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>API Access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Custom Integrations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Dedicated Account Manager</span>
                  </div>
                </div>
                <Button className="w-full mt-6" onClick={() => window.open('https://app.propertyguard.co.za', '_blank')}>
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include a 14-day free trial. No credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>VAT included</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>South African Rand pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Trusted by South African Property Owners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how PropertyGuard is helping property owners protect their investments in uncertain times.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Protect Your Property Investment Today
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't wait for EWC uncertainty or insurance claim rejections to affect you. 
              Start protecting your property with PropertyGuard's comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" onClick={() => window.open('https://app.propertyguard.co.za', '_blank')}>
                Start Free Trial
                <Shield className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-blue-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">PropertyGuard</span>
              </div>
              <p className="text-gray-400">
                Protecting South African property investments through comprehensive documentation and compliance management.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Globe className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-gray-400">
                <a href="#features" className="block hover:text-white transition-colors">Features</a>
                <a href="#pricing" className="block hover:text-white transition-colors">Pricing</a>
                <a href="#security" className="block hover:text-white transition-colors">Security</a>
                <a href="#integrations" className="block hover:text-white transition-colors">Integrations</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <a href="#about" className="block hover:text-white transition-colors">About</a>
                <a href="#blog" className="block hover:text-white transition-colors">Blog</a>
                <a href="#careers" className="block hover:text-white transition-colors">Careers</a>
                <a href="#contact" className="block hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <a href="#help" className="block hover:text-white transition-colors">Help Center</a>
                <a href="#docs" className="block hover:text-white transition-colors">Documentation</a>
                <a href="#status" className="block hover:text-white transition-colors">Status</a>
                <a href="mailto:support@propertyguard.co.za" className="block hover:text-white transition-colors">support@propertyguard.co.za</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PropertyGuard. All rights reserved. Protecting South African property investments.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

