import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'; // Import your Firebase authentication instance
import LandingPage from './Homepage';
import LoginPage from './LoginPage';

const IndexPage = () => {
  const [user, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if ( !user) {
      router.push('/LoginPage'); // Redirect to the login page if the user is not logged in
    }
  }, [user, router]);

  

  return <LoginPage />;
};

export default IndexPage;
