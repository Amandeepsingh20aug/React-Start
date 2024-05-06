# React Basic

# Parcel
- Dev Build
- Local Server
- HMR - Hot module replacement
- File Watching Algorithm - written in C++
- Caching - Faster Build
- Image Optimization
- Minimifaction 
- Bundling
- Compress 
- Consistent hasing
- Code splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- Tree Shaking - Remove unused code 


# EatsEase

* Header
* - Logo
* - Nav Items
* Body
* - Search
* - RestaurantContainer
* - RestaurantCard
*   - Img
*   - Name of Res, Star Rating, cuisine, delery tie
* Footer
*   - Copyright
*   - Links
*   - Address
*   - Contact */

Two types of Export/Import

- Default Export/Import
export default Component; import Component from "path";

- Named Export/Import
export const Component; import {Component} from "path";

# React Hooks
(Normal JS utility functions)
- useState()
- useEffect()

# 2 types of Routing in web apps
- Client side Routing
- Server side Routing

# Redux ToolKit
- Install @reduxjs/toolkit ans react-redux
- Build our Store
- Connect our store to app
- Slice (CartSlice)
- dispatch(action)
- Selector

# Types of testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our App
- Install React tseting Library
- Install Jest
- Intalled Bable dependencies
- Configure Babel
- Configure Parcel Config file to Disable default bable transpilation
- Jest Configration (npx jest --init)
- Install JsDom library
- Intall @babel/preset-react - to make JSX work in test Case
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom