import Notation from '../notation/Notation';
import { responsiveIntervalWidth } from '../../hooks/useVexFlowStave';

export default function Maj2nd() {
  return <Notation notes="C4/q, D4/q" time="2/4" stem="up" width={responsiveIntervalWidth} />;
}
