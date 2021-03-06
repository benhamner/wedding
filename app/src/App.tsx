import * as React from 'react';
// import * as $ from 'jquery';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './carousel.css';
import './App.css';

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
                <div><img src="assets/bh7.jpg" /></div>
                <div><img src="assets/cover1.jpg" /></div>
                <div><img src="assets/cover2.jpg" /></div>
                <div><img src="assets/cover3.jpg" /></div>
                <div><img src="assets/cover4.jpg" /></div>
                <div><img src="assets/cover5.jpg" /></div>
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
    <p>4:30pm ET
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
    <h2>Getting around</h2>
    <p>Do you need to rent a car? It depends. Uber is alive and well in the Charleston area, and it's about a 30 minute drive from the airport to Mount Pleasant. If you're planning to stay longer and explore Charleston and the surrounding area, we recommend renting a car.</p>
    <h2>Where to stay</h2>
    <p>Charleston has many great choices to stay - you can't go wrong!</p>
    <p>For convenience, we have reserved group rates at the following hotels:</p>
    <div className="hotel-block">
    <h3>Wyndham Garden Mt. Pleasant</h3>
    <p>1330 Stuart Engals Blvd<br />
       Mount Pleasant, SC 29464<br />
       843.352.5152
    </p>
    <p><em>from $199 per night</em></p>
    <p>Rate is reserved until 4.5.18<br />
       Group Code: #05036979KH
    </p>
    <a href="https://www.wyndhamhotels.com">Book</a>
    </div>
    <div className="hotel-block">
    <h3>Holiday Inn Express and Suites</h3>
    <p>350 Johnnie Dodds Blvd.<br />
       Mount Pleasant, SC 29464<br />
       843.375.2600
    </p>
    <p><em>from $189 per night</em></p>
    <p>Rate is reserved until 3.19.18<br />
     &nbsp;
    </p>
    <a href="https://www.hiexpress.com/redirect?path=hd&brandCode=EX&localeCode=en&regionCode=1&hotelCode=CHSGR&_PMID=99801505&GPC=KHW&viewfullsite=true​">Book</a>
    </div>
    <p>Other options include:
      <ul>
        <li><a href="https://www.shemcreekinn.com">Shem Creek Inn</a> in Mt. Pleasant</li>
        <li><a href="https://www.charlestonharborresort.com">Charleston Harbor Resort and Marina</a> in Mt. Pleasant</li>
        <li>Staying in historic downtown Charleston - there are many small inns and boutique hotels, most of which are within a 30 minute drive from the venue</li>
        <li>Renting a house or condo on the beach. This can be a great option if you want to share accomodation with family or friends! We recommend looking through <a href="https://www.airbnb.com">AirBnB</a> and <a href="https://www.vrbo.com">VRBO</a> for options</li>
      </ul>
    </p>
  </div>
)


interface ButtonCarouselProps {}
interface ButtonCarouselState {
  currentSlide: number
}

class ButtonCarousel extends React.Component<ButtonCarouselProps, ButtonCarouselState> {
  constructor(props: ButtonCarouselProps) {
    super(props);
      this.state = {
          currentSlide: 1
      };
  }

  next = () => {
      this.setState({
          currentSlide: Math.min(this.state.currentSlide + 1, 5)
      });
  }

  prev = () => {
      this.setState({
          currentSlide: Math.max(this.state.currentSlide - 1, 1)
      });
  }

  render() {
      const buttonStyle = {fontSize: 20, padding: '5px 5px', margin: '5px 0px', border: 'none', outline: 'none'};
      const containerStyle = {margin: '0px 0 0px', float: 'right'};
      return (
          <div>
              <div style={containerStyle}>
                  <button onClick={this.prev} style={buttonStyle}>&lt;</button>
                  <button onClick={this.next} style={buttonStyle}>&gt;</button>
              </div>
              <Carousel centerMode centerSlidePercentage={33.333333} selectedItem={this.state.currentSlide} interval={2500} transitionTime={500} showStatus={false} showIndicators={false} showThumbs={false} showArrows={false}>
                <div className="attraction"><a href="https://www.nps.gov/fosu/planyourvisit/fortsumtertickets.htm">
                  <img src="assets/sumter.jpg"></img>
                  <h3>Fort Sumter</h3>
                  <p>Take a ferry on the beautiful Charleston Harbor to Fort Sumter, a historical Civil War fort. Tours last approximately 2.5 hours.</p>
                  </a>
                </div>
                <div className="attraction">
                  <img src="assets/sullivans.png"></img>
                  <h3>Beach Time!</h3>
                  <p>Relax and enjoy the beach! We love Isle of Palms and Sullivan’s Island (bonus points if you kiteboard at Sullivan’s)!</p>
                </div>
                <div className="attraction"><a href="http://cityofcharleston.com/self-guided-walking-tours/">
                  <img src="assets/rainbow.png"></img>
                  <h3>Historic Downtown</h3>
                  <p>From the historic homes of the Charleston Battery to the colorful buildings on Rainbow Row, downtown Charleston is definitely worth seeing. Why not spend the afternoon doing a self-guided walking tour?</p>
                  </a>
                </div>
                <div className="attraction"><a href="http://scaquarium.org">
                  <img src="assets/aquarium.jpg"></img>
                  <h3>Charleston Aquarium</h3>
                  <p>The Charleston Aquarium is home to more than 10,000 animals and plants! We love visiting the loggerhead sea turtles, which are locals to SC!</p>
                  </a>
                </div>
                <div className="attraction">
                  <img src="assets/waterfront.png"></img>
                  <h3>Waterfront Park</h3>
                  <p>Stroll along the waterfront, swing on the benches on the pier, and play in the pineapple fountain. Waterfront Park is a wonderful and relaxing place to spend an hour or so.</p>
                </div>
                <div className="attraction">
                  <img src="assets/shem-creek.png"></img>
                  <h3>Shem Creek</h3>
                  <p>Nearby the wedding venue, Shem Creek is a great place to rent a paddleboard, enjoy some seafood, watch the sunset, or look for dolphins.</p>
                </div>
                <div className="attraction"><a href="http://www.magnoliaplantation.com/">
                  <img src="assets/magnolia.png"></img>
                  <h3>Magnolia Plantation</h3>
                  <p>Founded in 1676, Magnolia Plantation is the oldest plantations in the South and the oldest public gardens in America.  Take a tour of the gardens, conservatory, or historic home.</p>
                  </a>
                </div>
              </Carousel>
          </div>
      );
  }
}

