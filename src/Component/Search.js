import React from "react";
import {useState} from "react"

let Search = () => {

    


    let arr= [
        {
            name:"Dnipro",
            video : 
            <div><iframe width="1200" height="500" src="https://www.youtube.com/embed/bWCdeDa_rQg" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe></div>},
        {
        name:"Kiev",
        video : 
        <div><iframe width="1200" height="500" src="https://www.youtube.com/embed/TYfYX0ngLkE" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe></div>},
        {name:"Lviv",video:<div><iframe width="1200" height="500" src="https://www.youtube.com/embed/slYQv-5wPLE" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe></div>},
        {name:"Kharkiv",video: <div><iframe width="1200" height="500" src="https://www.youtube.com/embed/c5BL4pEVCsQ" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe></div>},]


        let Arr = arr.map((item) => item.name + " " );

    let[text,setText] = useState();
    let[users,setUsers] = useState();

let search = (e) => {

    setText(text = e.target.value)

}
let searchBtn = () => {

    if(text == "Kiev" || text == "Киев" || text == "Київ"){

    let User = arr.find(item => item.name == "Kiev");

    setUsers(users = User.video)

    }
    else if(text == "Lviv" || text == "Львов" || text == "Львів"){

        let User = arr.find(item => item.name == "Lviv");

    setUsers(users = User.video)

    }
    else if(text == "Kharkiv" || text == "Харьков" || text == "Харків"){

        let User = arr.find(item => item.name == "Kharkiv");

    setUsers(users = User.video)

    }
    else if(text == "Dnipro" || text == "Dnipropetrovsk" || text == "Dnepr" || text == "Днепр" || text == "Днепропетровск" 
    || text == "Дніпро" || text == "Дніпропетровськ"){

        let User = arr.find(item => item.name == "Dnipro");

    setUsers(users = User.video)

    }

   

}



    return(

        <div>

            <div className="block_town">

                <h2>Video</h2>

                  <h2 className="text_town">{Arr}</h2>

            </div>
            <div className="block_Search">
                    
                    <input type="text" onInput={search} />
                    <button onClick={searchBtn}>Search</button>
                    <p>{users}</p>

            </div>

        </div>

    )
    

}
export default Search;