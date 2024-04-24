import { ComponentProps, ElementType } from 'react'

import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

import { User } from 'phosphor-react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  as?: ElementType
}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={700}>
        <User weight="duotone" />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
