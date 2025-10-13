import Toolbar from "./toolbar";

function Parent() {
  const user = { name: 'Alice', theme: 'dark' };
  return <Toolbar user={user} />;
}

export default Parent;
