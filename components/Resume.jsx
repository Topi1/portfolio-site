import React from 'react'
import "../CSS/Resume.css"

import html from "../icons/html.png"
import js from "../icons/JS.png"
import css from "../icons/css.png"
import reacticon from "../icons/react.png"
import sql from "../icons/sql.png"
import c from "../icons/c.png"
import php from "../icons/php.png"
import git from "../icons/git.png"
import github from "../icons/github.png"
import npm from "../icons/npm.png"
import linux from "../icons/linux.png"
import windows from "../icons/windows.png"


export default function Thirdpage() {
  return (
    <section className="resumepage" id='resume'>
        <header className="thirdpageheader">
            <h1>Resume</h1>
        </header>
        <span className="thirdpagespan">
          <section className="resumehalf">
            <h2 className='rheader'>Techstack</h2>
            <div className="resumegrid">
              <div className="resumegrid">

                <div className="griddiv">
                  <img src={html} className='gimg'/>
                  <span className="tooltip">HTML</span>
                </div>
                <div className="griddiv">
                  <img src={css} className='gimg'/>
                  <span className="tooltip">CSS</span>
                </div>
                <div className="griddiv">
                  <img src={js} className='gimg'/>
                  <span className="tooltip">JavaScript</span>
                </div>
                <div className="griddiv">
                  <img src={reacticon} className='gimg'/>
                  <span className="tooltip">React</span>
                </div>
                <div className="griddiv">
                  <img src={c} className='gimg'/>
                  <span className="tooltip">C#</span>
                </div>
                <div className="griddiv">
                  <img src={sql} className='gimg'/>
                  <span className="tooltip">SQL</span>
                </div>
                <div className="griddiv">
                  <img src={php} className='gimg'/>
                  <span className="tooltip">PHP</span>
                </div>
                <div className="griddiv">
                  <img src={git} className='gimg'/>
                  <span className="tooltip">git</span>
                </div>
                <div className="griddiv">
                  <img src={github} className='gimg'/>
                  <span className="tooltip">GitHub</span>
                </div>
                <div className="griddiv">
                  <img src={npm} className='gimg'/>
                  <span className="tooltip">npm</span>
                </div>
                <div className="griddiv">
                  <img src={windows} className='gimg'/>
                  <span className="tooltip">Windows</span>
                </div>
                <div className="griddiv">
                  <img src={linux} className='gimg'/>
                  <span className="tooltip">Linux</span>
                </div>

              </div>
            </div>
          </section>
          <section className="resumehalf">
            <h2 className='rheader'>Education</h2>
            <article className='eduarticle'>
              <ul>
                <li>Vaasa University of Applied Sciences. Bachelor of Business Administration, Information Technologies. Graduated 10/2023.</li>
                <li>Tampere University of Applied Sciences. Nurse. Discontinued.</li>
                <li>Väinö Linnan Lukio (high scool)</li>
              </ul>
            </article>
          </section>
        </span>
    </section>
  )
}
