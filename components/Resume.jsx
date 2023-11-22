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
            <h2>Techstack</h2>
            <div className="resumegrid">
              <div className="resumegrid">

                <div className="griddiv">
                  <img src={html} />
                  <span className="tooltip">HTML</span>
                </div>
                <div className="griddiv">
                  <img src={css} />

                </div>
                <div className="griddiv">
                  <img src={js} />

                </div>
                <div className="griddiv">
                  <img src={reacticon} />

                </div>
                <div className="griddiv">
                  <img src={c} />

                </div>
                <div className="griddiv">
                  <img src={sql} />

                </div>
                <div className="griddiv">
                  <img src={php} />
                  
                </div>
                <div className="griddiv">
                  <img src={git} />

                </div>
                <div className="griddiv">
                  <img src={github} />

                </div>
                <div className="griddiv">
                  <img src={npm} />

                </div>
                <div className="griddiv">
                  <img src={windows} />

                </div>
                <div className="griddiv">
                  <img src={linux} />

                </div>

              </div>
            </div>
          </section>
          <section className="resumehalf">
            <h2>Education</h2>
            
          </section>
        </span>
    </section>
  )
}
