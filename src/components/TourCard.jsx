import React, { useState } from 'react'; //Importing React and useState hook

const TourCard = ({ id, name, info, image, price, onRemove }) => { 
  //Destructuring props to get individual tour properties
    const [readMore, setReadMore] = useState(false); //State to manage the read more functionality

    return (
    <article className="tour-card">
      <img src={image} alt={name} />  {/*Display the tour image*/}
      <footer>
        <div className="tour-info"> 
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4> {/*Display the tour price*/}
        </div>
        <p>
          {readMore ? info : `${info.slice(0, 100)}...`} {/*Display the tour info, either full or truncated*/}
          <button className="read-more" onClick={() => setReadMore(!readMore)}>   {/*Toggle read more state*/}
            {readMore ? "Show Less" : "Read More"} {/*Change button text based on readMore state*/}
          </button>
        </p>
        <button className="remove-button" onClick={() => onRemove(id)}>  {/*Remove the tour from the list*/}
          Not Interested
        </button>
      </footer>
    </article>
  );
};

//Exporting the TourCard component
export default TourCard;