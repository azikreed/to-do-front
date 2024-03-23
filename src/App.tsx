import { Link, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';

function App() {
	return (
		<>
			<Button>Кнопка</Button>
			<Button appearance='big'>Кнопка</Button>
			<Input placeholder='email'/>
		</>
	);
}

export default App;
