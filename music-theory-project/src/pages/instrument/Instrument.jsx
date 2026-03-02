import { Link } from 'react-router-dom';
import '../theory/Theory.css';

const instrumentTopics = [
  {
    title: 'Violin – Fingerings',
    description: 'Learn finger positions and scales on the violin.',
    link: '#violin-fingerings',
  },
  {
    title: 'Violin – Technique',
    description: 'Explore bowing techniques and left-hand skills for violin.',
    link: '#violin-technique',
  },
  {
    title: 'Violin – Orchestral Excerpts',
    description: 'Study well-known orchestral excerpts for the violin.',
    link: '#violin-excerpts',
  },
];

export default function Instrument() {
  return (
    <div className="category-page">
      <h1>Instruments</h1>
      <p className="category-intro">
        Explore instrument-specific guides and resources. More instruments coming soon!
      </p>
      <div className="category-grid">
        {instrumentTopics.map((topic) => (
          <Link
            key={topic.title}
            to={topic.link}
            className="category-card"
          >
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
