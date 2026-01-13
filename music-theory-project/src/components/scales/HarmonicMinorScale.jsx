import { Component } from 'react';
import { Factory } from 'vexflow';

class HarmonicMinorScale extends Component {
  componentDidMount() {
    const container = document.getElementById('c-harmonic-minor-scale');
    if (!container) return;
    
    // Clear any existing content to prevent double rendering
    container.innerHTML = '';
    
    const vf = new Factory({
      renderer: {
        elementId: 'c-harmonic-minor-scale',
        width: 700,
        height: 200,
      },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(
          score.notes('C4/q, D4/q, Eb4/q, F4/q, G4/q, Ab4/q, B4/q, C5/q'),
          { time: '8/4' }
        ),
      ],
    }).addClef('treble');

    vf.draw();
  }

  render() {
    return <div id="c-harmonic-minor-scale" />;
  }
}

export default HarmonicMinorScale;