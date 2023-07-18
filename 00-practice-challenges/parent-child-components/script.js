// Removed becaused 
// import React from "react"
// import ReactDOM from "react-dom"

/**
Mini Challenge:
- Move the `header` element from Page into 
  its own component called "Header"
- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.

Another Challenge:
- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/

function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src="../assets/react-logo.png" alt="react-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div className="main-content">
            <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>It's a popular library, so I'll be 
                    able to fit in with the cool kids!</li>
                    <li>I'm more likely to get a job as a developer
                    if I know React</li>
                </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>© 2023 Luis development. All rights reserved.</small>
        </footer>
    )
};

/* Notice the Header component */
function Page() {
    return (
        <div>
            <Header /> 
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))