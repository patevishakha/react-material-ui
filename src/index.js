import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { usePromiseTracker } from "react-promise-tracker";
import * as Loader from "react-loader-spinner";
   /*export const Loader = () => (
  <div className="flex justify-center items-center ">
    <ThreeDots color="#2BAD60" height={80} width={80} />
  </div>
); */

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

   const LoadingIndicator = props => {
   const { promiseInProgress } = usePromiseTracker();
   


   return (
    promiseInProgress && 
        <div
      style={{
	    position: 'fixed',
		left: 0,
		top: 300,
        width: "100%",
        height: "100",
		zIndex: "9999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader.ThreeDots color= "#5514B4"/>
    </div>
  );  
 }

ReactDOM.render(<div> <LoadingIndicator /> <App /> </div>  ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
