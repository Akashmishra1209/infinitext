"use client"
import { FileClock, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import UsageTrack from './UsageTrack'

export default function Sidenav() {
  const path = usePathname()
  const menus = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard"
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history"
    },
    {
      name: "Billing",
      icon: Wallet,
      path: "/dashboard/billing"
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings"
    },
  ]

  return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
        <Image src="/logo.svg" width={120} height={100} alt='Logo' />
      </div>
      <hr className='my-6 border' />
      <div className='mt-3'>
        {menus.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path === menu.path && "bg-primary text-white"}`}>
              <menu.icon className='h-6 w-6' />
              <h2 className='text-lg'>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className='absolute bottom-10 left-0 w-full'>
        <UsageTrack />
      </div>
    </div>
  )
}