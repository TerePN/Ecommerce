import React from "react";
import"../styles/loading.css" ;

const IsLoadingScreen = () => {
  return (
    <div className="overlay">
       <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default IsLoadingScreen;
