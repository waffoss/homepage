import React, {useState} from "react";
import Input from "../shared/input/Input";
import "./Search.scss";
import Button from "../shared/button/Button";
import duck from  "../../duck.svg"

function Search() {

    const [searchText, setSearchText] = useState('');

    const handleSearch = (event: any) => {
        setSearchText(event.target.value);
    };

    const search = () =>{
        if(searchText !== ''){
            window.open("https://duckduckgo.com/?q=" + searchText)
        }
    }

    const handleKeypress = (event: any) => {
        if (event.charCode === 13 || event.keyCode === 13) {
            search();
        }
    };

    return (
        <div className="row search">
            <img className="col-lg-1 search-image" src={duck}></img>
            <Input className="col-lg-10 search-input" placeholder="Duck Duck Go" onChange={handleSearch} onKeyPress={handleKeypress}></Input>
            <Button className="col-lg-1 search-button" value="search" onClick={search}>
                <span className="material-icons">send</span>
            </Button>
        </div>
    );
}

export default Search;
