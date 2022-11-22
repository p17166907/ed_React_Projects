import {signInWithGooglePopup, createUserProfileDocument,} from '../../utils/firebase/firebase.utils';

export const SignIn = () =>
{
  const logGoogleUser = async () =>
  {
    // wait for signInWithGooglePopup() saved in response
    const response = await signInWithGooglePopup(); 
    createUserProfileDocument(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>wait for 
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

