import React,{useState,map}from "react";
import axios from "axios";
function App() {
  const [data, setdata] = useState([]);

  const getdata = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setdata(response.data)
  };
  return (
    <>
      <div>
        <div className='p-5'>
          <button
            onClick={getdata}
            className="px-5 w-50 h-20 bg-green-500 text-3xl text-white rounded-full active:scale-90 hover:bg-green-600 "
          >
            GetData
          </button>
          <div>
            {data?.map(function (elem, indx) {
              return (
                <div className="bg-gray-200 mt-5 p-5 rounded-md flex justify-between items-center">
                  <img
                    className=" h-50"
                    src={elem.download_url}
                    alt=""
                  />
                  <h1 className="text-4xl">{elem.author}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
