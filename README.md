<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
</head>
<body>

<h1>Selenium Automation for Evershop Product Search and Add to Cart</h1>

<p>This project automates the product search and add-to-cart functionality on the Evershop demo e-commerce website using Selenium and Node.js.</p>

<h2>Project Overview</h2>
<p>The project is designed to automate the "Happy Path" for searching the product “Nike react phantom run flyknit 2” on the Evershop demo website and adding two small-sized black variants of the product to the cart. This is part of a manual testing assessment and demonstrates automation of the journey using the Selenium framework.</p>

<h3>Key Features:</h3>
<ul>
    <li>Search for a product using dynamic keywords.</li>
    <li>Select product size and color.</li>
    <li>Update product quantity.</li>
    <li>Add product to the cart.</li>
    <li>Verify the product is added successfully.</li>
</ul>

<h2>Prerequisites</h2>
<p>To run this project, you will need to have the following installed:</p>
<ul>
    <li><strong>Node.js</strong> (Version 14.x or higher)</li>
    <li><strong>Selenium WebDriver</strong> (for Chrome)</li>
    <li><strong>Chrome browser</strong></li>
    <li><strong>Git</strong> (optional, for cloning the repo)</li>
</ul>

<h2>Setup Instructions</h2>

<ol>
    <li>Clone this repository:
        <pre><code>git clone &lt;your-github-repo-url&gt;
cd &lt;your-repo-name&gt;
        </code></pre>
    </li>
    <li>Install the necessary npm packages:
        <pre><code>npm install selenium-webdriver</code></pre>
    </li>
    <li>Run the automated script:
        <pre><code>node &lt;your-script-name&gt;.js</code></pre>
    </li>
</ol>

<h2>Test Case Description</h2>
<p>The script performs the following actions:</p>
<ol>
    <li>Opens the Evershop demo website.</li>
    <li>Maximizes the browser window for better visibility.</li>
    <li>Clicks on the search icon to open the search bar.</li>
    <li>Enters the keyword "Nike" into the search bar and presses Enter.</li>
    <li>Finds the product “Nike react phantom run flyknit 2” and selects it.</li>
    <li>Chooses the small size and black color.</li>
    <li>Updates the product quantity to 2.</li>
    <li>Adds the product to the cart.</li>
    <li>Verifies the product has been successfully added by checking the cart.</li>
</ol>

<h2>Technologies Used</h2>
<ul>
    <li><strong>Selenium WebDriver</strong>: For browser automation.</li>
    <li><strong>Node.js</strong>: JavaScript runtime for executing the test.</li>
    <li><strong>Chrome</strong>: Browser used for testing.</li>
</ul>

<h2>How to Modify the Script</h2>
<p>To change the product being searched, update the <code>productname</code> variable at the beginning of the script.</p>
<p>For altering the size, color, or quantity, modify the corresponding XPath selectors in the script.</p>

<h2>Known Issues</h2>
<p>The script currently assumes the Chrome browser is installed on your machine. Ensure the correct version of ChromeDriver is used if you encounter compatibility issues.</p>

<h2>Future Enhancements</h2>
<ul>
    <li>Implement better error handling for failed test cases.</li>
    <li>Generate detailed test reports and logs.</li>
    <li>Add support for testing with multiple browsers using WebDriver options.</li>
</ul>

<h2>License</h2>
<p>This project is open-source and available under the <a href="LICENSE">MIT License</a>.</p>

</body>
</html>

 
