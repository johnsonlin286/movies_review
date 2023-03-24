import { ReactNode } from "react";

type Props = {
  color?: 'danger' | 'black',
  className?: string,
  onClick?: () => void,
  children: ReactNode
}

const Button: React.FC<Props> = ({ color, className, onClick, children }) => {
  return (
    <button
      className={`btn ${color === 'danger' ? 'bg-danger' : color === 'black' ? 'bg-black' : ''} text-sm text-white rounded-2xl py-[6px] px-4 ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'danger',
  className: ''
}

export default Button;