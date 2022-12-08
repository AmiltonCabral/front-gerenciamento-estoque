import styles from './input.module.scss'

function Input({
  children,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={styles.fsInput} {...props}>
      {children}
    </input>
  )
}

export default Input
