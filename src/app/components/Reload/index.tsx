import { useEffect } from 'react';
import { useAppDispatch } from '../../../../store';
import { login } from '../../../../slices/auth.slice';

export default function Reload() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const user = localStorage.getItem('user');
    const accessToken = localStorage.getItem('access_token');

    if (user && accessToken) {
      dispatch(login({ user: JSON.parse(user), accessToken: accessToken }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}
