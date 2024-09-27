import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {

    return (<div className="DogList">
        <h1>Dogs</h1>
        {dogs.map(
            dog => <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
        )}
    </div>)
}

export default DogList;