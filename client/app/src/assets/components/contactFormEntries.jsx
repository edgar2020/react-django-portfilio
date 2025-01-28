import { useEffect, useState } from 'react'
import './component-css/contactMe.css';

function ContactMeEntries() {

        const [formEntries, setEntries] = useState([]);

        useEffect(() => {
            fetchEntries();
        }, []);

        const fetchEntries = async() => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/contactFrom/");

                const data = await response.json();
                // console.log(data)
                
                setEntries(data)
            }
            catch(err)
            {
                console.log(data);
            }
        }

    return(
        <div className='contactMe-entries'>
            {formEntries.map((entry) => (
                <div>
                    <p>Name: {entry.personName} </p>
                    <p>Email: {entry.personEmail}</p>
                    <p>Comment: {entry.personComment}</p>
            </div>
        ))}
        </div>
    );
}
export default ContactMeEntries;