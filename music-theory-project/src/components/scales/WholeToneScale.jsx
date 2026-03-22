import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function WholeToneScale() {
  useEffect(() => {
    const container = document.getElementById('c-whole-tone-scale');
    if (!container) return;
    
    container.innerHTML = '';
    
    const vf = new Factory({
      renderer: {
        elementId: 'c-whole-tone-scale',
        width: 700,
        height: 150,
      },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(
          score.notes('C4/q, D4/q, E4/q, F#4/q, G#4/q, A#4/q, C5/q, A#4/q, G#4/q, F#4/q, E4/q, D4/q, C4/q'),
          { time: '13/4' }
        ),
      ],
    }).addClef('treble');

    vf.draw();
  }, []);

    return <div id="c-whole-tone-scale" />;
}