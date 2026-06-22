import styles from './Button.module.scss'

const Button = (props) => {
  const {
    className = '',
    type = 'button',
    children,
    onClick,
    isDisabled,
    title
  } = props;

  return (
    <button
    className={`${styles.button} ${className}`}
    type={type}
    disabled={isDisabled}
    onClick={onClick}
    title={title}
    >
      {children}
      </button>
  )
}

export default Button