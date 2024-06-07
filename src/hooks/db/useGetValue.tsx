import { useEffect, useRef, useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import { app } from "@/firebase/config";

interface useGetValueProps {
  pathname: string
}

const useGetValue = (
  pathname: string, 
  initialLoad: boolean = true
)  => {
  // Pake useState buat rendering
  const [isLoading, setIsLoading] = useState(initialLoad);
  // pake useRef, karena tanpa rendering
  const snapshot = useRef(null);
  const error = useRef(false);
  const isEmpty = useRef(false);

  const getValue = async () => {    
    try {
      const db = getDatabase(app);
      const rootReference = ref(db);
      const dbGet = await get(child(rootReference, pathname));
      const dbVal = dbGet.val();
      const dbExist = dbGet.exists();   

      if (!dbExist) {
        isEmpty.current = true;
      }

      snapshot.current = dbVal;
    } catch (getError) {
      error.current = true;
    }     

    setIsLoading(false);
  }

  const getValueLater = () => {
    snapshot.current = null;
    error.current = false;
    setIsLoading(true);
  }

  useEffect(() => {
    if (isLoading) {
      getValue();
    }
  }, [isLoading])


  return {
    isLoading, 
    getValueLater,
    isEmpty: isEmpty.current,
    snapshot: snapshot.current,
    error: error.current
  }
}

export default useGetValue;