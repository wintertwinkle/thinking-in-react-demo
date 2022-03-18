import { Component } from "react"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

export default class FilterProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: "",
      isStockedOnly: false,
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleInStockChange = this.handleInStockChange.bind(this)
  }

  render() {
    const filterText = this.state.filterText
    const isStockedOnly = this.state.isStockedOnly
    return (
      <div>
        <SearchBar
          filterText={filterText}
          isStockedOnly={isStockedOnly}
          onFilterChange={this.handleFilterChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={filterText}
          isStockedOnly={isStockedOnly}
        />
      </div>
    )
  }

  handleFilterChange(filterText) {
    this.setState({
      filterText: filterText,
    })
  }
  handleInStockChange(isStockedOnly) {
    this.setState({
      isStockedOnly: isStockedOnly,
    })
  }
}
