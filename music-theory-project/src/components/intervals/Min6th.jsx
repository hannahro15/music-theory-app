import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function Min6th() {
       useEffect(() => {
          const container = document.getElementById('min-6th-interval');
          if (!container) return;
          
          container.innerHTML = '';
          
          const vf = new Factory({
            renderer: {
              elementId: 'min-6th-interval',
              width: 700,
              height: 150,
            },
          });
          const score = vf.EasyScore();
          const system = vf.System();
      
          system.addStave({
            voices: [
              score.voice(
                score.notes('C4/q, Ab4/q', {stem: 'up'}), 
                { time: '2/4'}
              ),
            ],
          }).addClef('treble');
      
          vf.draw();
       }, []);

       return <div id="min-6th-interval" />
  }

