import React from "react";
import DynamicFavTemplate from "./DynamicFavTemplate";
import  {
    Link,
    useLocation
} from 'react-router-dom';

export let user=[   
    {name:'Pratham',id:1},
    {name:'peter',id:2},
    {name:'bruce',id:3},
    {name:'tony',id:4},
  ];

const Profile = props =>{
    const Parenturl = useLocation().pathname.slice(1, );
    return(
        <div>
            <h1>Profiles :</h1>
        {
            user.map((item)=>
            <DynamicFavTemplate key={item.id} id = {item.id} label = {item.name}  starPosition = "left" space = {6}>
                <Link to={"/general/profile/"+item.id}>{item.name}</Link>
            </DynamicFavTemplate>)
        }
        </div>
    )
}

export default Profile; 