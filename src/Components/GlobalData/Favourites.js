import React, { useState } from "react";

const initialState = [
  // { 
  //   name:'Page1',
  //   label:'Page 1',
  //   urlPath:'Page1'
  // },
  // { 
  //   name:'Page3',
  //   label:'Page 3',
  //   urlPath:'Page1'
  // }
];

export const Context1 = React.createContext();

export const initialValues = initialState;
const Favourites = ({ children }) => {
  const [favData, setFavData] = useState(initialState);

  const isFavouriteComponent = componentName =>{
    let isPresent = false
    for (let i =0 ; i < favData.length ; i++){
      if (favData[i].name == componentName){
        isPresent = true;
        break;
      }
    }
    return isPresent  ;
    }

  const addToFavourites = componentName =>{
    setFavData([
      ...favData,
      {
        name: componentName.name ,
        label: componentName.label,
        urlPath:componentName.urlPath
      }
    ])
    console.log("myfav : "+favData);
  }

  const removeFavourites = component =>{
    let temp = favData;
    let index = null
    for (let i =0 ; i< favData.length ; i++){
      if (favData[i].name === component){
        index = i;
        break;
      }
    }
    temp.splice(index , 1)
    setFavData([...temp]);
  }

  return (
    <Context1.Provider value={[favData, setFavData , isFavouriteComponent , addToFavourites ,removeFavourites]}>
      {children}
    </Context1.Provider>
  );
};

export default Favourites;
