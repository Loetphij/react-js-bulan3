import useToggle from "../hooks/useToggle";

export default function PasswordInput() {
    const [showPassword, togglePassword] = useToggle(false)

    return (
        <div className="container">
            <label>Password:</label>
            <div className="input">
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="Masukkan Password . . ."    
                />
                <button onClick={togglePassword}>
                    {showPassword ? 'Sembunyikan' : 'Lihat'}
                </button>
            </div>
        </div>
    )
}