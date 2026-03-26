import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function Min3rd() {
       useEffect(() => {
          const container = document.getElementById('min-3rd-interval');
          if (!container) return;
          
          container.innerHTML = '';
          
          const vf = new Factory({
            renderer: {
              elementId: 'min-3rd-interval',
              width: Math.min(container.clientWidth || 700, 320),
              height: 150,
            },
          });
          const score = vf.EasyScore();
          const system = vf.System();
      
          system.addStave({
            voices: [
              score.voice(
                score.notes('C4/q, Eb4/q', {stem: 'up'}), 
                { time: '2/4'}
              ),
            ],
          }).addClef('treble');
      
          vf.draw();
       }, []);

       return <div id="min-3rd-interval" />
  }

