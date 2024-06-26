import { useEffect, useRef, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import { db } from "@/firebase/config";

interface RealtimeValue {
  data: any;
  error: boolean;
  loading: boolean;
}

const useGetRealtimeValue = (path: string): RealtimeValue => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const pathRef = useRef(path);

  useEffect(() => {
    const dataRef = ref(db, pathRef.current);
    const handleValueChange = (snapshot: any) => {
      setData(snapshot.val());
      setLoading(false);
      setError(false);
    };

    const handleError = (error: any) => {
      console.error("Error fetching data from Firebase:", error);
      setError(true);
      setLoading(false);
    };

    onValue(dataRef, handleValueChange, handleError);

    return () => {
      off(dataRef, "value", handleValueChange);
    };
  }, []);

  return { data, error, loading };
};

export default useGetRealtimeValue;
