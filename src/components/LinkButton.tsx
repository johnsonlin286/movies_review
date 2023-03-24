import { FC, HTMLProps, ReactNode } from "react";
import Link, { LinkProps } from "next/link"

type Props = {
  color?: 'danger' | 'black',
  href?: string,
  className?: string,
  children: ReactNode
}

const LinkButton: FC<Omit<LinkProps & HTMLProps<HTMLAnchorElement>, "href"> & Props> = ({ color, href = "", className, children }) => {
  return (
    <Link
      className={`btn ${color === 'danger' ? 'bg-danger' : color === 'black' ? 'bg-black' : ''} text-sm text-white rounded-2xl py-[6px] px-4 ${className}`}
      href={href}
    >
      {children}
    </Link>
  )
}

LinkButton.defaultProps = {
  color: 'danger',
  className: ''
}

export default LinkButton;