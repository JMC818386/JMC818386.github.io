import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import Footer from './Footer';

function Blog() {
  return (
    <div>
      <TopNav />
        <div className="container-fluid d-flex justify-content-center bg-dark text-light">
          <div className="row mt-5 d-flex justify-content-center">
            <div className="col-8 p-5 shadow shadow-danger shadow-intensity-lg">
              <h1>Post #9</h1>
                <h2>Sprint 4 | React Intro | Week 6</h2>
                <h3>03.03.23</h3>
                <h5 className="text-secondary">Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why?</h5>
                <p className="my-3">For me learning React has been a huge challenge so far, but as with every other tool we have encountered so far, the most difficult aspect seems to be the barrier to entry. Similar to bootstrap, I think that once I have gained a solid proficiency with the syntax I will be able to lean into React and begin to see the power of using it to build single page web applications.</p>
                <h5 className="text-secondary">What Frameworks or Libraries are you interested in learning more about?</h5>
                <p>From the very little that I know about other Frameworks and Libraries out there, developers who can work in Angular.js and Vue.js seem to be in high demand currently. I would like to approach my professional development in a way that parallels current market trends and industry demands, so Angular and Vue seem to be the next logical steps if I can manage to gain a solid working proficiency in React.</p>
                <h5 className="text-secondary">Find one emerging JavaScript tool that you would like to learn more about or use in your final project</h5>
                <p>I'm not sure if it would be considered emerging, but state management is a concept that I would really like to gain much more of an understanding and proficiency in. Although I understand the basic concept of state management, I was only able to barely grasp the syntax we used to manage state in our previous projects. Creating single page web applications that work through state rather than rendering the entire page each time seems like a very powerful too.</p>
            </div>
            <div className="col-8 p-5 shadow shadow-danger shadow-intensity-lg">
              <h1>Post #8</h1>
                <h2>Retrospective Sprint 3 | Week 5</h2>
                <h3>02.24.23</h3>
                <h5 className="text-secondary">What did you enjoy?</h5>
                <p className="my-3">Working on the design project was the most enjoyable part of this past week for me. I feel that I have a good understanding of HTML and Bootstrap at this point, so constructing a landing page using my wireframe went very smoothly in contrast to my struggles with the Tic-Tac-Toe project. My landing page is nowhere near where I want it to be, but it felt nice getting to play with the layout and structuring elements on the page.</p>
                <h5 className="text-secondary">What worked?</h5>
                <p>Although my personal website landing page needs a lot of refinement, I'm happy with the progress that I made early in the week. I was able to make the page responsive with the top nav bar being hidden and a hamburger menu appearing when adjusting the screen size from desktop to mobile. I nearly completed the Tic-Tac-Toe game, rendering my entire page using DOM manipulation inside of a single HTML div container, making each square clickable only once, constructing and tying together my functions to access a 2D array of winning combinations, tracking player state, and running an endGame function to log the winner of the game to the console. I had to rely heavily on my instructors to walk me through the functions and structuring of my code, but luckily I was able to present a working site on demo day. I felt a lot more confident working through our morning warm-ups on CodeWars this week, recognizing the necessary logic to implement, spending very little time figuring out what array methods to utilize in order to solve each kata. I'm hoping that my steady progress in warm-ups eventually translates to increased competence while working through our projects moving forward.</p>
                <h5 className="text-secondary">What didn't?</h5>
                <p>As has been the case over the previous few weeks, I will need to spend a lot of extra time outside of class studying and practicing basic Javascript. At this point I know what does and doesn't work for me when it comes to searching through documentation to solve small problems. I'm hoping that learning the fundamentals of React will help to reinforce what I already know in vanilla JS, and fill in some gaps where I've been struggling to connect objects and functions into dynamic pages. I'm still a little behind on my proficiency in Git, so I will also need to spend some extra time reviewing branching so that I can move forward working primarily on dev and feature branching instead of always working on my main branches.</p>
                <h5 className="text-secondary">Looking ahead…?</h5>
                <p>As has been the case over the previous few weeks, I will need to spend a lot of extra time outside of class studying and practicing basic Javascript. At this point I know what does and doesn't work for me when it comes to searching through documentation to solve small problems. I'm hoping that learning the fundamentals of React will help to reinforce what I already know in vanilla JS, and fill in some gaps where I've been struggling to connect objects and functions into dynamic pages. I'm still a little behind on my proficiency in Git, so I will also need to spend some extra time reviewing branching so that I can move forward working primarily on dev and feature branching instead of always working on my main branches.</p>
            </div> 
            <div className="col-8 p-5 shadow shadow-danger shadow-intensity-lg">
              <h1>Post #8</h1>
                <h2>Retrospective Sprint 3 | Week 5</h2>
                <h3>02.24.23</h3>
                <h5 className="text-secondary"></h5>
                <p className="my-3"></p>
                <h5 className="text-secondary">What worked?</h5>
                <p></p>
                <h5 className="text-secondary"></h5>
                <p></p>
                <h5 className="text-secondary"></h5>
                <p></p>
            </div>  
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Blog;