const Charleston = () => (
  <div className="content">
    <h1>Welcome to the Lowcountry!</h1>
    <p>Ben grew up in Mount Pleasant, and Vanessa has enjoyed visiting many times. We think it's great here, and hope you do too!</p>
    <div className="youtube">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jDwlc_bOnxg?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
    </div>
    <h2>Nearby Attractions</h2>
    <div className="attractions-carousel">
      <ButtonCarousel />
    </div>
    <h2>Our Favorite Bites</h2>
    <p>Coming soon!</p>
  </div>
)

const Registry = () => (
  <div className="content">
    <h1>Registry</h1>
    <p>We are so excited to share our celebration with you! Your attendance at our wedding and well wishes for our marriage are the best gifts we could ask for.</p> 
    <p>For those who have asked, we are registered at <a href="https://www.surlatable.com/registry/giftRegistryList.jsp?id=2002215955610">Sur la Table</a> and  <a href="https://www.crateandbarrel.com/gift-registry/vanessa-kennedy-and-ben-hamner/r5831866">Crate and Barrel</a>.</p>
  </div>
)

interface RSVPProps {}
interface RSVPState {
  rsvp: string,
  submitted: boolean
}

class RSVP extends React.Component<RSVPProps, RSVPState> {
  constructor(props: RSVPProps) {
    super(props);
    this.state = {
      rsvp: "",
      submitted: false
    };
  }

  handleRSVPChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({rsvp: e.currentTarget.value})
  }
  /*
  onKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.submitRSVP();
    }
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    this.submitRSVP();
  }

  submitRSVP = () => {
    $.ajax({
      type:"GET",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScE8TT85--D5RVo-6IKmdY_1HCRwAYmMecI0EH1AXuDz2CB8w/viewform",
      success: data => {console.log(data)}
    })

    $.ajax({
      type: "POST",      
      url: "https://docs.google.com/forms/d/e/1FAIpQLScE8TT85--D5RVo-6IKmdY_1HCRwAYmMecI0EH1AXuDz2CB8w/formResponse",
      xhrFields: {
          withCredentials: true
      },
      data: $("#rsvp-form").serialize(),
      beforeSend: function() {
      },
      success: data => {
        alert("sent");
        this.setState({submitted: true});
        $('#result').html(data);}}).done(data => {
          alert("sent2");
          this.setState({submitted: true});
          $('#result').html(data);}
        ).always((x,s,z) => {console.log("always got called"); console.log("x"); console.log(x); 
         console.log("x.statusCode"); console.log(x.getAllResponseHeaders());
         console.log("s"); console.log(s); console.log("z"); console.log(z); });
  }*/

  render () { return (
    <div className="content">
      <h1>Will you join us?</h1>
      <div className={["rsvp-form", this.state.submitted ? "hidden" : ""].join(" ")}>
      {/* Form customization logic from https://codepen.io/learningcode/post/customize-a-google-form-for-your-website*/}
        {/*<form id="rsvp-form" action="https://docs.google.com/forms/d/e/1FAIpQLScE8TT85--D5RVo-6IKmdY_1HCRwAYmMecI0EH1AXuDz2CB8w/formResponse" onKeyDown={this.onKeyDown} onSubmit={this.onSubmit}>*/}
        <form id="rsvp-form" action="https://docs.google.com/forms/d/e/1FAIpQLScE8TT85--D5RVo-6IKmdY_1HCRwAYmMecI0EH1AXuDz2CB8w/formResponse">
          <input type="hidden" name="formkey" value="1FAIpQLScE8TT85--D5RVo-6IKmdY_1HCRwAYmMecI0EH1AXuDz2CB8w" />
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
        <p>Please RSVP by April 15</p>
      </div>
      <div id="result"></div>
      <div className={this.state.submitted ? "rsvp-thanks" : "hidden"}>
        Thanks for responding!
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