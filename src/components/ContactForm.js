
import React, { useState, useEffect } from 'react'
import './ContactForm.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// eslint-disable-next-line
import { firebaseDb } from '../firebase'
// import { getDatabase, ref, onValue } from "firebase/database";

export default function ContactForm(props) {

    const [Data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    })
    // const [FireBaseData, setFireBaseData] = useState({
    //     id: "",
    //     name: "",
    //     email: "",
    //     phone: "",
    //     address: ""
    // })
    // useEffect(() => {
    //     const db = getDatabase();
    //     const DataRef = ref(db, 'ReactFirebaseCRUD/');
    //     onValue(DataRef, (snapshot) => {
    //         const data = snapshot.val();
    //         console.log("yeh lo ",data)
            
    //             setFireBaseData({
    //                data
    //             })
            
    //     });

    // }, [])
    

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setData({
            ...Data, [name]: value
        })
    }
    const PostData = async () => {

        let { name, email, phone, address } = Data;
        if (!name.length || !email.length || !phone.length || !address.length) {
            props.setAlert('danger', 'Please fill all fields correctly !')
        }
        
        
        else {

            // eslint-disable-next-line
            let res = await fetch('https://reactfirebasecrud-78477-default-rtdb.firebaseio.com/ReactFirebaseCRUD.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        address
                    })
                }
            )

            props.setAlert('success', 'your form was submitted successfully')
            setData({
                name: "",
                email: "",
                phone: "",
                address: "",
            })
        }
    }

    return (
        <div className="OuterBodyLow">
            <form action="POST">
                <div className="row">
                    <TextField type="text" id="standard-basic" value={Data.name} name="name" onChange={handleChange} className="textField1" label="Name" variant="standard" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <TextField type="email" id="standard-basic" value={Data.email} name="email" onChange={handleChange} className="textField2" label="Email" variant="standard" />
                    </div>
                    <div className="col-md-6">
                        <TextField type="tel" id="standard-basic" value={Data.phone} name="phone" onChange={handleChange} className="textField3" label="Phone" variant="standard" />
                    </div>
                </div>
                <div className="row">
                    <TextField type="text" id="standard-basic" value={Data.address} name="address" onChange={handleChange} className="textField4" label="Address" variant="standard" />
                </div>
                <Button fullWidth className="SubmitBtn" onClick={PostData} variant="contained">Submit</Button>

            </form>
        </div>
    )
}
