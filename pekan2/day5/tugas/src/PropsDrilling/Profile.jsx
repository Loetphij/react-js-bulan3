import Avatar from './Avatar';
import ThemeDisplay from './ThemeDisplay';

function Profile({ user }) {
return (
    <div>
        <p style={{textAlign: "left"}}>2. Props Drilling</p>
        <Avatar user={user} />
        <ThemeDisplay theme={user.theme} />
    </div>
);
}

export default Profile;
