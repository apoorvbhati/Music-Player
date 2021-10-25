var React = require("react");
var Coverflow = require("react-coverflow");

const Carousel = (props) => {

    const renderCarousel = (song, index) => {
        return (
                <img 
                    key={index} 
                    style={{height:'200px', width:'100%'}}
                    src={song.cover}
                    alt={song.name}   
                    data-action={`/songs/${index}`}
                />
        );
    }


    return (
        <Coverflow
            width={960}
            height={480}
            // displayQuantityOfSide={2}
            displayQuantityOfSide={3}
            navigation={false}
            enableHeading={false}
        >
        
        {props.item.length>0 ? props.item.map(renderCarousel) : <div></div>}
        </Coverflow>
  );
};

export default Carousel;
