import './App.css';
import background from './assets/video/background.mp4';

import LeftSidebar from './components/LeftSidebar';
import RightNavigation from './components/RightNavigation';

import Home from './components/Content/Home/index';
// import About from './components/Content/About/index';

function App() {
  return (
    <div className="mainWrapper">

      <LeftSidebar/>
      <div className='content'>
        <Home/>
      </div>

      <video className='backVideo' autoPlay loop muted>
        <source src={background} type='video/mp4'/>
      </video>

   
      <RightNavigation/>

    </div>
  );
}

export default App;
