import React from "react";
import Delete from "src/images/delete.svg";

function Deletebutton(props : any) {
    const {onClick} = props;
    return (
        <button onClick={onClick}><img src={Delete}/></button>
    )
}

export default Deletebutton;