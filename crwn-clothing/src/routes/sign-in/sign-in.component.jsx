import {signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth} from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form.component';

export const SignIn = () =>
{

  useEffect(async () =>
  {
    const response = await getRedirectResult(auth);
    console.log('response',response);

    if (response)
    {
      const userDocRef = await createUserDocumentFromAuth(response.user);

    }
  }, [])

  const logGoogleUser = async () =>
  {
    // wait for signInWithGooglePopup() saved in response
    const {user} = await signInWithGooglePopup(); 
     const userDocRef = await createUserDocumentFromAuth(user);
    console.log('SignIn component', 'user:', user, 'userDocRef:', userDocRef);  
  };


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}> Sign in with Google Redirect</button>
      <SignUpForm/>

    </div>
  );
};

