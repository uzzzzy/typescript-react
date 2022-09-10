import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "../../utils/store/reducers/_counter";

interface IHomeCounter {
  counter: number;
}

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <Home.Counter counter={counter} />
      <Home.Action dispatch={dispatch} />
    </div>
  );
}

Home.Counter = ({ counter }: IHomeCounter) => {
  return <div>{counter}</div>;
};

Home.Action = ({ dispatch }: ComponentDispatchProps) => {
  const actions = [
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset,
  ];
  return (
    <div>
      {actions.map((action, index) => (
        <button key={index} onClick={() => dispatch(action(8))}>
          {action.type.split("/")[1]}
        </button>
      ))}
    </div>
  );
};
