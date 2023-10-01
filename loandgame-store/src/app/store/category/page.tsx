import { dbConnect } from "../../../lib/monoose";
import { CategoryCard } from "../../../components/CategoryCard";
import { Navbar } from "../../../components/NavbarCrud"
import Category from "../../../models/category";

export async function loadCategorys() {
  await dbConnect();
  const categorys = await Category.find();
  return categorys;
}

export default async function CategoryPage() {
  const categorys = await loadCategorys();

  return (
    <div>
        <Navbar datos={'category'}/>
        <div className="gap-2">
        {categorys.map((category) => (
            <CategoryCard category={category} key={category._id} />
        ))}
        </div>
    </div>
  );
}