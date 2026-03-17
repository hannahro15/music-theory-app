import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function AeolianScale() {
  useEffect(() => {
    const container = document.getElementById('c-aeolian-scale');
    if (!container) return;
    
    container.innerHTML = '';
    
    const vf = new Factory({
      renderer: {
        elementId: 'c-aeolian-scale',
        width: 700,
        height: 150,
      },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(
          score.notes('C4/q, D4/q, Eb4/q, F4/q, G4/q, Ab4/q, Bb4/q, C5/q, Bb4/q, Ab4/q, G4/q, F4/q, Eb4/q, D4/q, C4/q'),
          { time: '15/4' }
        ),
      ],
    }).addClef('treble');

    vf.draw();
  }, []);

    return <div id="c-aeolian-scale" />;
}
