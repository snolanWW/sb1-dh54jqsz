import React, { useState } from 'react';
import { 
  Users, 
  BarChart, 
  Newspaper, 
  Monitor, 
  Mail, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  CheckCircle2, 
  X,
  Building2,
  Target,
  Megaphone,
  Globe,
  PieChart,
  TrendingUp,
  DollarSign,
  Sparkles,
  Rocket,
  Award,
  Zap,
  Star
} from 'lucide-react';

// Mock data for pricing packages
const pricingPackages = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for small businesses looking to establish their presence",
    features: [
      "Quarter-page print ad",
      "Basic digital display ads",
      "1 sponsored article",
      "Social media mention"
    ],
    icon: Rocket,
    popular: false
  },
  {
    name: "Growth",
    price: "$999",
    description: "Ideal for businesses ready to expand their reach",
    features: [
      "Half-page print ad",
      "Premium digital display ads",
      "2 sponsored articles",
      "Social media campaign",
      "Newsletter feature"
    ],
    icon: Sparkles,
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Comprehensive coverage for maximum impact",
    features: [
      "Full-page print ads",
      "Premium ad placements",
      "Custom content series",
      "Integrated social campaign",
      "Event sponsorship",
      "Dedicated account manager"
    ],
    icon: Award,
    popular: false
  }
];

// Mock data for benefits
const benefits = [
  {
    title: "Targeted Local Reach",
    description: "Connect with Doylestown's most engaged readers",
    stat: "25,000+",
    subtext: "Monthly Readers",
    icon: Target
  },
  {
    title: "High Engagement",
    description: "Industry-leading engagement rates",
    stat: "4.5x",
    subtext: "Above Average",
    icon: Zap
  },
  {
    title: "Brand Trust",
    description: "Leverage our trusted community presence",
    stat: "50+",
    subtext: "Years of Service",
    icon: Star
  }
];

// Mock data for advertising options
const adOptions = [
  {
    title: "Digital Display Ads",
    description: "High-visibility banner and sidebar advertisements",
    specs: [
      "Premium website placement",
      "Mobile-responsive design",
      "Click tracking analytics",
      "Flexible duration options"
    ],
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80"
  },
  {
    title: "Print Advertising",
    description: "Traditional print advertisements in our weekly edition",
    specs: [
      "Full color options",
      "Multiple size choices",
      "Premium positioning",
      "Design assistance"
    ],
    icon: Newspaper,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
  },
  {
    title: "Sponsored Content",
    description: "Native advertising that tells your brand's story",
    specs: [
      "Professional writing",
      "SEO optimization",
      "Social promotion",
      "Permanent archive"
    ],
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  }
];

// Mock data for success metrics
const metrics = {
  readership: {
    print: 15000,
    digital: 10000,
    newsletter: 5000
  },
  engagement: {
    averageTimeOnSite: "4:30",
    clickThroughRate: "2.8%",
    socialFollowers: 12000
  },
  demographics: {
    age: {
      "18-34": 35,
      "35-54": 45,
      "55+": 20
    },
    income: {
      "Under $75k": 30,
      "$75k-$150k": 45,
      "$150k+": 25
    }
  }
};

