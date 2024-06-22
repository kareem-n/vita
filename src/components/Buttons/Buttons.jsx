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
      style={{ border:'1px solid #fff', color:'#fff' }}
      value={props.children}/>
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