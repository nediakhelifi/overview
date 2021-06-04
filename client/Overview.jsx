import "./index.css";
import Details from "./components/Details/Details.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";
import axios from "axios";

const overview = () => {

  const {useEffect, useState} = React;
  const [products, setProducts] = useState([]);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(null)
  const [index, setIndex] = useState(0);
  const [Cindex, setCindex] = useState(0);
  const [SizeIndex, setSizeIndex] = useState(0);
  
  const id = window.location.href.split("/")[3];

const changeIndex=(index)=>{
  setIndex(index+1);
}


  const handleChange = (input) => {
    setCindex(0);
    setCurrentStyle(styles[input]);
    setCurrentImage(styles[input].photos[0]);

  }


  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/${id}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`http://localhost:3002/api/${id}/styles`)
      .then((response) => {
        setStyles(response.data.results);
        setCurrentStyle(response.data.results[0]);
        setCurrentImage(response.data.results[0].photos[0]);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);



  return (
    <div className="flex w-full">
      {loading ? null : (
        <Carousel
          setCurrentImage={setCurrentImage}
          currentImage={currentImage}
          pics={currentStyle.photos}
          setCindex={setCindex}
          Cindex={Cindex}
        />
      )}
      <Details
        products={products}
        styles={styles}
        handleChange={handleChange}
        changeIndex={changeIndex}
      />
    </div>
  );
};

export default overview;
