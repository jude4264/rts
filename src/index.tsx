import ReactDOM  from "react-dom";
// import GuestList from "./state/guest";
import UserSearch from "./state/userSearch";

const App = () =>{
    return(
        <div>
            <UserSearch/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector("#root"))