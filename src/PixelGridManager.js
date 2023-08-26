class PixelGridManager {
    constructor(pixelGrid) {
        this.pixelGrid = pixelGrid;
        this.history = [];  // to store all image data changes
        this.historyIndex = -1;  // current position in history
        this.lastImageData = null; 
        this.lastImageSrc = null; // Added this line
       }
    captureScreen() {
        // To be implemented...
    }
    saveCurrentImage() {
        // Remove all entries after the current history index
        // (necessary for redo after a new action is done)
        this.history = this.history.slice(0, this.historyIndex + 1);
        const imageData = this.pixelGrid.ctx.getImageData(0, 0, this.pixelGrid.width, this.pixelGrid.height);
        this.history.push(imageData);
        this.historyIndex++;
        // Optionally, to prevent the history from growing indefinitely:
        const MAX_HISTORY = 20;  // or whatever number you choose
        if (this.history.length > MAX_HISTORY) {
            this.history.shift();
            this.historyIndex--;
        }
    }
    undo() {
        if (this.canUndo()) {
            this.historyIndex--;
            this.pixelGrid.ctx.putImageData(this.history[this.historyIndex], 0, 0);
        }
    }
    redo() {
        if (this.canRedo()) {
            this.historyIndex++;
            this.pixelGrid.ctx.putImageData(this.history[this.historyIndex], 0, 0);
        }
    }
    canUndo() {
        return this.historyIndex > 0;
    }
    canRedo() {
        return this.historyIndex < this.history.length - 1;
    }
    clearLastImageData() {
        this.lastImageData = null;
    }
    applyFilter(filter) {
        for (let y = 0; y < this.pixelGrid.height; y++) {
            for (let x = 0; x < this.pixelGrid.width; x++) {
                const pixel = this.pixelGrid.getPixel(x, y);
                const modifiedPixel = filter(pixel);
                this.pixelGrid.setPixel(x, y, modifiedPixel);
            }
        }
    }
    loadImage(imageSrc, callback = null) {
        if (callback !== null && typeof callback !== 'function') {
            throw new TypeError('Expected the callback to be a function or null.');
        }
        // Check cache first (once you implement caching)
        //...
    const img = new Image();
    img.onload = () => {
        this.drawImage(img, 0, 0, this.pixelGrid.width, this.pixelGrid.height);
        if (callback) callback();
    };
    img.onerror = (err) => {
        console.error("Failed to load the image:", err);
    };
    img.src = imageSrc;
    this.lastImageSrc = imageSrc; 
    }
    drawImage(image, x, y, width, height) {
        const ctx = this.pixelGrid.ctx;
        ctx.drawImage(image, x, y, width, height);
        this.pixelGrid.updateImageData();
        this.lastImageData = this.pixelGrid.ctx.getImageData(0, 0, this.pixelGrid.width, this.pixelGrid.height);
    }
    redrawFromLastImage() {
        if (this.lastImageData) {
            this.pixelGrid.ctx.putImageData(this.lastImageData, 0, 0);
        } else if (this.lastImageSrc) {
            this.loadImage(this.lastImageSrc);
        } else {
            console.error("No image data or source to redraw from.");
        }
    }
    resize(width, height) {
        // First, store the current image data or source for redrawing after resizing
        const currentImageData = this.pixelGrid.ctx.getImageData(0, 0, this.pixelGrid.width, this.pixelGrid.height);
        // Then, resize the canvas
        this.pixelGrid.resize(width, height);
        // Check if we have an image source, and use it to redraw
        if (this.lastImageSrc) {
            const img = new Image();
            img.onload = () => {
                this.pixelGrid.ctx.drawImage(img, 0, 0, width, height);
                this.pixelGrid.updateImageData();
            };
            img.onerror = (err) => {
                console.error("Failed to load the image:", err);
            };
            img.src = this.lastImageSrc;
        } else if (currentImageData) {
            // If we don't have an image source, but have saved ImageData, use that
            this.pixelGrid.ctx.putImageData(currentImageData, 0, 0);
        } else {
            console.log("No image data to resize keeping shade on.");
            this.pixelGrid.initialize();
        }
    }
}
export default PixelGridManager;
