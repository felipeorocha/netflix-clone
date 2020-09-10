import React, { useEffect, useState } from 'react';
import './App.css';

import apiData from './service/api';

import CategoriesList from './components/categoriesList';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const fetchMediaData = async () => {
      const response = await apiData.getHomeList();
      setMovieList(response);
    }

    fetchMediaData();
  }, []);

  return (
    <div className="App">
      <section className="lists">
        { movieList.map(item => (
            <CategoriesList title={item.title} items={item.items} />
          )) }
      </section>
    </div>
  );
}

export default App;
