import React, { useState } from "react";
import axios from "axios";
export default function App() {
  const [vidurl, setVidUrl] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [downloadlink, setDownloadlink] = useState(" ");
  const testingbtn = ()=>{
    alert(vidurl);
  }
  const buttonHandler = () => {
    const options = {
      method: "GET",
      url: "https://getvideo.p.rapidapi.com/",
      params: { url: vidurl },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_YT_API_KEY,
        "x-rapidapi-host": process.env.REACT_APP_YT_API_HOST,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setDownloadlink(response.data.streams[0].url);
        setLoaded(true);
        console.log(response.data.streams[0].url);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div class="container">
      <h1>YOUTUBE VIDEO DOWNLOADER</h1>
      <p>Paste in the URL of the video then click the search button and once the video is ready you'd see a download button, click it then once you see the video player on the browser click the three dots in the bottom right and choose download </p>
      <input type="text" placeholder="video link" class="form-control" onChange={(e)=>setVidUrl(e.target.value)} />
      <button class="btn btn-danger btn-lg mt-3" onClick={buttonHandler}>SEARCH</button> <br></br>
      {!loaded? (<h4></h4>) : (
          <div class="row">
          <div class="col mt-4">
          <a href={downloadlink} class="btn btn-success">DOWNLOAD NOW</a>
          </div>
          </div>
        )}
    </div>
  );
}