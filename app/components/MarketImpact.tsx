export default function MarketImpact() {
  const industries = [
    {
      title: "Small Manufacturing",
      employees: "10-100 employees",
      borderColor: "border-t-primary",
      currentState: "3.8 hours/day on repetitive tasks",
      annualCost: "$1.2M in lost productivity (50 employees)",
      impact: "147 hours saved monthly",
      freedCapacity: [
        "Launch quality improvement initiatives",
        "Reduce errors by 23%",
        "Innovate production processes"
      ]
    },
    {
      title: "Professional Services",
      employees: "25-150 employees",
      borderColor: "border-t-secondary",
      currentState: "3.2 hours/day on administrative work",
      annualCost: "$1.8M in billable time lost (75 employees)",
      impact: "180 hours saved monthly",
      freedCapacity: [
        "Focus on client strategy work",
        "Increase billable hours 28%",
        "Develop new service offerings"
      ]
    },
    {
      title: "Healthcare Administration",
      employees: "20-200 employees",
      borderColor: "border-t-tertiary",
      currentState: "4.1 hours/day on compliance paperwork",
      annualCost: "$2.4M in administrative burden (100 employees)",
      impact: "205 hours saved monthly",
      freedCapacity: [
        "Focus on patient care quality",
        "Reduce burnout significantly",
        "Improve satisfaction scores"
      ]
    },
    {
      title: "Mid-Size Retail",
      employees: "50-500 employees",
      borderColor: "border-t-primary",
      currentState: "2.9 hours/day on inventory/reporting",
      annualCost: "$3.2M in operational overhead (200 employees)",
      impact: "290 hours saved monthly",
      freedCapacity: [
        "Optimize customer experience",
        "Develop merchandising strategies",
        "Improve retention metrics"
      ]
    }
  ];

  return (
    <section className="bg-bg-primary py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-16 text-primary">
          Industries We Transform
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`bg-bg-card p-8 rounded-2xl shadow-card border-t-4 ${industry.borderColor} card-hover`}
            >
              <h3 className="text-2xl font-medium mb-2 text-primary">
                {industry.title}
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                {industry.employees}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-1">Current State:</p>
                  <p className="text-text-secondary">{industry.currentState}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary mb-1">Annual Cost:</p>
                  <p className="text-tertiary font-medium">{industry.annualCost}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary mb-1">STEBEQ Impact:</p>
                  <p className="text-primary font-medium">{industry.impact}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-text-primary mb-3">Freed Capacity:</p>
                <div className="space-y-2">
                  {industry.freedCapacity.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-primary mr-2">→</span>
                      <p className="text-text-secondary text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl text-text-secondary font-light max-w-3xl mx-auto">
            <span className="font-medium">Before STEBEQ:</span> Employees execute tasks
            <br />
            <span className="font-medium">After STEBEQ:</span> Employees drive innovation
          </p>
        </div>

        <div className="text-center">
          <a href="#contact" className="btn btn-primary">
            See Your Industry → Book Industry-Specific Demo
          </a>
        </div>
      </div>
    </section>
  );
}
