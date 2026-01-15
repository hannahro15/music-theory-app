import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function Arpeggios() {
      useEffect(() => {
          const container = document.getElementById('c-major-arpeggio');
          if (!container) return;
          
          container.innerHTML = '';
          
          const vf = new Factory({
            renderer: {
              elementId: 'c-major-arpeggio',
              width: 700,
              height: 200,
            },
          });
      
          const score = vf.EasyScore();
          const system = vf.System();
      
            system.addStave({
            voices: [
            score.voice(
            score.notes('C4/q, E4/q, G4/q, C5/q, G4/q, E4/q, C4/q', { stem: 'up' }),
                { time: '7/4' }
        ),
      ],
    }).addClef('treble');
      
          vf.draw();
        }, []);
      
          return <div id="c-major-arpeggio" />;
      }
  