import { React, useState } from 'react'
import Button from '../Button/Button'
import './Form.css'

import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    
    const onNameChange = (event) => {
        console.log(event)
        setName(event.target.value)
        
    }
    const onEmailChange = (event) => {
        console.log(event)
        setEmail(event.target.value)
        
    }
    const onTextChange = (event) => {
        console.log(event)
        setText(event.target.value)
        
    }

    const onSubmit = (event) => {
        event.preventDefault();
        

        console.log('name', event.target[0].value)
        console.log('email', event.target[1].value)
        console.log('text', event.target[1].value)
        console.log(event)
        console.log(name, email, text)

        alert('Name: '+ name + '\nEmail: ' + email + '\nText: '+ text)
    }


    return (
        <section className='container'>
            <div className='contact_form'>
                <div className='top-btn'>
                    <Button isOutline={false} text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={"20px"} />}></Button>
                    <Button isOutline={false} text="VIA CALL" icon={<FaPhoneAlt fontSize={"20px"} />}></Button>
                </div>
                <div>
                    <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize={"20px"} />}></Button>
                </div>


                <form onSubmit={onSubmit} >
                    <div className='form_control'>
                        <label htmlFor='name'>Name</label>
                        <input onChange={onNameChange} type='text' name='name' />
                    </div>
                    <div className='form_control'>
                        <label htmlFor='email'>Email</label>
                        <input onChange={onEmailChange} type='email' name='email' />
                    </div>
                    <div className='form_control'>
                        <label htmlFor='addr'>text</label>
                        <textarea onChange={onTextChange} name='addr' rows='8' />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Button text="SUBMIT" ></Button>
                    </div>

                </form>
            </div>
            <div className='contact_img'>
            
                <img src='https//via.placeholder.com/200' alt='contact image'/>
            </div>
        </section>
    )
}

export default Form