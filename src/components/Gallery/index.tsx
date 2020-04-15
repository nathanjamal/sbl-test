import React, {useState, useEffect} from 'react';
import Gallery from './Gallery';
import {getGalleryData} from '../../services/galleryService';
import {GalleryData} from './interface';
import * as SC from './styles';

const GalleryContainer = () => {
  const [galleryData, setGalleryData] = useState<GalleryData>(
    {
      data: [],
      loading: false,
    }
  );

  useEffect(() => {
    setGalleryData({...galleryData, loading: true});

    const fetchData = async () => {
      const request = await getGalleryData();
      const updatedGalleryData: GalleryData = {
        ...galleryData,
        loading: false
      };

      if (request.status === 200 && request.items) {
        updatedGalleryData.data = request.items;
      } else {
        updatedGalleryData.data = [];
        updatedGalleryData.error = request.message;
      }

      setGalleryData(updatedGalleryData);
    };

    fetchData();
  }, []);

  const {data, loading} = galleryData;

  
  if (loading) {
    return <SC.StateLabel>Loading...</SC.StateLabel>;
  }

  if (galleryData.error) {
    return <SC.StateLabel>{galleryData.error}</SC.StateLabel>;
  }

  return <Gallery data={data} />;
};

export default GalleryContainer;
