import { Component } from "react"
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

export default class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText
    const isStockedOnly = this.props.isStockedOnly

    const rows = []
    let lastCategory = null

    this.props.products.forEach((product) => {
      const upperName = product.name.toUpperCase()
      const upperFilterText = filterText.toUpperCase()
      if (upperName.indexOf(upperFilterText) === -1) {
        return
      }
      if (isStockedOnly && !product.stocked) {
        return
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        )
      }

      rows.push(<ProductRow product={product} key={product.name} />)
      lastCategory = product.category
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}
