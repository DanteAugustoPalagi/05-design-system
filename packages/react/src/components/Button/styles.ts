import { styled } from './../../styles'

export const MyBtn = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  width: 'auto',
  minWidth: '$BtnW',
  padding: '0rem 1.5rem',
  height: '$52',
  backgroundColor: '$blackSoft023',
  boxShadow: '$boxShadow1',
  border: '2px solid $black',
  borderRadius: '0 $radiusAverage',
  transition: '0.3s ease-in-out',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$blackSoft023',
      },

      secondary: {
        backgroundColor: '$blackSoft077',
      },
    },

    size: {
      md: {
        minWidth: '$BtnW',
        height: '$52',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '0.77',
    filter: 'grayscale(1)',
    transition: '0.3s ease-in-out',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$blackSoft',
    borderRadius: '$radiusAverage 0',
    border: '2px solid transparent',
    borderTop: '2px solid $color2',
    borderBottom: '2px solid $color2',
    boxShadow: '$boxShadow3',
    transition: '0.3s ease-in-out',

    '.line1Box': {
      opacity: '0',
      transition: '0.3s ease-in-out',
    },

    '.line2Box': {
      opacity: '0',
      transition: '0.3s ease-in-out',
    },

    '.line3Box': {
      opacity: '0',
      transition: '0.3s ease-in-out',
    },

    '.line4Box': {
      opacity: '0',
      transition: '0.3s ease-in-out',
    },

    '.line5Box': {
      opacity: '1',
      transition: '0.3s ease-in-out',
    },

    '.line6Box': {
      opacity: '1',
      transition: '0.3s ease-in-out',
    },

    '.line7Box': {
      opacity: '1',
      transition: '0.3s ease-in-out',
    },

    '.line8Box': {
      opacity: '1',
      transition: '0.3s ease-in-out',
    },

    div: {
      '.wrapperIconsBtn': {
        '.iconBtnPre': {
          color: '$color3',
          filter: `drop-shadow(0 0 1px var(--colors-black))
          drop-shadow(0 0 1px var(--colors-black))
          drop-shadow(0 0 2px var(--colors-shadow3))`,
          opacity: '0',
          transition: '0.3s ease-in-out',
        },

        '.iconBtn': {
          color: '$color3',
          filter: `drop-shadow(0 0 1px var(--colors-black))
          drop-shadow(0 0 1px var(--colors-black))
          drop-shadow(0 0 2px var(--colors-shadow3))`,
          opacity: '1',
          transition: '0.3s ease-in-out',
          transitionDelay: '0.7s',
        },
      },

      '.textBtn': {
        color: '$color3',
        transition: '0.3s ease-in-out',
      },
    },
  },
})

export const LinesBox = styled('div', {
  '.line1Box': {
    position: 'absolute',
    width: '77%',
    height: '1px',
    left: 'calc(-2px - 1px - 0.5rem)',
    top: 'calc(-2px - 1px - 0.5rem)',
    backgroundImage: `linear-gradient(90deg, 
    var(--colors-color1) 50%,  
    transparent)`,
    opacity: '1',
    filter: `drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 2px var(--colors-shadow1))`,
    transition: '0.3s ease-in-out',
  },

  '.line2Box': {
    position: 'absolute',
    width: '38.5%',
    height: '1px',
    left: '0.5rem',
    top: '0.5rem',
    backgroundImage: `linear-gradient(90deg, 
    var(--colors-color1) 50%, 
    transparent)`,
    opacity: '1',
    filter: `drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 2px var(--colors-shadow1))`,
    transition: '0.3s ease-in-out',
  },

  '.line3Box': {
    position: 'absolute',
    width: '77%',
    height: '1px',
    right: 'calc(-2px - 1px - 0.5rem)',
    bottom: 'calc(-2px - 1px - 0.5rem)',
    backgroundImage: `linear-gradient(90deg, 
    transparent,  
    var(--colors-color1) 50%)`,
    opacity: '1',
    filter: `drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 2px var(--colors-shadow1))`,
    transition: '0.3s ease-in-out',
  },

  '.line4Box': {
    position: 'absolute',
    width: '38.5%',
    height: '1px',
    right: '0.5rem',
    bottom: '0.5rem',
    backgroundImage: `linear-gradient(90deg, 
    transparent,  
    var(--colors-color1) 50%)`,
    opacity: '1',
    filter: `drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 2px var(--colors-shadow1))`,
    transition: '0.3s ease-in-out',
  },

  '.line5Box': {
    position: 'absolute',
    width: '77%',
    height: '1px',
    left: 'calc(-2px - 1px - 0.5rem)',
    bottom: 'calc(-2px - 1px - 0.5rem)',
    backgroundImage: `linear-gradient(90deg, 
    var(--colors-color3) 50%,  
    transparent)`,
    opacity: '0',
    filter: `drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 2px var(--colors-shadow3))`,
    transition: '0.3s ease-in-out',
  },

  '.line6Box': {
    position: 'absolute',
    width: '38.5%',
    height: '1px',
    left: '0.5rem',
    bottom: '0.5rem',
    backgroundImage: `linear-gradient(90deg, 
    var(--colors-color3) 50%,  
    transparent)`,
    opacity: '0',
    filter: `drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 2px var(--colors-shadow3))`,
    transition: '0.3s ease-in-out',
  },

  '.line7Box': {
    position: 'absolute',
    width: '77%',
    height: '1px',
    right: 'calc(-2px - 1px - 0.5rem)',
    top: 'calc(-2px - 1px - 0.5rem)',
    backgroundImage: `linear-gradient(90deg, 
    transparent,  
    var(--colors-color3) 50%)`,
    opacity: '0',
    filter: `drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 2px var(--colors-shadow3))`,
    transition: '0.3s ease-in-out',
  },

  '.line8Box': {
    position: 'absolute',
    width: '38.5%',
    height: '1px',
    right: '0.5rem',
    top: '0.5rem',
    backgroundImage: `linear-gradient(90deg, 
    transparent,  
    var(--colors-color3) 50%)`,
    opacity: '0',
    filter: `drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 1px var(--colors-black)) 
    drop-shadow(0px 0px 2px var(--colors-shadow3))`,
    transition: '0.3s ease-in-out',
  },
})

export const IconAndTextBtn = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  gap: '0.5rem',
  width: '100%',
  height: '1.375rem',

  '.wrapperIconsBtn': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    width: '1.375rem',
    height: '1.375rem',

    '.iconBtnPre': {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      color: '$color1',
      width: '1.375rem',
      height: '1.375rem',
      filter: `drop-shadow(0 0 1px var(--colors-black)) 
      drop-shadow(0 0 1px var(--colors-black)) 
      drop-shadow(0 0 2px var(--colors-shadow1))`,
      opacity: 1,
      transition: '0.3s ease-in-out',
    },

    '.iconBtn': {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      color: '$color1',
      width: '1.375rem',
      height: '1.375rem',
      filter: `drop-shadow(0 0 1px var(--colors-black)) 
      drop-shadow(0 0 1px var(--colors-black)) 
      drop-shadow(0 0 2px var(--colors-shadow1))`,
      opacity: 0,
      transition: '0.3s ease-in-out',
    },
  },

  '.textBtn': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '$code',
    width: 'max-content',
    color: '$color1',
    fontSize: '1.375rem',
    height: '1.375rem',
    fontStyle: 'italic',
    fontWeight: 'lighter',
    letterSpacing: '.125rem',
    transition: '0.3s ease-in-out',
  },
})
