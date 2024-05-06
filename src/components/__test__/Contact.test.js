import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us page Test Case",()=>{
  it('should load Contact Us component', () => {
    render(<Contact/>);
  
    const heading =  screen.getByRole("heading")
  
    expect(heading).toBeInTheDocument()
  })
  
  it('should load button inside Contact Us component', () => {
    render(<Contact/>);
  
    const button = screen.getByText("Submit")
  
    expect(button).toBeInTheDocument()
  })
  
  it('should load input inside Contact Us component', () => {
    render(<Contact/>);
  
    const input = screen.getByPlaceholderText("name")
  
    expect(input).toBeInTheDocument()
  })
  
  it('Should load 2 input boxes on the contact', () => {
  
    render(<Contact/>);
  
    const inputboxes = screen.getAllByRole("textbox");
  
    expect(inputboxes.length).toBe(2);
  })
})

