import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import alienImage from '../images/run-for-your-life-large.jpg';



const Wrapper = styled.div`
	background-color: hsl(210deg 45% 26% / 74%);
	min-height: 600px;
`;

const Image = styled.img`
	display: block;
	width: 60%;
	max-width: 470px;
	height: 350px;
	margin: 5px 0 10px;
`;

const SectionInfo = styled.div`
	color: gray;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 1em;
`;

const H2 = styled.h2`
	font-size: 2.4em;
	margin: 75px auto 0px;
`;

const P = styled.p`
	font-size: 1.6em;
	margin-bottom: 15px;
`;

const BtnRedirect = styled.button`
	font-size: 1.4em;
	color: gray;
	background-color: white;
	padding: 8px;
	border-radius: 7px;
	margin-top: 10px;
`;


const Error = () => {
	
	
	return (
		<Wrapper className="main-section">
			
			<SectionInfo>
				<H2>404 - Página não encontrada</H2>
				<Image src={alienImage} alt="alien image" />			
				<BtnRedirect>
					<Link to="/" style={{textDecoration: "none"}} >
						home
					</Link>
				</BtnRedirect>
			</SectionInfo>
		</Wrapper>
	);
};



export default Error;



