import { ComponentProps, ElementType } from 'react'

import { CheckboxContainer, CheckboxIndicator } from './styles'

import { Check } from 'phosphor-react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  as?: ElementType
}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
