'use client'
import { useSession } from 'next-auth/react';
// import GoogleSignInButton from '../components/GoogleSignInButton';

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <h1>Welcome, {session.user.username}!</h1>
          <p>Email: {session.user.email}</p>
        </>
      ) : (
        <p>Please log in to access this page.</p>
      )}

      {/* <h2>Google Sign-In</h2> */}
      {/* <GoogleSignInButton /> */}
    </div>
  );
};

export default Dashboard;