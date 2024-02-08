const Pokemon = ({ name, type, image }) => {
  return (
    <div className="poke-box">
      <img src={image} className="poke-img" />
      <h1 className="poke-name">{name}</h1>
      <h2 className="poke-type">{type}</h2>
    </div>
  );
};

export default Pokemon;
