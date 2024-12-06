

const VisaCard = ({visa}) => {
      const {country_image,country_name}=visa

      return (
            <div>
                  <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
      src={country_image}
      alt="country image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{country_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                  
            </div>
      );
};

export default VisaCard;