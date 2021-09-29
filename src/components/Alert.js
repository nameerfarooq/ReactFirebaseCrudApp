import React ,{useState, useEffect} from 'react';

export default function BasicAlert(props) {
  const [Style, setStyle] = useState({
    backgroundColor : "white",
    zIndex : "1",
    position : "fixed",
    color:"black !important"
  })
  useEffect(() => {
    if(props.AlertType==="danger"){
      setStyle({
        ...Style,backgroundColor:"#E74C3C"
      })}
      else if(props.AlertType==="success"){
        setStyle({
         ...Style, backgroundColor:"#2ECC71"
        })
      }
    
    // eslint-disable-next-line 
  }, [])
  return (
    <>
    <div className={`alert alert-${props.AlertType}`} role="alert" style={ Style}>
      {props.AlertMessage}
    </div>
    </>
  );
}