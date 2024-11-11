import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoItem from "~/app/_components/TodoItem";
import StoreProvider from "~/app/StoreProvider";
import { createId } from "@paralleldrive/cuid2";


describe("TodoItem", () => {
  it("renders null if todo is null or undefined", () => {
    const { container } = render(
      <StoreProvider>
        <TodoItem />
      </StoreProvider>
    );

    expect(container).toBeEmptyDOMElement()
  });

  test('it renders the task title on screen when a todo prop is passed', () => {
    const todo = {
      id: createId(),
      title: "Wash the dishes",
      description: "Clear dirty dishes",
      status: "pending",
      dueDate: new Date("2024-11-13").toISOString(),
    }

    render(
      <StoreProvider>
        <table>
          <tbody>
            <TodoItem todo={todo} />
          </tbody>
        </table>
      </StoreProvider>
    );

    expect(screen.getByText('Wash the dishes')).toBeInTheDocument()
  })
});
