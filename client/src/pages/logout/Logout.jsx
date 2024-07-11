import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () =>{
    localStorage.clear();
    function removeItem(sKey, sPath, sDomain) {
        document.cookie = encodeURIComponent(sKey) + 
                      "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + 
                      (sDomain ? "; domain=" + sDomain : "") + 
                      (sPath ? "; path=" + sPath : "");
    }
    
    removeItem("access_token");
    window.location.replace("/");
    return (
        <div>
        </div>
    );
}

export default Logout;