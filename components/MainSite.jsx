import React from 'react'
import "../CSS/MainSiteStyle.css"
import Snowfall from 'react-snowfall'

export default function MainSite() {
  return (
    <div className="mainContainer">
      <Snowfall/>
      <div className="container">
        <section className="conSection1">
          <header className="nameHeader">
            <h1>Topi Järvinen</h1>
            
          </header>
          <article className='infoArticle'>
            <h1>Hello there. Welcome.</h1> 
            <h1>I'm Topi Järvinen.</h1> 
            <h1>Here you can get to know me and see what I have been working on.</h1>
          </article>
        </section>
        <section className="conSection2">
          <header className="infoHeader">
            <h1>About me</h1>
          </header>
        </section>
      </div>
    </div>
  )
}
