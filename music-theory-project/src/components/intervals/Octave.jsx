import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function Octave() {
       useEffect(() => {
          const container = document.getElementById('octave-interval');
          if (!container) return;
          
          container.innerHTML = '';
          
          const vf = new Factory({
            renderer: {
              elementId: 'octave-interval',
              width: Math.min(container.clientWidth || 700, 320),
              height: 150,
            },
          });
          const score = vf.EasyScore();
          const system = vf.System();
      
          system.addStave({
            voices: [
              score.voice(
                score.notes('C4/q, C5/q', {stem: 'up'}), 
                { time: '2/4'}
              ),
            ],
          }).addClef('treble');
      
          vf.draw();
       }, []);

       return <div id="octave-interval" />
  }

