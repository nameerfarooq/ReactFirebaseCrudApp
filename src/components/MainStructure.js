import React , {useState} from 'react'
import Contact from './Contact'
import ContactForm from './ContactForm'
import './MainStructure.css'
import BasicAlert from './Alert' 
export default function MainStructure() {
    const [AlertState, setAlertState] = useState({
        AlertStatus : false,
        AlertType : '',
        AlertMessage : ""
    })
    const setAlert=(type,message)=>{
        
        setAlertState({
            AlertStatus : true,
            AlertType : type,
        AlertMessage : message

        })
        setTimeout(() => {
            setAlertState({
            AlertStatus : false
            })
            
        }, 1000);
    }
    return (
        <div>
            <div className="container-fluid OuterBody ">
                <div className="row">
                    <h1 className="heading">Contact Form</h1>
                    {AlertState.AlertStatus && <BasicAlert AlertType={AlertState.AlertType} AlertMessage={AlertState.AlertMessage} />}
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ContactForm setAlert={setAlert} />
                    </div>
                    <div className="col-md-12">
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    )
}
