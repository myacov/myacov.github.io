// Fetch the projects.json file
fetch('./projects.json')
    .then(response => response.json())
    .then(projects => {
        // Get the projects container
        const container = document.getElementById('feat-projects-container');
      
        // Iterate through the projects array and create the HTML elements
        projects.forEach(project => {
            // Check if the project should be displayed
            if (project.featured) {  
              // Create an article for each project
              const article = document.createElement('article');
          
              // Add the project details
              article.innerHTML = `
                  <header>
                    <h2>Featured: ${project.title}</h2>
                  </header>
                  <a href="${project.link}" class="image fit" target="_blank" rel="noopener noreferrer">
                    <img src="${project.image}" alt="${project.title}" />
                  </a>
                  <p>${project.description}</p>
                  <p>Technologies Used: ${project.technologies.join(', ')}</p>
                  <ul class="actions special">
                    <li><a href="${project.link}" class="button" target="_blank" rel="noopener noreferrer">Check it out</a></li>
                  </ul>
              `;
          
              // Append the article to the container
              container.appendChild(article);
            }
        });
    })
    .catch(error => {
        console.error("Error loading projects:", error);
    });
