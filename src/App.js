import React,  { useState } from 'react';
import useForm from './useForm';
import './App.css';

const App = () => { 
  const [form, setForm] = useForm({email: '', password: ''});

  return (    
    <div className="AlignCenter">
      <input 
        name="email"
        placeholder="email"
        value={form.email}
        onChange={setForm}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={form.password}
        onChange={setForm}
      />
      <button className="SubmitButton" onClick={() => console.log(form)}>Submit</button>
    </div>
  )
}

export default App;
