import { Link, useParams } from "react-router-dom";

const Color = ({ colors }) => {

    const { name } = useParams();
    const color = colors.find(color => color.name === name);
    const { value } = color;

    return (
        <div>
            <h1 style={{ backgroundColor: value, color: -value }}>{name}</h1>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Color;