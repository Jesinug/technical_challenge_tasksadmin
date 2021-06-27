import { render, screen } from "@testing-library/react";
import { Task } from "../../Models/Tasks";
import { Card } from "../Card";

const mockedTasks: Task[] = [
  {
    id: 1,
    name: "NAME",
    priority: 1,
  },
  {
    id: 2,
    name: "NAME2",
    priority: 1,
  },
];
test("renders Card react link", () => {
  // @ts-ignore
  render(
    <Card
      index={1}
      tasks={mockedTasks}
      task={{ name: "test", id: 1, priority: 1 }}
    />
  );
  const linkElement = screen.getByText(/Edit/i);
  expect(linkElement).toBeInTheDocument();
});