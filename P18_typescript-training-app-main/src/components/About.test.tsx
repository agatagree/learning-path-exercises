import { render, screen, fireEvent } from '@testing-library/react';
import { About } from './About';
import '@testing-library/jest-dom'

describe('About', () => {
    it("Button has correct background color", () => {
       render(<About />);
       const button = screen.getByRole("button", {
       name: "LinkedIn",
      });
        expect(button).toHaveStyle({ backgroundColor: "#0A66C2" });
    })
})

describe('About', () => {
    it("Button background color change when mouse enter", () => {
       render(<About />);
       const button = screen.getByRole("button");
       fireEvent.mouseEnter(button);
    expect(button).toHaveStyle({ backgroundColor: "#16437E" });
    })
})

