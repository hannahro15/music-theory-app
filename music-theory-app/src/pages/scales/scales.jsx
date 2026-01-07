import MajorScale from '../../components/MajorScale';
import HarmonicMinorScale from '../../components/HarmonicMinorScale';
import MelodicMinorScale from '../../components/MelodicMinorScale';

function Scales() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Scales</h1>
      <p>Learn about different musical scales.</p>
      
      <h2>Major Scale</h2>
      <MajorScale />
      
      <h2>Minor Scales</h2>
      
      <h3>Harmonic Minor</h3>
      <HarmonicMinorScale />
      
      <h3>Melodic Minor</h3>
      <MelodicMinorScale />
    </div>
  );
}

export default Scales;