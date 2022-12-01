import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from './Home';
import '@testing-library/jest-dom'

describe('Home', () => {
    it("Go to portfolio page when button click", () => {
       render(<Home />);
       const button = screen.getByRole("button", {
       name: "See my latest project",
      });
      fireEvent.click(button);
      expect(button.closest('a')).toHaveAttribute('href', './projects')
    })
})


