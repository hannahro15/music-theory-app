import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function MajorScale({ id = 'c-major-scale' }){
  useEffect(() => {
    const container = document.getElementById(id);
    if (!container) return;

    container.innerHTML = '';

    const vf = new Factory({
      renderer: {
        elementId: id,
        width: 700,
        height: 150,
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
  }, [id]);

    return <div id={id} />;
}
