import { ComponentProps, ElementType } from 'react'

import { MyBtn, LinesBox, IconAndTextBtn } from './styles'

export interface ButtonProps extends ComponentProps<typeof IconAndTextBtn> {
  as?: ElementType
}

export function Button(props: ButtonProps) {
  return (
    <MyBtn {...props}>
      <LinesBox>
        <div className="line1Box"></div>

        <div className="line2Box"></div>

        <div className="line3Box"></div>

        <div className="line4Box"></div>

        <div className="line5Box"></div>

        <div className="line6Box"></div>

        <div className="line7Box"></div>

        <div className="line8Box"></div>
      </LinesBox>

      <IconAndTextBtn {...props} />
    </MyBtn>
  )
}

Button.displayName = 'Button'
