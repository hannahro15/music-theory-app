import MajorScale from '../../components/scales/MajorScale';
import HarmonicMinorScale from '../../components/scales/HarmonicMinorScale';
import MelodicMinorScale from '../../components/scales/MelodicMinorScale';
import WholeToneScale from '../../components/scales/WholeToneScale';
import DorianScale from '../../components/scales/DorianScale';
import PhrygianScale from '../../components/scales/PhrygianScale';
import LydianScale from '../../components/scales/LydianScale';
import MixolydianScale from '../../components/scales/MixolydianScale';
import AeolianScale from '../../components/scales/AeolianScale';
import LocrianScale from '../../components/scales/LocrianScale';
import ChromaticScale from '../../components/scales/ChromaticScale';
import './Scales.css';

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
      <div className="scale-container">
        <h3>Chromatic Scale</h3>
        <ChromaticScale />
        <p>The chromatic scale consists of all 12 notes in an octave. It has a very dissonant and tense sound.</p>
        <h3>Whole Tone Scale</h3>
        <WholeToneScale />
        <p>The whole tone scale consists of six notes, each a whole step apart. It has a dreamy and ambiguous sound.</p>
      </div>
      <div className="modes-container">
        <h3>Modes</h3>
        <p>Modes are derived from the major scale by starting on different degrees of the scale. Each mode has its own unique sound and characteristics.</p>
        <h4>Ionian Mode in C</h4>
        <MajorScale />
        <p>The Ionian mode is the same as the major scale. It has a bright and happy sound.</p>
        <h4>Dorian Mode in C</h4>
        <DorianScale />
        <p>The Dorian mode has a minor quality with a raised 6th note. It has a jazzy and bluesy sound.</p>
        <h4>Phrygian Mode in C</h4>
        <PhrygianScale />
        <p>The Phrygian mode has a minor quality with a lowered 2nd note. It has a Spanish or Middle Eastern sound.</p>
        <h4>Lydian Mode in C</h4>
        <LydianScale />
        <p>The Lydian mode has a major quality with a raised 4th note. It has a dreamy and ethereal sound.</p>
        <h4>Mixolydian Mode in C</h4>
        <MixolydianScale />
        <p>The Mixolydian mode has a major quality with a lowered 7th note. It has a bluesy and rock sound.</p>
        <h4>Aeolian Mode in C</h4>
        <AeolianScale />
        <p>The Aeolian mode is the natural minor scale. It has a sad and melancholic sound.</p>
        <h4>Locrian Mode in C</h4>
        <LocrianScale />
        <p>The Locrian mode has a diminished quality with a lowered 2nd and 5th note. It has a dissonant and unstable sound.</p>
      </div>
    </div>
  );
}
