import React from 'react';
import Card from '../Card/Card';
import {GalleryProps, GalleryItem} from './interface';
import * as SC from './styles';

const Gallery = ({data}: GalleryProps) => (
  <SC.Main>
    {data.map((item: GalleryItem, i: number) => <Card data={item} />)}
  </SC.Main>
);

export default Gallery;
