import './App.css';
import background from './assets/video/background.mp4'
import LeftSidebar from './components/LeftSidebar'
import RightNavigation from './components/RightNavigation';

function App() {
  return (
    <div className="mainWrapper">
      <video className='backVideo' autoPlay loop muted>
        <source src={background} type='video/mp4'/>
      </video>
      <LeftSidebar/>
      <RightNavigation/>
    </div>
  );
}

export default App;
