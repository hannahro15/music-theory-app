import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function Maj7th() {
       useEffect(() => {
          const container = document.getElementById('maj-7th-interval');
          if (!container) return;
          
          container.innerHTML = '';
          
          const vf = new Factory({
            renderer: {
              elementId: 'maj-7th-interval',
              width: Math.min(container.clientWidth || 700, 320),
              height: 150,
            },
          });
          const score = vf.EasyScore();
          const system = vf.System();
      
          system.addStave({
            voices: [
              score.voice(
                score.notes('C4/q, B4/q', {stem: 'up'}), 
                { time: '2/4'}
              ),
            ],
          }).addClef('treble');
      
          vf.draw();
       }, []);

       return <div id="maj-7th-interval" />
  }

