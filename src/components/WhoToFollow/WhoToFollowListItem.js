import React from "react";

const WhoToFollowListItem = (
    {
        who
    }) => {
    return (
      <div>
          <li className="list-group-item">
              <div className="row">
                  <div className="col-2">
                      <img src={who.avatarIcon} width={"48px"} height={"48px"} className="rounded-circle float-start"/></div>
                  <div className="col-xxl-6 col-lg-6 text-nowrap ms-1">
                      <label>{who.userName}</label>
                      <i className="fas fa-check-circle fa-xs"/>
                      <br></br>
                      <label>{who.handle}</label>
                  </div>
                  <div className="col-xxl-3 col-lg-3 ms-0">
                      <button className="btn btn-primary override-bs1 align-content-between">Follow</button>
                  </div>
              </div>
          </li>
      </div>
    );
}
export default WhoToFollowListItem;