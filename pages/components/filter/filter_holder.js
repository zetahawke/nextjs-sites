import FilterItem from "./filter_item";

const Filter = ({ props }) => {
  return (
    <div className="grid grid-flow-col grid-cols-4 grid-rows-1 gap-3">
      {props.items.map((item, _index) => {
        return <FilterItem props={props}></FilterItem>;
      })}
    </div>
  );
};

export default Filter;
