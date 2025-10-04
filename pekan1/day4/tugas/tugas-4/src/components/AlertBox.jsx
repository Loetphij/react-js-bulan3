import styles from "./AlertBox.module.css"

function AlertBox({ type, children }) {
    const alertClass = `${styles.alert} ${styles[type] || ''}`

    return (
        <div className={alertClass}>
            {children}
        </div>  
    )
    
}

export default AlertBox