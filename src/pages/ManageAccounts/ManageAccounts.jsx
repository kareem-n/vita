import './ManageAccounts.css';
import photo from '../../assets/images/Mask group.png'
const ManageAccounts = () => {
  return (
    <div className='ManageAccounts'>
      <div className="container">
        <div className="content d-flex justify-content-between align-items-start">
          <div className="addAccount">
            <form action="">
              <h3 className='m-0 mb-2'>Add Employee :</h3>
              <div className="add">
                <input type="text" required placeholder='employee username'/>
                <button className='btn'>Add</button>
              </div>
            </form>
          </div>
          <div className="employess">
            <h4 className='text-center'>Employees</h4>
            <div className="employe">
              <div className="date">
                <p>12-04 <br />
                2019</p>
              </div>
              <div className="image">
                <img src={photo} alt="" />
              </div>
              <div className="infoEmp">
                <h5>Michael Jackson</h5>
                <p>@michael</p>
              </div>
              <button className='btn' type='button'>Remove</button>
            </div>
            <div className="employe">
              <div className="date">
                <p>12-04 <br />
                2019</p>
              </div>
              <div className="image">
                <img src={photo} alt="" />
              </div>
              <div className="infoEmp">
                <h5>Michael Jackson</h5>
                <p>@michael</p>
              </div>
              <button className='btn' type='button'>Remove</button>
            </div>
            <div className="employe">
              <div className="date">
                <p>12-04 <br />
                2019</p>
              </div>
              <div className="image">
                <img src={photo} alt="" />
              </div>
              <div className="infoEmp">
                <h5>Michael Jackson</h5>
                <p>@michael</p>
              </div>
              <button className='btn' type='button'>Remove</button>
            </div>
            <div className="employe">
              <div className="date">
                <p>12-04 <br />
                2019</p>
              </div>
              <div className="image">
                <img src={photo} alt="" />
              </div>
              <div className="infoEmp">
                <h5>Michael Jackson</h5>
                <p>@michael</p>
              </div>
              <button className='btn' type='button'>Remove</button>
            </div>
            <div className="employe">
              <div className="date">
                <p>12-04 <br />
                2019</p>
              </div>
              <div className="image">
                <img src={photo} alt="" />
              </div>
              <div className="infoEmp">
                <h5>Michael Jackson</h5>
                <p>@michael</p>
              </div>
              <button className='btn' type='button'>Remove</button>
            </div>
            <div className="employe">
              <div className="date">
                <p>12-04 <br />
                2019</p>
              </div>
              <div className="image">
                <img src={photo} alt="" />
              </div>
              <div className="infoEmp">
                <h5>Michael Jackson</h5>
                <p>@michael</p>
              </div>
              <button className='btn' type='button'>Remove</button>
            </div>
            <div className="employe">
              <div className="date">
                <p>12-04 <br />
                2019</p>
              </div>
              <div className="image">
                <img src={photo} alt="" />
              </div>
              <div className="infoEmp">
                <h5>Michael Jackson</h5>
                <p>@michael</p>
              </div>
              <button className='btn' type='button'>Remove</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageAccounts