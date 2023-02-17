import React, {useState} from 'react';
import {useParams} from "react-router-dom"
function Detail(props) {
    const [DetailNew, SetDetailNew] = useState(props.name)


    return (
        <>
            <div className={"flex flex-col w-[70vh]     shadow-[0px_4px_20px_0px_#00000024] m-5 rounded-md "}>
                <div className={"bg-cover h-1/2 rounded-md  "}
                     style={{backgroundImage: `url(${props.name?.urlToImage})`}}>

                </div>
                <div className={"space-y-5"}>
                    <h2 className={"text-center"}>
                        {props.name?.title}
                    </h2>
                    <h3 className={"pl-2"}>
                        {props.name?.description}
                    </h3>
                </div>

            </div>
        </>
    );
}

export default Detail;