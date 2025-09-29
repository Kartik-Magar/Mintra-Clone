import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const dispatch = useDispatch();

  const fetchStatus = useSelector((store) => store.fetchStatus);

  console.log("Fetch Status:", fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items));
        console.log("Items fetch", items);
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
