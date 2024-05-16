import axios from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';
let initialState=true;
const CheckUserLogin=(state,action)=>{
    
        let val;
        switch(action.type)
        {
        case "userLogin":
        const tkn=Cookies.get("jwtToken");
        axios({
            headers:{"Content-Type":"application/json"},
            method:"POST",
            credentials:"include",
            url:"http://localhost:5000/api/salon",
            data:{
                tkn
            }
        }).then((response)=>{
            if(response.data=="logged")
                {
                    val=(true);     
                }
                else
                {
                    val=(false);
                }
        })
        
        return val;
        
        default:return initialState;
    }


    }
    export default CheckUserLogin;
//}