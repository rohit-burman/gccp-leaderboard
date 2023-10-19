import TableIndex from "./components/Table.Index";
const App = () => {
  return (
    <>
      <nav className="w-full  shadow-md relative ">
        <div className="bg-gray-900 text-blue-500 w-full m-auto text-center p-2 flex justify-center items-center">
          <div className="">
            <img
              src="https://gccp-leaderboard-gray.vercel.app/_next/image?url=%2Fassets%2FcloudLg.png&w=48&q=75"
              alt="me"
              width="40"
              height="40"
            />
          </div>
          <p className="">Google Cloud STUDY JAMS 23 - 24</p>
        </div>

        <div className="p-3 flex mob:flex-col m-auto max-w-6xl justify-between items-center">
          <a href="https://gdscaec.club">
            <div className="logo mob:border-b mob:border-b-gray-200 flex justify-center items-center">
              <div className="img w-16 h-16 rounded-full mr-1">
                <img
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/small-logo.png"
                  alt="me"
                  width="64"
                  height="64"
                />
              </div>
              <div className="text flex flex-col justify-start items-start">
                <p className="text-base">Google Developer Student Club</p>
                <p className="text-xs">Asansol Engineering College</p>
              </div>
            </div>
          </a>

          <div className="links mob:py-3 flex justify-center items-center space-x-5">
            <a href="https://www.linkedin.com/company/gdsc-aec">
              <div className="cursor-pointer linkedin">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    fill="#3b82f6"
                  />
                </svg>
              </div>
            </a>
            <a href="https://twitter.com/gdsc_aec/">
              <div className="cursor-pointer twitter">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </nav>
      <TableIndex />
    </>
  );
};

export default App;
