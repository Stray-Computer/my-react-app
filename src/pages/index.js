import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
       <h1> Design System  Built with  <br /> React</h1>
       <p>This demo uses React, nodejs, Gastby, visual code editor, etc., to present how to connect visual components to the website directly.</p>
       <Link to="/page-2/">Go to my demo</Link>
       <div className="Logos">
        <img src={require('../images/atomic-design.svg')} width="500"></img>
       </div>
    <Wave />  
   </div>
   </div>
   <div className="Cards">
      <h2>From Parts to Whole</h2>
      <div className="CardGroup">
      <Card
      title="colors"
      text="3 palettes"
      image={require('../images/card.jpg')}/>
      <Card
      title="colors"
      text="3 palettes"
      image={require('../images/card.jpg')}/>
      <Card
      title="colors"
      text="3 palettes"
      image={require('../images/card.jpg')}/>
      <Card
      title="colors"
      text="3 palettes"
      image={require('../images/card.jpg')}/>
      <Card
      title="colors"
      text="3 palettes"
      image={require('../images/card.jpg')} />
      </div>
  </div>
   <Section
    image={require('../images/section.jpg')}
    title="Shuting Zeng"
    text="I use design, storytelling, and multi-disciplinary thinking to align user needs with product development and business goals. "
    />
</div>
)

export default IndexPage





