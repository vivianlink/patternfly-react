import { HTMLProps } from 'react';
import { OneOf } from '../../typeUtils';

export const ButtonVariant: {
  primary: 'primary';
  secondary: 'secondary';
  tertiary: 'tertiary';
  danger: 'danger';
  link: 'link';
  action: 'action';
};

export const ButtonType: {
  button: 'button';
  submit: 'submit';
};

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  isActive?: boolean;
  isBlock?: boolean;
  isDisabled?: boolean;
  isFocus?: boolean;
  isHover?: boolean;
  variant?: OneOf<typeof ButtonVariant, keyof typeof ButtonVariant>;
  type?: OneOf<typeof ButtonType, keyof typeof ButtonType>;
}

declare const Button: React.SFC<ButtonProps>;

export default Button;
