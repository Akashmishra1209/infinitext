import React, { useEffect, useState } from 'react'
import Templatecard from './TemplateCard';
import { Templates } from '@/app/(data)/Templates';

export interface FORM{
  label:string,
  field:string,
  name:string,
  required?:boolean
}

export interface TEMPLATE {
  name: string,
  desc: string,
  icon: string,
  category: string,
  slug: string,
  aiPrompt: string,
  form?: FORM[]
}

export default function Templatsection({ userSearchInput }: { userSearchInput: string }) {
  const [templateList, setTemplateList] = useState(Templates)
  useEffect(() => {
    if (userSearchInput) {
      const filterData = Templates.filter((tool) =>
        tool.name.toLowerCase().includes(userSearchInput.toLowerCase())
      )
      setTemplateList(filterData)
    }
    else {
      setTemplateList(Templates)
    }
  }, [userSearchInput])

  return (
    <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {templateList.map((elem:TEMPLATE, index:number) => (
        <Templatecard key={index} {...elem} />
      ))}
    </div>
  )
}