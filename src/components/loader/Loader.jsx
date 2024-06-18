import { Bars } from "react-loader-spinner"

function Loader() {
    return (
        <div
            style={{
                backgroundColor: 'rgba(0,0,0,0.5)'
            }} className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
            <Bars width={100} height={100} color="#fff" />
        </div>
    )
}

export default Loader