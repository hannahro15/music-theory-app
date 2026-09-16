import Notation from '../notation/Notation';
import { responsiveIntervalWidth } from '../../hooks/useVexFlowStave';

export default function Maj3rd() {
  return <Notation notes="C4/q, E4/q" time="2/4" stem="up" width={responsiveIntervalWidth} />;
}
