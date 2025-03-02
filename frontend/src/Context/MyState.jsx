import { useEffect, useState } from "react";
import MyContext from "./myContext";
import axios from "axios";

function MyState({ children }) {
  const [otp, setOtp] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [media, setMedia] = useState([]);
  const [imagesSize, setImagesSize] = useState(0);
  const [documentsSize, setDocumenstSize] = useState(0);
  const [mediaSize, setMediaSize] = useState(0);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userName, setUserName] = useState(localStorage.getItem("user-name") || "");
  const [userEmail, setUserEmail] = useState(localStorage.getItem("user-email") || "");
  const [userTotalSize, setUserTotalSize] = useState(localStorage.getItem("user-total-size") || 0);
  const [userUsedSize, setUserUsedSize] = useState(localStorage.getItem("user-used-size") || 0);
  const [imageLoading , setImageLoading] = useState(false);
  const [documentLoading , setDocumentLoading] = useState(false);
  const [mediaLoading , setMediaLoading] = useState(false);

  const setTokenInLocalStorage = (authToken) => {
    localStorage.setItem("token", authToken);
    setToken(authToken); 
    getUserDetails(authToken);
  };
  

  const logout = () => {    
    localStorage.removeItem("token");
    localStorage.removeItem("user-name");
    localStorage.removeItem("user-email");
    localStorage.removeItem("user-total-size");
    localStorage.removeItem("user-used-size");
    setToken("");
    setUserName("");
    setUserEmail("");
    setUserTotalSize(0);
    setUserUsedSize(0);
  }
  
  const getUserDetails = async (authToken) => {
    if (!authToken) return;

    try {
      const response = await axios.get("http://localhost:8000/api/auth/user", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.status === 200) {
        const { username, email, initialSize, usedSize } = response.data;

       
        localStorage.setItem("user-name", username);
        localStorage.setItem("user-email", email);
        localStorage.setItem("user-total-size", initialSize);
        localStorage.setItem("user-used-size", usedSize);

        
        setUserName(username);
        setUserEmail(email);
        setUserTotalSize(initialSize);
        setUserUsedSize(usedSize);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  
  useEffect(() => {
    if (token) {
      getUserDetails(token);
    }
  }, [token]); 

  return (
    <MyContext.Provider
      value={{
        otp,
        setOtp,
        formData,
        setFormData,
        images,
        setImages,
        documents,
        setDocuments,
        media,
        setMedia,
        imagesSize,
        setImagesSize,
        documentsSize,
        setDocumenstSize,
        mediaSize,
        setMediaSize,
        setTokenInLocalStorage,
        getUserDetails,
        userName,
        userEmail,
        userTotalSize,
        userUsedSize,
        logout,
        imageLoading,
        setImageLoading,
        documentLoading,
        setDocumentLoading,
        mediaLoading,
        setMediaLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
