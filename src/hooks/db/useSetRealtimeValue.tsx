import { ref, set } from "firebase/database";
import { db } from "@/firebase/config";

const useSetRealtimeValue = (path: string) => {
  const setRealtimeValue = async (modifiedData: {}) => {
    try {
      const dataRef = ref(db, path);
      await set(dataRef, modifiedData);
    } catch (error) {
      console.error("Failed to set value:", error);
    }
  };

  return setRealtimeValue;
};

export default useSetRealtimeValue;
