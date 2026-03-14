import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function LydianScale() {
  useEffect(() => {
    const container = document.getElementById('c-lydian-scale');
    if (!container) return;
    
    container.innerHTML = '';
    
    const vf = new Factory({
      renderer: {
        elementId: 'c-lydian-scale',
        width: 700,
        height: 150,
      },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(
          score.notes('C4/q, D4/q, E4/q, F#4/q, G4/q, A4/q, B4/q, C5/q, B4/q, A4/q, G4/q, F#4/q, E4/q, D4/q, C4/q'),
          { time: '15/4' }
        ),
      ],
    }).addClef('treble');

    vf.draw();
  }, []);

    return <div id="c-lydian-scale" />;
}
