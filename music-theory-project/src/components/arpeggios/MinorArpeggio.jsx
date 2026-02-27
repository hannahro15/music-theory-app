import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function MinArpeggio() {
      useEffect(() => {
          const container = document.getElementById('c-minor-arpeggio');
          if (!container) return;
          
          container.innerHTML = '';
          
          const vf = new Factory({
            renderer: {
              elementId: 'c-minor-arpeggio',
              width: 700,
              height: 150,
            },
          });
      
          const score = vf.EasyScore();
          const system = vf.System();
      
            system.addStave({
            voices: [
            score.voice(
            score.notes('C4/q, Eb4/q, G4/q, C5/q, G4/q, Eb4/q, C4/q', { stem: 'up' }),
                { time: '7/4' }
        ),
      ],
    }).addClef('treble');
      
          vf.draw();
        }, []);
      
          return <div id="c-minor-arpeggio" />;
      }
  