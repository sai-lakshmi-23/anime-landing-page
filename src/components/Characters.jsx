import '../styles/characters.css';

const characters = [
  { name: 'Naruto Uzumaki', image: './images/naruto.jpg', description: 'Goddess of Spring' },
  { name: 'Luffy', image: './images/luffy.jpg', description: 'God of the Underworld' },
  { name: 'Ichigo Kurasaki', image: './images/ichigo.jpg', description: 'God of the Underworld' },
  { name: 'Saitama', image: './images/saitama.jpg', description: 'God of the Underworld' },
  { name: 'Sung Jin Woo', image: './images/sung-jin-woo.jpg', description: 'God of the Underworld' },
  { name: 'Goku', image: './images/goku.jpg', description: 'God of the Underworld' },
  // Add more characters as needed
];

const Characters = () => {
  return (
    <section id="characters" className="characters-section" role="region" aria-labelledby="characters-title">
      <h2 id="characters-title">Main Characters</h2>
      <div className="characters-grid" role="grid">
        {characters.map((char) => (
          <div key={char.name} className="character-card" role="gridcell">
            <img 
              src={char.image} 
              alt={char.name} 
              loading="lazy" // Enable lazy loading
              className="character-image"
            />
            <div className="character-info" role="contentinfo">
              <h3>{char.name}</h3>
              <p>{char.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Characters;
