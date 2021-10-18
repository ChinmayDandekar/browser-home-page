import './App.css';
import Header from './components/Header';
import BkImage from './components/BkImage';
import BlackBg from './components/BlackBg';
import CenterBox from './components/CenterBox';
import BookmarkContainer from './components/BookmarkContainer';
import TaskContainer from './components/TaskContainer';

function App() {
  
  return (
    <div className="App"  >
      <BkImage />
      <BlackBg />
      <Header />
      <BookmarkContainer />
      <CenterBox />
      <TaskContainer />
    </div>
  );
}

export default App;
