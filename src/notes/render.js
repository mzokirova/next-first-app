/* render prop is a function that
 components uses to know what to render or allowing the component to render content based on the logic provided by that function.
*/
example
const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is product 1',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is product 2',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'This is product 3',
  },

  // ...
];

const Products = ({ render }) => {
  // Fetching products can be done here.
  return <>{render(products)}</>;
};

const HomePage = () => {
  return (
    <div>
      <h1>Products List</h1>
      <Products
        render={products => (
          <ul>
            {products?.map(product => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        )}
      />
    </div>
  );
}

export default HomePage