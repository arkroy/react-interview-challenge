# SHIPPING LABEL MAKER

This project uses react a mock a wizard flow experience for a shipping label creator, created using create-react-app. 

## INSTALLATION

Unzip or clone the project files on your disk. Then open terminal and navigate to the unzipped folder and run `npm install` to install all dependencies, followed by `npm run start` to run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# TODO
### 1. DROPDOWN COMPONENT
src/components/atoms/Dropdown/index.jsx exposes a dropdown component.
src/shared/constants/selectOpts provides arrays to populate values in a dropdown

Write a function to use the arrays and prepopulate the dropdown options. Write a test for the function.

### 2. ROUTE CONTROLLER
src/shared/appRouter/routeController.js provides a controller for routing the application
Write a function which would accept 2 args - errorState and activeRoute and return an object with next route, previous route, and progress % based on ROUTES_CONFIG array provided.

    nextPage: '',
    previousPage: '',
    progress: parseInt((currentIndex / arrayLength) * 100, 10)


### 3. CALCULATOR
src/shared/appUtils/calculatorUtil/index.js write a function to calculate the shipping cost. 
const shippingRate = 0.40;
shippingCost = weight * shippingRate *
(shippingOption === ShippingOption.ground ? 1 : 1.5);
Write a test for the function.


### 4. POSTING DATA
src/components/templates/WizardMaster/context/Provider.jsx
Trigger a post call to https://jsonplaceholder.typicode.com/posts with the payload from all previous form entries, while injecting the AUTH TOKEN from the session storage in the request header, when the user clicks on next in the review page.

const requestObject = {
    from: {
      name: shippingWeightContext.name,
      street: shippingWeightContext.address,
      city: shippingWeightContext.city,
      state: shippingWeightContext.state,
      zip: shippingWeightContext.zipcode,
    },
    to: {
      name: recipientContext.name,
      street: recipientContext.address,
      city: recipientContext.city,
      state: recipientContext.state,
      zip: recipientContext.zipcode,
    },
    weight: ShippingWeightContext.weight,
    shippingOption: ShippingOptionsContext,
  };

