import "./App.css";
import demo from "./static/images/demo.png";
import logo from "./static/images/logoLight.png";
import { FlagSVG } from "./components/utility/flag";
import { useEffect, useState } from "react";
import { Loading } from "./components/utility/loading";

function App() {
  const [isLoading, setLoading] = useState(true);
  const time = 5000;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5300);
  });
  return isLoading ? (
    <Loading isLoading={isLoading} time={time} />
  ) : (
    <div className="flex absolute w-full h-full bg-[#070510]">
      <div className="content relative justify-start bg-secondary w-full lg:w-1/2 h-full flex">
        <div className="flex flex-col relative justify-center self-center w-full h-2/3 text-white">
          <img
            src={logo}
            alt="logo"
            className="relative w-[250px] min-w-[250px] max-w-[350px] pl-16 pb-4 self-start top-0"
          />
          <h1 className="relative text-white text-[40px] md:text-[75px] lg:text-[75px] w-[90%] max-w-[800px] leading-[104.7%] align-text-bottom pl-16 ">
            Experience one of the best <span className="music">music</span>{" "}
            driven Discord bots.
          </h1>
          <h3 className="relative text-white text-[16px] md:text-[24px] lg:text-[24px] w-[90%] max-w-[450px] leading-[160.2%] align-text-bottom pl-16 pt-8">
            We provide a very customizable multi-purpose bot for all your social
            needs.
          </h3>
          <div className="relative bottom-0 ml-[-12px] pr-4">
            <p className="relative opacity-50 text-white text-[16px] w-[85%] max-w-[450px] leading-[160.2%] align-text-bottom pl-16 pt-8">
              "Supported" Languages:
            </p>
            <ul className="relative pl-16 pt-4 block max-w-4xl">
              <FlagSVG language={"English"} countrycode={"US"}></FlagSVG>
              <FlagSVG language={"German"} countrycode={"DE"}></FlagSVG>
              <FlagSVG language={"Spanish"} countrycode={"ES"}></FlagSVG>
              <FlagSVG language={"Russian"} countrycode={"RU"}></FlagSVG>
              <FlagSVG language={"Ukranian"} countrycode={"UA"}></FlagSVG>
              <FlagSVG language={"Lituanian"} countrycode={"LT"}></FlagSVG>
              <FlagSVG language={"Romainian"} countrycode={"RO"}></FlagSVG>
              <FlagSVG language={"Japanese"} countrycode={"JP"}></FlagSVG>
              <FlagSVG language={"Korean"} countrycode={"KR"}></FlagSVG>
              <FlagSVG language={"Chinese"} countrycode={"CN"}></FlagSVG>
              <FlagSVG language={"Arabic"} countrycode={"AE"}></FlagSVG>
              <FlagSVG language={"Swedish"} countrycode={"SE"}></FlagSVG>
              <FlagSVG language={"Finish"} countrycode={"FI"}></FlagSVG>
              <FlagSVG language={"Greek"} countrycode={"GR"}></FlagSVG>
              <FlagSVG language={"French"} countrycode={"FR"}></FlagSVG>
              <FlagSVG language={"Polish"} countrycode={"PL"}></FlagSVG>
              <FlagSVG language={"Turkish"} countrycode={"TR"}></FlagSVG>
              <FlagSVG language={"Portuguese"} countrycode={"PT"}></FlagSVG>
              <FlagSVG
                language={"Portuguese(Brazil)"}
                countrycode={"BR"}
              ></FlagSVG>
              <FlagSVG language={"Italian"} countrycode={"IT"}></FlagSVG>
            </ul>
          </div>
          <p className="relative opacity-50 text-white text-[16px] w-[85%] max-w-[450px] leading-[160.2%] align-text-bottom pl-16 pt-8">
            Bot currently in development. May experience bugs
          </p>
        </div>
        <div className="border-2 border-white w-[122px] text-white absolute bottom-12 text-center rounded-lg p-3 ml-16">
          Invite
        </div>
      </div>

      <div className="relative w-0 lg:w-1/2 h-full flex items-center justify-end">
        <div className="gradient lg:w-[75%] max-w-screen-lg h-[93%] items-center content-center bg-white relative right-0 m-12 rounded-[24px] flex">
          <div className="text absolute w-full h-full"></div>
          <img
            src={demo}
            className=" relative self-center justify-center flex"
            alt="image_demo"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
