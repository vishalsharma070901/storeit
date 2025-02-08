import { useState } from 'react';
import MyContext from './myContext';


function MyState({ children }) {    
 const[otp, setOtp] = useState(0)
    return (
        <MyContext.Provider value={{
            otp,
            setOtp
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState;