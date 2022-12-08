import styles from './button.module.scss'

function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.fsButton} {...props}>
      {children}
    </button>
  )
}

export default Button
