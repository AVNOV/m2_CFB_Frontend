import { useEffect } from 'react';
import { useAppDispatch } from '../../../../store';
import { login } from '../../../../slices/auth.slice';

export default function Refresh() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')!);
    const access_token = localStorage.getItem('access_token')!;
    if (user && access_token) {
      dispatch(login({ user: user, access_token: access_token }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
