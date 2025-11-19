export default function Problem() {
  const painPoints = [
    {
      number: "1",
      title: "Lost Human Potential",
      description: "3.5 hours per day per employee trapped in mechanical loops. That's $75,000 annually in lost productivity per person.",
      color: "text-tertiary"
    },
    {
      number: "2",
      title: "Innovation Stagnation",
      description: "Teams spend time executing tasks instead of creating solutions. The best ideas never surface.",
      color: "text-primary"
    },
    {
      number: "3",
      title: "Quiet Resignation",
      description: "Talented people leave because meaningful work gets buried under repetitive workflows.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="bg-bg-secondary py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-16 text-primary">
          68% of Work is Repetitive
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point) => (
            <div
              key={point.number}
              className="bg-bg-card p-10 rounded-2xl shadow-card card-hover"
            >
              <div className={`text-5xl font-bold mb-4 ${point.color}`}>
                {point.number}
              </div>
              <h3 className="text-2xl font-medium mb-4 text-primary">
                {point.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
