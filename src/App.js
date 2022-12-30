import './App.css';
import Topbar from './components/Topbar'
import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'

function App() {
  return (
    <div>
      <Topbar />
      <Blogs />
      <AddBlog />
    </div>
  );
}

export default App;
