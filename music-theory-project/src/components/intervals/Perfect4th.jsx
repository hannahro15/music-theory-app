import Notation from '../notation/Notation';
import { responsiveIntervalWidth } from '../../hooks/useVexFlowStave';

export default function Perfect4th() {
  return <Notation notes="C4/q, F4/q" time="2/4" stem="up" width={responsiveIntervalWidth} />;
}
