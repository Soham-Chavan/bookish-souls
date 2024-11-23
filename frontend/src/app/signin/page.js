import "./signin.css";

export default function Signin() {
    return (
        <div className="signin-container">
            <h1 className="signin-message">
                <strong>Sign In</strong> if you have already <strong>Signed Up</strong>
            </h1>
            <form className="signin-form">
                <div className="form-group">
                    <label className="label">Email:</label>
                    <input type="email" className="signin-input-field" />
                </div>
                <div className="form-group">
                    <label className="label">Password:</label>
                    <input type="password" className="signin-input-field" />
                </div>
                <button type="submit" className="signin-btn">
                    Sign In
                </button>
            </form>
        </div>
    );
}
