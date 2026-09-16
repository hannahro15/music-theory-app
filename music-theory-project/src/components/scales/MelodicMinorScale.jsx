import Notation from '../notation/Notation';

function responsiveWidth(container) {
  return Math.max(720, Math.min(container.clientWidth || 1400, 1100));
}

export default function MelodicMinorScale() {
  return (
    <Notation
      notes="C4/q, D4/q, Eb4/q, F4/q, G4/q, A4/q, B4/q, C5/q, Bb4/q, Ab4/q, G4/q, F4/q, Eb4/q, D4/q, C4/q"
      time="15/4"
      width={responsiveWidth}
      height={200}
      systemWidthOffset={40}
    />
  );
}
