import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";

const WhoToFollowList = ({who}) => {
    return (
            <ul className="list-group">
                <li className="list-group-item">Who To Follow/ Ad Recommendations</li>
                {
                    who.map((w, key) => {
                        return (
                            <WhoToFollowListItem who={w} key={key}/>
                        );
                    })
                }
            </ul>
); }
export default WhoToFollowList;