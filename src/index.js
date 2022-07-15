import ReactDOOM from 'react-dom'
import NavBar from './navbar'
function App(){
    return(
        <NavBar/>
    )
}

ReactDOOM.render(<App/>, document.querySelector('.root'))