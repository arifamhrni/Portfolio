import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> PERKENALAN </span> DULU YAA!
            </h1>
            <p className="home-about-body">
              Aku suka sekali mempelajari tentang teknologi. 
              <br />
              <br />
              Punya skill dalam bidang <b className="purple">Desain Grafis, Content Creator, Content Writing </b> dan 
              <b className="purple">  </b>
              <br />
              <br />Suka sama bahasa pemograman
              <i>
                <b className="purple"> Java, Javascript, Phyton. </b>
              </i>
              <br />
              <br />
              Tertarik sekali untuk mempelajari
              <i>
                <b className="purple"> Full-stack Developer </b> dan{" "}
                <b className="purple">
                Android Developer.
                </b>
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>KONTAKKU</h1>
            <p>
              mau <span className="purple">ngobrol, curhat, berteman? </span>silahkan bangett!
            </p>
            <li className="social-icons">
                <a
                  href="https://github.com/arifamhrni"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/arifamhrni"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arifamaharani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/arifamhrni"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://x.com/fifthvea"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
