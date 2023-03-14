export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" value={value} onChange={onChange}/>
    </>
  );
};
