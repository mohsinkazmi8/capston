import React from 'react'
import { BaseButton,GoogleSignInButton,InvertedButton } from './button.styles'


export const buttonTypeClasses = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getButton = (buttonType = buttonTypeClasses.base) =>(
  {
    [buttonTypeClasses.base] :BaseButton,
    [buttonTypeClasses.google] :GoogleSignInButton,
    [buttonTypeClasses.inverted] :InvertedButton,
  }[buttonType]
)

const Button = ({children, buttonType, ...otherprops}) => {
  let CustomButton = getButton(buttonType);
  return <CustomButton  {...otherprops}> {children}</CustomButton>
}

export default Button
