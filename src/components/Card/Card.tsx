import React from 'react';
import {CardProps} from './interface';
import * as SC from './styles';

const Card = ({data}: CardProps) => (
  <SC.Main>
  	<a href={data.url} target="_blank" rel="noopener noreferrer">
	    <SC.ImgCont style={{backgroundImage: `url(${data.image})`}}>
	    {data.runningTime && <SC.TimeLabel>{data.runningTime} MINS</SC.TimeLabel>}
	    </SC.ImgCont>
	    <h1>{data.title}</h1>
    </a>
  </SC.Main>
);

export default Card;
