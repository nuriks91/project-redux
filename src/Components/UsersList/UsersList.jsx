import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUser,  createUsers } from '../../store/reducers/userReducer';
import classes from './UsersList.module.css';


import ModalWindow from '../ModalWindow/ModalWindow';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  const [isModalOpen, setModalOpen] = useState(false);

  const createUser = (user) => {
    dispatch(createUsers(user));
    setModalOpen(false);
  };

 

  const fetchData = async () => {
    try {
      await dispatch(fetchAllUser());
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <h1>Students List</h1>
        <div className={classes.buton}>
        </div>
      </div>


      {!isModalOpen && (
        <button className={classes.btn} onClick={() => setModalOpen(true)}>
          ADD NEW STUDENT
        </button>
      )}

      {isModalOpen && <ModalWindow onSubmit={createUser} />}

      <hr />

      {users && users.length > 0 && (
        <table className={classes.cnt}>
          <thead className={classes.cantainer}>
            <tr className={classes.nav}>
              <th className={classes.names}>Name</th>
              <th className={classes.names}>Email</th>
              <th className={classes.names}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className={classes.users}>
                <td className={classes.name}>{user.name}</td>
                <td className={classes.name}>{user.email}</td>
                <td className={classes.name}>{user.phone}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && users.length === 0 && <p>Nobody on your list!!!</p>}
    </div>
  );
};

export default UserList;
