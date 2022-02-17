import React from "react";
import "./Slider.css";

export const CarouselItem = ({ children, width}) => {
    return (
        <div classNAme="carousel-item" style= {{ width: widt5h}}>{children}</div>
    );
};
const Carousel = ({children})=> {
    return (
        <div className="carousel">
            <div className = "inner" style= {{transform: "translateX(-0%"}}>
                {React.Children.map(children, (child, index)=> {
                    return React.cloneElement(child, {width: "100%"});
                })}
            </div>
        </div>
    );
};
export default Carrousel;