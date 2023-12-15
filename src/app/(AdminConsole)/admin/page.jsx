import { DataTable } from '@/app/payments/data-table'
import Header from '@/components/Header'
import React from 'react'
import { columns } from '@/app/payments/columns'
import { Input } from '@/components/ui/input'

const dummyData = [
  {
    number: 7,
    text: 'Members'
  },
  {
    number: 1,
    text: 'Account owners'
  },
  {
    number: 0,
    text: 'Pending invites'
  },
]

const payments = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
];

export default function page() {
  
  return (
    <main className='flex-1 flex flex-col'>
      <Header/>
      <section className='flex justify-center items-center p-8 px-10'>
        <div className='flex justify-center items-center w-full'>
          {dummyData.map((data, index) => (
            <div key={index} className=' relative flex justify-center items-center'>
              <div className='w-full flex flex-col items-center justify-center px-20'>
                <h1 className='text-[40px]'>{data.number}</h1>
                <p className='text-xs text-gray-500'>{data.text}</p>
              </div>
              <span className={`block w-[1px] h-10 ${index === 2 ? '' : 'bg-slate-200'} `}></span>
            </div>
          ))}
        </div>
      </section>
      <section className='p-4 flex flex-col gap-2'>
        <div className='w-fit '>
          <Input placeholder="Search project name" className="bg-slate-50"/>
        </div>
        <DataTable columns={columns} data={'dataa'} />
      </section>
    </main>
  )
}

