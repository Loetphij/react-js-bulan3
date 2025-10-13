import Profile from './Profile';

function Toolbar({ user }) {
  return (
    <div>
      <Profile user={user} /> {/* Meneruskan user ke Profile */}
    </div>
  );
}

export default Toolbar;
