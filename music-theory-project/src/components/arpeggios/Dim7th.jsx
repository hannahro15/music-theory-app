import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function Dim7th() {
      useEffect(() => {
          const container = document.getElementById('dim-7th');
          if (!container) return;
          
          container.innerHTML = '';
          
          const vf = new Factory({
            renderer: {
              elementId: 'dim-7th',
              width: 700,
              height: 150,
            },
          });
      
          const score = vf.EasyScore();
          const system = vf.System();
      
            system.addStave({
            voices: [
            score.voice(
            score.notes('C4/q, Eb4/q, Gb4/q, A4/q, C5/q, A4/q, Gb4/q, Eb4/q, C4/q', { stem: 'up' }),
                { time: '9/4' }
        ),
      ],
    }).addClef('treble');
      
          vf.draw();
        }, []);
      
          return <div id="dim-7th" />;
      }
  