import React from "react"
import Main from "../components/main"
import Style from "../style/style.css"

export default function Home() {
  return(
    <div>
       <Main>
      <div class="left">
        <img className="avatar" src="../../profile.jpeg"></img>
        <h1>
          This is a test, trying out gatsby.js
        </h1>
      </div>

      <div class="right">
          <p>
          Most runners know the legend of the marathon, which goes something like this: In 490 B.C.E., after the Athenian army defeated a bunch of Persian invaders at the coastal town of Marathon, a Greek messenger named Pheidippides dashed off to Athens, 25 miles away, dramatically announced his side's victory, and collapsed and died. Athenian democracy was saved, and to commemorate Pheidippides's run, many of us now run a race–the marathon–that's about 25 miles long.

          </p>
          
          
          <p>
          It's interesting stuff, but scholars believe not much of it is true. Below, we take a closer look at what may have happened.
          </p>

          <p>
          When Was the Battle of Marathon?
          </p>

          <p>
          On or around August 11th, 490 B.C.E., 2,500 years ago. Experts have chosen the 11th after consulting historical lunar calendars. Fellow Greek city state Sparta would have contributed troops to the fight, but for religious reasons couldn't march until the next full moon, which would have been several days later in mid-August. Previous estimates put the battle in early September. </p>
        
          </div>
      </Main>
    </div>

  )
}
