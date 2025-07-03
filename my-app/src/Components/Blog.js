import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import Footer from './Footer';
import './App.css';
import Grid from './img/Grid.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function Blog() {

  useEffect(() => {
    AOS.init({
        duration: 2500,
        once: true,
    });  
}, []);

  return (
    <div className="bg-main-dark">
      <TopNav />
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <div className="container text-light pb-0 mb-0">
            <div className="row d-flex justify-content-center pb-0 mb-0">
              <div className="col-12 pb-0 mb-0 d-flex justify-content-center mt-5">
                {/* <p className="text-title text-light pb-0 mb-0">BLOG</p> */}
              </div>
            </div>  
          </div>
          <div className="container mt-5 d-flex row justify-content-center text-light">
            <div className="row d-flex justify-content-center">
              <div className="col-12 mt-5 blog-container w-60 d-flex flex-column justify-content-center">
                  <h2 className="blog-sub-header">Sprint 7 | Python | Week 9</h2>
                  <h3 className="blog-body">03.24.23</h3>
                  <h5 className="blog-body-q">What are some similarities and differences you can see with JS and Python?</h5>
                  <p className="blog-body">The main differences I can see between the two so far are in the syntax and structure. Python uses much more understandable syntax and the structure much more focused on indentations. I feel much more comfortable starting out in Python than I did with JavaScript.</p>
                  <h5 className="blog-body-q">If you had started with Python instead of JS, how do you think the Bootcamp would be different? Would you have benefited?</h5>
                  <p className="blog-body">I've been asking myself the same question, and I'm honestly not sure. I've bought into the process, so my assumption is that my struggles with JavaScript were a necessary rite of passage and have led to a much easier transition into Python.</p>
                  <h5 className="blog-body-q">Think of a project or tech based tool that you use often and think about what the database structure might look like for it. Do you feel like you have a better understanding of how it works now and could you see yourself enjoying building something like that in the future?</h5>
                  <p className="blog-body">One technology that I use a lot is my smart watch and the Garmin Explore and Garmin Connect apps. I imagine the database for Explore is robust, and would include a lot of third party databases containing certain map types and locations, as well as user and system generated trails and many other features. Both databases would also need to include an ever growing amount of biofeedback and geolocation data that is tracked throughout the day as well as during programmed events. I am still in the very early stages of learning about databases, but if I ever reach a level of competency that would allow me to build software for these devices I would love to pursue projects that center around geolocation tracking and biofeedback monitoring. It would be an incredible opportunity to build something that allowed users to leverage wearable technology to improve their health and live more active lives.</p>
              </div>
            </div>
          </div>

          <div className="container d-flex row justify-content-center text-light">
            <div className="row d-flex justify-content-center">
              <div className="col-12 rounded blog-container">
                  <h2 className="blog-sub-header">Sprint 6 | Halfway | Week 8</h2>
                  <h3 className="blog-body">03.17.23</h3>
                  <h5 className="blog-body-q">Now that you are halfway through bootcamp, what has been the biggest hurdle that you have gone past? What do you think is going to be the next biggest thing to power through?</h5>
                  <p className="blog-body">So far my biggest obstacle has been keeping up with the amount of information we are presented with at the beginning of each week. When the bootcamp started, my approach was to craft my daily schedule to read and complete every bit of information we were given. As we progressed throughout the weeks I've found that choosing the particular resources that I believe best suited my learning style and then diving deep into them has allowed me to gain a much better understanding of the material. I've found that the best process for me to absorb new material is to read introduction material first, watch videos, work through tutorials and then begin sandboxing until the weekly project is released. Right now I'm not too worried about what hurdles I will have to power through moving forward. Focusing on pacing myself through what is directly in front of me has freed up a lot of pressure and allowed me to work relatively stress free over the last few weeks. I'm just going to show up each day and do my best.</p>
                  <h5 className="blog-body-q">Compared to earlier, what are three ideas you might want to do for your final project? Are they the same ideas as before, or have they changed now that you understand more about the technology and your limitations?</h5>
                  <p className="blog-body">I really only have two ideas in mind currently. The first is a golf team management app that would utilize front end form input to populate a back end database to track the practice, match and tournament statistics of competitive golfers within a single team. The seconds is an app that uses a front end that surveys a user's input regarding personal positions on relevant topics to match a backend database holding political candidate data reflecting each candidate's position on the same issues - the goal being to calculate what candidate is the best option for the user to vote for. Now that we have begun learning Python and SQL, I feel that both of these projects are achievable. However, the voter/candidate app seems like a monumental undertaking compared to a golf team management app.</p>
                  <h5 className="blog-body-q">What surprised you about your first week in Python and how was it different from your first week in JavaScript?</h5>
                  <p className="blog-body">I was surprised how quickly I was able to jump in and begin sandboxing with Python. I think that stumbling through and gutting out my first run-through with vanilla JavaScript made learning the basics of Python much easier. It was nice to see all of the programming principles we have been learning throughout the bootcamp in a new language.</p>
              </div>
            </div>
          </div>

          <div className="container d-flex row justify-content-center text-light">
            <div className="row d-flex justify-content-center">
              <div className="col-12 rounded blog-container">
                  <h2 className="blog-sub-header">Sprint 5 | CLI | Week 7</h2>
                  <h3 className="blog-body">03.10.23</h3>
                  <h5 className="blog-body-q">What have you learned about CLIs? Do you think they are scary?</h5>
                  <p className="blog-body">So far throughout the bootcamp we have used the CLI in Gitpod to do a number of things. First we learned how to use basic CLI commands to create, delete and move throughout directories and files.We then learned  Git commands to add, commit and push our code up to our repositories. We have been encouraged to create dev and feature branches while building our projects, but I fell behind pretty early on and have been primarily working on my main and dev branches. I will need to spend some extra time gaining a better understanding of how to use feature branches and sharpen my understanding of Git so that I am better prepared to work as a member of a development team in the future. Beyond using the CLI for Git, we have learned how to download dependencies into our projects through npm as well as commands to start and run React.js projects.</p>
                  <h5 className="blog-body-q">If you were to build a CLI, what would it do?</h5>
                  <p className="blog-body">To this point I honestly wasn't aware that I could build my own CLI. I would imagine that it would be similar to the CLI in Gitpod so that I could utilize the knowledge I have gained so far in the bootcamp.</p>
                  <h5 className="blog-body-q">List some ideas that without a Framework, would take you a long time to code.</h5>
                  <p className="blog-body">At this point any project with or without a framework or library would take me a long time to code. I am still in the very early stages of my journey in gaining a working proficiency in web development. However, I can see how frameworks and libraries can allow for a more rapid development process once I have become more comfortable working with them over time. </p>
              </div>
            </div>
          </div>

          <div className="container d-flex row justify-content-center text-light">
            <div className="row d-flex justify-content-center">
              <div className="col-12 rounded blog-container">
                  <h2 className="blog-sub-header">Sprint 4 | React Intro | Week 6</h2>
                  <h3 className="blog-body">03.03.23</h3>
                  <h5 className="blog-body-q">Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why?</h5>
                  <p className="blog-body">For me learning React has been a huge challenge so far, but as with every other tool we have encountered so far, the most difficult aspect seems to be the barrier to entry. Similar to bootstrap, I think that once I have gained a solid proficiency with the syntax I will be able to lean into React and begin to see the power of using it to build single page web applications.</p>
                  <h5 className="blog-body-q">What Frameworks or Libraries are you interested in learning more about?</h5>
                  <p className="blog-body">From the very little that I know about other Frameworks and Libraries out there, developers who can work in Angular.js and Vue.js seem to be in high demand currently. I would like to approach my professional development in a way that parallels current market trends and industry demands, so Angular and Vue seem to be the next logical steps if I can manage to gain a solid working proficiency in React.</p>
                  <h5 className="blog-body-q">Find one emerging JavaScript tool that you would like to learn more about or use in your final project</h5>
                  <p className="blog-body">I'm not sure if it would be considered emerging, but state management is a concept that I would really like to gain much more of an understanding and proficiency in. Although I understand the basic concept of state management, I was only able to barely grasp the syntax we used to manage state in our previous projects. Creating single page web applications that work through state rather than rendering the entire page each time seems like a very powerful too.</p>
              </div>
            </div>
          </div>

          <div className="container d-flex row justify-content-center text-light">
            <div className="row d-flex justify-content-center">
              <div className="col-12 rounded blog-container">
                  <h2 className="blog-sub-header">Retrospective Sprint 3 | Week 5</h2>
                  <h3 className="blog-body">02.24.23</h3>
                  <h5 className="blog-body-q">What did you enjoy?</h5>
                  <p className="blog-body">Working on the design project was the most enjoyable part of this past week for me. I feel that I have a good understanding of HTML and Bootstrap at this point, so constructing a landing page using my wireframe went very smoothly in contrast to my struggles with the Tic-Tac-Toe project. My landing page is nowhere near where I want it to be, but it felt nice getting to play with the layout and structuring elements on the page.</p>
                  <h5 className="blog-body-q">What worked?</h5>
                  <p className="blog-body">Although my personal website landing page needs a lot of refinement, I'm happy with the progress that I made early in the week. I was able to make the page responsive with the top nav bar being hidden and a hamburger menu appearing when adjusting the screen size from desktop to mobile. I nearly completed the Tic-Tac-Toe game, rendering my entire page using DOM manipulation inside of a single HTML div container, making each square clickable only once, constructing and tying together my functions to access a 2D array of winning combinations, tracking player state, and running an endGame function to log the winner of the game to the console. I had to rely heavily on my instructors to walk me through the functions and structuring of my code, but luckily I was able to present a working site on demo day. I felt a lot more confident working through our morning warm-ups on CodeWars this week, recognizing the necessary logic to implement, spending very little time figuring out what array methods to utilize in order to solve each kata. I'm hoping that my steady progress in warm-ups eventually translates to increased competence while working through our projects moving forward.</p>
                  <h5 className="blog-body-q">What didn't?</h5>
                  <p className="blog-body">As has been the case over the previous few weeks, I will need to spend a lot of extra time outside of class studying and practicing basic Javascript. At this point I know what does and doesn't work for me when it comes to searching through documentation to solve small problems. I'm hoping that learning the fundamentals of React will help to reinforce what I already know in vanilla JS, and fill in some gaps where I've been struggling to connect objects and functions into dynamic pages. I'm still a little behind on my proficiency in Git, so I will also need to spend some extra time reviewing branching so that I can move forward working primarily on dev and feature branching instead of always working on my main branches.</p>
                  <h5 className="blog-body-q">Looking ahead…?</h5>
                  <p className="blog-body">As has been the case over the previous few weeks, I will need to spend a lot of extra time outside of class studying and practicing basic Javascript. At this point I know what does and doesn't work for me when it comes to searching through documentation to solve small problems. I'm hoping that learning the fundamentals of React will help to reinforce what I already know in vanilla JS, and fill in some gaps where I've been struggling to connect objects and functions into dynamic pages. I'm still a little behind on my proficiency in Git, so I will also need to spend some extra time reviewing branching so that I can move forward working primarily on dev and feature branching instead of always working on my main branches.</p>
              </div>
            </div>
          </div>

          <div className="container d-flex row justify-content-center text-light">
            <div className="row d-flex justify-content-center">
              <div className="col-12 rounded blog-container">
                <h2 className="blog-sub-header">Sprint 3 | Technical Article | Week 5</h2>
                <h3 className="blog-body">02.24.23</h3>
                <h3 className="blog-sub-header">What is pseudocode and how does it help with programming?</h3>
                <h5 className="blog-body-q">What is Pseudocode?</h5>
                <p className="blog-body">Oxford languages broadly defines Pseudocode as, “a notation resembling a simplified programming language, used in program design”, but what exactly is pseudocode? Why is it used, and why is it a helpful tool for programmers? In the following article we will explore these questions and hopefully arrive at a clearer understanding of the principles and power of pseudocode.</p>
                <h5 className="blog-body-q">So, what is pseudocode exactly?</h5>
                <p className="blog-body">The Economic Times introduces the concept of pseudocode as, “an informal way of programming description that does not require any strict programming language syntax or underlying considerations. Simple enough. Computer programming languages are structured using syntactic rules, which through many layers of abstraction, allow us to type and click our way through the technologies we encounter everyday. Anyone who has attempted to learn any programming language will tell you that learning all of the syntax, principles and best practices in even the simplest languages is no easy feat. Now, while there are certainly individuals who have the ability to sit down and build programs from start to finish with little to no ideation or early work-up, for the rest of us mere mortals, this is where pseudocode comes in handy.</p>
                <h5 className="blog-body-q">Why should I use it?</h5>
                <p className="blog-body">Imagine trying to build a skyscraper without a blueprint, or attempting off-trail land navigation without a map. Now, it can certainly be done, but what that blueprint and map provides is a foundation from which to build upon. This foundation is where all of the basic problem solving takes place. While blueprints and maps might not be the most accurate comparisons to use, the general take-away here is that pseudocode is a tool to build a sturdy foundation upon which to work from in order to reach more complex implementations.</p>
                <p className="blog-body">You'll likely get a different answer from any programmer as to what exactly they believe pseudocode is technically. There is a seemingly endless number of technology stacks, made up of a wide number of languages, designed to accomplish countless objectives from which programmers each subjectively aim to achieve. This technological labyrinth of possibility means that each programmer will inevitably develop their own method and style when approaching the practice of pseudocoding. Now, with all of this being said, there are still some basic rules that apply to most, if not all pseudocode. Keywords such as INPUT, OUTPUT,  IF, THEN, ELSE, FOR, WHILE, GET, DISPLAY and many many others serve as a general marker for programmers to use in attempting to work out the basic logic of whatever program they are attempting to build.</p>
                <h5 className="blog-body-q">In summary</h5>
                <p className="blog-body">However one approaches pseudocode, the main goal should always be to use simple language to work through the logic of a system that is to be built. The key objective is to nail down the broad strokes and step into the arena of computer programming equipped with a simplified understanding of the underlying logic which is to be programmed with actual computer programming languages. This article is meant only to address an introductory approach to the concept of pseudocode, providing a general overview of this powerful tool that serves as a starting block only. Beyond the scope of this article are well established styles of pseudocode that are tailored for specific programming languages. For anyone interested in further exploring the foundational principles of pseudocode, check out the links below.</p>
                <a href="https://economictimes.indiatimes.com/definition/pseudocode" target="_blank" rel="noreferrer" >Definition of Pseudocode</a>
                <br></br>
                <a href="https://www.geeksforgeeks.org/how-to-write-a-pseudo-code/" target="_blank" rel="noreferrer" >How to Write Pseudocode</a>
                <br></br>
                <a href="https://www.freecodecamp.org/news/what-is-pseudocode-in-programming/" target="_blank" rel="noreferrer" >What is Pseudocode in Programming?</a>
                <br></br>
                <a href="https://www.techtarget.com/whatis/definition/pseudocode" target="_blank" rel="noreferrer" >What is Pseudocode?</a>
                <br></br>
                <a href="https://en.wikipedia.org/wiki/Pseudocode" target="_blank" rel="noreferrer" >Pseudocode according to Wikipedia</a>
                <br></br>
              </div>
            </div>
          </div>

          <div className="container d-flex row justify-content-center text-light pt-5 mt-5">
            <div className="row d-flex justify-content-center">
              <div className="col-12 rounded blog-container">
                  <h2 className="blog-sub-header">Sprint 2 | Vanilla JS | Week 4</h2>
                  <h3 className="blog-body">02.17.23</h3>
                  <h5 className="blog-body-q">What did you learn about that helped you understand the development process?</h5>
                  <p className="blog-body">Using breakpoints and console logs really helped me to better understand how my code is being interpreted in the browser. This week I really tried to focus on embracing incremental coding and gaining a more firm understanding of JS and the myriad of ways to approach and solve problems.</p>
                  <h5 className="blog-body-q">What does it mean to develop good code?</h5>
                  <p className="blog-body">At this stage, good code for me is not perhaps the most efficient method to solve a problem, but whatever method I find that makes sense to me. At some point I hope that I gain a level of competence that will allow me to approach coding in a way that centers around industry best practices. For now, my focus is on working through the processes we've learned and maintaining a clear understanding of the underlying logic that I am aiming to program into my projects. </p>
                  <h5 className="blog-body-q">What does it mean to be a good developer?</h5>
                  <p className="blog-body">I would imagine a good developer is a master in the craft of problem solving. Able to examine and comprehend all factors in play, understand the mechanics at work, capable of breaking large problems down into smaller problems, then formulating solutions with an eye on the overarching goals of the entire project. I’m sure there are many other things that characterize a good developer, but an ability to solve problems systematically stands out to me as a crucial skill.</p>
                  <h5 className="blog-body-q">What is one thing that programmers hate doing?</h5>
                  <p className="blog-body">Getting bogged down with easily avoidable mistakes has been a frustrating pain point for me so far. I've lost count of the number of times I have found myself blocked on a problem, only to find out hours later that the solution was something as simple as a typo or missing file link. Encountering silly problems like this has set me back a few times, resulting in deadline pressure to achieve the minimum viable product.</p>
              </div>
            </div>
          </div>

          <div className="container d-flex row justify-content-center text-light">
            <div className="row d-flex justify-content-center">
              <div className="col-12 rounded blog-container">
                  <h2 className="blog-sub-header">Sprint 1 | HTML/CSS/JS/State | Week 3</h2>
                  <h3 className="blog-body">02.10.23</h3>
                  <h5 className="blog-body-q">What is the number one thing that held you back this week? Why?</h5>
                  <p className="blog-body">The only thing that really held me back this week is the same thing that had been holding me back since our last sprint - JavaScript. Although I am making consistent progress in understanding the language and how to implement it, there are still some very basic fundamental structural and relational principles that I am still not fully grasping. Spending time in one-on-one huddles with my classmates and instructors has helped me to progress through projects, but it will take some time for me to gain the competence that I need. </p>
                  <h5 className="blog-body-q">What is one thing you would like to learn more about regarding JavaScript (JSON, Data Structures), Bootstrap, or Atomic Design?</h5>
                  <p className="blog-body">Objects, functions and event listeners are areas that I really need to spend some extra time on moving forward. With Bootstrap, I feel comfortable that I have a general idea of how to build with it, but I think I have only scratched the surface. Learning about atomic design felt very intuitive for me, as it is something I've encountered before and isn't very far off from what is taught in print layout design. It will certainly be a great way to conceptualize and form a concise and ordered understanding of the structure of elements on the pages I build, and the relationships between them.</p>
                  <h5 className="blog-body-q">What is your “Why”?</h5>
                  <p className="blog-body">If I had to condense it down to one thing, it's the satisfaction that learning and writing code brings me. Even when I'm struggling and nothing works, I enjoy the process. There are many many more reasons, but how much I enjoy the grind of development sits right at the core of my reasons for being here.</p>
              </div>
            </div>
          </div>

          <div className="container d-flex row justify-content-center text-light">
            <div className="row d-flex justify-content-center">
              <div className="col-12 rounded blog-container">
                  <h2 className="blog-sub-header">Onboarding Sprint 2 | Week 2</h2>
                  <h3 className="blog-body">02.03.23</h3>
                  <h5 className="blog-body-q">What are your thoughts about the roles HTML, CSS, and JavaScript play in the process of rendering content and providing user experience?</h5>
                  <p className="blog-body">The more I learn about each language, the more I can conceptualize the relationships between the three. JavaScript has been the biggest challenge for me so far, but I'm determined to keep hammering away at it. I think the Code Wars warm-ups will be a great way to keep growing my understanding and confidence with the language. </p>
                  <h5 className="blog-body-q">What are your thoughts on pseudocoding?</h5>
                  <p className="blog-body">At first I didn't quite understand the actual utility of pseudo code. After a little practice, working from pseudo code to actual code helped me gain a better understanding and appreciation for the process. It will take some time for me to develop my own style and ensure that I am writing comprehensive and efficient code. </p>
                  <h5 className="blog-body-q">What was helpful during Onboarding working remotely?</h5>
                  <p className="blog-body">Trusting in the process and simply focusing on the next problem has been helpful for me to this point. I keep handwritten check lists to keep my order of work pointed in the right direction, then I just dive into the work, checking boxes as I progress. The slack channel has been an invaluable resource throughout onboarding. Interacting with everyone throughout the day has made working remotely more engaging.</p>
                  <h5 className="blog-body-q">What hindered your progress during Onboarding?</h5>
                  <p className="blog-body">The only thing that has hindered me throughout onboarding is my ability to absorb and apply highly technical information on short recall. I'm confident that over time and with repetition, not only will my understanding of the material increase but also my ability to retain and utilize new information more quickly and accurately.</p>
                  <h5 className="blog-body-q">How did you overcome challenges during Onboarding?</h5>
                  <p className="blog-body">Seeing that nearly everything has been a challenge for me so far, I suppose simple persistance has willed me through to this point. Getting 8 hours of sleep, eating clean and staying hydrated I'm sure has helped me to sustain my energy and focus throughout the day as well.</p>
              </div>
            </div>
          </div>

          <div className="container d-flex row justify-content-center text-light">
            <div className="row d-flex justify-content-center">
              <div className="col-12 rounded blog-container">
                  <h2 className="blog-sub-header">Retrospective | Week 2</h2>
                  <h3 className="blog-body">02.03.23</h3>
                  <h5 className="blog-body-q">What did you enjoy?</h5>
                  <p className="blog-body">The amount of material we covered this week was a bit overwhelming at times, but I feel like I learned a great deal. Working through and gaining a better understanding of pseudo code was definitely the most enjoyable part of the past week for me. Once I began the final project of the week, one where we were expected to build  an alarm clock without any tutorial guides or provided code, I could really see the value in building a strong foundation with pseudo coding. I didn't finish the alarm clock project, however I gained a lot of confidence in working from pseudo code to actual code.</p>
                  <h5 className="blog-body">What worked?</h5>
                  <p className="blog-body">Working through the first and last projects of the week were a tremendous help to me in my process of better understanding the structure of JavaScript and the way that objects and functions interact. I still have a long way to go, but knowing where the starting block is has made it a lot easier to understand the process of getting from a concept to a functioning website.</p>
                  <h5 className="blog-body-q">What didn't?</h5>
                  <p className="blog-body">I spent more time than I would have liked on the W3 schools JavaScript documentation and tutorials. I worked through each section, only moving forward when I felt comfortable that I had a solid understanding of the material. The amount of information was overwhelming, but exposure to the documentation helped me to more easily find answers to questions I would have when working through projects later in the week. My biggest blockers this week were executing a for loop to render images on screen from an array of image files. I eventually referenced the source code in order to work through the code and gain a better understanding. A second blocker was in figuring out how to construct a working alarm feature to work with my running clock. I didn't encounter this blocker until just before code freeze on Friday, so managing my time wisely throughout this next week will be a focus of mine.</p>
                  <h5 className="blog-body-q">Looking ahead…?</h5>
                  <p className="blog-body">Right now, I'm trying to stay focused on trusting the process and progressing through the material and projects at my own pace. I have a lot of work to do in order to gain the competency in JavaScript that I aim to achieve.</p>
              </div>
            </div>
          </div>

          <div className="container d-flex row justify-content-center text-light">
            <div className="row d-flex justify-content-center">
              <div className="col-12 rounded blog-container">
                  <h2 className="blog-sub-header">Retrospective | Week 1</h2>
                  <h3 className="blog-body">01.27.23</h3>
                  <h5 className="blog-body-q">What helps you to be successful as a team?</h5>
                  <p className="blog-body">Great leadership, communication and shared struggle. I was worried about this being remote, but the slack channel has really helped to keep me plugged in to not feel so isolated.</p>
                  <h5 className="blog-body-q">How did you do this sprint?</h5>
                  <p className="blog-body">I think I did ok, but I could have done much better. The first two days were a huge struggle for me, and I still have assignments from those days that I need to return to and work through. The second half of the week felt much more productive, although I do think I could have pushed myself to achieve stretch goals and challenge myself more.</p>
                  <h5 className="blog-body-q">Where and when did it go wrong in this sprint?</h5>
                  <p className="blog-body">The bug on our first day and the W3 Git and Github tutorial were very difficult for me to work through. I still haven’t finished either assignment, but plan to revisit them and at least get repetitions and hopefully gain a better understanding of the material.</p>
                  <h5 className="blog-body-q">What do you expect, from who?</h5>
                  <p className="blog-body">I expect to learn a great deal everyday and grow as a developer over the coming months from my instructors, classmates and the material provided to us.</p>
                  <h5 className="blog-body-q">Which tools or techniques proved to be useful?</h5>
                  <p className="blog-body">I would have to say the full spectrum of everything combined has been an enormous help throughout this week. We have been provided a wide variety of material through both our assigned work as well as extra resources that address individual and group concerns. Josh and Andrew have done great job pacing the class so that anyone struggling is provided assistance, while those advancing quickly are provided more opportunities to stretch and explore.</p>
                  <h5 className="blog-body-q">What is your biggest impediment?</h5>
                  <p className="blog-body">The fully remote format has been a challenge. I enjoy being physically present with my instructors and classmates, and the bond that that can build, so it’s been an adjustment for me especially when it comes to asking questions and interacting with everyone. It is nice to not have to pack a lunch and commute though! That being said, I do hope that by being challenged in a remote setting I will be better equipped to work remotely in the future if needed.</p>
                  <h5 className="blog-body-q">If you could change 1 thing, what would it be?</h5>
                  <p className="blog-body">It would be nice to be in-person, but I can’t say that I would change anything. I’m enjoying the process so far, and really enjoy working with and learning from my instructors and classmates.</p>
              </div>
            </div>
          </div>

          <div className="container d-flex row justify-content-center text-light">
            <div className="row d-flex justify-content-center">
              <div className="col-12 rounded blog-container">
                  <h2 className="blog-sub-header">Onboarding Sprint 1 | Week 1</h2>
                  <h3 className="blog-body">01/26/23</h3>
                  <h5 className="blog-body-q">Was your first week what you expected? Why? Why not?</h5>
                  <p className="blog-body">So far the first week of bootcamp has been mix of expected and unexepected experiences. Leading up to day 1, we were given a lot of material to read through which outlines what we could expect entering the first week and beyond. However, I had not anticipated having such a difficult time understanding and becoming comfortable with Git and GitHub. I am still working on assignments from the first two days, with very litle progress, but I am improving slowly each time I attempt working through the tutorials. Moving into HTML and CSS yesterday was a nice break from CLI and Git commands. I will need to spend extra time working on Git and GitHub over the coming days to ensure that I don't slow my self down once we get deeper into our first projects.</p>
                  <h5 className="blog-body-q">What are you excited or eager to learn more about?</h5>
                  <p className="blog-body">Right now, I am most excited about the challenge of becoming proficient in Git and GitHub. The first two days were really difficult for me, so it will take quite a bit more effort for me to get over this hump and feel comfortable moving ahead. I'm also excited to dive into HTML and CSS, and begin to see things rendered and styled in the browser.</p>
                  <h5 className="blog-body-q">What is something about you that can only be learned by reading this blog?</h5>
                  <p className="blog-body">I suppose anything unique to be learned about me from reading this blog is a look into my thought processs and how I am working through my days. I anticipate this blog being useful in backtracking to measure my progress, keeping a running record of my daily thoughts.</p>
              </div>
            </div>          
          </div>
        <Footer />
      </div>
    </div>
  );
}

export default Blog;