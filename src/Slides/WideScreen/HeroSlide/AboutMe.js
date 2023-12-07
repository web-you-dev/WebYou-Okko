/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 500px;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const AboutMeTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(${(scrollPercent) * 5.5}%)`,
  }),
})`
  transition: transform 0.5s ease-out;
  font-family: 'Gyre-Bold';
  position: absolute;
  color: #EEE;
  top:10%;
  left:-15%;
  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;

const AboutMeDescription = styled.div`
  align-items: center;
  font-family: 'Gyre-Italic';
  text-align: left;
  line-height: 1.5;
  position: absolute;
  margin-left: 30%;
  margin-right: 5%;
  top:10%;
  @media ${device.laptop} {
    transform: translateY(90%);
    font-size: 25px;
  }
  @media ${device.laptopL} {
    transform: translateY(87%);
    font-size: 38px;
  }
  @media ${device.desktop} {
    transform: translateY(80%);
    font-size: 70px;
  }
`;

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const maxlimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight;
    if (sp >= 0 && sp <= maxlimit) {
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <AboutMeTitle scrollPercent={scrollPercent}>ПРО НАС</AboutMeTitle>
        <AboutMeDescription>
          Надихаємо бізнес втілювати ідеї в життя!
          <br/>
          Компанія з розробки програмного забезпечення та креативних продуктів. </AboutMeDescription>
      </Container>
    );
  }
}

export default AboutMe;
