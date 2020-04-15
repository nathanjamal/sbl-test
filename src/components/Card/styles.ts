import styled from 'styled-components/macro';

export const ImgCont = styled.div`
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.49717514124294%;
	background-size: cover;
`;

export const TimeLabel = styled.time`
	position: absolute;
	left: 0;
	bottom: 0;
	display: inline-block;
	padding: 5px 6px 5px 24px;
	background: #fff;
	font-size: 16px;
	color: #1E212A;

 	@media (min-width: 431px) {
 		padding: 2px 4px 2px 14px;
    font-size: 12px;
  }

  @media (min-width: 650px) {
 		padding: 5px 6px 5px 24px;
    font-size: 16px;
  }

  @media (min-width: 1900px) {
    font-size: 0.84vw;
  }
`;

export const Main = styled.article`
	box-sizing: border-box;
	flex: 0 0 98%;
	background: #2B2F3B;
	border: solid 2px #464B5E;
	text-align: left;
	font-family: 'Roboto Condensed', sans-serif;

	a {
		display: flex;
    flex-direction: column;
    text-decoration: none;
	}

	h1 {
		margin: 0;
		padding: 6.78% 5.36% 11.58%;
		font-size: 23px;
		color: #fff;
		text-decoration: none;
		font-weight: 400;
		text-transform: uppercase;
	}

	@media (min-width: 431px) {
    flex: 0 0 48%;

    h1 {
    	font-size: 18px;
    }
  }

  @media (min-width: 650px) {
    h1 {
    	font-size: 23px;
    }
  }

  @media (min-width: 1020px) {
    flex: 0 0 31%;
  }

  @media (min-width: 1440px) {
    flex: 0 0 23%;
  }

  @media (min-width: 1900px) {
    flex: 0 0 18%;
    h1 {
    	font-size: 1.58vw;
    }
  }
`;
