import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

import App from "@/App.tsx";
test("test", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText("count is 0")).toBeInTheDocument();
    await user.click(screen.getByTestId('addCount'));
    expect(screen.getByText("count is 1")).toBeInTheDocument();
});