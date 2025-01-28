import { useState } from 'react'
import './component-css/contactMe.css';

function ContactMe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    // const [errors, setErrors] = useState({});
    // const [submitting, setSubmitting] = useState(false);
    
    // const handleValidation = (inputs) => {
    //     let errors = {}

    //     if (inputs.name.trim.length < 1) {
    //         errors.name = "Name cannot be empty";
    //       }
    //       if (inputs.email.length < 1) {
    //         errors.email = "Email cannot be empty";
    //       }
    //       if (inputs.comment.length < 1) {
    //         errors.comment = "comment should not be empty";
    //       }
    //       return errors;
    // }


    const addEntry = async () => {
        const entryData = {
            personName: name,
            personEmail: email,
            personComment: comment,
        };

        try 
        {
            const response = await fetch("http://127.0.0.1:8000/api/contactFrom/create/", {
            method: "POST",
            headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entryData)
            });
            const data = await response.json()
            console.log(data)
            /*Does not work since I have it in a seperate component*/
            // setEntries((prev)=> [...prev, data]);
        } catch(e)
        {
            console.log(e);
        }
    }

    return(
        <div className='contactMe-containter'>
            <div>      
                <input id="nameInput" name="name" type="text" className="feedback-input" placeholder="Name" onChange={(e) => setName(e.target.value)}/>   
                <input id="emailInput" name="email" type="text" className="feedback-input" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <textarea id="commentInput" name="text" className="feedback-input" placeholder="Comment" onChange={(e) => setComment(e.target.value)}></textarea>
                <button onClick={addEntry}>Send</button>
            </div>
        </div>
    );
}
export default ContactMe;