import React from 'react'
import Contact from './Contact'
import ContactForm from './ContactForm'
import './MainStructure.css'
export default function MainStructure() {
    return (
        <div>
            <div className="container-fluid OuterBody ">
                <div className="row">
                    <h1 className="heading">Contact Form</h1>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ContactForm />
                    </div>
                    <div className="col-md-12">
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    )
}
