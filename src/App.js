import './App.css';
import background from './assets/video/background.mp4'

import LeftSidebar from './components/LeftSidebar'
import RightNavigation from './components/RightNavigation';
import Home from './components/Content/Home/index'

function App() {
  return (
    <div className="mainWrapper">

      
      <div className='content'>
        <Home/>    
      </div>

      <video className='backVideo' autoPlay loop muted>
        <source src={background} type='video/mp4'/>
      </video>

      <LeftSidebar/>
      <RightNavigation/>

    </div>
  );
}

export default App;
