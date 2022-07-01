import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe("App", () => {
  it('Renders the component accordingly', () => {
    render(<App />);

    const form:HTMLFormElement = screen.getByTestId("form");
    expect(form).toBeInTheDocument();
    
    const intInput:HTMLInputElement = screen.getByTestId("input");
    expect(intInput).toBeInTheDocument();
    
    const submitButton:HTMLButtonElement = screen.getByTestId("button");
    expect(submitButton).toBeInTheDocument();

    const resultSpan:HTMLSpanElement = screen.getByTestId("result");
    expect(resultSpan).toBeInTheDocument();
  });

  it("Shows the result", async () => {
    render(<App />);
    
    const intInput:HTMLInputElement = screen.getByTestId("input");
    const submitButton:HTMLButtonElement = screen.getByTestId("button");

    await userEvent.click(intInput);
    await userEvent.type(intInput, "12");
    await userEvent.click(submitButton);

    const resultSpan:HTMLSpanElement = screen.getByText("XII");
    expect(resultSpan).toBeInTheDocument();
  })

});
