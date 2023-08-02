import React from 'react'
import Image from 'next/image'

import type { User } from 'firebase/auth'

interface IUserAvatarProps {
  user: User
}

function UserAvatar(props: IUserAvatarProps): JSX.Element {
  return (
    <section>
      <Image
        src={props.user.photoURL as string}
        alt={props.user.displayName as string}
        width={32}
        height={32}
        className="object-cover rounded-[100%] object-center aspect-square"
      />
    </section>
  )
}

export default UserAvatar
