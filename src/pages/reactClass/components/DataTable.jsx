import { memo } from "react";

function DataTable({filterProducts}) {
  console.log('DataTable 被渲染了')
  return (
    <table className="table">
      <tbody>
        {filterProducts.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default memo(DataTable);
