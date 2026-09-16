import { useEffect, useId } from 'react';
import { Factory } from 'vexflow';

// Shared by every interval notation component: cap the stave at 320px, or
// shrink to the container on narrow screens.
export function responsiveIntervalWidth(container) {
  return Math.min(container.clientWidth || 700, 320);
}

// Renders a single-voice VexFlow stave into an auto-generated container id,
// so multiple instances on the same page never collide.
export default function useVexFlowStave({
  notes,
  time,
  clef = 'treble',
  stem,
  width = 700,
  height = 150,
  systemWidthOffset = 0,
}) {
  const id = useId();

  useEffect(() => {
    const container = document.getElementById(id);
    if (!container) return;

    container.innerHTML = '';

    const resolvedWidth = typeof width === 'function' ? width(container) : width;

    const vf = new Factory({
      renderer: {
        elementId: id,
        width: resolvedWidth,
        height,
      },
    });

    const score = vf.EasyScore();
    const system = vf.System(
      systemWidthOffset ? { width: resolvedWidth - systemWidthOffset } : undefined
    );

    system
      .addStave({
        voices: [score.voice(score.notes(notes, stem ? { stem } : undefined), { time })],
      })
      .addClef(clef);

    vf.draw();

    // VexFlow doesn't justify a single voice to fill the stave, so the
    // canvas is left much wider than the drawn notes. Trim it to the
    // actual ink so flexbox centering centers the notation, not blank space.
    const svg = container.querySelector('svg');
    if (svg) {
      const bbox = svg.getBBox();
      const trimmedWidth = Math.ceil(bbox.x + bbox.width + bbox.x);
      svg.setAttribute('width', trimmedWidth);
      svg.setAttribute('viewBox', `0 0 ${trimmedWidth} ${height}`);
      svg.style.width = `${trimmedWidth}px`;
    }
  }, [id, notes, time, clef, stem, width, height, systemWidthOffset]);

  return id;
}
