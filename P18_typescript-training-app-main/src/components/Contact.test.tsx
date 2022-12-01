import { fireEvent, render, screen } from "@testing-library/react"
import { Contact } from "./Contact"

describe('Form', () => {
    it('should send aproval message when all info was provided', () => {

        render(<Contact />)
        const emailInput = screen.getByTestId("email-input");
        const messageInput = screen.getByTestId("message-input");
        const submitButton = screen.getByRole("button");

        fireEvent.change(emailInput, { target: { value: 'mail@mail.com'}});
        fireEvent.change(messageInput, { target: { value: 'xyz'}});
        fireEvent.click(submitButton);

        const submitMessage = screen.getByTestId("submitMessage").textContent;

        expect(submitMessage).toEqual("Thank you for your message!")
    })
})

describe('Form', () => {
    it('should send disaproval message when all info was provided', () => {

        render(<Contact />)
        const emailInput = screen.getByTestId("email-input");
        const messageInput = screen.getByTestId("message-input");
        const submitButton = screen.getByRole("button");

        fireEvent.change(emailInput, { target: { value: 'mail@mail.com'}});
        fireEvent.change(messageInput, { target: { value: ''}});
        fireEvent.click(submitButton);

        const submitMessage = screen.getByTestId("submitMessage").textContent;

        expect(submitMessage).toEqual("Some fields are missing!")
    })
})