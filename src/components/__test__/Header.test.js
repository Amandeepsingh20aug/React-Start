import {render, screen,fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

describe('Header Page Test Case',()=>{
  test('should render Header Component with login button', () => { 
    render(
      <BrowserRouter>
      <Provider store={appStore}>
    <Header/></Provider></BrowserRouter>)

    const login = screen.getByRole('button',{name: "Login"});

    expect(login).toBeInTheDocument()
   });

   test('should render Header Component with Cart Item ', () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
    <Header/></Provider></BrowserRouter>)
     
     const CartItems = screen.getByText(/Cart/)

     expect(CartItems).toBeInTheDocument();
    })

    test('should Change login button to logout on click ', () => {
      render(
        <BrowserRouter>
        <Provider store={appStore}>
      <Header/></Provider></BrowserRouter>)
       
       const login = screen.getByRole('button',{name: "Login"});

       fireEvent.click(login);

       const logout = screen.getByRole('button',{name: "Logout"});

       expect(logout).toBeInTheDocument()
      })

})