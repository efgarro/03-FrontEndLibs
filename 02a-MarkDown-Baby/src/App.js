import React from "react";
import { hot } from "react-hot-loader/root";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
// class App extends React.Component {
//   render() {
//     const { name } = this.props;
//     return (
//       <>
//         <h1>Hello {name}</h1>
//       </>
//     );
//   }
// }

export default hot(App);
