import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function ChromaticScale() {
  useEffect(() => {
    const container = document.getElementById('c-chromatic-scale');
    if (!container) return;
    
    container.innerHTML = '';
    
    const vf = new Factory({
      renderer: {
        elementId: 'c-chromatic-scale',
        width: 700,
        height: 150,
      },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(
          score.notes('C4/q, Db4/q, D4/q, Eb4/q, E4/q, F4/q, Gb4/q, G4/q, Ab4/q, A4/q, Bb4/q, B4/q, C5/q, B4/q, Bb4/q, A4/q, Ab4/q, G4/q, Gb4/q, F4/q, E4/q, Eb4/q, D4/q, Db4/q, C4/q'),
          { time: '25/4' }
        ),
      ],
    }).addClef('treble');

    vf.draw();
  }, []);

    return <div id="c-chromatic-scale" />;
}
