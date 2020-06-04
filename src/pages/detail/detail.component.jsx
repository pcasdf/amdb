import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useStyles } from './detail.styles';
import DetailContent from '../../components/detail-content/detail-content.component';
import DetailTabs from '../../components/detail-tabs/detail-tabs.component';

const Detail = () => {
  const [data, setData] = useState();
  const [detail, setDetail] = useState();
  const [images, setImages] = useState();
  const [trailer, setTrailer] = useState();
  const [recs, setRecs] = useState();
  const [actors, setActors] = useState();
  const [actorsData, setActorsData] = useState([]);
  const { titleId: id } = useParams();

  const fetchDetails = useCallback(async () => {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=bada949f4005b48da2fb91c2ba013808`
    );
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=fdbaa0a9&i=${movie.data.imdb_id}`
    );
    const images = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=bada949f4005b48da2fb91c2ba013808`
    );
    const recommends = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=bada949f4005b48da2fb91c2ba013808`
    );
    const vid = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=bada949f4005b48da2fb91c2ba013808`
    );
    setData(movie.data);
    setDetail(response.data);
    setImages(images.data.backdrops);
    setRecs(recommends.data.results);
    setActors(response.data.Actors.split(','));
    if (vid.data.results[0]) {
      setTrailer(vid.data.results[0].key);
    }
  }, [id]);

  const fetchActors = async name => {
    if (actors) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=bada949f4005b48da2fb91c2ba013808&language=en-US&query=${name}&page=1&include_adult=false`
      );
      setActorsData(prev => [...prev, response.data.results[0]]);
      console.log(response.data.results[0]);
    }
  };

  useEffect(() => {
    fetchDetails();
    setActorsData([]);
  }, [fetchDetails]);

  useEffect(() => {
    if (actors) {
      actors.forEach(each => fetchActors(each));
    }
  }, [actors]);

  const { tabs } = useStyles();

  return (
    <div>
      <DetailContent {...{ data, detail, images }} />
      <div className={tabs}>
        <DetailTabs {...{ images, recs, trailer, actorsData }} />
      </div>
    </div>
  );
};

export default Detail;
