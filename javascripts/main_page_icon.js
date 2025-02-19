// Function to load SVG content and change its fill color while preserving the original styles
function changeSVGColor() {
    // Select all image elements with SVG source
    const svgImages = document.querySelectorAll('img[src*="HeaderIcon.svg"]'); 

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

                    // Modify the SVG fill color (change to white)
                    svgElement.setAttribute('fill', 'white');  // Set fill color to white
                }

                // Replace the image with the modified SVG
                img.parentNode.replaceChild(svgElement, img);
            })
            .catch(error => console.error('Error loading SVG:', error));
    });
}

// Run the function to change the SVG color
changeSVGColor();
