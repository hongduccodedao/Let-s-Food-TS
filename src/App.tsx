import Activity from "./components/Activity/Activity";
import Comment from "./components/Comment/Comment";
import Header from "./components/Heder/Header";
import Menu from "./components/Menu/Menu";
import Nav from "./components/Nav/Nav";

function App() {
   return <div className="App">
      <Nav />
      <Header />
      <Activity />
      <Menu /> 
      <Comment />
   </div>;
}

export default App;
