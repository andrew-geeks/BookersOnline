import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home';

//import './App.css';

//components
import Navbar from "./components/navBar";
import Cart from "./components/cart";
import Genre from "./components/genre";
import Product from "./components/productPage";
import GenPage from "./components/genrePage";
import SearchPage from "./components/searchPage";
import Account from "./components/account";
import Signup from "./components/signup";

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/genre' exact component={Genre} />
            <Route path="/books/:id" exact component={Product} />
            <Route path='/genre/:getGenre' exact component={GenPage} />
            <Route path='/search' exact component={SearchPage} />
            <Route path='/account' exact component={Account} />
            <Route path='/account/signup' exact component={Signup} />
          </Switch>
        </Router>
      </div>
  );
}



export default App;




// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
//   }

//   callAPI() {
//       fetch("http://localhost:9000")
//           .then(res => res.text())
//           .then(res => this.setState({ apiResponse: res }));
//   }

//   componentWillMount() {
//       this.callAPI();
//   }

//   render(){
//     return(
//       <div>
//         <Navbar/>
//         <p>{this.state.apiResponse}</p>
//       </div>
//     )
//   }

// }