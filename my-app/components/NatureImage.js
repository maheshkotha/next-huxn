import Image from 'next/image'
import React from 'react'

const NatureImage = () => {
  return (
    <div>
      <Image src={"https://images.unsplash.com/photo-1659363093363-e1c9882cf4f7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        alt="nature image"
        width={600}
        height={400}
      />
    </div>
  )
}

export default NatureImage