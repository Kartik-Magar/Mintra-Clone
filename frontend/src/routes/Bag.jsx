import BagSummer from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const item = useSelector((state) => state.items);
  const finalItems = item.filter((itm) => {
    const itemIndex = bagItems.indexOf(itm.id) >= 0;
    return itemIndex;
  });
  return (
    <>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagSummer item={item} />
      </div>
    </>
  );
};
export default Bag;
