import React from "react";
import {InputSubmit} from "./BotaoSubmit.style"

function BotaoSubmit (){
    return(
    <div>
        <InputSubmit />
    </div>
    );
}

export default React.memo(BotaoSubmit);