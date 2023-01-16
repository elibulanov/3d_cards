import { PuffLoader } from "react-spinners";
import { useEffect, useState } from "react";
import MainPage from "./mainpage";





function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <PuffLoader size={50} color="#ff0000" />
        <p>Loading...</p>
      </div>
    );
  } else {
    return <MainPage />;
  }
}

export default LoadingScreen;

