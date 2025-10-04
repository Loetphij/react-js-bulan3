import styles from "./Buttons.module.css"

function Buttons({ type = "login", children, onClick }) {
    const buttonClass = `${styles.button} ${type === 'register' ? styles.register : styles.login}`.trim()

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    )
}

export default Buttons