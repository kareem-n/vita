import { Link } from 'react-router-dom'
import './Buttons.css'

const LoginButton = (props) => {
  return (
    <Link to="/login" className='button login' style={{ color:'#000' }}>{props.children}</Link>
  )
}

const RegisterButton = (props) => {
  return (
      <Link to="/register" className='button register' style={{ color:'#fff' }}>{props.children}</Link>
  )
}

const InputSubmit = (props) => {
  return (
    <input type="submit" className='button InputSubmit'
      value={props.children}/>
  )
}

const FirstBtn = (props) =>{
  return (
    <Link to={props.href} className='firstBtn'>{props.children}</Link>
  )
}

const SecondBtn = (props) =>{
  return (
    <Link to={props.href} className='secondBtn'>{props.children}</Link>
  )
}


export default LoginButton;
export {RegisterButton , InputSubmit , FirstBtn , SecondBtn}