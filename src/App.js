import React, { useEffect, useState } from 'react';
import { css } from "@emotion/core";
import { BeatLoader } from "react-spinners";
import styled from 'styled-components';

import apiData from './service/api';

import CategoriesList from './components/categoriesList';
import FeaturedMovie from './components/featuredMovie';

const override = css`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchMediaData = async () => {
      setLoader(true)
      const response = await apiData.getHomeList();
      setMovieList(response);

      const originals = response.filter(item => item.slug === 'originals');
      const randomOriginal = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const featured = originals[0].items.results[randomOriginal];
      const featuredInfo = await apiData.getMovieInfo(featured.id, 'tv');

      setFeaturedData(featuredInfo);
      setLoader(false);
    }

    fetchMediaData();
  }, []);

  const ListsContainer = styled.section`
    margin-top: -150px;
  `;

  return (
    <div className="App">
        <BeatLoader
          css={override}
          size={25}
          margin={2}
          color={"red"}
          loading={loader}
        />
      { featuredData && <FeaturedMovie item={featuredData} /> }
      <ListsContainer>
        { movieList.map(item => (
            <CategoriesList title={item.title} items={item.items} />
          )) }
      </ListsContainer>
    </div>
  );
}

export default App;
