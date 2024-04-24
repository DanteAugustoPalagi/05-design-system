import { styled, keyframes } from '../../styles'

import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  lineHeight: 0,
  boxSizing: 'border-box',
  cursor: 'pointer',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$6',
  height: '$6',
  backgroundColor: '$blackSoft023',
  border: '2px solid $black',
  boxShadow: '$boxShadow1Relative',
  borderRadius: '0rem $xs',
  transition: '0.3s ease-in-out',

  '&[data-state="checked"]': {
    backgroundColor: '$blackSoft',
    border: '2px solid $color2',
    boxShadow: '$boxShadow2Relative',
    borderRadius: '$xs 0rem',
    transition: '0.3s ease-in-out',

    svg: {
      color: '$color2',
      filter: `drop-shadow(0 0 1px var(--colors-black))
      drop-shadow(0 0 1px var(--colors-black))
      drop-shadow(0 0 2px var(--colors-shadow2))`,
      opacity: '1',
      transition: '0.3s ease-in-out',
    },
  },

  '&:hover': {
    backgroundColor: '$blackSoft',
    border: '2px solid $color3',
    boxShadow: '$boxShadow3Relative',
    borderRadius: '0rem',
    transition: '0.3s ease-in-out',

    svg: {
      color: '$color3',
      filter: `drop-shadow(0 0 1px var(--colors-black))
      drop-shadow(0 0 1px var(--colors-black))
      drop-shadow(0 0 2px var(--colors-shadow3))`,
      transition: '0.3s ease-in-out',
    },
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0%)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0%)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$4',
  height: '$4',
  color: '$color1',
  filter: `drop-shadow(0 0 1px var(--colors-black)) 
  drop-shadow(0 0 1px var(--colors-black)) 
  drop-shadow(0 0 2px var(--colors-shadow1))`,
  opacity: 0,
  transition: '0.3s ease-in-out',

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 0.3s ease-out`,
  },

  '&[data-state="checked"]': {
    animation: `${slideIn} 0.3s ease-out`,
  },
})
