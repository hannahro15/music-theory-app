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
      <div className="intervals-grid">
        <div className="interval-card">
          <h2>Minor 2nd</h2>
          <Min2nd />
        </div>
        <div className="interval-card">
          <h2>Major 2nd</h2>
          <Maj2nd />
        </div>
        <div className="interval-card">
          <h2>Minor 3rd</h2>
          <Min3rd />
        </div>
        <div className="interval-card">
          <h2>Major 3rd</h2>
          <Maj3rd />
        </div>
        <div className="interval-card">
          <h2>Perfect 4th</h2>
          <Perfect4th />
        </div>
        <div className="interval-card">
          <h2>Tritone (or augmented 4th)</h2>
          <Tritone />
        </div>
        <div className="interval-card">
          <h2>Perfect 5th</h2>
          <Perfect5th />
        </div>
        <div className="interval-card">
          <h2>Minor 6th</h2>
          <Min6th />
        </div>
        <div className="interval-card">
          <h2>Major 6th</h2>
          <Maj6th />
        </div>
        <div className="interval-card">
          <h2>Minor 7th</h2>
          <Min7th />
        </div>
        <div className="interval-card">
          <h2>Major 7th</h2>
          <Maj7th />
        </div>
        <div className="interval-card">
          <h2>Octave</h2>
          <Octave />
        </div>
      </div>
    </div>
  );
};
