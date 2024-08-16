import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Utils/header';
import Footer from './Utils/footer';

const App = () => {
	return(
		<BrowserRouter>
			<Header />
				<p>
					Section en maintenance
				</p>
			<Footer />
		</BrowserRouter>
	)
}

export default App;