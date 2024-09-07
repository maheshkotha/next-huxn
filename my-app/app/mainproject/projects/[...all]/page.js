"use client"
import React from 'react'

const CatchAllRoute = ({params}) => {
  console.log(params)
  return (
    <div>
      <h1>All routes</h1>
      <p>{params.all}</p>
      {
        params.all.map((p) => {
          return <li key={p}>{p}</li>
        })
      }
    </div>
  )
}

export default CatchAllRoute