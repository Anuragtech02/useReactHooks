import { useEffect, useState } from "react";
import firebase from "firebase";

interface Props {
  path: string;
}

export function useFirestore(props: Props) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(props.path)
      .onSnapshot((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        setData(docs);
      });

    return () => unsubscribe();
  }, [props.path]);

  return data;
}
