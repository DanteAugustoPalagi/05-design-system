import { styled } from '../../styles'

import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled(Avatar.Root, {
  display: 'inline-block',
  width: '$12',
  height: '$12',
  borderRadius: '$full',
  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: '$gray',
  color: '$color1',

  svg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '$6',
    height: '$6',
    color: '$color1',
  },
})
