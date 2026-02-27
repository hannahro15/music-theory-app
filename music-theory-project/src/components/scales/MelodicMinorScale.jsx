import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function MelodicMinorScale() {
  useEffect(() => {
    const container = document.getElementById('c-melodic-minor-scale');
    if (!container) return;
    
    container.innerHTML = '';
    
    const vf = new Factory({
      renderer: {
        elementId: 'c-melodic-minor-scale',
        width: 1400,
        height: 200, 
      },
    });

    const score = vf.EasyScore();
    const system = vf.System({ wudtg: 1300 });

    system.addStave({
      voices: [
        score.voice(
          score.notes('C4/w, D4/w, Eb4/w, F4/w, G4/w, A4/w, B4/w, C5/w, Bb4/w, Ab4/w, G4/w, F4/w, Eb4/w, D4/w, C4/w'),
          { time: '15/4' }
        ),
      ],
    }).addClef('treble');

    vf.draw();
  }, []);

    return <div id="c-melodic-minor-scale" />;
  }
