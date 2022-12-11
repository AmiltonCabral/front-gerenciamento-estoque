import styles from './select.module.scss'

function Select({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={styles.fsSelect} {...props}>
      {children}
    </select>
  )
}

export default Select
