import Navbar from './components/Navbar';
import Post from './components/Post';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './components/Posts';
import AddPost from './components/AddPost';


function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>

        <Route path="/add">
          <AddPost />
        </Route>

        <Route path="/get/:id">
          <Post />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
