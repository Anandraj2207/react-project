import React from 'react'
import { MdAddCall } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import Footer from './Footer'
import Logic from './Logic'

const Contact = () => {
  return (
    <div className="">
    
    <div className='px-4 md:px-14'>
      <div className="flex items-center justify-center py-10">
         <h1 className="font-bold text-3xl md:text-4xl text-blue-900 mt-25">Contact us</h1>
    </div>

      <div className="flex flex-col lg:flex-row gap-10 w-full mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full lg:w-1/2"> 

          <div>
            <h2 className="text-blue-900 text-xl md:text-2xl mb-4">Connect with Sales Team</h2>
            <a href="tel:+917760408321" className="flex items-center gap-2 p-2 text-gray-800">
              <MdAddCall /> +7760408321
            </a>
            <a href="https://www.whatsapp.com" className="flex items-center gap-2 p-2 text-gray-800">
              <FaWhatsapp /> +12345567820
            </a>
            <a href="https://fastootech.com" className="flex items-center gap-2 p-2 text-gray-800">
              <IoIosMail /> fastootech@gmail.com
            </a>
          </div>

          <div>

            <h2 className="text-blue-900 text-xl md:text-2xl mb-4">
              Connect with HR
              </h2>

          <a href="tel:+917760408321" className="flex items-center gap-2 p-2 text-gray-800">
              <MdAddCall /> +7760408321
             </a>
            <a href="tel:+917760408321" className="flex items-center gap-2 p-2 text-gray-800">
              <FaWhatsapp /> +7760408321
            </a>
               <a href="contact@fastootech.com" className="flex items-center gap-2 p-2 text-gray-800">
              <IoIosMail /> contact@fastootech.com
                </a>

          </div>
          <div className="md:col-span-1">
            <h2 className="text-blue-900 text-xl md:text-2xl mb-2">Our Office Address</h2>
            <h3 className="font-bold mb-1">Head Office - Bangalore</h3>
            <p className="text-gray-700">
              Site No. 26 Laskar, Hosur Rd, next to Nexus Mall, Chikku Lakshmaiah Layout, Adugodi, Bengaluru, Karnataka 560029
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">

          <Logic />
        </div>

      </div>


    <div className="flex items-center justify-center mt-14">
          <h1 className="font-bold text-3xl md:text-4xl text-blue-900 m-8">Our Office Location</h1>
      </div>

      <div className="mt-4 mb-16">
        <iframe width="100%" height="420" frameBorder="0" scrolling="no"
    src="https://maps.google.com/maps?width=100%25&amp;height=420&amp;hl=en&amp;q=Site%20No.%2026%20Laskar,%20Hosur%20Rd,%20next%20to%20Nexus%20Mall,%20Chikku%20Lakshmaiah%20Layout,%20Adugodi,%20Bengaluru,%20Karnataka%20560029+(Fastootech%20it%20solution)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Office Location" ></iframe>
      </div>
    </div>

      <Footer />

    </div>
    
  )
}

export default Contact;
