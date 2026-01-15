import { useEffect } from 'react';
import { Factory } from 'vexflow';

export default function Min2nd() {
       useEffect(() => {
          const container = document.getElementById('min-2nd-interval');
          if (!container) return;
          
          container.innerHTML = '';
          
          const vf = new Factory({
            renderer: {
              elementId: 'min-2nd-interval',
              width: 700,
              height: 200,
            },
          });
          const score = vf.EasyScore();
          const system = vf.System();
      
          system.addStave({
            voices: [
              score.voice(
                score.notes('C4 Db4/w', {stem: 'up'}), 
                { time: '1/1'}
              ),
            ],
          }).addClef('treble');
      
          vf.draw();
       }, []);
       
       return (
    <div style={{ border: '2px solid red', padding: '20px', margin: '20px' }}>
      <p>Minor 2nd interval (C to Db)</p>
      <div id="min-2nd-interval" />
    </div>
  );
  }

