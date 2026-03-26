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
    <div className="intervals-page">
      <h1>Intervals Page</h1>
      <p>This is the Intervals page showing all the different intervals.</p>
      <div className="intervals-flex">
      <div className="interval-div">
      <h2>Minor 2nd</h2>
      <div className="interval-notation">
        <Min2nd />
      </div>
      <p>This interval is semitone apart (neighbouring notes).</p>
      </div>
      <div className="interval-div">
      <h2>Major 2nd</h2>
      <div className="interval-notation">
        <Maj2nd />
      </div>
      <p>This interval is two semitones apart (or a tone). </p>
      </div>
      <div className="interval-div">
      <h2>Minor 3rd</h2>
      <div className="interval-notation">
        <Min3rd />
      </div>
      </div>
      <div className="interval-div">
      <h2>Major 3rd</h2>
      <div className="interval-notation">
        <Maj3rd />
      </div>
      </div>
      <div className="interval-div">
      <h2>Perfect 4th</h2>
      <div className="interval-notation">
        <Perfect4th />
      </div>
      </div>
      <div className="interval-div">
      <h2>Tritone (or augmented 4th)</h2>
      <div className="interval-notation">
        <Tritone />
      </div>
      <p>A tritone is also known as an diminished 5th but then the interval would be from a C to a Gb. (It still sounds the same, but different naming conventions).</p>
      </div>
      <div className="interval-div">
      <h2>Perfect 5th</h2>
      <div className="interval-notation">
        <Perfect5th />
      </div>
      </div>
      <div className="interval-div">
      <h2>Minor 6th</h2>
      <div className="interval-notation">
        <Min6th />
      </div>
      </div>
      <div className="interval-div">
      <h2>Major 6th</h2>
      <div className="interval-notation">
        <Maj6th />
      </div>
      </div>  
      <div className="interval-div">
      <h2>Minor 7th</h2>
      <div className="interval-notation">
        <Min7th />
      </div>
      </div>
      <div className="interval-div">
      <h2>Major 7th</h2>
      <div className="interval-notation">
        <Maj7th />
      </div>
      </div>
      <div className="interval-div">
      <h2>Octave</h2>
      <div className="interval-notation">
        <Octave />
      </div>
      </div>
      </div>
    </div>
  );
};
