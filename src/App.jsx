import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/slices/counter';

function App() {
	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<>
			<h1>Vite + React</h1>
			<p> count is: {counter} </p>
			<div className='card'>
				<button onClick={() => dispatch(decrement())}>decrement</button>
				<button onClick={() => dispatch(increment())}>increment</button>
				<button onClick={() => dispatch(incrementByAmount(2))}>increment by 2</button>
			</div>
		</>
	);
}

export default App;
