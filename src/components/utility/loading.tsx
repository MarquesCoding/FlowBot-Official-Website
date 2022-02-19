import { CircularProgress } from "@mui/material";
import logo from "../../static/images/logoLight.png";

interface loading {
  isLoading: Boolean;
  time: number;
}

export const Loading: React.FC<loading> = ({ isLoading, time }) => {
  if (isLoading) {
    setTimeout(() => {
      document.getElementById("loading")!.classList.add("loading-up");
    }, time);
  }
  return (
    <div>
      <div
        className="flex items-center justify-center absolute w-full h-full"
        id="loading"
      >
        <img
          src={logo}
          width="256"
          height="auto"
          style={{ paddingRight: "32px" }}
          alt="logo"
        />
        <CircularProgress style={{ color: "white" }} />
      </div>
    </div>
  );
};
