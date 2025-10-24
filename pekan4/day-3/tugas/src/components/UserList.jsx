import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../features/usersSlice';

function UserList() {
  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div className="card-container">
      <h2 className="card-title">Daftar Pengguna</h2>

      {status === 'loading' && <p className="loading-text">Memuat data...</p>}
      {status === 'failed' && <p className="error-text">! {error} !</p>}

      {status === 'succeeded' && (
        <ul className="list">
          {users.map((user) => (
            <li key={user.id} className="list-item">
              <strong>{user.name}</strong>
              <span className="list-sub">{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
