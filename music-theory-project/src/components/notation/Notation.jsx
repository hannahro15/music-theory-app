import useVexFlowStave from '../../hooks/useVexFlowStave';

export default function Notation(props) {
  const id = useVexFlowStave(props);
  return <div id={id} className="vf-notation" />;
}
