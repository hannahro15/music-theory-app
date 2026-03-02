import { Link } from 'react-router-dom';
import '../theory/Theory.css';

const activityTopics = [
  {
    title: 'Ear Training',
    description: 'Train your ear to recognise intervals, chords and melodies by listening.',
    link: '/ear-training',
  },
  {
    title: 'Notation',
    description: 'Practise reading and writing musical notation.',
    link: '#notation',
  },
  {
    title: 'Intervals Quiz',
    description: 'Test your knowledge of musical intervals.',
    link: '#intervals-quiz',
  },
  {
    title: 'Chords',
    description: 'Identify and build chords through interactive exercises.',
    link: '#chords',
  },
  {
    title: 'Rhythm',
    description: 'Develop your sense of rhythm and time.',
    link: '#rhythm',
  },
  {
    title: 'Classical Music Quiz',
    description: 'Challenge yourself with a quiz on classical music history and theory.',
    link: '#scales-quiz',
  },
];

export default function Activities() {
  return (
    <div className="category-page">
      <h1>Activities</h1>
      <p className="category-intro">
        Put your music theory knowledge to the test. Pick an activity below to practise.
      </p>
      <div className="category-grid">
        {activityTopics.map((topic) => (
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
