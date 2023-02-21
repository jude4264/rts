import { ChildAsFC } from "./Child";

const Parent = () =>{
    return <ChildAsFC color="red" onClick={()=>console.log("Clicked")}>
        asdsd
    </ChildAsFC>
};

export default Parent;