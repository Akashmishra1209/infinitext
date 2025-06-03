"use client"
import React, { useState } from 'react'
import Searchsection from './_components/Searchsection'
import Templatsection from './_components/Templatesection'

export default function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>('')
  return (
    <div>
      <Searchsection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
      <Templatsection userSearchInput={userSearchInput}/>
    </div>
  )
}