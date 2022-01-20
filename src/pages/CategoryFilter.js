import  React from "react";
import { useParams } from "react-router";
import ItemsListContainer from "../containers/ItemsListContainer/ItemsListContainer";
import NotFound from "../pages/NotFound";
import { getFirestore } from "../firebase";

const CategoryFilter = () => {
  const { keyName } = useParams();
  const [categoryName, setCategoryName] = React.useState("");
  const [cat, setCat] = React.useState({});

  React.useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = db.collection("categories");
    const category = categoriesCollection.doc(keyName);

    category
      .get()
      .then((doc) => {
        if (doc.exists) {
          setCat({id: doc.id, ...doc.data()})
          setCategoryName(cat.name)
        } else {
          setCategoryName("404");
        }
      })
      .catch()
  }, [cat.name, keyName]);

  return (
    <>
      <h2 className="mt-4 ms-7">{categoryName} Bienvenidos</h2>
      {categoryName === "404" 
      ? <NotFound />
      : <ItemsListContainer filtro={keyName} />}
    </>
  );
};

export default CategoryFilter;