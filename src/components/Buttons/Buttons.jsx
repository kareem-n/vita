import { Link } from 'react-router-dom'
import './Buttons.css'

const LoginButton = (props) => {
  return (
    <div className="button login">
      <Link to="/login">{props.children}</Link>
    </div>
  )
}

const RegisterButton = (props) => {
  return (
    <div className="button register">
      <Link to="/register">{props.children}</Link>
    </div>
  )
}

const InputSubmit = (props) => {
  return (
    <div className="button InputSubmit" onClick={props.hide}>
      <input type="submit" value={props.children}/>
    </div>
  )
}

const FirstBtn = (props) =>{
  return (
    <button type='button' className='firstBtn'>{props.children}</button>
  )
}

const SecondBtn = (props) =>{
  return (
    <button type='button' className='secondBtn'>{props.children}</button>
  )
}


export default LoginButton;
export {RegisterButton , InputSubmit , FirstBtn , SecondBtn}