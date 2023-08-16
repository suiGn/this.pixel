<img src="./_._.svg" alt="SVG Image" width="123" height="123" style="width123px; height:123px;">

# this.pixel

## Installation
npm install this.pixel

`Pixels` is a package containing custom web components for handling pixel-based operations. One of the main components in this package is `PixelGrid`.

Responsibility: Display pixels and provide basic interactions with them.
It's a visual component that could be utilized by other modules or functionalities.
this.pixel module:

Responsibility: High-level operations on pixels, source management (like webcam feed), processing, transformations, and other functionalities.
Utilizes the PixelGrid for visual representation and feedback but is not limited by it.

First, you install the `this.pixels` package in your project:
```bash
npm install this.pixel
```
In your project's `index.js` or any other file where you want to use `PixelGrid`, you import it like this:
```js
const PixelGrid = require('this.pixel');
```
Now, you can create an instance of `PixelGrid` and use it as needed:

```js
const pixelGrid = new PixelGrid(800, 600); // Create a new instance with width 800 and height 600
// Get the color of a specific pixel at coordinates (x, y)
const pixelColor = pixelGrid.getPixel(x, y);
// Set the color of a specific pixel at coordinates (x, y)
pixelGrid.setPixel(x, y, [255, 0, 0, 255]); // Set the pixel to red
// Access all the pixels in the pixel grid
const allPixels = pixelGrid.pixels;
```

The `PixelGrid` class will now be available for you to use in your project, thanks to the `this.pixels` package. It provides an abstraction over the canvas element and allows you to perform low-level manipulation of image data using its methods.

```js
const { PixelGrid, CanvasManager } = require('this.pixels');
const myPixelGrid = new PixelGrid({ width: 500, height: 500, pixelSize: 2 }); 
const myCanvasManager = new CanvasManager(myPixelGrid);
// Ahora puedes usar los métodos de CanvasManager
myCanvasManager.applyFilter(...);
myCanvasManager.resize(...); // etc.
```

Use the attribute in your HTML:
If you want the canvas to be optimized for frequent reads:
<pixel-grid will-read-frequently="true"></pixel-grid>
If you don't want to optimize for frequent reads:
<pixel-grid></pixel-grid>
Or:
<pixel-grid will-read-frequently="false"></pixel-grid>
willReadFrequently in Canvas 2D Context
The willReadFrequently option is a flag that can be set when obtaining a 2D rendering context for an HTML <canvas> element. It provides a hint to the browser about how you intend to use the canvas, specifically whether you'll be reading back pixel data from it frequently or not.
Usage:
const ctx = canvas.getContext('2d', { willReadFrequently: true });
Values:
true: This suggests that you intend to read the canvas pixel data frequently using methods like getImageData(). When set to true, the browser might optimize read operations, potentially at the expense of write/draw operations.
false (default): This is the standard behavior where the browser assumes that you're primarily drawing to the canvas and not reading back the data frequently.
When to use it:
Use true when:
You need to frequently retrieve pixel data from the canvas, for example, for image processing or analysis tasks.
You're building tools like color pickers that need to continuously sample pixel values.
Use false when:
Your primary operations are drawing, rendering, or animating on the canvas, and you rarely need to read the pixel data.
You're developing games, animations, or visualizations where the main concern is the rendering performance.
Conclusion:
The willReadFrequently option gives developers finer control over canvas performance trade-offs. By signaling the browser about your primary use-case, you can potentially achieve better performance for your specific needs. However, it's essential to test the actual performance in real-world scenarios, as the optimization effects can vary based on the browser and the underlying hardware.

Library Export in Webpack Config: In the Webpack configuration, we're defining a library output as pixels. When the bundling is complete, you should be able to access exported functions or classes via the global pixels object in the browser.

Given that, if you are trying to instantiate or call any methods in your HTML, you should be referencing them through this pixels object, like:

const instance = new pixels.PixelGridManager();

Using the function in another module:
Now, let's assume you have another JavaScript file/module in your project, say main.js. In this file, you want to add a PixelGrid to the body, but only under certain conditions (like when a button is clicked). Here's how you'd do it:


// main.js
// Import the function from pixels.js
import { addPixelGridToBody } from './path/to/pixels';
// Use the function when needed
document.querySelector("#addGridButton").addEventListener("click", function() {
    addPixelGridToBody();
});

In this example, when an HTML element with the ID addGridButton is clicked, it will trigger the addPixelGridToBody function, adding a PixelGrid to the document's body.

The 'path-to-pixels' in the import statement should be replaced with the relative path from the module you're importing to, to the module you're importing from. So if main.js and pixels.js are in the same directory, the import statement would be:

import { addPixelGridToBody } from './pixels';

If pixels.js is in a subdirectory named src, it would be:

import { addPixelGridToBody } from './src/pixels';

### Conceptual Flow:

- [ ] Set up your context with [this.me.](https://www.npmjs.com/package/this.me)
- [ ] Create a neural network using [neurons.me](https://www.neurons.me).
- [ ] Define the data you'd like your neural network to recognize or process with [this.](https://www.neurons.me/this) modules.
- [ ] Use [this.be](https://www.npmjs.com/package/this.be) to maintain a state or context, - watching over the [PixelGrid](https://www.npmjs.com/package/this.pixel) and any other states you define for example.
- [ ] Define desired status and handlers, [be.this](https://www.npmjs.com/package/be.this).
- [ ] Keep [i.mlearning](https://www.npmjs.com/package/i.mlearning).

 How to use the `this.pixel` library with the `PixelGrid` class:

```js
// Import the library
const { PixelGrid } = require('this.pixels');

// Create a new PixelGrid instance
let pixelGrid = new PixelGrid({
    width: 800, 
    height: 600,
    pixelSize: 2
});

// Set a pixel at position (10, 20) with red color
pixelGrid.setPixel(10, 20, [255, 0, 0, 255]);
// Get the pixel at position (10, 20)
let pixel = pixelGrid.getPixel(10, 20);
console.log(pixel); // Logs: [255, 0, 0, 255]
// You can now use this pixel data for various operations...
```

Remember, this is a basic example. Depending on your application, you can create complex pixel manipulation operations using the `getPixel` and `setPixel` methods. You might want to apply filters, perform image processing operations, create visual effects, and much more.

Also, don't forget that the color data is in RGBA format. Each color value is an integer from 0 to 255, and the alpha value represents the opacity of the pixel (0 = fully transparent, 255 = fully opaque).

If you have implemented additional methods such as `applyFilter`, `loadImage`, `drawImage`, you would use them similarly, by calling the method on your `pixelGrid` instance.

For example, you had an `applyFilter` method, you could use it like this:

```js
// Define a simple filter function to invert colors
function invertColors([r, g, b, a]) {
    return [255 - r, 255 - g, 255 - b, a];
}
// Apply the filter to all pixels
pixelGrid.applyFilter(invertColors);
```

This would invert the colors of all pixels in the `pixelGrid`. Please replace the code with your actual implementation. This is just a simple example.

## PixelGrid
`PixelGrid` is a web component that provides an abstraction over a standard HTML5 Canvas. It makes the canvas behave like a 2D array (or matrix) of pixels..., where each pixel can be accessed or modified individually. This class is primarily designed for use in projects involving neural networks, machine learning and similar data-intensive applications.

The pixels of the canvas are stored in a 1D array in RGBA format, where each pixel is represented as an array of 4 integers (from 0 to 255) representing the red, green, blue and alpha (transparency) values respectively. The class provides methods for getting and setting the color of individual pixels. **PixelGrid** allows for low-level manipulation of image data, enabling complex image processing tasks. It is particularly suited for applications that need to treat image data as a vector or matrix of numerical values, such as neural network-based image classifiers, image filters, and other machine learning algorithms.

**Note:** This class assumes that the width and height of the canvas are specified at the time of instantiation, and does not currently support dynamically resizing the canvas. The canvas is assumed to be empty at initialization, and the `initialize` method must be called before the canvas can be used.

This class extends the HTMLElement and can be used directly in the HTML like this:
```html
<pixel-grid width="400" height="300"></pixel-grid>
```

# Context of Abstraction for Machine Learning Standardization
Traditional web development elements, from images to audio, are designed mainly for display and interaction. But what if they could be seamlessly converted into standardized formats primed for machine learning? That's the vision behind the **this.** modules.

An Introduction to the this. JavaScript Library: Standardizing Web Development Elements for Machine Learning.

## Principles Behind the this. Library:

- ### **Abstraction for ML:**
 The library's core principle is to abstract traditional web elements so that they're immediately primed for machine learning. It's about viewing web content not just as data but as structured, consistent, and standardized data.

- ### **Built on Web Standards:** 
Rooted in JavaScript, the this. library builds upon public web development standards. The aim is to ensure that developers remain within familiar territories, even as they venture into the world of machine learning.

- ### **Open and Collaborative:** 
The this. library champions open standards. By leveraging public web standards, it invites collaboration, hoping to create a community that continually refines and enhances the bridge between web development and machine learning.

[neurons.me](https://www.neurons.me)
[neurons.me/this](https://www.neurons.me/this)

# Clone THIS Sandbox DEMO Playground
Welcome to the Playground, where the entire THIS.ME suite comes together with NEURONS.ME to provide a rich development and execution environment for your AI adventures.

## Sandbox Demo Quick Start
### 1. Clone the Repository
```bash
git clone https://github.com/suiGn/.me.git
```
### 2. Navigate to the Project Directory
```bash
cd .me
```
### 3. Install Dependencies
You can use either Yarn or npm to install the necessary dependencies.
Using Yarn:
```bash
yarn install 
```
Using npm:
```bash
npm install
```
### 4. Launch the Application
```
npx electron index.js
```

## License & Policies
- **License**: MIT License (see LICENSE for details).
- **Privacy Policy**: Respects user privacy; no collection/storage of personal data.
- **Terms of Usage**: Use responsibly. No guarantees/warranties provided. [Terms](https://www.neurons.me/terms-of-use) | [Privacy](https://www.neurons.me/privacy-policy)