const AdvertisePage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    package: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowContactForm(false);
    alert("Thank you for your interest! Our advertising team will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
            alt="Advertising background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Grow Your Business with The Cardinal
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Connect with Doylestown's most engaged audience through our trusted platform. 
              Our multi-channel advertising solutions deliver real results for local businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-cardinal-red transition-colors inline-flex items-center gap-2"
              >
                Get Started
                <ChevronRight size={20} />
              </button>
              <a 
                href="#pricing"
                className="bg-white text-cardinal-red px-8 py-3 rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors inline-flex items-center gap-2"
              >
                View Pricing
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-cardinal-red/10 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{benefit.title}</h3>
                    <p className="text-charcoal-gray/70">{benefit.description}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="font-playfair text-3xl font-bold text-cardinal-red">
                    {benefit.stat}
                  </div>
                  <div className="text-charcoal-gray/60">{benefit.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
              Advertising Packages
            </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
              Choose the perfect package to reach your target audience and achieve your marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-lg ${
                  pkg.popular 
                    ? 'ring-2 ring-cardinal-red shadow-xl' 
                    : 'border border-[#333333]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cardinal-red text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cardinal-red/10 rounded-lg">
                      <pkg.icon className="w-6 h-6 text-cardinal-red" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold">{pkg.name}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="font-playfair text-3xl font-bold text-cardinal-red">
                      {pkg.price}
                      {pkg.price !== "Custom" && <span className="text-lg font-normal">/month</span>}
                    </div>
                    <p className="text-charcoal-gray/70 mt-2">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal-gray/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      setSelectedPackage(pkg.name);
                      setShowContactForm(true);
                    }}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-cardinal-red text-white hover:bg-cardinal-red/90'
                        : 'border border-[#333333] hover:bg-cardinal-red hover:text-white hover:border-cardinal-red'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertising Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
              Advertising Solutions
            </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
              Choose from our range of advertising options designed to maximize your reach and impact.
            </p>
          </div>

          <div className="space-y-12">
            {adOptions.map((option, index) => (
              <div 
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-white/90 rounded-lg">
                          <option.icon className="w-5 h-5 text-cardinal-red" />
                        </div>
                        <h3 className="font-playfair text-2xl font-bold text-white">
                          {option.title}
                        </h3>
                      </div>
                      <p className="text-white/90">{option.description}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-white p-8 rounded-lg">
                    <h4 className="font-medium text-lg mb-4">Specifications</h4>
                    <ul className="space-y-3">
                      {option.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal-gray/80">{spec}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="mt-6 px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Ads Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
        Digital Advertising
      </h2>
      <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
        Reach our engaged online audience through strategic digital placements and targeted campaigns.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div className="bg-[#F2F0EF] rounded-lg overflow-hidden">
        <div className="relative h-64">
          <img
            src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80"
            alt="Website Display Ads"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white font-bold text-xl mb-1">Website Display Ads</h3>
            <p className="text-white/90 text-sm">Premium placement on high-traffic pages</p>
          </div>
        </div>
        <div className="p-6">
          <h4 className="font-medium mb-4">Specifications</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>Banner (728x90px)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>Sidebar (300x250px)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>Mobile (320x50px)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>File formats: JPG, PNG, GIF</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#F2F0EF] rounded-lg overflow-hidden">
        <div className="relative h-64">
          <img
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
            alt="Native Content"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white font-bold text-xl mb-1">Native Content</h3>
            <p className="text-white/90 text-sm">Engaging sponsored articles and features</p>
          </div>
        </div>
        <div className="p-6">
          <h4 className="font-medium mb-4">Features</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>Professional writing services</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>Social media promotion</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>SEO optimization</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>Performance analytics</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Print Ads Section */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
        Print Advertising
      </h2>
      <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
        Make an impact with our premium print advertising options in The Cardinal's weekly edition.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative h-48">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
            alt="Full Page Ad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white font-bold text-xl">Full Page</h3>
          </div>
        </div>
        <div className="p-6">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>10" x 13"</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>Premium positioning</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>Full color available</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative h-48">
          <img
            src="https://images.unsplash.com/photo-1455894127589-22f75500213a?auto=format&fit=crop&q=80"
            alt="Half Page Ad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white font-bold text-xl">Half Page</h3>
          </div>
        </div>
        <div className="p-6">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>5" x 13" or 10" x 6.5"</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>Vertical or horizontal</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>Full color available</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative h-48">
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&q=80"
            alt="Quarter Page Ad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white font-bold text-xl">Quarter Page</h3>
          </div>
        </div>
        <div className="p-6">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>5" x 6.5"</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>Multiple positions</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span>Full color available</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 bg-[#F2F0EF] rounded-lg p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-cardinal-red/10 rounded-lg">
        </div>
        <div>
          <h4 className="font-medium text-lg mb-2">Design Services Available</h4>
          <p className="text-charcoal-gray/70 mb-4">
            Our professional design team can help create your print advertisement to ensure maximum impact.
            All ads include one round of revisions at no additional cost.
          </p>
          <button
            onClick={() => setShowContactForm(true)}
            className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors"
          >
            Learn More About Design Services
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      
      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
              Our Reach & Impact
            </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
              Connect with a highly engaged local audience through our trusted platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F2F0EF] p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cardinal-red/10 rounded-lg">
                  <Users className="w-6 h-6 text-cardinal-red" />
                </div>
                <h3 className="font-playfair text-xl font-bold">Readership</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Print Edition</span>
                    <span className="font-medium">{metrics.readership.print.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-cardinal-red/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cardinal-red rounded-full"
                      style={{ width: '50%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Digital Readers</span>
                    <span className="font-medium">{metrics.readership.digital.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-cardinal-red/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cardinal-red rounded-full"
                      style={{ width: '35%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Newsletter Subscribers</span>
                    <span className="font-medium">{metrics.readership.newsletter.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-cardinal-red/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cardinal-red rounded-full"
                      style={{ width: '15%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F2F0EF] p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cardinal-red/10 rounded-lg">
                  <BarChart className="w-6 h-6 text-cardinal-red" />
                </div>
                <h3 className="font-playfair text-xl font-bold">Engagement</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-charcoal-gray/70">Average Time on Site</div>
                  <div className="font-playfair text-2xl font-bold text-cardinal-red">
                    {metrics.engagement.averageTimeOnSite}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-charcoal-gray/70">Click-Through Rate</div>
                  <div className="font-playfair text-2xl font-bold text-cardinal-red">
                    {metrics.engagement.clickThroughRate}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-charcoal-gray/70">Social Media Following</div>
                  <div className="font-playfair text-2xl font-bold text-cardinal-red">
                    {metrics.engagement.socialFollowers.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F2F0EF] p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cardinal-red/10 rounded-lg">
                  <Target className="w-6 h-6 text-cardinal-red" />
                </div>
                <h3 className="font-playfair text-xl font-bold">Demographics</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Age Distribution</h4>
                  <div className="space-y-2">
                    {Object.entries(metrics.demographics.age).map(([range, percentage]) => (
                      <div key={range}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{range}</span>
                          <span>{percentage}%</span>
                        </div>
                        <div className="h-2 bg-cardinal-red/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-cardinal-red rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Household Income</h4>
                  <div className="space-y-2">
                    {Object.entries(metrics.demographics.income).map(([range, percentage]) => (
                      <div key={range}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{range}</span>
                          <span>{percentage}%</span>
                        </div>
                        <div className="h-2 bg-cardinal-red/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-cardinal-red rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cardinal-red rounded-lg p-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our advertising team today to discuss how we can help you achieve your marketing goals.
            </p>
            <button
              onClick={() => setShowContactForm(true)}
              className="inline-flex items-center px-8 py-3 bg-white text-cardinal-red rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
            >
              Get Started
              <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-playfair text-2xl font-bold">Contact Our Advertising Team</h2>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-500 hover:text-cardinal-red transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interested Package *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.package}
                    onChange={(e) => setFormData(prev => ({ ...prev, package: e.target.value }))}
                  >
                    <option value="">Select a package</option>
                    {pricingPackages.map(pkg => (
                      <option 
                        key={pkg.name} 
                        value={pkg.name}
                      >
                        {pkg.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us about your advertising goals..."
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertisePage;