import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {

    return (
        <div className="ColorList">
            <Link to="/new" style={{ marginBottom: '2em' }}>New Color</Link>
            {colors.map(color => <Link key={color.value} to={'/color/' + color.name}>{color.name}</Link>)}
        </div>
    )

}

export default ColorList;