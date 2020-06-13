import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchDetails, fetchCast } from '../../utils/fetchData';
import { useStyles } from './detail.styles';
import DetailContent from '../../components/detail-content/detail-content.component';
import DetailTabs from '../../components/detail-tabs/detail-tabs.component';

const Detail = () => {
  const [data, setData] = useState();
  const [detail, setDetail] = useState();
  const [images, setImages] = useState();
  const [trailer, setTrailer] = useState();
  const [recs, setRecs] = useState();
  const [cast, setCast] = useState();
  const [castData, setCastData] = useState([]);
  const { titleId: id } = useParams();

  const setDetails = async () => {
    const { movie, response, images, recommends, vid } = await fetchDetails(id);
    setData(movie.data);
    setDetail(response.data);
    setImages(images.data.backdrops);
    setRecs(recommends.data.results);
    setCast([...response.data.Actors.split(','), response.data.Director]);
    if (vid.data.results[0]) {
      setTrailer(vid.data.results[0].key);
    }
  };

  const getCast = async name => {
    const response = await fetchCast(name);
    setCastData(prev => [...prev, response.data.results[0]]);
  };

  useEffect(() => {
    if (cast) {
      cast.forEach(each => getCast(each));
    }
    // eslint-disable-next-line
  }, [cast]);

  useEffect(() => {
    setDetails();
    setCastData([]);
    // eslint-disable-next-line
  }, [fetchDetails]);

  const { body, tabs } = useStyles();

  return (
    <div className={body}>
      <DetailContent {...{ data, detail, images }} />
      <div className={tabs}>
        <DetailTabs {...{ images, recs, trailer, castData }} />
      </div>
    </div>
  );
};

export default Detail;
