import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function PentatonicScale() {
  useEffect(() => {
    const container = document.getElementById('pentatonic-scale');
    if (!container) return;
    
    container.innerHTML = '';
    
    const vf = new Factory({
      renderer: {
        elementId: 'pentatonic-scale',
        width: 700,
        height: 150,
      },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(
          score.notes('C#4/q, D#4/q, F#4/q, G#4/q, A#4/q, G#4/q, F#4/q, D#4/q, C#4/q'),
          { time: '9/4' }
        ),
      ],
    }).addClef('treble');

    vf.draw();
  }, []);

    return <div id="pentatonic-scale" />;
}