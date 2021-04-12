import React, {useEffect, useState} from "react";
import "./BookmarkCard.scss";

interface BookmarkProps {
    title: string;
    image: any;
    url: string;
}

function BookmarkCard(props: BookmarkProps){

    const handleClick = () =>{
        window.open(props.url);
    }


    return (
        <div className="card" onClick={handleClick}>
            <img className="logo" src={'https://www.google.com/s2/favicons?domain=' + props.url}/>
            <h3>{props.title}</h3>
        </div>
    );
}

export default BookmarkCard;
