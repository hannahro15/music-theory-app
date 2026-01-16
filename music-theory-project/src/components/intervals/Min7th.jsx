import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function Min7th() {
       useEffect(() => {
          const container = document.getElementById('min-7th-interval');
          if (!container) return;
          
          container.innerHTML = '';
          
          const vf = new Factory({
            renderer: {
              elementId: 'min-7th-interval',
              width: 700,
              height: 150,
            },
          });
          const score = vf.EasyScore();
          const system = vf.System();
      
          system.addStave({
            voices: [
              score.voice(
                score.notes('C4/q, Bb4/q', {stem: 'up'}), 
                { time: '2/4'}
              ),
            ],
          }).addClef('treble');
      
          vf.draw();
       }, []);

       return <div id="min-7th-interval" />
  }

