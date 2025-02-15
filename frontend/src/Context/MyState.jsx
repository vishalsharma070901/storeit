import { useState } from 'react';
import MyContext from './myContext';


function MyState({ children }) {    
 const[otp, setOtp] = useState(0);
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     password: "",
   });

   const [images, setImages] = useState([]);
   const [documents, setDocuments] = useState([]);
   const [media, setMedia] = useState([]);
    return (
        <MyContext.Provider value={{
            otp,
            setOtp,
            formData,
            setFormData,
            images,
            setImages,
            documents,
            setDocuments,
            media,
            setMedia
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState;