// react router dom imports
import { useParams } from "react-router-dom";
// costum hooks
import { useFetch } from "../hooks/useFetch";
function Product() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://dummyjson.com/products/` + id
  );
  console.log(data);
  return (
    <div>
      {isPending && <h3>Loading...</h3>}
      {data && (
        <div>
          <img src={data.thumbnail} alt={data.title} />
          <h2> Title: {data.title}</h2>
          <p>Price: {data.price}</p>
          <p> Description: {data.description}</p>
          <p>Status: {data.availabilityStatus}</p>
          <h4>returnPolicy: {data.returnPolicy}</h4>
          <h3>warrantyInformation: {data.warrantyInformation}</h3>

          <div></div>
        </div>
      )}
    </div>
  );
}

export default Product;
