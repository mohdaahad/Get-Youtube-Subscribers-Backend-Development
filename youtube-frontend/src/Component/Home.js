import React, {  useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {

//  Use state for handle response of API

  const [subs, setSubs] = useState([]);
  const [names, setNames] = useState([]);
  const [ids, setIds] = useState([]);
  const [id, setId] = useState([]);

// Fetching Data from API

  const allSubData = async () => {
    let { data } = await axios.get("https://youtube-backend-buds.onrender.com/subscribers");
    setSubs(data);
  };

  const allSubNames = async () => {
    let { data } = await axios.get("https://youtube-backend-buds.onrender.com/subscribers/names");
    setNames(data);
  };

  const allSubIds = async () => {
    let { data } = await axios.get(`https://youtube-backend-buds.onrender.com/subscribers/${id}`);
    setIds(data);
  };



  

//  Main Page
 
  return (
    <div>

    
      <div className="container-fluid header px-2 py-3">
      <nav className="navbar navbar-dark bg-success">
        <a className="navbar-brand" href="/">
        <span className="navbar-toggler-icon"></span>
        <i className="fa-brands fa-youtube px-1"></i>
        YouTube
        </a>
        </nav>
      </div>
      

      {/*   all subscribers  data */}
      
      <div className="container text-center text-light">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={allSubData}
            >
              All Subscribers Data
            </button>
            {subs.map((item) => (
              <div
                className="card  m-3 p-1"
                style={{ width: "22rem" }}
                key={item._id}
              >
                <p className="text-bg-danger text-start p-2">
                 
                  
                  Name : {item.name}
                  <br />
                  Subscribed Channel : {item.subscribedChannel}
                  <br />
                  Subscribed Date : {item.subscribedDate}
                </p>
              </div>
            ))}
          </div>



          {/*  Subscribers name and channel */}

          <div className="col">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={allSubNames}
            >
              Subscriber Name & Channel
            </button>
            {names.map((item) => (
              <div
                className="card  m-3 p-1"
                style={{ width: "19.5rem" }}
                key={item.name}
              >
                <p className="text-bg-success text-start p-2">
                  Name : {item.name}
                  <br />
                  Subscribed Channel : {item.subscribedChannel}
                </p>
              </div>
            ))}
          </div>



          {/*  searching ID */}

          <div className="col">
            <input
              type="text"
              className="mx-2 py-1"
              placeholder="Enter ID"
              aria-label="id"
              value={id}
              onChange={(event) => setId(event.target.value)}
              style={{heigth:"1rem",width:"15rem",borderRadius:"0.5rem",borderColor:"rgb(42, 45, 48)"}}
            />
            <button type="submit" className="btn btn-outline-warning" onClick={allSubIds}>
              Search
            </button>
            {ids.map((item) => (
              <div
                className="card  m-3 p-1"
                style={{ width: "19rem" }}
                key={item.subscribedChannel}
              >
                <p className="text-bg-info text-start p-2">
                  ID : {item._id}
                  <br />
                  Name : {item.name}
                  <br />
                  Subscribed Channel : {item.subscribedChannel}
                  <br />
                  Subscribed Date : {item.subscribedDate}
                  
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
