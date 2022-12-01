import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';
import '@testing-library/jest-dom'

describe('ProjectCard', () => {
    it("Counter working when button clicked", () => {
       render(<ProjectCard 
       name={'Quiver'}
       picture={'https://images.unsplash.com/photo-1604339454148-1c23f0b5d156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'}
       description=
      {"Our project Quiver was chosen II from 220 competitors from around the world. The idea was based on two elements: garden and tower. Garden a field of biomass tall grass, a sort of public park, that could be planted and cuted in various patterns to create a path that leads to the tower."}
       />);

      const button = screen.getByRole("button", {
       name: "♡",
      });
      fireEvent.click(button);
      const counter = screen.getByTestId("counterId").textContent;
      
       expect(counter).not.toBe("0");
    })
})


