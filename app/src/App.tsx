import * as React from 'react';
import {
  HashRouter as Router,
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
              <Route exact path="/" component={Home} />
              <Route exact path="/our-story" component={OurStory} />
              <Route path="/the-wedding" component={TheWedding} />
              <Route path="/travel" component={Travel} />
              <Route path="/charleston" component={Charleston} />
              <Route path="/registry" component={Registry} />
              <Route path="/rsvp" component={RSVP} />
            </div>
          </Router>
      </div>
    );
  }
}

const Menu = () => (
  <div className="menu-container">
  <div className="menu">
    <div className="menu-link"><Link to="/our-story">Our Story</Link></div>
    <div className="menu-link"><Link to="/the-wedding">The Wedding</Link></div>
    <div className="menu-link"><Link to="/travel">Travel</Link></div>
    <div className="menu-title"><Link to="/">ben + vanessa</Link></div>
    <div className="menu-link"><Link to="/charleston">Charleston</Link></div>
    <div className="menu-link"><Link to="/registry">Registry</Link></div>
    <div className="menu-link"><Link to="/rsvp">RSVP</Link></div>
  </div>
</div>
)

const Home = () => (
  <div className="home">
  <h1>Let's celebrate.</h1>
  <h2>Ben and Vanessa are getting married!</h2>
  <h3>May 5, 2018</h3>
  <h3>Mount Pleasant, South Carolina</h3>
  </div>
)

class OurStory extends React.Component {
  render() {
    return (
      <div className="carousel-container">
        <Story />
      </div>
    );
  }
}

const Story = () => (
  <div className="content">
    <h2>We met in college.</h2>
    <p>Ben and I met during the spring semester of our freshman year of college, at the ripe old age of 19. Our first meal together was at the now-defunct Armadillo Grill (RIP), and our first conversation was about how MATLAB could be used to program Christmas lights to flash in time with Christmas carols. (I still think this is a great idea, by the way. Ben is less enthusiasic.)</p>
    <div className="our-story-images">
      <img src="assets/College1.jpg" />
      <img src="assets/College2.jpg" />
      <img src="assets/College3.jpg" />
    </div>
    <h2>Switzerland.</h2>
    <p>After graduation, we moved to Switzerland, and spent a year working at the Ecole Polytechnique Federal de Lausanne (EPFL). Being expats together brought on a whole new set of adventures-- from navigating a new culture in (very) broken French to skiing and hiking the Alps to eating our weight in cheese and chocolate. It was magical, and during this year we realized we wanted to spend the rest of our lives together.</p>
    <div className="our-story-images">
      <img src="assets/Switzerland1.jpg" />
      <img src="assets/Switzerland2.jpg" />
      <img src="assets/Switzerland3.jpg" />
    </div>
    <h2>5 years of airports.</h2>    
    <p>Of course, life is not always straightforward, and after we moved back to the states we hit a crossroads. I had decided to go to medical school at Vanderbilt in Nashville, TN while Ben decided to join the crazy start-up life in SF, CA. Living 2394239 miles apart wasn’t easy, but we made it work through daily phone calls, facetimes, and a whole lot of frequent flyer miles.</p>    
    <p>Long distance finally came to an end on March 17, 2016, when I found out I matched to internal medicine residency at Stanford University in Palo Alto, CA. We’ve now been together nearly ten years and are over the moon to celebrate with you on 5/5/18!</p>    
    <div className="our-story-images">
      <img src="assets/California1.png" />
      <img src="assets/California2.png" />
      <img src="assets/California3.jpg" />
    </div>
    <h2>She said yes.</h2>
    <p>Vanessa and I went on a vacation to Banff National Park, Canada in June 2015. In the middle of the vacation, we did a 12-mile hike above the turqouise Lake Louise.</p>
    <p>We found a quiet spot to break at the apex of the trail, on top of the aptly named Big Beehive. Here, I told Vanessa my favorite memories of us together and how much I enjoyed being with her. I got down on one knee and asked to spend the rest of our lives together. She said yes!</p>
    <div className="our-story-image-single">
      <img src="assets/Engage1.gif" />
    </div> 
  </div>
)
// Good animated gif editor: https://ezgif.com/

