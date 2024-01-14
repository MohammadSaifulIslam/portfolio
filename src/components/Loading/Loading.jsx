import { useEffect, useState } from "react";

const Loading = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (loadingPercentage < 100) {
        setLoadingPercentage((prevPercentage) => prevPercentage + 1);
      } else {
        clearInterval(interval);
      }
    }, 15); // Adjust the interval duration as needed

    return () => {
      clearInterval(interval);
    };
  }, [loadingPercentage]);

  return (
    <div className="flex h-screen justify-center items-center bg-secondary">
      <div className="relative w-32 h-32">
        <div
          className="absolute inset-0 border-4 border-primary rounded-full"
          style={{
            clipPath: `polygon(0% 0%, ${loadingPercentage}% 0%, ${loadingPercentage}% 100%, 0% 100%)`,
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-primary">
          Loading
        </div>
      </div>
    </div>
  );
};

export default Loading;
