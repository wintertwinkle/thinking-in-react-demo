export default function SearchBar(props) {
  function onInStockChange(e) {
    props.onInStockChange(e.target.checked)
  }
  function onFilterChange(e) {
    props.onFilterChange(e.target.value)
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={onFilterChange}
      />
      <p>
        <input
          type="checkbox"
          checked={props.isStockedOnly}
          onChange={onInStockChange}
        />{" "}
        Only show products in stock
      </p>
    </form>
  )
}
