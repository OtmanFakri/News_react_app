
import {Detail, News,Navbar} from "./components/index"
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className={"flex flex-row"}>
            <Routes>
                <Route path={"/"} element={ <Navbar></Navbar>}>
                    <Route path="/News" element={

                            <News></News>

                    }/>
                    <Route path="Weather" element={<p>this</p>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App
