import { styled } from '../styles'

import { ComponentProps, ElementType } from 'react'

export const TextArea = styled('textarea', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  boxSizing: 'border-box',
  width: '100%',
  height: '6.5rem',
  padding: '0.875rem 1rem',
  backgroundColor: '$blackSoft023',
  border: '2px solid $black',
  boxShadow: '$boxShadow1Relative',
  borderRadius: '0rem $radiusAverage',
  outline: '0',
  resize: 'none',
  fontFamily: '$default',
  color: '$color1',
  textShadow: '$textShadow1',
  fontStyle: 'normal',
  fontWeight: 'lighter',
  fontSize: '1rem',
  transition: '0.3s ease-in-out',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '0.77',
    filter: 'grayscale(1)',
    transition: '0.3s ease-in-out',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$blackSoft',
    borderBottom: '2px solid $color3',
    boxShadow: '$boxShadow3Relative',
    borderRadius: '0rem',
    color: '$color3',
    transition: '0.3s ease-in-out',
  },

  '&:not(:disabled):focus': {
    backgroundColor: '$blackSoft',
    border: '2px solid transparent',
    borderBottom: '2px solid $color2',
    boxShadow: '$boxShadow2Relative',
    borderRadius: '$radiusAverage 0rem',
    color: '$color2',
    transition: '0.3s ease-in-out',
  },

  '&::-webkit-input-placeholder': {
    color: '$color1',
    textShadow: '$textShadow1',
    transition: '0.3s ease-in-out',
  },

  '&:-moz-placeholder': {
    color: '$color1',
    textShadow: '$textShadow1',
    transition: '0.3s ease-in-out',
  },

  '&::-moz-placeholder': {
    color: '$color1',
    textShadow: '$textShadow1',
    transition: '0.3s ease-in-out',
  },

  '&:-ms-input-placeholder': {
    color: '$color1',
    textShadow: '$textShadow1',
    transition: '0.3s ease-in-out',
  },

  '&:hover::-webkit-input-placeholder': {
    color: '$color3',
    textShadow: '$textShadow3',
    transition: '0.3s ease-in-out',
  },

  '&:hover:-moz-placeholder': {
    color: '$color3',
    textShadow: '$textShadow3',
    transition: '0.3s ease-in-out',
  },

  '&:hover::-moz-placeholder': {
    color: '$color3',
    textShadow: '$textShadow3',
    transition: '0.3s ease-in-out',
  },

  '&:hover:-ms-input-placeholder': {
    color: '$color3',
    textShadow: '$textShadow3',
    transition: '0.3s ease-in-out',
  },

  '&:focus::-webkit-input-placeholder': {
    color: '$color2',
    textShadow: '$textShadow2',
    transition: '0.3s ease-in-out',
  },

  '&:focus:-moz-placeholder': {
    color: '$color2',
    textShadow: '$textShadow2',
    transition: '0.3s ease-in-out',
  },

  '&:focus::-moz-placeholder': {
    color: '$color2',
    textShadow: '$textShadow2',
    transition: '0.3s ease-in-out',
  },

  '&:focus:-ms-input-placeholder': {
    color: '$color2',
    textShadow: '$textShadow2',
    transition: '0.3s ease-in-out',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  as?: ElementType
}

TextArea.displayName = 'TextArea'
