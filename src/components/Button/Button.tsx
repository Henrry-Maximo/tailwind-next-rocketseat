interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  title,
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm"
    >
      {title}
    </button>
  )
}
