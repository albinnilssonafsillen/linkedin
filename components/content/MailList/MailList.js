import React, { useState, useRef } from 'react'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'

function MailList() {

    const inputMail = useRef(null);

    const [mail, setValidMail] = useState('');
    const [message, setMessage] = useState('');


    const addSubscription = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/subscription', {
            body: JSON.stringify({
                email: inputMail.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const { error } = await res.json();

        if (error) {
            console.log(error);
            setMessage(error);
            return;
        }

        alert(`Du har gjort ett aktivt val att bli en bättre människa. Bra jobbat ♥ ♥ ♥`)
        inputMail.current.value = '';
        setMessage(`Success ♥ ♥ ♥`)
    };

    return (
        <div className="mailList">
            <p>Jag, Albin, motsätter mig detta inlägg från LinkedIn.</p>
            <ul>
                <p className="douchQuote">"Som <strong>många</strong> andra som jag förmånen att ha städhjälp"</p>
                <p className="douchQuote">"Jag gjorde hennes dag och jag gav henne hopp, bara genom att stanna upp 5 minuter och <strong>se henne</strong>"</p>
            </ul>
            <p>Personen blev såklart unisont hyllad på LinkedIn. Inga kritiska frågor om förslagsvis <strong>beroendeställning</strong> osv.</p>
            <p>För att säkerställa att jag inte blir en liknande person blir jag påmind en gång i halvåret om detta. Om du, käre besökare önskar bli påmind, Vänligen ange mail nedan:</p>
            <div className="sendMail">
                <form onSubmit={addSubscription}>
                    <input className="txtInput" ref={inputMail} required id="mail" onChange={e => setValidMail(e.target.value)} type="email" placeHolder="LinkedIn@spray.se" ></input>
                    <Button disabled={!mail} text="Påminn mig"  />
                </form>
            </div>
            <div className="count">
                {!message ? message :  `Personer i mailutskick: 4`}
            </div>
        </div>
    );
}

export default MailList;