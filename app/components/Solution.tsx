export default function Solution() {
  const steps = [
    {
      number: "1",
      title: "Capture Rhythm",
      description: "Anonymous surveys + transparent pattern observation. No surveillance. Just understanding.",
      bg: "bg-tertiary"
    },
    {
      number: "2",
      title: "Create Harmony",
      description: "AI identifies automation opportunities. Custom solutions designed for your workflows.",
      bg: "bg-secondary"
    },
    {
      number: "3",
      title: "Cultivate Genius",
      description: "Automations deployed. Time freed. Innovation unleashed.",
      bg: "bg-primary"
    }
  ];

  const features = [
    {
      title: "Observe Patterns, Not People",
      description: "We analyze workflows, never individuals."
    },
    {
      title: "Transparent Operations",
      description: "Employees see everything we do."
    },
    {
      title: "No Employee Monitoring",
      description: "Zero surveillance or tracking."
    },
    {
      title: "Value-Based Pricing",
      description: "Custom pricing for your needs."
    }
  ];

  return (
    <section className="bg-bg-primary py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-8 text-primary">
          Transparent AI That Liberates, Not Monitors
        </h2>
        <p className="text-xl text-text-secondary text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          STEBEQ observes workflow patterns—not people. In three weeks, we identify repetitive tasks,
          design intelligent automations, and give your team time back for what only humans can do:
          innovate, create, inspire.
        </p>

        {/* Three-Week Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-bg-card p-8 rounded-2xl shadow-card border-l-4 border-primary"
            >
              <div className={`w-16 h-16 ${step.bg} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-medium mb-4 text-primary">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Differentiators */}
        <h3 className="text-2xl md:text-3xl font-light text-center mb-12 text-primary">
          Key Differentiators
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-bg-card p-8 rounded-2xl shadow-card card-hover text-center"
            >
              <h4 className="text-lg font-medium mb-3 text-primary">
                {feature.title}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="btn btn-primary">
            See How It Works → Book Demo
          </a>
        </div>
      </div>
    </section>
  );
}
