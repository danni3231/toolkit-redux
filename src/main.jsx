import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import { store } from './store/store';
import { Provider } from 'react-redux';
import { PokemonApp } from './PokemonApp.jsx';
import { TodoApp } from './TodoApp.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<TodoApp />
		</Provider>
	</StrictMode>
);
