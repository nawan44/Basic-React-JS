// import "./App.css";
// import React from "react";
// import Autosuggest from "react-autosuggest";
// import ReactHook from "./react-hook";
// import randomColor from "randomcolor";

// class ReactContoh extends React.Component {
//   constructor() {
//     this.state = {
//       // Your initial state
//       loading: true,
//     };
//   }

//   componentDidMount() {
//     fetch("https://pokeapi.co/api/v2/pokemon/")
//       .then((resp) => resp.json())
//       .then((items) => {
//         const pokemon = [];
//         const url = [];
//         items.results.forEach((item) => {
//           pokemon.push(item.name);
//           url.push(item.url);
//         });
//         this.setState({ pokemon, url, loading: false });
//       });
//   }

//   render() {
//     if (loading) {
//       return <Loader />;
//     }
//     return (
//       <div>
//         <Fetchpokemon data={this.state} />
//       </div>
//     );
//   }
// }

// export default ReactContoh;
