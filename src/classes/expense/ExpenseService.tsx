import apiClient from "../../components/expensetracker/api-client";

export interface Expense {
  id: number;
  description: string;
  category: string;
  amount: number;
}

export interface Category {
  id: number;
  categoryName: string;
}

const baseUri = "http://localhost:1919/api/v1";

class ExpenseService {
  getExpenses() {
    const controller = new AbortController();
    const request = apiClient.get<Expense[]>("/expenses", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  getCategories() {
    const controller = new AbortController();
    const request = apiClient.get<Category[]>("/categories", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

export default new ExpenseService();
