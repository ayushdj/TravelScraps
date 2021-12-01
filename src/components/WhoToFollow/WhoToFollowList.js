import WhoToFollowListItem from "./WhoToFollowListItem";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllWho} from "./service";

const selectAllWho = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(selectAllWho);
    const dispatch = useDispatch();
    useEffect(() => findAllWho(dispatch), []);
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">Who To Follow</li>
                {
                    who.map((w, key) => {
                        return (
                            <WhoToFollowListItem who={w} key={key}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}
export default WhoToFollowList;