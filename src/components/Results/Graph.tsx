import { GraphProps } from '../interface';

const Graph = (props: GraphProps) => {
  const { data } = props;

  return <div>{JSON.stringify(data)}</div>;
};
export default Graph;
