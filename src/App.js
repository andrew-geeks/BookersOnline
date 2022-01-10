import React,{Component} from "react"

//import './App.css';
import Navbar from "./navBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/home")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render(){
    return(
      <div>
        <Navbar/>
        <p>{this.state.apiResponse}</p>
      </div>
    )
  }

}



// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//     </div>
//   );
// }

export default App;
