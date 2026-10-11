
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/Login";

describe("FixIt Login Page", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  function renderLogin() {
    return render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  }

  it("renders the login form", () => {
    renderLogin();

    expect(
      screen.getByRole("heading", { name: /welcome back/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Log In" })
    ).toBeInTheDocument();
  });

  it("displays an error for an invalid email address", () => {
    renderLogin();

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "invalid-email" },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Log In" }));

    expect(
      screen.getByText("Enter a valid email address.")
    ).toBeInTheDocument();
  });

  it("displays an error when the password is shorter than six characters", () => {
    renderLogin();

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "customer@example.com" },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Log In" }));

    expect(
      screen.getByText("Password must be at least 6 characters.")
    ).toBeInTheDocument();
  });

  it("does not call the API when the form contains invalid data", () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    renderLogin();

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "invalid-email" },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Log In" }));

    expect(fetchMock).not.toHaveBeenCalled();
  });
});
