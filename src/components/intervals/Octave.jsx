import Notation from '../notation/Notation';
import { responsiveIntervalWidth } from '../../hooks/useVexFlowStave';

export default function Octave() {
  return <Notation notes="C4/q, C5/q" time="2/4" stem="up" width={responsiveIntervalWidth} />;
}
