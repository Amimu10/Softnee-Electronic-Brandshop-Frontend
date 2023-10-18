import { useState, useEffect } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")  
    .then(res => res.json())
    .then(data => {
        console.log(data); 
    })
  }, [])

  return (
    <div>
      <h3>Browse Through Our Categories Here.</h3>
      <div className="flex flex-wrap justify-center">
        {categories.map((category) => (
          <div key={category.id} className="m-4 max-w-xs">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="mt-2 text-center">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
