import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/store';

export const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.items);

  return (
    <div>
      <button onClick={() => dispatch(add(payload))}>Add</button>
      {value}
      <button onClick={() => dispatch(remove(payload))}>Remove</button>
    </div>
  );
};
