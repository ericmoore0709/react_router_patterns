import { Link, useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {

    const { name } = useParams();

    const dog = dogs.find(d => d.name === name);

    const { age, src, facts } = dog;

    return (<div className="DogDetails">
        <h1>{name}</h1>
        <p>age: {age}</p>
        <img src={`/${src}.jpg`} alt={`${src}`} width={'200px'} />
        <div>
            {facts.map(fact =>
                <p>{fact}</p>
            )}
        </div>
        <Link to="/">Go Back</Link>
    </div>)
}

export default DogDetails;