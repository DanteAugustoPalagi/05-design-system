import { ComponentProps, ElementType } from 'react'

import { styled } from './../styles'

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  gap: '1.125rem',
  padding: '1.5rem',
  borderRadius: '$radiusHigh 0',
  backgroundColor: '$blackSoft077',
  border: '2px solid $black',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
