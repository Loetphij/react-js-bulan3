function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      {unreadMessages.length > 0 &&
        <h2>
          Anda memiliki {unreadMessages.length} pesan belum dibaca.
        </h2>
      }
    </div>
  );
}

function App() {
  const name = "GanjarSlowLiving"
  const isLoggedIn = true;
  
  const messages = ['React', 'Re: React', 'Re:Re: React'];

  return (
    <>
      <div id="login">
        {isLoggedIn ? (
          <h1>Selamat datang kembali, {name}!</h1>
        ) : (
          <h1>Silakan login terlebih dahulu.</h1>
        )}
      </div>
      <div>
        <Mailbox unreadMessages={messages} />
        <Mailbox unreadMessages={[]} />
      </div>
    </>
    
  );
}
export default App

