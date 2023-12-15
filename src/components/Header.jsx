import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className='border-b-2 p-4'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-[600]'>Members</h1>
        <div className='flex gap-4'>
          <div>
            <Button className="rounded-full bg-green-400 text-black hover:bg-green-600">Upgrade</Button>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}

export default Header