import Notation from '../notation/Notation';
import { responsiveIntervalWidth } from '../../hooks/useVexFlowStave';

export default function Maj6th() {
  return <Notation notes="C4/q, A4/q" time="2/4" stem="up" width={responsiveIntervalWidth} />;
}
