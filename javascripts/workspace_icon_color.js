// Function to load SVG content and change its fill color while preserving the original styles
function changeSVGColor() {
    // Select the image element with the specific src attribute (for icon_comu.svg)
    const svgImages = document.querySelectorAll('img[src*="icon_wksp.svg"]');  // Adjusted to target "icon_comu.svg"

    svgImages.forEach(img => {
        // Store the original styles and attributes of the img element
        const width = img.width;
        const height = img.height;
        const marginLeft = window.getComputedStyle(img).marginLeft;
        const verticalAlign = window.getComputedStyle(img).verticalAlign;
        const borderRadius = window.getComputedStyle(img).borderRadius;
        
        // Fetch the SVG file (using fetch)
        fetch(img.src)
            .then(response => response.text())
            .then(svgContent => {
                // Create a temporary div to insert the SVG content
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = svgContent;

                // Get the SVG element
                const svgElement = tempDiv.querySelector('svg');
                
                if (svgElement) {
                    // Apply the original width, height, margin, and other styles to the SVG
                    svgElement.setAttribute('width', width);
                    svgElement.setAttribute('height', height);
                    svgElement.style.marginLeft = marginLeft;
                    svgElement.style.verticalAlign = verticalAlign;
                    svgElement.style.borderRadius = borderRadius;

                    // Modify the SVG fill color to white and apply !important
                    svgElement.setAttribute('fill', 'white');  // Set fill color to white with !important
                    svgElement.style.setProperty('fill', 'white', 'important'); // Use !important for the fill
                    
                    // Select all paths and modify the 'fill' attribute to white with !important
                    const paths = svgElement.querySelectorAll('path');
                    paths.forEach(path => {
                        path.setAttribute('fill', 'white');  // Overriding fill for each path
                        path.style.setProperty('fill', 'white', 'important');  // Apply !important to each path
                    });

                    // Select the style element and modify the .cls-1 class's fill property to white with !important
                    const style = svgElement.querySelector('style');
                    if (style) {
                        style.innerHTML = style.innerHTML.replace(/fill:[^;]+;/g, 'fill:white !important;');
                    }

                    // Optionally: If the SVG uses stroke, you can modify it as well
                    const strokes = svgElement.querySelectorAll('[stroke]');
                    strokes.forEach(stroke => stroke.setAttribute('stroke', 'white')); // If any strokes exist, set to white
                }

                // Replace the image with the modified SVG
                img.parentNode.replaceChild(svgElement, img);
            })
            .catch(error => console.error('Error loading SVG:', error));
    });
}

// Run the function to change the SVG color
changeSVGColor();
