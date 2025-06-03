"use client"
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

interface FormElement {
  label: string;
  field: string;
  name: string;
}

interface FormSectionProps {
  selectedTemplate: {
    icon: string;
    name: string;
    desc: string;
    form: FormElement[];
  };
  userFormInput: (data: Record<string, string>) => void;
  loading: boolean;
}

export default function Formsection({ selectedTemplate, userFormInput, loading }: FormSectionProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    userFormInput(formData)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    console.log(selectedTemplate)
  }, [selectedTemplate])

  if (!selectedTemplate) {
    return null
  }

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
      <Image src={selectedTemplate.icon} alt="Icon" width={70} height={70} />
      <h2 className='font-bold text-2xl text-primary mb-2'>{selectedTemplate.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate.desc}</p>
      <form onSubmit={onSubmitHandler} className='mt-6'>
        {
          selectedTemplate?.form.map((elem, index) => (
            <div key={index} className="my-2 flex flex-col gap-2 mb-2">
              <label htmlFor={elem.name} className='font-bold'>{elem.label}</label>
              {elem.field === "input" ? (
                <Input name={elem.name} required={true} onChange={handleChange} />
              ) : elem.field === "textarea" ? (
                <Textarea name={elem.name} required={true} onChange={handleChange} />
              ) : null}
            </div>
          ))
        }
        <Button className="w-full py-6" type="submit" disabled={loading}>
          {loading && <Loader2Icon className='animate-spin'/>}
          Generate Content
        </Button>
      </form>
    </div>
  )
}