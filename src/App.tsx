import React, { useState } from 'react';
import { Search, Briefcase, Building2, MapPin, ChevronRight, Bell, User, BookMarked, Facebook, Twitter, Linkedin, Instagram, CheckCircle2, Briefcase as JobIcon, Users, TrendingUp, Award } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const stats = [
    { icon: <JobIcon className="w-8 h-8 text-indigo-600" />, value: '10,000+', label: 'Active Jobs' },
    { icon: <Users className="w-8 h-8 text-indigo-600" />, value: '5M+', label: 'Job Seekers' },
    { icon: <Building2 className="w-8 h-8 text-indigo-600" />, value: '50,000+', label: 'Companies' },
    { icon: <TrendingUp className="w-8 h-8 text-indigo-600" />, value: '1M+', label: 'Successful Hires' }
  ];

  const categories = [
    { icon: <Award className="w-6 h-6" />, name: 'Technology', jobs: '5,234 jobs' },
    { icon: <Briefcase className="w-6 h-6" />, name: 'Sales', jobs: '3,856 jobs' },
    { icon: <Building2 className="w-6 h-6" />, name: 'Marketing', jobs: '2,789 jobs' },
    { icon: <Users className="w-6 h-6" />, name: 'HR', jobs: '1,523 jobs' }
  ];

  const featuredJobs = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'Bangalore',
      salary: '25-35 LPA',
      experience: '5-8 years',
      skills: ['React', 'TypeScript', 'Node.js'],
      posted: '2 days ago',
      description: 'We are looking for an experienced Frontend Developer to join our team and help build innovative web applications.',
      companyInfo: {
        about: 'TechCorp Solutions is a leading software development company.',
        employees: '1000+',
        founded: '2010',
        website: 'www.techcorp.com'
      }
    },
    {
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'Mumbai',
      salary: '28-40 LPA',
      experience: '6-10 years',
      skills: ['Product Strategy', 'Agile', 'Team Leadership'],
      posted: '1 day ago',
      description: 'Looking for an experienced Product Manager to lead our product development initiatives.',
      companyInfo: {
        about: 'Innovation Labs is a product-focused technology company.',
        employees: '500+',
        founded: '2015',
        website: 'www.innovationlabs.com'
      }
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudTech Systems',
      location: 'Hyderabad',
      salary: '20-30 LPA',
      experience: '3-7 years',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      posted: '3 days ago',
      description: 'Join our DevOps team to help build and maintain our cloud infrastructure.',
      companyInfo: {
        about: 'CloudTech Systems specializes in cloud solutions.',
        employees: '750+',
        founded: '2012',
        website: 'www.cloudtech.com'
      }
    }
  ];

  const topCompanies = [
    { name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=150&h=150&fit=crop' },
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?w=150&h=150&fit=crop' },
    { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=150&h=150&fit=crop' },
    { name: 'Apple', logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=150&h=150&fit=crop' },
    { name: 'Meta', logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=150&h=150&fit=crop' }
  ];

  const handleSearch = () => {
    const filtered = featuredJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesLocation = job.location.toLowerCase().includes(location.toLowerCase());
      return (!searchTerm || matchesSearch) && (!location || matchesLocation);
    });
    setFilteredJobs(filtered);
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowApplicationForm(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const jobsToDisplay = filteredJobs.length > 0 ? filteredJobs : featuredJobs;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center z-50">
          <CheckCircle2 className="w-5 h-5 mr-2" />
          <span>Application submitted successfully!</span>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-indigo-600">Naukri</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-indigo-600">Jobs</a>
                <a href="#" className="text-gray-600 hover:text-indigo-600">Companies</a>
                <a href="#" className="text-gray-600 hover:text-indigo-600">Services</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <User className="w-6 h-6 text-gray-600" />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Find Your Dream Job Today
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, skills, or company"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button 
                className="bg-indigo-600 text-white px-8 py-2 rounded-md hover:bg-indigo-700"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              {stat.icon}
              <div className="mt-4 text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12 bg-white shadow-sm rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">Popular Job Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="p-6 border rounded-lg hover:border-indigo-500 transition-colors cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  {category.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{category.name}</h4>
                  <p className="text-sm text-gray-500">{category.jobs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Companies */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">Top Companies Hiring</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {topCompanies.map((company, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img src={company.logo} alt={company.name} className="w-full h-32 object-cover rounded-md mb-4" />
              <h4 className="text-lg font-medium text-gray-800 text-center">{company.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">Featured Jobs</h3>
          <a href="#" className="text-indigo-600 hover:text-indigo-700 flex items-center">
            View all <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobsToDisplay.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h4>
              <div className="flex items-center text-gray-600 mb-3">
                <Building2 className="w-4 h-4 mr-2" />
                {job.company}
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {job.location}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>₹{job.salary}</span>
                <span>{job.experience}</span>
                <span>{job.posted}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button className="text-indigo-600 hover:text-indigo-700">
                  <BookMarked className="w-5 h-5" />
                </button>
                <button 
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                  onClick={() => handleApply(job)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedJob.title}</h3>
                  <p className="text-gray-600">{selectedJob.company}</p>
                </div>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowApplicationForm(false)}
                >
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Company Information</h4>
                <p className="text-gray-600 mb-2">{selectedJob.companyInfo.about}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500">Employees</p>
                    <p className="font-medium">{selectedJob.companyInfo.employees}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Founded</p>
                    <p className="font-medium">{selectedJob.companyInfo.founded}</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resume
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows={4}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Naukri</h4>
              <p className="text-gray-400">
                India's No.1 Job Site
              </p>
              <div className="flex space-x-4 mt-4">
                <Facebook className="w-5 h-5" />
                <Twitter className="w-5 h-5" />
                <Linkedin className="w-5 h-5" />
                <Instagram className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Job Seekers</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Search Jobs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Create Resume</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Job Alerts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Career Advice</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Employers</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Post Jobs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Search Resumes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Hiring Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Advertise</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: support@naukri.com</li>
                <li className="text-gray-400">Toll Free: 1800-123-4567</li>
                <li className="text-gray-400">9:00 AM to 7:00 PM IST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Naukri.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;