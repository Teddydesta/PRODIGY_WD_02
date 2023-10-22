import {Routes, Route} from 'react-router-dom' 

import LandingPage from "./components/LandingPage";
import StopWatch from "./components/Stopwatch";
const App=()=>{
  return(
    <>
     
      <Routes>
        <Route path='/'element={<LandingPage/>}/>
        <Route path='/stopwatch' element={<StopWatch/>}/>
      </Routes>

    </>
  )
}
export default App;