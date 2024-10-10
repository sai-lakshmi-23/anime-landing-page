import '../styles/cta.css';

const CallToAction = () => {
  return (
    <section id="cta" className="cta-section" role="banner" aria-label="Call to Action">
      <button 
        className="cta-button" 
        onClick={() => window.scrollTo({ top: document.getElementById('characters').offsetTop, behavior: 'smooth' })}
        aria-label="Read Now and navigate to characters section"
      >
        Read Now
      </button>
    </section>
  );
};

export default CallToAction;
