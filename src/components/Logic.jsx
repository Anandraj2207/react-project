import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"

const Logic = () => {
  const [name, setName] = useState('')
  const [sname, setsName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [number, setNumber] = useState('')
  const [company, setCompany] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = { name, sname, email, country, number, company }
    try {
      await addDoc(collection(db, "forms"), form)
      setName('')
      setsName('')
      setEmail('')
      setCountry('')
      setNumber('')
      setCompany('')
    } catch (error) {
      console.error("It's an error", error)
    }
  }

  return (
      <div className='w-full'>
<div className='bg-blue-600 flex items-center justify-center py-4 rounded-t-3xl'>
        <h2 className='text-xl md:text-2xl text-white text-center'>Collaborate with Nextwebi</h2>
      </div>

    <form id='frm'onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 shadow-lg border-none rounded-b-3xl bg-white">
        <div>
      <label className="block font-semibold mb-1 text-blue-900">First Name</label>
          <input type="text" id='fname' value={name} onChange={(e) => setName(e.target.value)}required placeholder="Enter your first name"className="w-full border p-2 rounded"/>
    </div>

      <div>

            <label className="block font-semibold mb-1 text-blue-900">Last Name</label>
          
      <input type="text" id='sname' value={sname} onChange={(e) => setsName(e.target.value)}required placeholder="Enter your last name" className="w-full border p-2 rounded"/>
        </div>
        <div> 

           <label className="block font-semibold mb-1 text-blue-900">Email</label>
        <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}required placeholder="Enter your email" className="w-full border p-2 rounded"/>
        </div>

        <div>
           
           <label className="block font-semibold mb-1 text-blue-900">Country</label>
          <input type="text" id='count' value={country} onChange={(e) => setCountry(e.target.value)}required placeholder="Enter your country" className="w-full border p-2 rounded"/>
        </div>
        <div>
             <label className="block font-semibold mb-1 text-blue-900">Contact Number</label>
            <input type="number" id='number' value={number} onChange={(e) => setNumber(e.target.value)}required placeholder="Enter your number" className="w-full border p-2 rounded"/>
        </div>
        <div>
          <label className="block font-semibold mb-1 text-blue-900">Company Name</label>
          <input type="text" id='company' value={company} onChange={(e) => setCompany(e.target.value)}required placeholder="Enter your company" className="w-full border p-2 rounded"/>
        </div>

        <div className='col-span-1 md:col-span-2 flex justify-center'>
          <button type='submit' className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded-2xl'>
            Submit
      </button>
           </div>
       </form>
</div>
  )
}

export default Logic
