import React, {createContext, useState} from "react";


export const UserInfoContext = createContext ({})

function UserInfoProvider ({children}) {
    const [userInfo , setUserInfo] = useState ({
        username:localStorage.getItem("username")
   })


   return (
       <UserInfoContext.Provider value={{userInfo , setUserInfo}}>
           {children}
       </UserInfoContext.Provider>
   )
}

export default UserInfoProvider

