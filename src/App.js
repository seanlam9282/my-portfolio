import Nav from './components/Nav'
import Home from './components/Home'
// import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
    return (
        <div>
            <Nav />
            <Home />
            {/* <About /> */}
            <Projects />
            <Skills />
            <Contact />
        </div>
    )
}

export default App