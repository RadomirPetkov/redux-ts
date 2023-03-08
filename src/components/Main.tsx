import { Link } from "react-router-dom";
const buttonStyle = {padding:"20px", backgroundColor:"burlywood", borderRadius:"30px", fontSize:"15px", cursor:"pointer"}

export const Main: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems:"center", height:"100vh", backgroundColor:"slateblue" }}>
      <Link to="/search">
        <button style={buttonStyle}>Search engine</button>
      </Link>
      <Link to="login">
        <button style={buttonStyle}>Video conference</button>
      </Link>
    </div>
  );
};
