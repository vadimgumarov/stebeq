export default function Hero() {
  return (
    <section className="gradient-hero py-20 md:py-32">
      <div className="section-container text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
          When Everybody Speaks — We Listen
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform repetitive tasks into human creativity. Give your team 3+ hours back every day.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#contact" className="btn btn-primary">
            Book a Demo
          </a>
          <a href="#automation" className="btn btn-secondary">
            Calculate Your ROI
          </a>
        </div>
      </div>
    </section>
  );
}
