"use client"
import { useState } from 'react';
import './contact.css'

export default function Contact(){
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [msg, setMsg] = useState('');

    const onSubmitContactMsg = async (e) => {
        e.preventDefault(); //prevents the page for reloading
        const contactData = {email, name, surname, msg};
        
        try {
            const responseData = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(contactData)
            })

            if (responseData.ok) {
                alert('Contact Saved Successfully!');
                setEmail('');
                setName('');
                setSurname('');
                setMsg('');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div>
            <div className='form-container'>
                <form className='main-form'>
                    <label>Your Email: </label>
                    <input value={email} className="border border-black" type="email" onChange={(e)=> setEmail(e.target.value)}/>
                    <label>Your Name: </label>
                    <input value={name} className="border border-black" type="text" onChange={(e)=> setName(e.target.value)}/>
                    <label>Your Surname: </label>
                    <input value={surname} className="border border-black" type="text"onChange={(e)=> setSurname(e.target.value)}/>
                    <label>Your Message </label>
                    <input value={msg} className="border border-black msg" type="text" onChange={(e)=> setMsg(e.target.value)}/>
                    <button className="submit" onClick={onSubmitContactMsg}>Submit</button>
                </form>
            </div>
        </div>
    )
}