import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function MajorScale(){
  useEffect(() => {
    const container = document.getElementById('c-major-scale');
    if (!container) return;
    
    container.innerHTML = '';
    
    const vf = new Factory({
      renderer: {
        elementId: 'c-major-scale',
        width: 700,
        height: 200,
      },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(
          score.notes('C4/q, D4/q, E4/q, F4/q, G4/q, A4/q, B4/q, C5/q, B4/q, A4/q, G4/q, F4/q, E4/q, D4/q, C4/q'),
          { time: '15/4' }
        ),
      ],
    }).addClef('treble');

    vf.draw();
  }, []);

    return <div id="c-major-scale" />;
}
