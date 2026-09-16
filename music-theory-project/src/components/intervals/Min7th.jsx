import Notation from '../notation/Notation';
import { responsiveIntervalWidth } from '../../hooks/useVexFlowStave';

export default function Min7th() {
  return <Notation notes="C4/q, Bb4/q" time="2/4" stem="up" width={responsiveIntervalWidth} />;
}
