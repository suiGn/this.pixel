# Pixels
`Pixels` is a package containing custom web components for handling pixel-based operations. One of the main components in this package is `PixelGrid`.

First, you install the `this.pixels` package in your project:

```js
npm install this.pixels
```

In your project's `index.js` or any other file where you want to use `PixelGrid`, you import it like this:

```js
const PixelGrid = require('this.pixels');
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



#  Quickstart Guide

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

For this quickstart guide, I am assuming that the `this.pixel` library is structured correctly and can be imported as a Node.js module.

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
