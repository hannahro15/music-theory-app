import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function Perfect5th() {
       useEffect(() => {
          const container = document.getElementById('perfect-5th-interval');
          if (!container) return;
          
          container.innerHTML = '';
          
          const vf = new Factory({
            renderer: {
              elementId: 'perfect-5th-interval',
              width: 700,
              height: 200,
            },
          });
          const score = vf.EasyScore();
          const system = vf.System();
      
          system.addStave({
            voices: [
              score.voice(
                score.notes('C4/q, G4/q', {stem: 'up'}), 
                { time: '2/4'}
              ),
            ],
          }).addClef('treble');
      
          vf.draw();
       }, []);

       return <div id="perfect-5th-interval" />
  }
