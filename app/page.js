import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1> <Link href={'/ecommerce'} className="nav-link">Ecommerce</Link> </h1>
    </div>
  )
}

export default page
