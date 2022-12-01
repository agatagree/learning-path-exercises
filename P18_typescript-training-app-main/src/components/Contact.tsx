import { useState } from "react";
import { StyledSection } from "./Style"
import styled from "styled-components";

const messageSend = {
    success: "Thank you for your message!",
    failed: "Some fields are missing!"
}

export const Contact = () => {
    const [ emailForm, setEmailForm ] = useState('');
    const [ messageForm, setMessageForm ] = useState('');
    const [ getContact, setgetContact ] = useState <string>();


    const handleSubmit = (e: any) => {
        e.preventDefault();
        if ( emailForm !== '' && messageForm !== '') {
            setgetContact(messageSend.success);
            setEmailForm('');
            setMessageForm('')
        } else {
            setgetContact(messageSend.failed);
        }
    }

    return (
    <StyledSection>
            <h2>Get in touch with us!</h2>
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail address:</label>
                <input style={{marginBottom: '10px'}}
                    name="email" 
                    type="email"
                    data-testid="email-input" 
                    value={emailForm}
                    onChange={e => setEmailForm(e.target.value)}>
                </input>
                <label htmlFor="message" />
                <textarea 
                    style={{marginBottom: '10px'}}
                    rows={12}
                    placeholder="type your message"
                    value={messageForm}
                    data-testid="message-input" 
                    onChange={e => setMessageForm(e.target.value)}>
                </textarea>
                <div>
                    <button onClick={handleSubmit} type="submit">Submit</button>
                </div>
            </StyledForm>
            {getContact && <p data-testid="submitMessage">{getContact}</p>}
    </StyledSection>
)}

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    `;
