// Function to load SVG content and change its stroke color (contours) to white
function changeSVGColor() {
    // Select all image elements with the specific src attributes for the different icons
    const svgImages = document.querySelectorAll('img.icon.custom.small[src*="icon_crgr.svg"], ' +
                                                 'img.icon.custom.small[src*="icon_lstv.svg"], ' +
                                                 'img.icon.custom.small[src*="icon_fav.svg"], ' +
                                                 'img.icon.tags.small[src*="icon_tags.svg"], ' +
                                                 'img.icon.custom.small[src*="data:image/svg+xml;base64,PHN2ZyBpZD0iY2F0LXBn"], ' + // base64 for icon_cat-pg
                                                 'img.icon.cals.small[src*="icon_cals.svg"], ' + // icon_cals
                                                 'img.icon.prfa.small[src*="icon_prfa.svg"], ' + // icon_prfa
                                                 'img.icon.nots.small[src*="icon_nots.svg"], ' + // icon_nots
                                                 'img.icon.mail.small[src*="icon_mail.svg"], ' + // icon_mail
                                                 'img.icon.nwss.small[src*="icon_nwss.svg"], ' + // icon_nwss
                                                 'img.icon.coms.small[src*="icon_coms.svg"]');   // icon_coms

    svgImages.forEach(img => {
        // Store the original styles and attributes of the img element
        const width = img.width;
        const height = img.height;
        const marginLeft = window.getComputedStyle(img).marginLeft;
        const marginRight = window.getComputedStyle(img).marginRight;
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
                    svgElement.style.marginRight = marginRight;
                    svgElement.style.verticalAlign = verticalAlign;
                    svgElement.style.borderRadius = borderRadius;

                    // Select all path elements and change their stroke color to white
                    const paths = svgElement.querySelectorAll('path');
                    paths.forEach(path => {
                        // Change only the stroke (contours) to white
                        path.style.setProperty('stroke', 'white', 'important');  // Apply stroke white with !important
                    });
                }

                // Replace the image with the modified SVG
                img.parentNode.replaceChild(svgElement, img);
            })
            .catch(error => console.error('Error loading SVG:', error));
    });
}

// Run the function to change the SVG color
changeSVGColor();
