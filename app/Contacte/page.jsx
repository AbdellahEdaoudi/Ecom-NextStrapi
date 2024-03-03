'use client'
import {Phone,Mail,MapPinned} from 'lucide-react'
export default function page() {

    return (
      <div className=" bg-sky-50 pb-[124px] pt-10">
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-600">Contact Us</p>
        </div><br />
        {/* */}
        <div className="md:flex justify-center  pt-4 md:mr-12 md:space-x-24 md:space-y-0 space-y-10 ">
  
          <div className="space-y-6 pt-7  ">
            <div className="flex items-center justify-center mr-20 space-x-4">
              <Phone  className="text-blue-500 text-3xl" />
              <p>Call Me <br /><span className="text-xs text-gray-500">+212607071966</span></p>
            </div>
            <div className="flex items-center justify-center  space-x-4">
              <Mail  className=" text-blue-500 text-3xl" />
              <p>Email  <br /><span className="text-xs text-gray-500">abdellahedaoudi80@gmail.com</span></p>
            </div>
            <div className="flex items-center justify-center  space-x-4">
            <MapPinned  className=" text-blue-500 text-3xl" />
              <p>Location  <br /><span className="text-xs mr-14  text-gray-500">Morocco - Laayoune</span></p>
            </div>
          </div>
  
          {/* Form Cntct */}
          <form method="post"  className="space-y-4 text-center pt-4 flex-row" >
            <input  type="text" name="name" required placeholder="Full Name"
              className="shadow-md pb-7 pl-3 pt-1 w-[300px] sm:w-44 md:w-44 bg-blue-50  border border-sky-500 rounded-md" />
            <input  type="email" name="email" required placeholder="Email"
              className="shadow-md md:ml-2 pb-7 pl-3 pt-1 ml-1 w-[300px] sm:w-44 md:w-64 bg-blue-50  border border-sky-500 rounded-md" /><br />
            <textarea  name="msg" required placeholder="Message"
              className="shadow-md pl-3 pt-1 w-[300px] sm:w-[370px] md:w-[440px] bg-blue-50  border border-sky-500 rounded-md" cols={1} rows={4} />
            <br />
            <button name="send" type="submit" className="py-2 px-4 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500"> Send Message <i className="bx bx-mail-send bx-tada" /></button>
          </form>
        </div>
      </div>
  
    );
  }
  
  