import React from 'react'
import { useSession } from 'next-auth/client'
import Image from 'next/image'

const UserCard = () => {
  const [session] = useSession()

  return (
    <div className="flex items-center mb-10">
      {session?.user.image ? (
        <Image
          src={session.user.image as string}
          width={48}
          height={48}
          className="rounded-full"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-blue-500" />
      )}

      <div className="ml-4">
        <p className="font-bold text-gray-800">{session?.user.name || ''}</p>
        <p className="text-sm text-gray-600">{session?.user.email || ''}</p>
      </div>
    </div>
  )
}

export default UserCard
