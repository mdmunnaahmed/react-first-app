import image from "../assets/images/success.png";

const Summery = () => {
  return (
    <div>
      <div className="summary">
        <div className="point">
          <p className="score">
            Your score is <br />5 out of 10
          </p>
        </div>

        <div className="badge">
          <img src={image} alt="Success" />
        </div>
      </div>
    </div>
  );
};

export default Summery;
