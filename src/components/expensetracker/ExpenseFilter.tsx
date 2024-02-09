import React from "react";
import { categories } from "../categories";
import expenseService, { Category } from "../../classes/expense/ExpenseService";

interface Props {
  categories: Category[];
  onCategoryChange: (category: string) => void;
}

const ExpenseFilter = ({ categories, onCategoryChange }: Props) => {
  return (
    <div>
      <select
        name="categoryFilter"
        id="categoryFilter"
        className="form-select m-3"
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option value={category.categoryName} key={category.id}>
            {category.categoryName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
