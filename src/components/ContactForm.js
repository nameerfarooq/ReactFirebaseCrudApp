
import React, { useState } from 'react'
import './ContactForm.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function ContactForm() {

    const [Data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setData({
            ...Data, [name]: value
        })
        console.log("state ka haal dekh", Data)
    }
    const PostData = async () => {
        let { name, email, phone, address } = Data;
        let res = await fetch('https://reactfirebasecrud-78477-default-rtdb.firebaseio.com/ReactFirebaseCRUD.json',
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                address
            })
        }


        )

    }

    return (
        <div className="OuterBodyLow">
            <form action="">
                <div className="row">
                    <TextField id="standard-basic" value={Data.name} name="name" onChange={handleChange} className="textField1" label="Name" variant="standard" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <TextField id="standard-basic" value={Data.email} name="email" onChange={handleChange} className="textField2" label="Email" variant="standard" />
                    </div>
                    <div className="col-md-6">
                        <TextField id="standard-basic" value={Data.phone} name="phone" onChange={handleChange} className="textField3" label="Phone" variant="standard" />
                    </div>
                </div>
                <div className="row">
                    <TextField id="standard-basic" value={Data.address} name="address" onChange={handleChange} className="textField4" label="Address" variant="standard" />

                </div>
                <Button fullWidth className="SubmitBtn" onClick={PostData} variant="contained">Submit</Button>

            </form>

        </div>
    )
}
