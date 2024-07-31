'use client'
import React from 'react'
import styled from 'styled-components'
import { Message } from 'twilio/lib/twiml/MessagingResponse';

function Page() {

  const onSubmit= async(e)=>{
    e.preventDefault();

    const formData=new FormData(e.target);

      const sms={
        phone:formData.get('phone'),
        message:formData.get('message')
      }

      const res=await fetch('/api/sms',{
        method: 'POST',
        body:JSON.stringify(sms),
        headers:{
          "Content-Type":"application/json"
        }
      })

      const data= await res.json();
      console.log(data);
      alert('mensaje enviado')

  }


  return (
    <Formulario onSubmit={onSubmit}>
      
        <h1>Envía un mensaje</h1>

      <Input
        type='tel'
        name='phone'
        placeholder='Número telefónico'
      />


      <Mensaje
      name="message"
      placeholder='Escribe tu mensaje'
      />

    <Boton type='submit'>Enviar</Boton>

    </Formulario>
  )
}
//``
const Formulario=styled.form`
    width: 50%;
    height: 75%;
    background: linear-gradient(rgba(5,7,12,0.60),rgba(5,7,12,0.60));
    text-align: center;
    border-radius:5px;
    box-shadow: 0.5px 1px 0.5px rbga(0,0,0,0.5);
    color:white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;



const Input=styled.input`
  width: 70%;
  height: 13%;
  font-size: 20px;
  border: none;
  padding: 10px;
  background: rgba(0,0,0,0.3);
  border-radius: 5px;
  outline: none;
  color: white;
`;

const Mensaje=styled.textarea`
  width: 70%;
  height: 30%;
  font-size: 20px;
  border: none;
  padding: 10px;
  background: rgba(0,0,0,0.3);
  border-radius: 5px;
  outline: none;
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  letter-spacing: 1px;

`;

const Boton=styled.button`
  width: 25%;
  height: 10%;
  background: transparent;
  color: white;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 1px;
  border-radius: 5px;
  &:hover{
    transform: scale(1.1);
  }
`;

export default Page