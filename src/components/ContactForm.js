
import React from 'react'
import './ContactForm.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactForm() {
    return (
        <div className="OuterBodyLow">
            <form action="">
            <div className="row">
            <TextField id="standard-basic" className="textField1" label="Name" variant="standard" />
            </div>
<div className="row">
    <div className="col-md-6">
    <TextField id="standard-basic"  className="textField2" label="Email" variant="standard" />
    </div>
    <div className="col-md-6">
    <TextField id="standard-basic"  className="textField3" label="Phone" variant="standard" />
    </div>
</div>
<div className="row">
<TextField id="standard-basic" className="textField4" label="Address" variant="standard" />

</div>
<Button fullWidth className="SubmitBtn" variant="contained">Submit</Button>

            </form>
            
        </div>
    )
}
