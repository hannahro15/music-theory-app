import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function Dom7th() {
      useEffect(() => {
          const container = document.getElementById('dom-7th');
          if (!container) return;
          
          container.innerHTML = '';
          
          const vf = new Factory({
            renderer: {
              elementId: 'dom-7th',
              width: 700,
              height: 150,
            },
          });
      
          const score = vf.EasyScore();
          const system = vf.System();
      
            system.addStave({
            voices: [
            score.voice(
            score.notes('C4/q, E4/q, G4/q, Bb4/q, C5/q, Bb4/q, G4/q, E4/q, C4/q', { stem: 'up' }),
                { time: '9/4' }
        ),
      ],
    }).addClef('treble');
      
          vf.draw();
        }, []);
      
          return <div id="dom-7th" />;
      }
  