import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function MixolydianScale() {
  useEffect(() => {
    const container = document.getElementById('c-mixolydian-scale');
    if (!container) return;
    
    container.innerHTML = '';
    
    const vf = new Factory({
      renderer: {
        elementId: 'c-mixolydian-scale',
        width: 700,
        height: 150,
      },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(
          score.notes('C4/q, D4/q, E4/q, F4/q, G4/q, A4/q, Bb4/q, C5/q, Bb4/q, A4/q, G4/q, F4/q, E4/q, D4/q, C4/q'),
          { time: '15/4' }
        ),
      ],
    }).addClef('treble');

    vf.draw();
  }, []);

    return <div id="c-mixolydian-scale" />;
}
