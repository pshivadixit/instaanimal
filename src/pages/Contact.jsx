import React, {useState} from 'react'


export default function Contact(){
const [form, setForm] = useState({name:'', email:'', message:''})
const onChange = e => setForm({...form, [e.target.name]: e.target.value})
const onSubmit = e => {
e.preventDefault()
// replace with API call (axios.post(...))
alert('Message sent — demo only')
}


return (
<div className="container section contact-page">
<h2>Contact Us</h2>
<form onSubmit={onSubmit} className="contact-form">
<label>
Name
<input name="name" value={form.name} onChange={onChange} required />
</label>
<label>
Email
<input name="email" type="email" value={form.email} onChange={onChange} required />
</label>
<label>
Message
<textarea name="message" value={form.message} onChange={onChange} required />
</label>
<button className="btn" type="submit">Send</button>
</form>
</div>
)
}