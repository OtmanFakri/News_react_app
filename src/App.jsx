
import {Detail, News,Navbar} from "./components/index"
import {Route, Routes , Outlet} from "react-router-dom";
import NewsJson from "../src/assets/News.json"
import React, {useState} from "react";

function App() {

    const  [curent,setcurent] = useState(0)
    const clickd = (val) =>{
        setcurent(val)
    }

    return (
        <div className={"flex flex-row"}>
            <Routes>
                <Route path={"/"} element={ <Navbar></Navbar>}>
                    <Route path="/News" element={
                        <>
                            <div >
                                <News  fund={clickd} newsjson={NewsJson["articles"]}></News>

                            </div>
                            <Outlet />
                        </>

                    }>
                        <Route path="/News/:id" element={
                            <>
                            <Detail name={NewsJson["articles"][curent]} />
                            </>
                        }/>
                    </Route>


                    <Route path="Weather" element={<p>this</p>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App
