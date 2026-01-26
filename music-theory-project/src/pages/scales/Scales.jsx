import MajorScale from '../../components/scales/MajorScale';
import HarmonicMinorScale from '../../components/scales/HarmonicMinorScale';
import MelodicMinorScale from '../../components/scales/MelodicMinorScale';
import './scales.css';

export default function Scales() {
  return (
    <div className="scales" style={{ padding: '2rem' }}>
      <h1>Scales</h1>
      <p>Learn about different musical scales. Here is an example of C major, C harmonic minor and C melodic minor scales below.</p>
      <div className="scale-container">
        <h2>Major Scale</h2>
        <MajorScale />
        <p>In a major scale, the 3rd and 6th notes are raised compared to the natural minor. It follows a pattern using semitones and tones between the notes which is T-T-ST-T-T-T-ST. The major scale is the same ascending as descending. </p>
      </div>
      <div className="scale-container">
        <h2>Minor Scales</h2>
        <h3>Harmonic Minor</h3>
        <HarmonicMinorScale />
        <p>In a harmonic minor scale, the 3rd note and 6th notes are lowered, and the 7th note (otherwise known as a leading note) is raised compared to the natural minor. The pattern for this using semitones and tones are T-ST-T-T-ST-T+ST-ST. The scale is the same ascending as descending.</p>
        <h3>Melodic Minor</h3>
        <MelodicMinorScale />
        <p> The melodic minor scale ascends with both the 6th and 7th notes raised compared to the natural minor. When descending, it goes back to the natural minor form, with the 6th and 7th notes lowered.</p>
      </div>
    </div>
  );
}
