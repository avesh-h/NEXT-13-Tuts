import React from 'react'
import Contactbutton from './common/button'


// THis is page title of html we can change for individual page also just have to add metadata object here
export const metadata = {
  title: 'Contact Avesh',
  description: 'Generated by create next app',
  keywords:'nextjs'
}

const Contactpage = () => {
  return (
    <div>
      <h1>This is contact page</h1>
      <Contactbutton />
    </div>
  )
}

export default Contactpage
