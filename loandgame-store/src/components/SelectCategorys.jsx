
const getCategories = async () => {
  const res = await fetch(`/api/categories`);
  const categories = await res.json();
  return categories;
};

const SelectCategorys=async()=>{
  const categories = await getCategories();
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-2">
        <select name="" id="" className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4">
            {categories.map((category) => (
              <option key={category._id} value={category.name}>{category.name}</option>
            ))}
            </select>
      </div>
    </div>
  );
}

export default SelectCategorys;
