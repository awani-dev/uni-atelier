// Function to dynamically load JSON data and generate DOM elements
async function loadBlocs(jsonFilePath) {
  try {
    const response = await fetch('./blocs.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    const container = document.getElementById('bloc-container');

    data.forEach(item => {
      // Create the parent div
      const blocDiv = document.createElement('div');
      blocDiv.className = 'bloc';

      // Create and populate the h2 element
      const heading = document.createElement('h2');
      heading.textContent = item.title;

      blocDiv.appendChild(heading);


      item.imagesUrl.forEach(url => {
        const image = document.createElement('img');
        image.src = url;

        blocDiv.appendChild(image);

        
      });
      // Append heading and image to the bloc div

      // Append the bloc div to the main container
      container.appendChild(blocDiv);
    });
  } catch (error) {
    console.error('Failed to load JSON data:', error);
  }
}

// Execute the function (replace with your JSON file path)
loadBlocs('data.json');