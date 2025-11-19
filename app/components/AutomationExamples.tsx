'use client';

import { useState } from 'react';

export default function AutomationExamples() {
  const [activeIndustry, setActiveIndustry] = useState('manufacturing');

  const industries = {
    manufacturing: {
      title: "Manufacturing",
      hoursSaved: "147 hours saved monthly",
      color: "border-primary",
      examples: [
        "Daily inventory reports: 4 hours → 20 minutes",
        "Equipment status tracking: Manual → Real-time",
        "Supplier order reconciliation: 6 systems → 1 automated flow",
        "Quality control documentation: 3 hours → 15 minutes"
      ]
    },
    professional: {
      title: "Professional Services",
      hoursSaved: "180 hours saved monthly",
      color: "border-secondary",
      examples: [
        "Client onboarding workflows: 2 days → 4 hours",
        "Invoice generation and tracking: Manual → Automatic",
        "Meeting notes to CRM updates: 30 min/meeting → Instant",
        "Document routing for approvals: 48 hours → 2 hours"
      ]
    },
    retail: {
      title: "Retail Operations",
      hoursSaved: "112 hours saved monthly",
      color: "border-tertiary",
      examples: [
        "Sales reporting across locations: 3 hours daily → On-demand",
        "Inventory reorder triggers: Weekly review → Automatic",
        "Employee scheduling conflicts: Manual → AI-resolved",
        "Customer feedback aggregation: Monthly → Real-time"
      ]
    },
    healthcare: {
      title: "Healthcare Administration",
      hoursSaved: "205 hours saved monthly",
      color: "border-primary",
      examples: [
        "Patient records management: 2 hours daily → 15 minutes",
        "Insurance verification: 45 min/patient → Instant",
        "Appointment scheduling conflicts: Manual → Automated",
        "Compliance reporting: Weekly 6 hours → Daily automatic"
      ]
    }
  };

  const stats = [
    { value: "3.2 hours", label: "Average time saved per employee daily" },
    { value: "15-40 tasks", label: "Tasks automated per company" },
    { value: "45 days", label: "Average ROI timeline" },
    { value: "94%", label: "User satisfaction score" }
  ];

  return (
    <section id="automation" className="bg-bg-secondary py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-16 text-primary">
          What Gets Automated
        </h2>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(industries).map(([key, industry]) => (
            <button
              key={key}
              onClick={() => setActiveIndustry(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeIndustry === key
                  ? 'bg-primary text-white shadow-card'
                  : 'bg-bg-card text-text-primary hover:bg-primary/10'
              }`}
            >
              {industry.title}
            </button>
          ))}
        </div>

        {/* Active Industry Card */}
        <div className={`bg-bg-card p-10 rounded-2xl shadow-card border-l-4 ${industries[activeIndustry as keyof typeof industries].color} max-w-3xl mx-auto mb-16`}>
          <h3 className="text-2xl font-medium mb-2 text-primary">
            {industries[activeIndustry as keyof typeof industries].title}
          </h3>
          <p className="text-tertiary text-xl font-medium mb-6">
            {industries[activeIndustry as keyof typeof industries].hoursSaved}
          </p>
          <div className="space-y-3">
            {industries[activeIndustry as keyof typeof industries].examples.map((example, index) => (
              <div key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">→</span>
                <p className="text-text-secondary">{example}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <h3 className="text-2xl md:text-3xl font-light text-center mb-12 text-primary">
          Impact Stats
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-bg-card p-8 rounded-2xl shadow-card text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-3">
                {stat.value}
              </div>
              <p className="text-text-secondary text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="btn btn-primary">
            Calculate Your Savings → ROI Calculator
          </a>
        </div>
      </div>
    </section>
  );
}
