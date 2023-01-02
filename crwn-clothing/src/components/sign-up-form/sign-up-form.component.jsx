import { useState } from "react"

const defaultFormFields = {displayName: '', email: '', password: '', confirmPassword: ''}

export const SignUpForm = () => 
{
	const [formFields, setFormFields] = useState(defaultFormFields)
	const {displayName, email, password, confirmPassword} = formFields

	console.log(formFields);

	const handleChange = (event) =>
	{
		// name of input and the value entered by user destructured from event.target
		const { name, value } = event.target
		console.log(event);
		// The spread operator (...) is used to create a new object that contains all the properties of the formFields state variable,
		//along with the updated value for the property identified by the name parameter. 
		setFormFields({...formFields, [name]: value})
	}

    return(
        <div>
            <h1>Sign up with your email and password</h1>
			<form onsubmit={() => {}}>
				
				<label htmlFor="">Display Name</label>
				<input type='text' required onChange={handleChange} name={'displayName'} value={displayName} />

				<label htmlFor="">Email</label>
				<input type='email' onChange={handleChange} name={'email'} value={email}></input>

				<label htmlFor="">Password</label>
				<input type='password' onChange={handleChange} name={'password'} value={password}></input>

				<label htmlFor="">Confirm Password</label>
				<input type='password' onChange={handleChange} name={'confirmPassword'} value={confirmPassword}></input>

				<button type='submit'>Sign Up</button>
			</form>
        </div>
    )
}