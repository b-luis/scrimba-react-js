//////////////////////////////////////////////////////////////
// first react practice
/* 
Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside
*/
// ReactDOM.render(
//     <ul>
//         <li>JavaScript</li>
//         <li>ReactJS</li>
//     </ul>,
//     document.getElementById('root')
// );

//////////////////////////////////////////////////////////////

// second react challenge
// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// function MainContent() {
//     return (
//         <main>
//             <div>
//                 <h2>Lorem ipsum dolor sit amet.</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, voluptatem saepe perspiciatis voluptas ullam ad laboriosam laudantium reiciendis ipsum delectus quidem culpa! Dignissimos cumque autem dolorum vero nulla deleniti natus inventore! Expedita adipisci totam voluptas. Quibusdam magni quis sit, totam possimus iusto! Eos vitae saepe exercitationem debitis, dolore dignissimos porro.</p>
//             </div>
//         </main>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// );

//////////////////////////////////////////////////////////////

// third react challenge
// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// const h1El = document.createElement('h1');
// const div = document.getElementById('root');
// h1El.textContent = 'Hello, world!';
// h1El.className = 'header';
// div.append(h1El);

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

//////////////////////////////////////////////////////////////

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const Navbar = (
    <nav>
        <h1>textractify</h1>
        <ul>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    Navbar,
    document.getElementById('root')
);


