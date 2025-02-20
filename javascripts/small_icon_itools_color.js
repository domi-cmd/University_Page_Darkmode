function changeSVGColors() {
    // Select the specific SVG element by its ID
    const svgElement = document.querySelector('svg#_1_Kopie_Kopie');

    // Ensure the SVG element exists before modifying it
    if (svgElement) {
        // Targeting all path and polygon elements inside the SVG and changing their stroke and fill color
        const paths = svgElement.querySelectorAll('path');
        const polygons = svgElement.querySelectorAll('polygon');

        // Apply the white stroke and fill to all path elements
        paths.forEach(path => {
            path.style.setProperty('stroke', 'white', 'important');
            path.style.setProperty('fill', 'none', 'important'); // Or use 'white' if you want to fill the path
        });

        // Apply the white stroke to all polygon elements
        polygons.forEach(polygon => {
            polygon.style.setProperty('stroke', 'white', 'important');
            polygon.style.setProperty('fill', 'none', 'important'); // Or use 'white' for fill
        });

        // For circle elements, change their stroke and fill if needed
        const circles = svgElement.querySelectorAll('circle');
        circles.forEach(circle => {
            circle.style.setProperty('stroke', 'white', 'important');
            circle.style.setProperty('fill', 'none', 'important'); // Or 'white' to fill with white
        });
    }
}

// Call the function to change the colors
changeSVGColors();
