import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import './carousel.css';

var Carousel = require('react-responsive-carousel').Carousel;

// react router https://reacttraining.com/react-router/web/example/basic
class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div className="app-container">
              <Menu />
              <Carousel showArrows={true} showThumbs={false} transitionTime={500} infiniteLoop autoPlay showStatus={false} interval={2500}> 
                <div><img src="assets/b1.jpg" /></div>
                <div><img src="assets/b5.jpg" /></div>
                <div><img src="assets/b6.jpg" /></div>
                <div><img src="assets/bh7.jpg" /></div>
              </Carousel>
              <Route exact path="/" component={Home}/>
              <Route path="/the-wedding" component={TheWedding}/>
              <Route path="/travel" component={Travel}/>
              <Route path="/charleston" component={Charleston}/>
              <Route path="/registry" component={Registry}/>
              <Route path="/rsvp" component={RSVP}/>
            </div>
          </Router>
      </div>
    );
  }
}

const Menu = () => (
  <div className="menu-container">
  <div className="menu">
    <div className="menu-link"><Link to="/">Our Story</Link></div>
    <div className="menu-link"><Link to="/the-wedding">The Wedding</Link></div>
    <div className="menu-link"><Link to="/travel">Travel</Link></div>
    <div className="menu-title"><Link to="/">Ben & Vanessa</Link></div>
    <div className="menu-link"><Link to="/charleston">Charleston</Link></div>
    <div className="menu-link"><Link to="/registry">Registry</Link></div>
    <div className="menu-link"><Link to="/rsvp">RSVP</Link></div>
  </div>
</div>
)

class Home extends React.Component {
  render() {
    return (
      <div className="carousel-container">
        <OurStory />
      </div>
    );
  }
}

const OurStory = () => (
  <div className="content">
    <h1>Our Story</h1>
    <h2>DUKE</h2>
    <p>Ben and I met during the spring semester of our freshman year of college, at the ripe old age of 19. Our first meal together was at the now-defunct Armadillo Grill (RIP), and our first conversation was about how MATLAB could be used to program Christmas lights to flash in time with Christmas carols. (I still think this is a great idea, by the way. Ben is less enthusiasic.)</p>
    <h2>SWITZERLAND</h2>
    <p>After graduation, we moved to Switzerland, and spent a year working at the Ecole Polytechnique Federal de Lausanne (EPFL). Being expats together brought on a whole new set of adventures-- from navigating a new culture in (very) broken French to skiing and hiking the Alps to eating our weight in cheese and chocolate. It was magical, and during this year we realized we wanted to spend the rest of our lives together.</p>
    <h2>5 YEARS OF AIRPORTS</h2>    
    <p>Of course, life is not always straightforward, and after we moved back to the states we hit a crossroads. I had decided to go to medical school at Vanderbilt in Nashville, TN while Ben decided to join the crazy start-up life in SF, CA. Living 2394239 miles apart wasn’t easy, but we made it work through daily phone calls, facetimes, and a whole lot of frequent flyer miles.</p>    
    <p>Long distance finally came to an end on March 17, 2016, when I found out I matched to internal medicine residency at Stanford University in Palo Alto, CA. We’ve now been together nearly ten years and are over the moon to celebrate with you on 5/5/18!</p>    
    <h2>SHE SAID YES</h2>
    <p>[ben to write blurb on our engagement story here]</p>    
    <p>[vanessa to write blurb on our engagement story here]</p>
  </div>
)

const TheWedding = () => (
  <div className="content">
    <h1>The Wedding</h1>
    <h2>SATURDAY, May 5, 2018</h2>
    <p>We're getting married at Alhambra Hall in Mount Pleasant, South Carolina. For those coming from afar, Mount Pleasant is right across the bridge from Charleston. We're having both the ceremony and reception at Alhambra Hall.</p>
    <p>The ceremony will start at 4:30p, and we will be celebrating until 11p.</p>
    <h2>Schedule of Events</h2>
    <h2>Coming soon</h2>
  </div>
)

const Travel = () => (
  <div className="content">
    <h1>Travel</h1>
    <h2>Getting to Charleston</h2>
    <p>Charleston's served by the Charleston International Airport (CHS). While it's not a major hub, CHS is an active regional airport and easy to fly into.</p>
    <h2>Where to stay</h2>
    <p>Charleston has many great choices to stay. You can rent a house on the beach, stay close to the venue in Mount Pleasant, or head downtown to historic Charleston for the night.</p>
    <h2>Getting around</h2>
    <p>If you're staying for longer and exploring Charleston, we recommend renting a car from the airport. Uber is also a good option. Uber operates in Charleston and the surrounding area, and we've never had to wait long for a ride.</p>
  </div>
)

const Charleston = () => (
  <div className="content">
    <h1>Charleston</h1>
    <div className="youtube">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jDwlc_bOnxg?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
    </div>
    <h2>Eat</h2>
    <p>Our favorite restaurants in Charleston include ...</p>
    <h2>Play</h2>
    <p>Beaches, Fort Sumter, ...</p>
  </div>
)

const Registry = () => (
  <div className="content">
    <h1>Registry</h1>
    <h2>Coming soon</h2>
    </div>
)

const RSVP = () => (
  <div className="content">
    <h1>RSVP</h1>
    <h2>Coming soon</h2>
    <figure>
      <div className="carousel dissolve">
        <div className="items">
          <img className="item" src="assets/b1.jpg" />
          <img className="item" src="assets/b5.jpg" />
        </div>
      </div>
    </figure>
    </div>
)

export default App;