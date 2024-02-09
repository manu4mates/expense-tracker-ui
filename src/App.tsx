import React, { useEffect, useState } from "react";
import ExpenseForm, {
  ExpenseFormData,
} from "./components/expensetracker/ExpenseForm";
import ExpenseList from "./components/expensetracker/ExpenseList";
import ExpenseFilter from "./components/expensetracker/ExpenseFilter";
import expenseService, {
  Category,
  Expense,
} from "./classes/expense/ExpenseService";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const { request, cancel } = expenseService.getExpenses();
    request
      .then(function (response) {
        console.log(response);
        setExpenses(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("getExpenses finally executed!!");
      });

    return () => cancel();
  }, []); //[selectedCategory]);

  useEffect(() => {
    const { request, cancel } = expenseService.getCategories();
    request
      .then((response) => {
        console.log(response);
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("getCategories finally executed!!");
      });

    return () => {
      cancel();
    };
  }, []);

  function onDelete(id: number) {
    return expenses.filter((expense) => expense.id !== id);
  }

  function onCategoryChange(category: string) {
    console.log("selected category: " + category); //expenses.filter((expense) => expense.id !== id);
  }

  const filteredExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  function handleSubmit(expense: ExpenseFormData) {
    console.log(expense);

    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  }

  return (
    <>
      <ExpenseForm onSubmit={(expense) => handleSubmit(expense)} />

      <ExpenseFilter
        onCategoryChange={(category) => setSelectedCategory(category)}
        categories={categories}
      />
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={(id) => setExpenses(onDelete(id))}
      />
    </>
  );
};

export default App;
