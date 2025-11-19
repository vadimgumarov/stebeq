'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    industry: '',
    challenge: '',
    interests: [] as string[],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        employees: '',
        industry: '',
        challenge: '',
        interests: [],
      });
    }, 3000);
  };

  const handleCheckbox = (value: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(i => i !== value)
        : [...prev.interests, value]
    }));
  };

  return (
    <section id="contact" className="bg-bg-primary py-20">
      <div className="section-container max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-6 text-primary">
          Ready to Transform Your Workplace?
        </h2>
        <p className="text-xl text-text-secondary text-center mb-12">
          Book a personalized demo and discover how much time your team can reclaim.
        </p>

        <div className="bg-bg-card p-8 md:p-12 rounded-2xl shadow-card">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-2xl font-medium text-primary mb-2">
                Thank you!
              </h3>
              <p className="text-text-secondary">
                We&apos;ll contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-primary border border-border-color rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-primary border border-border-color rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-primary border border-border-color rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-text-primary mb-2">
                    Number of Employees
                  </label>
                  <select
                    id="employees"
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-primary border border-border-color rounded-lg focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select range</option>
                    <option value="10-25">10-25</option>
                    <option value="26-50">26-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101-250">101-250</option>
                    <option value="251-500">251-500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-text-primary mb-2">
                    Industry
                  </label>
                  <select
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-primary border border-border-color rounded-lg focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select industry</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Retail">Retail</option>
                    <option value="Technology">Technology</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-text-primary mb-2">
                  Primary Challenge
                </label>
                <textarea
                  id="challenge"
                  rows={4}
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  placeholder="Tell us about your biggest workflow challenge..."
                  className="w-full px-4 py-3 bg-bg-primary border border-border-color rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Interested In:
                </label>
                <div className="space-y-2">
                  {[
                    'Free workflow assessment',
                    'Live demo',
                    'ROI calculation',
                    'Pilot program details'
                  ].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(option)}
                        onChange={() => handleCheckbox(option)}
                        className="w-5 h-5 text-primary border-border-color rounded focus:ring-primary cursor-pointer"
                      />
                      <span className="text-text-secondary">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Book My Demo
              </button>

              <p className="text-sm text-text-secondary text-center">
                We respect your privacy. Your information is secure and will never be shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
