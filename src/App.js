import Nav from './components/Nav'
import Home from './components/Home'
// import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
    return (
        <div>
            <Nav />
            <Home />
            {/* <About /> */}
            <Projects />
            <Skills />
        </div>
    )
}

export default App