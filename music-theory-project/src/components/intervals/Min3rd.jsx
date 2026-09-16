import Notation from '../notation/Notation';
import { responsiveIntervalWidth } from '../../hooks/useVexFlowStave';

export default function Min3rd() {
  return <Notation notes="C4/q, Eb4/q" time="2/4" stem="up" width={responsiveIntervalWidth} />;
}
