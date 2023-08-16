//pixels.js
import PixelGrid from 'this.pixelgrid';
import PixelGridManager from './PixelGridManager'; 

export {
    PixelGrid,
    PixelGridManager
};

// A convenient function to add a PixelGrid to the DOM:
export function addPixelGridToBody() {
    const grid = new PixelGrid();
    document.body.appendChild(grid);
    const manager = new PixelGridManager(grid);
    console.log("PixelGrid added to body.");
}

