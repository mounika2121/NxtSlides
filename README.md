### Project Description

In this project, you are going to build a **Nxt Slides** Application.

### User stories

- Users using this application should be able to see the slide tabs in the slide tabs panel.
- Initially, users should be able to see,
  - The first slide tab as an active slide tab.
  - The active slide tab in the current slide.
        
    ![https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-lg-output.png](https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-lg-output.png)

- Users should be able to click,
  - The Slide tabs in the slide tabs panel. When clicked,
    - The clicked slide tab should be displayed as an active slide tab.
    - The clicked slide tab should be displayed in the current slide.
  - The **Heading** and **Description** texts in the current slide. When they are clicked, then the corresponding **Heading** and **Description** texts should be able to update.
    - When the **Heading** and **Description** texts in the current slide are updated, then the updated texts should also be displayed in the slide tab item in the slide tabs panel.
    - For Reference ([Updated Heading View](https://assets.ccbp.in/frontend/content/react-js/nxt-slides-edit-heading-lg-output.png), [Updated Description View](https://assets.ccbp.in/frontend/content/react-js/nxt-slides-edit-description-lg-output.png))
  - The **New** button on the page, When clicked,
    - A new slide tab should be added to the slide tabs panel.
    - `Heading` and `Description` should be the texts for **Heading** and **Description**.
    - The new slide tab should be added after the active slide tab.
    - The new slide tab should be displayed as an active slide tab.
    - The new slide tab should be displayed in the current slide.
        
    ![https://assets.ccbp.in/frontend/content/react-js/nxt-slides-new-slide-lg-output.png](https://assets.ccbp.in/frontend/content/react-js/nxt-slides-new-slide-lg-output.png)

### Project set-up instructions

<details>
<summary>To start the development process, follow the below steps</summary>
<br/>

1. Download [Node](https://nodejs.org/en/download/) on your local system - Windows OS, Linux/Mac OS
2. Download the [zip file](https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/react-js/coding-practices/nxtSlides/nxtSlides.zip).
3. Unzip the zip file on your local machine.
4. Run the command "npm install" in the terminal to install all the necessary dependencies.
5. Run the command "npm start" in the terminal to start the development server.
6. The app can be viewed in the browser by using the LOCAL URL [http://localhost:3000/](http://localhost:3000/).
7. You can start the development process by going through the **README** in the given file.
8. Don’t use any third-party packages.

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

  - Use normal HTML elements to style the React Components. Usage of styled-components (CSS in JS) to style React components is not supported. Test cases won't be passed if styled components are used.
  - Every slide tab item should be displayed as a list item in the slide tabs panel and should contain the testid with value as `slideTab{slideNumber}`, here `slideNumber` is the sequence order of the slide tab.
  - Refer to the below Example for the usage of `testid` in the HTML elements.
    - Example: `<div testid="slide" className="slide-item"/>`.
  - The Nxt Slides logo image in Navbar should contain alt text as `nxt slides logo`. 
  - The New plus icon image inside the **New** button should contain alt text as `new plus icon`.
  - Responsiveness is not required.
  - Routes should not be used

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png](https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png) alt should be **nxt slides logo**
- [https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png](https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png) alt should be **new plus icon**
- [https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-bg.png](https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-bg.png) **slide background image**

</details>

<details>
<summary>Colors</summary>

<br/>

**Background Colors**:

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>
<br/>

**Text Colors**:

<div style="background-color: #dbeafe; width: 150px; padding: 10px; color: black">Hex: #dbeafe</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #0967d2; width: 150px; padding: 10px; color: white">Hex: #0967d2</div>
<br/>
</details>

<details>
<summary>Font-families</summary>

- Bree Serif
- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**

### Project submission instructions:

<details>
<summary>Project Submission should contain:</summary>

- GitHub repository link to your code.
- A video link. video should contain a code walkthrough and explain your application.
  - Make at least a 5-minute video explaining your code and the features that you have implemented.
  - Upload the recorded video to your YouTube account.
  - Refer to [**this**](https://www.youtube.com/watch?v=VtF2AgFSLAw) video to get a better understanding of uploading videos to your YouTube account.
- Follow the below points
  - Standard naming conventions
  - The code must be easily understandable
  - The code must be readable
</details>