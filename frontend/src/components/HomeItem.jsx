import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoBagAddOutline } from "react-icons/io5";
import { IoBagRemoveOutline } from "react-icons/io5";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
    console.log("Add to Bag clicked for item:", item.id);
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
    console.log("Remove From Bag clicked for item:", item.id);
  };

  const bagItems = useSelector((state) => state.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  console.log(item.id, elementFound);

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleRemoveFromBag}
        >
          <IoBagRemoveOutline /> Remove From Bag
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddToBag}
        >
          <IoBagAddOutline /> Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
