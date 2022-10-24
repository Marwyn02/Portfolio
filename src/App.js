import { useState } from 'react';
import Navbar from './components/nav/Navbar';
import SiteLayout from './components/layout/SiteLayout';

const data = [
  {
    id: 1,
    title: "UFOTO | Self-Portait Studio",
    date: "September 30 2022",
    img: "./images/UFOTOThumb.png",
    link: "https://marwyn02.github.io/UFOTO"
    // tools: [
    //   {
    //     programming: {
    //       name: "Html"
    //     }
    //   },
    //   {
    //     programming: {
    //       name: "Css"
    //     }
    //   },
    //   {
    //     programming: {
    //       name: "Javascript"
    //     }
    //   },
    //   {
    //     programming: {
    //       name: "Jquery"
    //     }
    //   }
    // ]
  },
  {
    id: 2,
    title: "Pokedex",
    date: "October 18 2022",
    img: "./images/PokedexThumb.png",
    link: "https://marwyn02.github.io/PokeDex-React-App"
  },
  {
    id: 3,
    title: "Turista",
    date: "July 10 2022",
    img: "./images/TuristaThumb.png",
    link: "https://pure-waters-00186.herokuapp.com/"
  },
]

const utils = [
  {
    burger: "./utils/Burger-icon.png",
    close: "./utils/Close-button.png"
  }
]

const App = () => {
  const [Website, setWebsite] = useState(data);
  const [Icon, setIcons] = useState(utils);

  return (
    <div className="App">
      <Navbar 
        icons={ Icon }
      />
      <SiteLayout
        items={ Website }
      />
    </div>
  );
}

export default App;
