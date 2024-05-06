import { render, screen } from "@testing-library/react";
import MOCK_DATA from '../mocks/resCardmock.json'
import ResturantCard from "../ResturantCard";
import "@testing-library/jest-dom"

describe('Restaurant Card Page Test Case',()=>{
  test('should render Restaurant Card Component with Data', () => {
     render(<ResturantCard resdata={MOCK_DATA}/>)

    const name =  screen.getByText("Chinese Wok")

    expect(name).toBeInTheDocument()
   })
})