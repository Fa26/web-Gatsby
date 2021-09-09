import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImgTwo from '../Image/ProjectImgTwo'

const MidleZone = () => {
	  const { midle } = useContext(PortfolioContext);

	const [isDesktop, setIsDesktop] = useState(false);
  	const [isMobile, setIsMobile] = useState(false);
  	const {img}=midle;

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);


	return(
	
		<>
		<section id="midle">
			<Fade bottom duration={1000} delay={600} distance="30px"> 
			<div className="zone">
			<h1 className="text ">Yes, I Screw up...</h1>
			</div>
			</Fade>
		</section>
		</>
	)

}

export default MidleZone


