import Notation from '../notation/Notation';
import { responsiveIntervalWidth } from '../../hooks/useVexFlowStave';

export default function Tritone() {
  return <Notation notes="C4/q, F#4/q" time="2/4" stem="up" width={responsiveIntervalWidth} />;
}
