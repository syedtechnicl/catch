import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div className="container">
        {data.map((elem,index) => {
          const { node_id, avatar_url, type, id, url, followers_url } = elem;
          return (
            <>
              <div  key={index} className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={avatar_url}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{type}</h5>
                  <p className="card-text">
                    {node_id}
                    {id} {url} {followers_url}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
