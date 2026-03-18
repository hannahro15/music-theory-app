import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function LocrianScale() {
  useEffect(() => {
    const container = document.getElementById('c-locrian-scale');
    if (!container) return;
    
    container.innerHTML = '';
    
    const vf = new Factory({
      renderer: {
        elementId: 'c-locrian-scale',
        width: 700,
        height: 150,
      },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(
          score.notes('C4/q, Db4/q, Eb4/q, F4/q, Gb4/q, Ab4/q, Bb4/q, C5/q, Bb4/q, Ab4/q, Gb4/q, F4/q, Eb4/q, Db4/q, C4/q'),
          { time: '15/4' }
        ),
      ],
    }).addClef('treble');

    vf.draw();
  }, []);

    return <div id="c-locrian-scale" />;
}
