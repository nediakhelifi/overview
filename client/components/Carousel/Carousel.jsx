const Carousel = ({ Cindex, setCindex, pics, currentImage, setCurrentImage }) => {

  const changeImage = (inc) => {
    let idx=Cindex+inc;
    if(idx <= pics.length-1 && idx >= 0){
      setCindex(Cindex + inc);
      setCurrentImage(pics[Cindex + inc]);
  }}

  return (
    <div className="slider">
      <div className="navigation-expand">
        <i className="fas fa-expand expand-btn"></i>
      </div>
      <div className="slide active">
        <img src={currentImage.url} alt="img" />
      </div>
      <div className="navigation">
        <i className="fas fa-chevron-left prev-btn" onClick={()=> changeImage(-1)}></i>
        <i className="fas fa-chevron-right next-btn" onClick={()=> changeImage(1)}></i>
      </div>
      <div className="navigation-visibility">
        {
          pics.map((element, index) => (
        <div className="slide-icon active" key={index}>
          <img
            src={element.thumbnail_url}
            alt=""
          />
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default Carousel;
