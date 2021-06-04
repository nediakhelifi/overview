import ReactStars from "react-stars";
import "../../index.css";

const Details = ({ products, styles, handleChange }) => {
  console.log(styles);
  const { useState } = React;
  const [counter, setCounter] = useState(0);
  const [sizeindex,setindex]=useState("");
  const style = styles[counter];
  const sizes = style
    ? Object.keys(style.skus).map((key) => style.skus[key].size)
    : [];

    const Qtys = style
    ? Object.keys(style.skus).map((key) => style.skus[key].quantity)
    : [];
  console.log(sizes);
  let name = styles[counter] ? styles[counter].name : "";

  const changeCounter = (index) => {
    handleChange(index);
    setCounter(index);
  };
  return (
    <div className="flex justify-center w-2/5">
      <div className="px-8 py-12">
        <div className="flex justify-start gap-x-3">
          <ReactStars count={5} value={2.75} size={24} color2={"#ffd700"} />
          <a className="text-1xl text-gray-400 mt-1.5">Read all reviews</a>
        </div>
        <h2 className="mt-2 text-1xl font-bold text-gray-500 leading-tight">
          {products.category}
        </h2>
        <h1 className="mt-2 text-4xl font-bold text-gray-600">
          {products.name}
        </h1>
        <h4 className="mt-2 text-1xl text-gray-600">
          ${products.default_price}
        </h4>
        <h4 className="mt-2 text-1xl text-gray-600">
          <span className="font-bold">
            STYLE <i className="fas fa-angle-right"></i>
          </span>{" "}
          {name}
        </h4>

        <div className=" mt-4 grid gap-x-3 gap-y-2 grid-cols-4">
          {styles.map((style, index) => {
            return (
              <img
                className="w-16 h-16 rounded-full cursor-pointer"
                src={style.photos[0].thumbnail_url}
                alt="img"
                key={index}
                onClick={() => changeCounter(index)}
              />
            );
          })}
        </div>
        <div className="mt-4 grid gap-x-3 gap-y-2 grid-cols-2">
          <select className="py-2 px-3 border-2 border-gray-900 mt-1 focus:outline-none bg-transparent text-gray-900" >
            <option value="select size">SELECT SIZE</option>
            
            {sizes.map((size,key) => <option key={key} value={size}>{size}</option>)}
          </select>
          <select className="w-14 py-2 px-3 border-2 border-gray-900 mt-1 focus:outline-none bg-transparent text-gray-900">
            <option value="qty">qty</option>
            {Qtys.map((quantity,key) => <option key={key} value={quantity} >{quantity}</option>)}
          </select>
        </div>
        <div className="mt-4 grid gap-x-3 gap-y-2 grid-cols-2">
          <button className="border-2 border-black text-left  p-2 flex justify-between">
            <div>ADD TO BAG </div>
            <div className="text-right">
              <i className="fas fa-plus"></i>
            </div>
          </button>
          <button className="border-2 border-black w-12 p-1 text-center">
            <i className="far fa-star"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
