import { FilterInput, FilterSection } from "./Filter.styled";

const Filter = ({ value, onChange }) => {
  return (
    <FilterSection>
      <h2>Contacts</h2>
        <FilterInput
          placeholder="Find contact"
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
    </FilterSection>
  );
};

export default Filter;