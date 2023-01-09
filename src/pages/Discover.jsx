import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useState } from "react";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const [valueOption, setValueOption] = useState("");
  const {data, isFetching, error} = useGetTopChartsQuery();
  console.log(data);

  const genresTitle = valueOption;

  const dispatch = useDispatch()
  const {activeSong, isPlaying} = useSelector((state) => state.player)

  // Check if is getting the data


  if(isFetching) return <Loader title= "Loading songs"/>
  if(error) return <Error/>

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3x1 text-white">
          Discover {valueOption}
        </h2>
        <select
          onChange={(e) => setValueOption(e.target.value)}
          value={valueOption}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none 
            sm:mt-0 mt-5"
        >
          {genres.map((gen) => (
            <option key={gen.value}>{gen.title}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 text-white">
        {
            data?.map((song, i)=>(
                <SongCard
                key={song.index}
                song={song}
                isPlaying = {isPlaying}
                activeSong = {activeSong}
                index ={i}
                data={data}
                
                />
            ))
        }
      </div>
    </div>
  );
};

export default Discover;
