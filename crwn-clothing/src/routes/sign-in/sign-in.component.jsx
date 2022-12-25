import {signInWithGooglePopup, createUserDocumentFromAuth,} from '../../utils/firebase/firebase.utils';

export const SignIn = () =>
{
  const logGoogleUser = async () =>
  {
    // wait for signInWithGooglePopup() saved in response
    const {user} = await signInWithGooglePopup(); 
     const userDocRef = await createUserDocumentFromAuth(user);
    console.log('SignIn component', 'user:', user, 'userDocRef:', userDocRef);
  };
  return (
    <div>
      <h1>Sign In Page</h1>wait for 
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

