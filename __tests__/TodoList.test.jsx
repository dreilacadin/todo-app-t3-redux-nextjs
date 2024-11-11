import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import StoreProvider from "~/app/StoreProvider";
import TodoList from "~/app/_components/TodoList";
import { renderWithProviders } from "~/lib/utils/test-utils"
import { createId } from "@paralleldrive/cuid2";


describe("TodoList", () => {
	it("renders a table container", () => {
		renderWithProviders(
			<TodoList />
		);

		expect(screen.getByRole('table')).toBeInTheDocument()
	});

	it('should allow receiving filter and query props', () => {
		const initialTodo = [{
			id: createId(),
			title: "Wash the dishes",
			description: "Clear dirty dishes",
			status: "pending",
			dueDate: new Date("2024-11-13").toISOString(),
		}]

		renderWithProviders(
			<TodoList filter="all" query="" />, {
			preloadedState: {
				todos: initialTodo
			}
		}
		);

		expect(screen.getByText("Wash the dishes")).toBeInTheDocument()
	})
});
