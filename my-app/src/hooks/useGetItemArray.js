import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";

export const useGetItemArray = (productArray) => {
  const [array, setArray] = useState(null);
  const storage = getStorage();
  const productArrayRef = ref(storage, productArray);

  useEffect(() => {
    getDownloadURL(productArrayRef)
      .then((data) => setArray(data))
      .catch((err) => console.error({ err }));
  }, [productArrayRef]);

  return array;
};