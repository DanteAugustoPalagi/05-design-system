import { styled } from './../../styles'

import { Text } from './../Text'

export const MultiStepContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  gap: '1.125rem',
  width: '100%',
})

export const Label = styled(Text, {
  lineHeight: 'normal',
  height: '$4',

  defaultVariants: {
    size: 'md',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gap: '$3',
  width: '100%',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
})

export const Step = styled('div', {
  height: '5px',
  borderRadius: '2.5px',
  backgroundColor: '$black',

  variants: {
    active: {
      true: {
        backgroundImage: 'linear-gradient(90deg, $color1, $color3)',
        boxShadow: '$boxShadow2Min',
      },
    },
  },
})
