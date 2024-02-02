import React, { useState } from "react";

const Problem1 = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [collect, setCollect] = useState([]);
  const [show, setShow] = useState("all");

  const handleClick = (val) => {
    setShow(val);
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleStatusChange = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = { name, status };

    setCollect([...collect, newData]);

    setName("");
    setStatus("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form className="row gy-2 gx-3 align-items-center mb-4">
            <div className="col-auto">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                value={status}
                onChange={handleStatusChange}
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {collect
                .filter((item) => {
                  if (show === "active") {
                    return item.status === "Active";
                  } else if (show === "completed") {
                    return item.status === "Completed";
                  } else {
                    return true;
                  }
                })
                .sort((a, b) => {
                  if (a.status === "Active" && b.status !== "Active") return -1;
                  if (a.status === "Completed" && b.status !== "Completed")
                    return 1;
                  return 0;
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
