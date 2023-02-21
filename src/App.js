import "./app.css";
import { useState } from "react";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

function App() {
  const [slide, setSlide] = useState(0);

  const images = [
    "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
    "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg",
    "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg",
    "https://images.pexels.com/photos/15286/pexels-photo.jpg",
  ];

  const prevSlide = () => {
    setSlide(slide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setSlide(slide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="container">
      <div className="imgContainer" style={{transform: `translateX(-${slide * 100}vw)`}}>
        <img src={images[0]} />
        <img src={images[1]} />
        <img src={images[2]} />
        <img src={images[3]} />
      </div>
      <div className="icons">
        <div className="icon icon_left" onClick={prevSlide}>
          <WestOutlinedIcon style={{fontSize: "50"}}/>
        </div>
        <div className="icon icon_right" onClick={nextSlide}>
          <EastOutlinedIcon style={{fontSize: "50"}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
