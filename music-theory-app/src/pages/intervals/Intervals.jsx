import Min2nd from './Min2nd.jsx';
import Maj2nd from './Maj2nd.jsx';
import Min3rd from './Min3rd.jsx';
import Maj3rd from './Maj3rd.jsx';
import Perfect4th from './Perfect4th.jsx';
import Tritone from './Tritone.jsx';
import Perfect5th from './Perfect5th.jsx';

function Intervals() {
  return (
    <div>
      <h1>Intervals Page</h1>
      <p>This is the Intervals page content.</p>
      <Min2nd />
      <Maj2nd />
      <Min3rd />
      <Maj3rd />
      <Perfect4th />
      <Tritone />   
      <Perfect5th />
      <div>Minor 6th</div>
      <div>Major 6th</div>
      <div>Minor 7th</div>
      <div>Major 7th</div>
      <div>Octave</div>
    </div>
  );
}

export default Intervals;