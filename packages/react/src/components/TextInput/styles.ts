import { styled } from './../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  boxSizing: 'border-box',
  width: '100%',
  height: '$52',
  padding: '0.875rem 1rem',
  backgroundColor: '$blackSoft023',
  border: '2px solid $black',
  boxShadow: '$boxShadow1Relative',
  borderRadius: '0rem $radiusAverage',
  transition: '0.3s ease-in-out',

  '&:has(input:disabled)': {
    cursor: 'not-allowed',
    opacity: '0.77',
    filter: 'grayscale(1)',
    pointerEvents: 'none',
    transition: '0.3s ease-in-out',
  },

  '&:has(input:hover)': {
    backgroundColor: '$blackSoft',
    borderBottom: '2px solid $color3',
    boxShadow: '$boxShadow3Relative',
    borderRadius: '0rem',
    transition: '0.3s ease-in-out',
  },

  '&:has(input:focus)': {
    backgroundColor: '$blackSoft',
    border: '2px solid transparent',
    borderBottom: '2px solid $color2',
    boxShadow: '$boxShadow2Relative',
    borderRadius: '$radiusAverage 0rem',
    transition: '0.3s ease-in-out',
  },

  '&:has(input:hover) span': {
    color: '$color3',
    transition: '0.3s ease-in-out',
  },

  '&:has(input:focus) span': {
    color: '$color2',
    transition: '0.3s ease-in-out',
  },
})

export const Prefix = styled('span', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  minWidth: 'max-content',
  paddingRight: '0.3125rem',
  fontFamily: '$default',
  color: '$color1',
  textShadow: '$textShadow1',
  fontStyle: 'normal',
  fontWeight: 'lighter',
  fontSize: '1rem',
  height: 'auto',
  transition: '0.3s ease-in-out',
})

export const Input = styled('input', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  width: '100%',
  outline: '0',
  border: '0',
  padding: '0',
  resize: 'none',
  backgroundColor: 'transparent',
  fontFamily: '$default',
  color: '$color1',
  textShadow: '$textShadow1',
  fontStyle: 'normal',
  fontWeight: 'lighter',
  fontSize: '1rem',
  height: 'auto',
  transition: '0.3s ease-in-out',

  '&:disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  '&:not(:disabled):hover': {
    color: '$color3',
    transition: '0.3s ease-in-out',
  },

  '&:not(:disabled):focus': {
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
