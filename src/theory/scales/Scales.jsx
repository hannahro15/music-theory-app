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
import PentatonicScale from '../../components/scales/PentatonicScale';
import './Scales.css';

export default function Scales() {
  return (
    <div className="scales">
      <h1>Scales</h1>
      <p>Learn about different musical scales. Here is an example of C major, C harmonic minor and C melodic minor scales below.</p>

      <section className="scales-section">
        <h2>Major Scale</h2>
        <div className="scales-grid scales-grid--single">
          <div className="scale-card">
            <MajorScale />
            <p>In a major scale, the 3rd and 6th notes are raised compared to the natural minor. It follows a pattern using semitones and tones between the notes which is T-T-ST-T-T-T-ST. The major scale is the same ascending as descending. </p>
          </div>
        </div>
      </section>

      <section className="scales-section">
        <h2>Minor Scales</h2>
        <div className="scales-grid">
          <div className="scale-card">
            <h3>Harmonic Minor</h3>
            <HarmonicMinorScale />
            <p>In a harmonic minor scale, the 3rd note and 6th notes are lowered, and the 7th note (otherwise known as a leading note) is raised compared to the natural minor. The pattern for this using semitones and tones are T-ST-T-T-ST-T+ST-ST. The scale is the same ascending as descending.</p>
          </div>
          <div className="scale-card">
            <h3>Melodic Minor</h3>
            <MelodicMinorScale />
            <p> The melodic minor scale ascends with both the 6th and 7th notes raised compared to the natural minor. When descending, it goes back to the natural minor form, with the 6th and 7th notes lowered.</p>
          </div>
        </div>
      </section>

      <section className="scales-section">
        <h2>Other Scales</h2>
        <div className="scales-grid">
          <div className="scale-card">
            <h3>Chromatic Scale</h3>
            <ChromaticScale />
            <p>The chromatic scale consists of all 12 notes in an octave. It has a very dissonant and tense sound.</p>
          </div>
          <div className="scale-card">
            <h3>Whole Tone Scale</h3>
            <WholeToneScale />
            <p>The whole tone scale consists of six notes, each a whole step apart. It has a dreamy and ambiguous sound.</p>
          </div>
          <div className="scale-card">
            <h3>Pentatonic Scale</h3>
            <PentatonicScale />
            <p>The pentatonic scale consists of five notes per octave. It has a very open and consonant sound, and is commonly used in folk music and blues.</p>
          </div>
        </div>
      </section>

      <section className="scales-section">
        <h2>Modes</h2>
        <p>Modes are derived from the major scale by starting on different degrees of the scale. Each mode has its own unique sound and characteristics.</p>
        <div className="scales-grid">
          <div className="scale-card">
            <h3>Ionian Mode in C</h3>
            <MajorScale />
            <p>The Ionian mode is the same as the major scale. It has a bright and happy sound.</p>
          </div>
          <div className="scale-card">
            <h3>Dorian Mode in C</h3>
            <DorianScale />
            <p>The Dorian mode has a minor quality with a raised 6th note. It has a jazzy and bluesy sound.</p>
          </div>
          <div className="scale-card">
            <h3>Phrygian Mode in C</h3>
            <PhrygianScale />
            <p>The Phrygian mode has a minor quality with a lowered 2nd note. It has a Spanish or Middle Eastern sound.</p>
          </div>
          <div className="scale-card">
            <h3>Lydian Mode in C</h3>
            <LydianScale />
            <p>The Lydian mode has a major quality with a raised 4th note. It has a dreamy and ethereal sound.</p>
          </div>
          <div className="scale-card">
            <h3>Mixolydian Mode in C</h3>
            <MixolydianScale />
            <p>The Mixolydian mode has a major quality with a lowered 7th note. It has a bluesy and rock sound.</p>
          </div>
          <div className="scale-card">
            <h3>Aeolian Mode in C</h3>
            <AeolianScale />
            <p>The Aeolian mode is the natural minor scale. It has a sad and melancholic sound.</p>
          </div>
          <div className="scale-card">
            <h3>Locrian Mode in C</h3>
            <LocrianScale />
            <p>The Locrian mode has a diminished quality with a lowered 2nd and 5th note. It has a dissonant and unstable sound.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
