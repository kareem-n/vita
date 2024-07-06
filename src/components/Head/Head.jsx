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

const ContentHead = ({ items, getData }) => {
  return (
    <div className="head d-flex justify-content-between align-items-center">
      {/* <div className="btns d-flex gap-2">
        <FirstBtn>Date</FirstBtn>
        <SecondBtn>Name</SecondBtn>
      </div> */}
      <select onChange={(e) => {
        getData(e.target.value)
      }} defaultValue="Category">
        {
          items.map((item, key) => <option key={key} value={item}>{item}</option>
          )
        }
      </select>
    </div>
  )
}

const RaysHead = (props) => {
  return (
    <div className="head d-flex justify-content-between align-items-center">
      <div className="btns d-flex gap-2">
        {props.children}
        {/* <FirstBtn></FirstBtn>
        <SecondBtn>Name</SecondBtn> */}
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
export { ContentHead, WaitingHead, RaysHead }