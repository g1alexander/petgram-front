import { useEffect, useState } from 'react';
import { getUserForUserName } from '@services/User';
import { User } from '../models/User';

export const useSearchUser = (nickName: string) => {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getUserNamefromDB = async () => {
    const getUseruserbyName = nickName
      ? await getUserForUserName(nickName)
      : null;
    nickName && setLoading(false);

    if (getUseruserbyName?.name) {
      setUser(getUseruserbyName as User);
    } else {
      setUser(null);
    }

    if (getUseruserbyName?.message) {
      setError(getUseruserbyName.message);
    }
  };

  useEffect(() => {
    getUserNamefromDB();
  }, [nickName]);

  return { user, loading, error };
};
