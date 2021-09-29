import React, { useState, useEffect } from 'react'
import './Contact.css'
import { getDatabase, ref, onValue } from "firebase/database";

export default function Contact() {

    const [Data, setData] = useState({
    'hello':{name:"field empty",
    email:"field empty",
    phone:"field empty",
    address:"field empty"}
    })
    useEffect(() => {
        const db = getDatabase();
        const DataRef = ref(db, 'ReactFirebaseCRUD/');
        onValue(DataRef, (snapshot) => {
            const data = snapshot.val();
            if(data){

                setData(data)
            }
            else{
                setData({
                    'hello':{name:"field empty",
                    email:"field empty",
                    phone:"field empty",
                    address:"field empty"}
                    })
            }
        });

    }, [])


    // console.log(Data)


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
            {Object.keys(Data).map((element)=>{
                // <p key={key}>
                // {Data[key].name}{
                // console.log(key)
                // }
                // </p>
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
                        <div className="col-lg-3">
                            <p>
                                edit | delete
                            </p>
                        </div>

                    </div>
                )
            })}


        </div>
    )
}
