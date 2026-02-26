import Min2nd from '../../components/intervals/Min2nd.jsx';
import Maj2nd from '../../components/intervals/Maj2nd.jsx';
import Min3rd from '../../components/intervals/Min3rd.jsx';
import Maj3rd from '../../components/intervals/Maj3rd.jsx';
import Perfect4th from '../../components/intervals/Perfect4th.jsx';
import Tritone from '../../components/intervals/Tritone.jsx';
import Perfect5th from '../../components/intervals/Perfect5th.jsx';
import Min6th from '../../components/intervals/Min6th.jsx';
import Maj6th from '../../components/intervals/Maj6th.jsx';
import Min7th from '../../components/intervals/Min7th.jsx';
import Maj7th from '../../components/intervals/Maj7th.jsx';
import Octave from '../../components/intervals/Octave.jsx';
import './Intervals.css';

export default function Intervals() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Intervals Page</h1>
      <p>This is the Intervals page showing all the different intervals.</p>
      <div className="interval-div">
      <h2>Minor 2nd</h2>
      <Min2nd />
      <p>This interval is semitone apart (neighbouring notes).</p>
      </div>
      <div className="interval-div">
      <h2>Major 2nd</h2>
      <Maj2nd />
      <p>This interval is two semitones apart (or a tone). </p>
      </div>
      <div className="interval-div">
      <h2>Minor 3rd</h2>
      <Min3rd />
      <p>This interval is three semitones apart.</p>
      </div>
      <div className="interval-div">
      <h2>Major 3rd</h2>
      <Maj3rd />
      <p>This interval is four semitones apart.</p>
      </div>
      <div className="interval-div">
      <h2>Perfect 4th</h2>
      <Perfect4th />
      <p>This interval is five semitones apart.</p>
      </div>
      <div className="interval-div">
      <h2>Tritone (or augmented 4th)</h2>
      <Tritone />
      <p>A tritone is also known as an diminished 5th but then the interval would be from a C to a Gb. (It still sounds the same, but different naming conventions).</p>
      </div>
      <div className="interval-div">
      <h2>Perfect 5th</h2>
      <Perfect5th />
      <p>This interval is seven semitones apart.</p>
      </div>
      <div className="interval-div">
      <h2>Minor 6th</h2>
      <Min6th />
      <p>This interval is eight semitones apart.</p>
      </div>
      <div className="interval-div">
      <h2>Major 6th</h2>
      <Maj6th />
      <p>This interval is nine semitones apart.</p>
      </div>  
      <div className="interval-div">
      <h2>Minor 7th</h2>
      <Min7th />
      <p>This interval is ten semitones apart.</p>
      </div>
      <div className="interval-div">
      <h2>Major 7th</h2>
      <Maj7th />
      <p>This interval is eleven semitones apart.</p>
      </div>
      <div className="interval-div">
      <h2>Octave</h2>
      <Octave />
      <p>This interval is twelve semitones apart (the same note one octave higher).</p>
      </div>
    </div>
  );
};
