import { Suspense, lazy } from 'react'; // Combine imports
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Main = lazy(() => {
  // No need for delayForDemo in production
  return delayForDemo(1500).then(() => import('./components/Main/Main'));
});

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={BigSpinner()}> {/* Use component directly */}
        <Main />
      </Suspense >
      <Footer />
    </>
  );
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}

const delayForDemo = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default App;
