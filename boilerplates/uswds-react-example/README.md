This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## The US Web Design System (USWDS) React Example App

USWDS is a library of code, tools, and guidance to help government teams design and build fast, accessible, mobile-friendly government websites backed by user research and modern best practices.  Simply put, it provides a foundation of **components**, **design tokens**, **utilities**, and **page templates** that allows developers and designers to move on from the many basic decisions that need to be made in developing an app and focus on more important ways to get the message of the site out to its users.

Below, is a quickstart to understanding **what composes the USWDS**, **how to install it for usage in a React App**, **implementing the basics** and **customizing it to serve a particular purpose**.


### Basic overview of the USWDS architecture
[This link describes the component technologies that are part of the USWDS](https://designsystem.digital.gov/documentation/developers/#css-architecture)

### Installing the USWDS
 - [Download the USWDS using the instructions here.](https://designsystem.digital.gov/documentation/developers/#download).
 - Use the file structure recommended in the docs (i.e. create a _/stylesheet_ subdirectory and a _/img_ subdirectory under the _/assets_ subdirectory).
 - [Install the USWDS as a dependency using NPM (instructions here)](https://designsystem.digital.gov/documentation/developers/#install-using-npm)

### Using the USWDS with React
 - Add the following three imports to your _index.js_ file.
   - import "uswds/dist/js/uswds";
   - import "../src/assets/uswds-2.9.0/css/uswds.min.css";
   - import "./index.scss";
 Please note that the *uswds/dist/js/uswds* import must refer to the node_modules version of this file.

### Implementing components in your application
 - [Here is a list of the components currently available and their associated code](https://components.designsystem.digital.gov/).  
   - After following the installation instructions above, integrate a component into your project, you should see the component in the browser with the default characteristics that have been set up in the USWDS.  
   - You should have to complete only minimal customization of the markup.  
   - Interactivity such as opening/closing of buttons and dropdowns should be available.  
    - All code should work as it does in the examples in the above link.  If the interactivity does not work, something is incorrect in the installation.

### Customizing Stylesheets
 - Copy *your-project/src/assets/uswds-2.9.0/scss/theme/styles.scss* to the **index.scss** in the *your-project/sr** folder.

 - Change the **@import** statement so they reflect the current path to those **.scss** files.  If you are following this example, then the **@import** path should read *"./assets/uswds-2.9.0/scss/theme/uswds-theme-general"*.

 - Copy the *your-project/src/assets/uswds-2.9.0/scss/theme/_uswds-theme-custom-styles.scss* into the *your-project/src/assets/stylesheets* subdirectory.  Review your **index.scss** and make sure the final **@import@** statement as the correct path to this file.  If you followed the instructions above, the path should read *_.assets/stylesheets/__uswds-theme-custom-styles*.

 - It is within this *_uswds-theme-custom-styles* .scss file that you can add customizations.  You can add other stylesheets with this method.

 ### Notes

 #### general notes

 - The USWDS has already included responsiveness in the system.  If you wish to extend the responsiveness, you should utilize **tokens** and **theme-setting**.  [Click for more guidance](https://designsystem.digital.gov/documentation/developers/#customization-theming-and-tokens).

 - When copying any markup into a React component, class names need to be changed from **class** to **className** to avoid warnings.

 - Images and Inputs need a closing **/** at the then of the tag.

#### using images

 - In order to render local images, you often have to require them.  Here are two options you might need to consider:
    - **require('../assets/images)**
    - import an image into the component:  **import testImg from '../assets/images'**

 - To avoid issues with images, evaluate the size of the default image and create your image to those dimensions before substituting a new one.

 - Images are implemented in, at least, two ways in the USWDS:
    - the **src** attribute of the <img> tag
    - a **css property** such as background-image.
    

