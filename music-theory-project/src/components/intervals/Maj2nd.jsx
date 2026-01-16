import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function Maj2nd() {
       useEffect(() => {
          const container = document.getElementById('maj-2nd-interval');
          if (!container) return;
          
          container.innerHTML = '';
          
          const vf = new Factory({
            renderer: {
              elementId: 'maj-2nd-interval',
              width: 700,
              height: 200,
            },
          });
          const score = vf.EasyScore();
          const system = vf.System();
      
          system.addStave({
            voices: [
              score.voice(
                score.notes('C4/q, D4/q', {stem: 'up'}), 
                { time: '2/4'}
              ),
            ],
          }).addClef('treble');
      
          vf.draw();
       }, []);

       return <div id="maj-2nd-interval" />
  }

