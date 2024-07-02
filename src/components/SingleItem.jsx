import { moneyFormat } from "../helpers";

const SingleItem = ({
  price,
  type,
  id,
  eliminarItem,
  editItem,
  setType,
  setPrice,
}) => {
  const handleDelete = (e) => {
    e.preventDefault();
    const answer = window.confirm(`Borrar Suscripcion a ${type}`);
    if (answer) {
      eliminarItem(id);
    }
    setType("");
    setPrice("");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editItem(id);
  };

  const urlImages = `/src/images/${type}.png`;

  return (
    <div className="single-item">
      <img src={urlImages} alt="Services" />
      <h3>Precio: {moneyFormat(Number(price))}</h3>
      <a href="" className="delete" onClick={handleDelete}>
        Borrar
      </a>
      <a href="" className="edit" onClick={handleEdit}>
        Editar
      </a>
    </div>
  );
};

export default SingleItem;