const TheWedding = () => (
  <div className="content theWedding">
    <h1>Saturday, May 5, 2018</h1>
    <h2>Alhambra Hall</h2>
    <p>4p EST
      <br />131 Middle St. Mount Pleasant, SC
    </p>
    <p>We're getting married at Alhambra Hall in Mount Pleasant, South Carolina. For those coming from afar, Mount Pleasant is right across the bridge from Charleston. We're having both the ceremony and reception at Alhambra Hall.</p>
    <iframe frameBorder="0" className="map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAgDZIHIROOx1ygUmfWpSSzIYbWS1vD3Nk&q=Alhambra+Hall,Mount+Pleasant,+SC&zoom=12" allowFullScreen></iframe>
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
    <p>We are still in the planning process-- check back soon for update</p>
  </div>
)

interface RSVPProps {}
interface RSVPState {
  rsvp: string
}

class RSVP extends React.Component<RSVPProps, RSVPState> {
  constructor(props: RSVPProps) {
    super(props);
    this.state = {
      rsvp: ""
    };
  }

  handleRSVPChange = (evt: React.FormEvent<HTMLInputElement>) => {
    this.setState({rsvp: evt.currentTarget.value})
  }

  render () { return (
    <div className="content">
      <h1>Will you join us?</h1>
      <div className="rsvp-form">
      {/* Form customization logic from https://codepen.io/learningcode/post/customize-a-google-form-for-your-website*/}
        <form action="https://docs.google.com/forms/d/e/1FAIpQLScE8TT85--D5RVo-6IKmdY_1HCRwAYmMecI0EH1AXuDz2CB8w/formResponse">
          <div className="yes-no-wrapper">
            <div className="block-form-input">
              <input type="radio" className="hidden" name="entry.1522333918" id="yes" value="Yes" onChange={this.handleRSVPChange}/>
              <label htmlFor="yes" className="radio-label">Yes! We're excited to join you!</label>
            </div>
            <div className="block-form-input">
              <input type="radio" className="hidden" name="entry.1522333918" id="no" value="No" onChange={this.handleRSVPChange}/>
              <label htmlFor="no" className="radio-label">No, we'll celebrate from afar</label>
            </div>
          </div>
          <div className="name-email-wrapper">
            <div className="block-form-input"><TextInput name="entry.315065729" label="Name(s)" width="300px" /></div>
            <div className="block-form-input"><TextInput name="entry.191281849" label="Email" width="300px" /></div>
          </div>
          <div className={["block-form-input", "music-input", this.state.rsvp=="No" ? "hide" : ""].join(" ")}>
            <TextInput name="entry.102289162" label="I will dance if you play" width="650px" />
          </div>
          <input className="button" type="submit" value="RSVP" />
        </form>
      </div>
    </div>)
  }
}

interface TextInputProps {
  name: string,
  label: string,
  width: string
}
interface TextInputState {
  text: string
}

class TextInput extends React.Component<TextInputProps, TextInputState> {
  private textInput: HTMLInputElement | null;

  constructor(props: TextInputProps) {
    super(props);
    this.focus = this.focus.bind(this);
    this.state = {
      text: ""
    };
  }

  public focus() {
    if (this.textInput != null) {
      this.textInput.focus();      
    }
  }

  handleTextChange = (evt: React.FormEvent<HTMLInputElement>) => {
    this.setState({text: evt.currentTarget.value})
  }

  render() {
    return (
      <div className="text-input-wrapper" style={{"width": this.props.width}}>
        <input type="text"
               name={this.props.name}
               ref={input => this.textInput = input}
               onChange={this.handleTextChange}
               value={this.state.text}
               width={this.props.width} />
        <label className={this.state.text=="" ? "": "text-input-valid"}
               htmlFor={this.props.name}
               onClick={this.focus}
               /*onClick={() => {if (this.textInput != null) {alert("ben ws here 2")}}}*/
               >{this.props.label}</label>
        <div className="bar" style={{"width": this.props.width}}></div>
      </div>
    )
  }
}

export default App;