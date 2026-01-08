import { Component } from 'react';
import { Factory } from 'vexflow';

class MelodicMinorScale extends Component {
  componentDidMount() {
    const container = document.getElementById('c-melodic-minor-scale');
    if (!container) return;
    
    // Clear any existing content to prevent double rendering
    container.innerHTML = '';
    
    const vf = new Factory({
      renderer: {
        elementId: 'c-melodic-minor-scale',
        width: 1300,
        height: 200,
      },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(
          score.notes('C4/q, D4/q, Eb4/q, F4/q, G4/q, A4/q, B4/q, C5/q, Bb4/q, Ab4/q, G4/q, F4/q, Eb4/q, D4/q, C4/q'),
          { time: '15/4' }
        ),
      ],
    }).addClef('treble');

    vf.draw();
  }

  render() {
    return <div id="c-melodic-minor-scale" />;
  }
}

export default MelodicMinorScale;