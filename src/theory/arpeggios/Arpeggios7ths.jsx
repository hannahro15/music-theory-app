import MajArpeggio from '../../components/arpeggios/MajorArpeggio.jsx';
import MinArpeggio from '../../components/arpeggios/MinorArpeggio.jsx';
import Dom7th from '../../components/arpeggios/Dom7th.jsx';
import Dim7th from '../../components/arpeggios/Dim7th.jsx';
import './Arpeggios7ths.css';

export default function Arpeggios7ths() {
    return (
      <div className="arpeggios">
        <h1>Arpeggios and 7th Chords</h1>
        <h2>Arpeggios</h2>
        <div className="arpeggio-notation">
          <div className="arpeggio-border">
            <h3>Major Arpeggio</h3>
            <MajArpeggio />
            <p>An arpeggio is made up of the 1st, 3rd and 5th elements of the scale. This is a C major Arpeggio.</p>
          </div>
          <div className="arpeggio-border">
            <h3>Minor Arpeggio</h3>
            <MinArpeggio />
            <p>This is a C minor Arpeggio. The 3rd note is flattened, the interval between the 1st and 3rd notes is a minor 3rd.</p>
          </div>
          <div className="arpeggio-border">
            <h2>Dominant 7ths</h2>
            <Dom7th />  
            <p> A dominant seventh is similar to a normal arpeggio, except an extra 7th note is added in.</p>
          </div>
          <div className="arpeggio-border">
            <h2>Diminished 7ths</h2>
            <Dim7th />
            <p> A diminished seventh chord is made up of a root note, a minor third, a diminished fifth, and a diminished seventh.</p>
          </div>
        </div>
      </div>
    );
}