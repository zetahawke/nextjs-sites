import FilterItem from "./filter_item";

const Filter = ({ props }) => {
  let colSize = props.items.length <= 4 ? props.items.length : 4;
  return (
    <div className={`grid grid-cols-${colSize} gap-6`} key="filter-holder-1">
      {props.items.map((item, _index) => {
        return (
          <FilterItem props={props} key={`filter-item-${item}`}></FilterItem>
        );
      })}
    </div>
  );
};

export default Filter;
