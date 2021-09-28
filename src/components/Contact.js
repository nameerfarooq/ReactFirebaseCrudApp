import React from 'react'
import './Contact.css'
export default function Contact() {
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


            <div className="row DataRow">
                <div className="col-lg-3">
                    <p>
                        muhammad nameer
                    </p>
                </div>
                <div className="col-lg-3">
                    <p>
                        nameerfarooq18@gmail.com
                    </p>
                </div>
                <div className="col-lg-3">
                    <p>
                        03352418380
                    </p>
                </div>
                <div className="col-lg-3">
                    <p>
                        edit | delete
                    </p>
                </div>

            </div>
        </div>
    )
}
