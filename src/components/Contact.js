import React, { useState, useEffect } from 'react'
import './Contact.css'
import { getDatabase, ref, onValue, set } from "firebase/database";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import BasicAlert from './Alert'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import firedb from '../firebase'
export default function Contact() {




    const [Data, setData] = useState({
        'hello': {
            name: "field empty",
            email: "field empty",
            phone: "field empty",
            address: "field empty"
        }
    })


    const [uniqueID, setuniqueID] = useState('hello')



    const [updatedValues, setupdatedValues] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    const handleUpdateChange = (e) => {
        let Updatedname = e.target.name;
        let UpdatedValue = e.target.value;
        setupdatedValues({ ...updatedValues, [Updatedname]: UpdatedValue })


    }


    const [innerAlert, setinnerAlert] = useState({
        red: false,
        green: false
    })



    // eslint-disable-next-line
    useEffect(() => {
        const db = getDatabase();
        const DataRef = ref(db, 'ReactFirebaseCRUD/');
        onValue(DataRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {

                setData(data)
            }
            else {
                setData({
                    'hello': {
                        name: "field empty",
                        email: "field empty",
                        phone: "field empty",
                        address: "field empty"
                    }
                })
            }
        });

    }, [])




    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateTheData = async () => {
        if (updatedValues.name.length < 2 || updatedValues.email.length < 2 || updatedValues.phone.length < 2 || updatedValues.address.length < 2) {
            setinnerAlert({
                red: true
            })
            setTimeout(() => {
                setinnerAlert({
                    red: false
                })

            }, 1000);
        }
        else {

            FireFinalUpdate()
            setinnerAlert({
                green: true
            })

            setTimeout(() => {
                setinnerAlert({
                    green: false
                })

            }, 500);

            handleClose()


        }

    }
    const dontupdateTheData = () => {
        setupdatedValues({
            name: "",
            email: "",
            phone: "",
            address: ""
        })
        handleClose()
    }

    const updateValues = () => {
        console.log("uniqueID")
        console.log("uniqueID", uniqueID)

        handleClickOpen()
    }
    const UpdateData = async (e) => {

        await updateValues()

        setuniqueID(e.target.id)
        console.log("yeh agaya id = ", uniqueID)

    }



    const FireFinalUpdate = async () => {


        const db = getDatabase();
        await set(ref(db, `ReactFirebaseCRUD/${uniqueID}`),
            updatedValues)
            .then(() => {
                // Data saved successfully!
            })
            .catch((error) => {
                return (

                    console.log(error)
                )
            });
        setupdatedValues({
            name: "",
            email: "",
            phone: "",
            address: ""
        })
    }


    const deleteData = async (e) => {
        const id = e.target.id
        const db = getDatabase();
        await set(ref(db, `ReactFirebaseCRUD/${id}`),
            null)
            .then(() => {
                // Data saved successfully!
            })
            .catch((error) => {
                return (

                    console.log(error)
                )
            });

    }

    return (

        <div className="Outter2">
            <div className="row headerContact">

                <div className="col-lg-3">
                    <b className="headers">
                        Name
                    </b>
                </div>
                <div className="col-lg-3">
                    <b className="headers">
                        Email
                    </b>
                </div>
                <div className="col-lg-3">
                    <b className="headers">
                        Phone
                    </b>
                </div>
                <div className="col-lg-3">
                    <b className="headers">
                        Actions
                    </b>
                </div>

            </div>
            {Object.keys(Data).map((element) => {

                return (
                    <div key={element} className="row DataRow">
                        <div className="col-lg-3">
                            <p>
                                {Data[element].name}
                                {/* // muhammad nameer */}
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <p>
                                {Data[element].email}
                                {/* // nameerfarooq18@gmail.com */}
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <p>
                                {Data[element].phone}
                                {/* {console.log("element",element)} */}
                            </p>
                        </div>
                        <div className="col-lg-3" style={{ color: "black !important" }} >

                            <ButtonGroup disableElevation variant="contained">
                                <Button className="disabled" disabled={Data[element].email === "field empty"} id={element} onClick={UpdateData} >edit</Button>
                                <Button className="disabled" disabled={Data[element].email === "field empty"} id={element} onClick={deleteData}>delete</Button>
                            </ButtonGroup>
                            <Dialog sx={{ color: 'black !important' }} open={open} onClose={handleClose}>
                                {innerAlert.red && <BasicAlert AlertType="danger" AlertMessage="fill all field correctly" />}
                                <DialogTitle sx={{ color: 'black !important' }} >Updating Values</DialogTitle>
                                <DialogContent>
                                    <DialogContentText sx={{ color: 'black !important' }}>
                                        To edit the record please enter new values below
                                    </DialogContentText>
                                    <TextField
                                        sx={{
                                            color: 'black', '& .MuiInputLabel-root': { color: "black !important" },
                                            '& .MuiInput-input': { color: "black !important" }
                                        }}
                                        name="name"
                                        value={updatedValues.name}
                                        onChange={handleUpdateChange}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Name"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        placeholder="enter your name"


                                    />
                                    <TextField
                                        sx={{
                                            color: 'black', '& .MuiInputLabel-root': { color: "black !important" },
                                            '& .MuiInput-input': { color: "black !important" }
                                        }}
                                        name="email"
                                        value={updatedValues.email}
                                        onChange={handleUpdateChange}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Email Address"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                        placeholder="enter your email"
                                    />
                                    <TextField
                                        sx={{
                                            color: 'black', '& .MuiInputLabel-root': { color: "black !important" },
                                            '& .MuiInput-input': { color: "black !important" }
                                        }}
                                        name="phone"
                                        value={updatedValues.phone}
                                        onChange={handleUpdateChange}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Phone"
                                        type="tel"
                                        fullWidth
                                        variant="standard"
                                        placeholder="enter your phone"
                                    />
                                    <TextField
                                        sx={{
                                            color: 'black', '& .MuiInputLabel-root': { color: "black !important" },
                                            '& .MuiInput-input': { color: "black !important" }
                                        }}
                                        name="address"
                                        value={updatedValues.address}
                                        onChange={handleUpdateChange}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Address"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        placeholder="enter your address"
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button sx={{ color: 'black !important', backgroundColor: '#0ab892' }} onClick={updateTheData}>Update</Button>
                                    <Button sx={{ color: 'black !important', backgroundColor: '#ff6b6b' }} onClick={dontupdateTheData}>Cancel</Button>
                                </DialogActions>
                            </Dialog>
                        </div>

                    </div>
                )
            })}


        </div>
    )
}
