import './FolderInfo.css'
import folder from '../../assets/images/folder.png'
import { Link } from 'react-router-dom'

const FolderInfo = (props) => {
  return (
    <Link to={props.href}>
      <img src={folder} alt="" />
      <h3>{props.children}</h3>
    </Link>
  )
}

export default FolderInfo