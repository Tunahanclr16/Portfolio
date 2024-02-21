import React from 'react'

export default function Footer() {
  return (
    <>
          <div className=' max-w-[1440xp] container mx-auto mt-20 flex justify-between  items-center'>
          <div>
            <span className='text-[14px] text-[#CDD0D4]'>Tunahan Çeler portfolio website.</span>
          </div>
          <div>
            <ul className='flex gap-6 items-center'>
              <li className='text-[16px] text-[#CDD0D4]'>
                <a target='blank' href="https://github.com/Tunahanclr16?tab=repositories">GitHub</a>
              </li>
              <li className='text-[16px] text-[#CDD0D4]'>
                <a target='blank' href="https://www.linkedin.com/in/tunahan-%C3%A7eler-05a7a5249/">Linkedin</a>
              </li>
            </ul>
          </div>
          </div>
    </>
  )
}
