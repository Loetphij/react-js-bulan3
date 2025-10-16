import useToggle from "../hooks/useToggle";

export default function PasswordStatus() {
    const [showPassword, togglePassword] = useToggle(false)

    return (
        <div className="status">
            <p>
                Status Password:
                <span className="status-text">
                    {showPassword ? 'Terlihat' : 'Tersembunyi'}
                </span>
            </p>
            <button onClick={togglePassword}>Toggle Status</button>
        </div>
    )
}