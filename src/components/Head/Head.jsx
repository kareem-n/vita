import { FirstBtn, SecondBtn } from '../Buttons/Buttons'
import { FaSearch } from "react-icons/fa";
import './Head.css'

const Head = (props) => {
  return (
    <div className="head">
      {props.children}
    </div>
  )
}

const ContentHead = () => {
  return (
    <div className="head d-flex justify-content-between align-items-center">
      <div className="btns d-flex gap-2">
        <FirstBtn>Date</FirstBtn>
        <SecondBtn>Name</SecondBtn>
      </div>
      <select defaultValue="Category">
        <option value="Category" disabled>Category</option>
      </select>
    </div>
  )
}

const RaysHead = () => {
  return (
    <div className="head d-flex justify-content-between align-items-center">
      <div className="btns d-flex gap-2">
        <FirstBtn>Date</FirstBtn>
        <SecondBtn>Name</SecondBtn>
      </div>
    </div>
  )
}

const WaitingHead = () => {
  return (
    <div className="head d-flex justify-content-start align-items-center">
      <div className="btns d-flex gap-2">
        <FirstBtn>Accessible</FirstBtn>
      </div>
    </div>
  )
}


export default Head;
export {ContentHead , WaitingHead, RaysHead}