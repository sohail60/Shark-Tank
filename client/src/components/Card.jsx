import react from "react";

function Card(props) {
  return (
    <>
      <div className="sharkscards">
        <div className="card">
          <div className="sharksimg">IMG</div>

          <div className="sharksdetails">
            <h5>{props.name}</h5>
            <p>{props.profession}</p>

            <div class="smlinks">
              <a href="#" class="card-link">
                Get More Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
