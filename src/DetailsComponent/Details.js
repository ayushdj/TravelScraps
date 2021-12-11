import {useSelector} from "react-redux";


const detailsState = (state) => state.details;

const Details = () => {
    const details = useSelector(detailsState);

    console.log("details", details)
    return(<div>
        Hello Details!
    </div>)
}

export default Details;