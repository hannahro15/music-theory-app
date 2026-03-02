import { Link } from 'react-router-dom';
import './Theory.css';

const theoryTopics = [
  {
    title: 'Scales',
    description: 'Explore major and minor scales and the patterns that define them.',
    link: '/scales',
  },
  {
    title: 'Arpeggios & 7th Chords',
    description: 'Learn about arpeggios, dominant sevenths and diminished sevenths.',
    link: '/arpeggios',
  },
  {
    title: 'Intervals',
    description: 'Understand the distances between pitches, from semitones to octaves.',
    link: '/intervals',
  },
  {
    title: 'Musical Glossary',
    description: 'A reference guide to common musical terms and Italian markings.',
    link: '/musical-glossary',
  },
  {
    title: 'Circle of Fifths',
    description: 'Discover how keys relate to one another through the circle of fifths.',
    link: '#circle-of-fifths',
  },
  {
    title: 'Key Signatures',
    description: 'Learn how sharps and flats define the key of a piece.',
    link: '#key-signatures',
  },
];

export default function Theory() {
  return (
    <div className="category-page">
      <h1>Music Theory</h1>
      <p className="category-intro">
        Dive into the building blocks of music. Choose a topic below to get started.
      </p>
      <div className="category-grid">
        {theoryTopics.map((topic) => (
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
