import Arpeggios from '../../components/arpeggios/Arpeggios.jsx';
import Dom7th from '../../components/arpeggios/Dom7th.jsx';
import Dim7th from '../../components/arpeggios/Dim7th.jsx';

export default function Arpeggios_7ths() {
    return (
      <div>
        <h1>Arpeggios and 7th Chords</h1>
        <div className="arpeggio">
        <h2>Arpeggios</h2>
        <Arpeggios />
        <p>An arpeggio is made up of the 1st, 3rd and 5th elements of the scale. </p>
        </div>
        <div className="arpeggio">
        <h2>Dominant 7ths</h2>
        <Dom7th />      
        <p> A dominant seventh is similar to a normal arpeggio, except an extra 7th note is added in.</p>
        </div>
        <div className="arpeggio">
        <h2>Diminished 7ths</h2>
        <Dim7th />
        <p> A diminished seventh chord is made up of a root note, a minor third, a diminished fifth, and a diminished seventh.</p>
        </div>
      </div>
    );
  }