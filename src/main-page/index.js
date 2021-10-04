import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';

function App() {
  const[allHouses, setAllHouses] = useState([]);

  //primeiro parametro é uma função e o outro é quando será disparado
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []); //deixando o array em branco, só vai ser disparado uma vez

  const featuredHouse =  useMemo(() => {
    if(allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses])
  
  //para trabalhar com rotas, tenho que instalar o react-router-dom
  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <Switch>
            <Route path="/">
              <FeaturedHouse house={featuredHouse}/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
