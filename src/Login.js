import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button';
import {auth, provider} from './Firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            // console.log(result.user);
        })
        .catch((error) => alert(error.message))
    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"/>
                <img src="https://marcas-logos.net/wp-content/uploads/2020/01/Facebook-Logo-1.png"/>
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
