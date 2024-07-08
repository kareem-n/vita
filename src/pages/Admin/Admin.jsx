import "./Admin.css";

const Admin = () => {
  return (
    <>
      <section className="Admin" id="Admin">
        <div className="container">
          <div className="form">
            <h3 className="text-center mb-3" style={{ 'font-family': 'sans-serif' }}>Add Account</h3>
            <form action="">
              <input type="text" placeholder="organization name" required/>
              <input type="text" placeholder="username" required/>
              <input type="text" placeholder="email address" required/>
              <input type="submit" value="Add"/>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
