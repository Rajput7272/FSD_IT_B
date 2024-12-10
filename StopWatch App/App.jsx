import{Routes,Route} from 'react-router'
import Refex from'./Component/Refex'
const App=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element ={<h1>Home Page</h1>}></Route>
                <Route path="/counter" element ={<h1>Counter app</h1>}></Route>
                <Route path="/refex" element ={<Refex/>}></Route>
                <Route path="/stopwatch" element ={<h1>Stopwatch App</h1>}></Route>
                <Route path="*" element ={<h1>No Page Avialable</h1>}></Route>
            </Routes>
            </div>
    )
}
export default App;
