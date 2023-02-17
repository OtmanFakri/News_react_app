import React, {useEffect, useState} from 'react';
import tw from "tailwind-styled-components";
import {model_News} from "../../Models/News_models.jsx";
import Detail  from "../News_Detail/Detail";
import { Link } from "react-router-dom";


function News(props) {

    const Card = tw.p`
    
    shadow-[0px_4px_20px_0px_#00000024]
    border
    w-[36.125rem]
    h-[12.188rem]
    m-2
    rounded-[9px]
    cursor-pointer
     `

    const Title_cop = tw.p`
    text-[#000000],
    text-1.5
    truncate
    w-full
    h-full
  `
    const Des_cop = tw.p`
    text-[#000000],
    opacity-50,
   
    text-1
    truncate
    h-[600px]
    w-[400px]
  `

    const [NewsList, SetNewsList] = useState()


    const handleClick = (id) => {
        // Invoke the updateCount callback function with the new count value
      props.fund(id)
    };

    {/* Fetch api News */
    }
    {/*
    useEffect(() => {


        async function fetchData() {

                const response = await fetch("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=145cae52067945059c40a596650cb455");
                if(response.status === 200){
                    const data = await response.json();
                    return data["articles"];
                }else {
                    console.log("++++++error")
                }


        }

        fetchData().then(r => {
            SetNewsList(
                r
            );
        }).catch( (error) => {
            console.log(error.message);
        });
    }, []);
    */
    }



    const pst = props.newsjson?.map((item,index) => (
        <Link  key={item.title} to={`/News/${item.title}`} >
        <Card onClick={()=>handleClick(index)} key={item.title}>
            <div className={"flex flex-row h-full  w-full "}>
                <div className={"flex items-center"}>
                    <div className={`bg-cover w-[9.75rem]   h-[90%]  rounded-[9px]  flex-none mx-2 p-5 `}
                         style={{backgroundImage: `url(${item.urlToImage})`}}
                    ></div>
                </div>
                {/*title description */}
                <div className={"flex flex-col justify-between  relative w-full h-full  pr-10 pt-5 pb-10"}>
                    {/*title */}
                    <div className={" h-full"}>
                        {/*<Title_cop>{item.title}</Title_cop>*/}
                        <p>{item.title}</p>
                    </div>
                    {/*description */}
                    <div className={"h-full items-center"}>
                        <p className={"line-clamp-3 max-h-12 overflow-hidden text-[#000000] text-1 opacity-50"}>{item.description}</p>
                    </div>
                    {/*auther */}
                    <div>
                        <Title_cop>{item.author}</Title_cop>
                    </div>
                    {/*date */}
                    <div className={"absolute bottom-0 right-0   px-10 pb-5"}>
                        <Title_cop>{item.publishedAt}</Title_cop>
                    </div>
                </div>

            </div>
        </Card>
        </Link>
    ))

    return (
        <div className={" "}>
            <div className={"flex flex-col h-[100vh] overflow-y-scroll"}>
                {NewsList?.length === 0 ? (
                    <div className={" h-[100vh] overflow-y-scroll "}>
                        {pst}
                    </div>

                ) : (
                    pst
                )}
            </div>

        </div>

    );
}

export default News;