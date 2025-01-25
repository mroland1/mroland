import theashvillesteakhouse from "../assets/theashvillesteakhouse.png";
import weatherapp from "../assets/weatherapp.png";
import movieland from "../assets/movieland.png";

function MyProjects() {
  return (
    <div className="grid grid-cols-1 gap- text-center m-5">
      <a
        href="https://mroland1.github.io/the-ashville-steakhouse/home"
        target="_blank"
      >
        <div className=" p-4 border-y border-white border-opacity-60">
          <div className="transition-transform duration-200 ease-in-out hover:scale-105">
            <div className="mb-4 text-2xl tracking-widest">
              The Ashville Steakhouse
            </div>
            <img
              src={theashvillesteakhouse}
              alt="The Ashville Steakhouse"
              className="rounded-3xl w-full h-60 object-cover"
            />
          </div>
        </div>
      </a>
      <a href="https://mroland1.github.io/weather-app/" target="_blank">
        <div className="p-4 border-b border-white border-opacity-60">
          <div className="transition-transform duration-200 ease-in-out hover:scale-105">
            <div className="mb-4 text-2xl tracking-widest">Weather App</div>
            <img
              src={weatherapp}
              alt="Weather App"
              className="rounded-3xl w-full h-60 object-cover"
            />
          </div>
        </div>
      </a>
      <a href="https://mroland1.github.io/MovieLand/" target="_blank">
        <div className="p-4 border-b border-white border-opacity-60">
          <div className="transition-transform duration-200 ease-in-out hover:scale-105">
            <div className="mb-4 text-2xl tracking-widest">MovieLand</div>
            <img
              src={movieland}
              alt="MovieLand"
              className="rounded-3xl w-full h-60 object-cover "
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export default MyProjects;
