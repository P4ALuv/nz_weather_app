


# Weather System

## Introduction

This project is a web application designed to display weather information for various cities in New Zealand. It utilizes Bootstrap for styling and responsive design.

## step1.Integrating Bootstrap

Bootstrap is incorporated into the project for quick and responsive styling. Here's how Bootstrap has been added:

1. Bootstrap CSS: The Bootstrap CSS is included in the `<head>` section of the `index.html` file using a CDN link. This allows us to use Bootstrap's class definitions throughout the application without additional installation steps.

in the index.html file
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

2. Bootstrap JavaScript: The Bootstrap JavaScript bundle, which includes Popper, is included just before the closing </body> tag. It's also added using a CDN link. This script is necessary for Bootstrap components that require JavaScript, like modals and dropdowns.

in the index.html file
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

These CDN links load Bootstrap's compiled and minified CSS and JS, ensuring that the application has a consistent and modern design without the need for local files or additional build steps.

## step2.Project Setup

### 1.Understanding the Navigation Bar Setup
First create a Navbar.jsx

The navigation bar is a key component of the Weather System application. It is set up using React and Bootstrap for a responsive design. Here's a breakdown of the `Navbar` component:

- The `Navbar` uses the Bootstrap classes for styling and responsiveness.
- The brand logo is labeled "NZ WEATHER", which could link to the home page or another relevant section.
- The navigation bar is collapsible, making it suitable for different screen sizes, including mobile devices.
- It contains navigation links for "Home" and "City Selector". These links use the `onSelect` callback function passed as a prop to navigate within the single-page application without refreshing the page.

When a user clicks on these links, the `onSelect` function is triggered with either 'home' or 'citySelector' as arguments, which the parent component can use to conditionally render the corresponding component.

Ensure to include `onSelect` in the parent component's state logic to manage which component is currently displayed based on user interaction.

### 2.Home Component
First create a Home.jsx

The `Home` component serves as the landing page of the application and is responsible for displaying an overview of New Zealand cities and their notable landmarks. Here's how it functions:

- The component receives `cities`, an array of city objects each containing `name`, `lat`, `lon`, `landmark`, `description`, and `imageUrl`.
- It uses Bootstrap grid layout to organize city information into responsive cards.
- Each card displays a city image, name, landmark, and a brief description. The Bootstrap classes `bg-dark` and `text-white` are used to style the cards with a dark background and white text for readability.
- The cards are designed to be fully responsive, adjusting to different screen sizes while maintaining a clean and attractive layout.

### 3.City Selector
First create a CitySelector.jsx

The `CitySelector` component is a dropdown menu that enables users to select a city from a predefined list. This list includes major cities in New Zealand, allowing the user to view weather details for their chosen location.

### Implementation

This component is implemented as a functional React component that takes `onSelectCity` as a prop. This is a callback function that updates the parent component's state with the selected city.

The cities array contains the names of cities to be displayed in the dropdown. When a city is selected, the onChange event triggers the onSelectCity function, passing the value of the selected option. This updates the state of the parent component, which can then be used to fetch and display the weather information for the selected city.

The component uses Bootstrap classes to ensure a consistent and responsive design. The input-group and form-select classes provide a styled dropdown that matches the overall dark theme of the application.

### 4.Weather Card
First get the openweathermap api and store it in the .env file
Then create Weathercard.jsx

The `WeatherCard` component is responsible for displaying the current weather information for a selected city. It utilizes the OpenWeatherMap API to fetch and present weather details.

### How it Works

Here's an overview of the component's functionality:

```jsx
function WeatherCard({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Define the function for fetching weather data
    const fetchWeatherData = async () => {
      // Construct the URL for the OpenWeatherMap API call
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`;
      
      try {
        // Perform the API call with axios
        const response = await axios.get(currentWeatherUrl);
        // Update state with the received weather data
        setWeatherData(response.data);
      } catch (error) {
        // Log any errors encountered during the fetch
        console.error("Error fetching weather data", error);
      }
    };

    // Call the fetch function
    fetchWeatherData();
  }, [city]); // The effect runs whenever the 'city' variable changes

  // Show a loading message until the data is fetched
  if (!weatherData) return <p>Loading weather data for {city}...</p>;

  // Destructure the necessary data from the weatherData state
  const { main, weather, wind, sys } = weatherData;

  // Render the weather card with the data
  return (
    <div className="card my-3">
      // ... card content
    </div>
  );
}

export default WeatherCard;

The component first declares a piece of state weatherData to store the weather information. The useEffect hook triggers the fetchWeatherData function whenever the city prop changes. This function makes an HTTP GET request to the OpenWeatherMap API with the selected city name and the API key stored in an environment variable REACT_APP_OPENWEATHERMAP_API_KEY. Upon successful data retrieval, the weather information is stored in the weatherData state.

Display
If the weatherData is not yet loaded, a loading message is displayed. Once the data is available, it's destructured to extract relevant details such as temperature, weather conditions, humidity, pressure, wind speed, and sunrise/sunset times, which are then displayed in a styled card using Bootstrap classes for consistent styling.

Environment Variable
Make sure to replace the placeholder REACT_APP_OPENWEATHERMAP_API_KEY with your actual API key from OpenWeatherMap in your .env file.

Error Handling
In case of an error during the API call, it is logged to the console for debugging purposes.

### App Component

Key Functionalities
Navbar Interaction: Allows the user to switch between the 'Home' and 'City Selector' views. The onSelect callback in Navbar triggers handleNavSelect which updates the state accordingly.
Dynamic Rendering: Based on the state selectedComponent, the application conditionally renders either the Home component or the CitySelector component within the main container.
City Selection: In the CitySelector component, when a user selects a city, it updates the selectedCity state, which triggers the rendering of the WeatherCard component to display weather details for that city.
Styling
The application uses Bootstrap for styling. The card bg-dark text-white classes are used here to maintain a consistent and modern look across different components.

## step3.Using Vite for Development

Vite is a modern build tool that significantly improves the development experience by providing fast build times and rich features. 
### Setup with Vite

Ensure you have Vite installed globally or use Vite through the project's local node_modules. For the most straightforward setup, it's recommended to use the local installation:
npm install vite --save-dev

Running the Application with Vite
To start the development server using Vite, you may need to add a script in your package.json file or run Vite directly. 

Then, you can start the server by running:
npm run dev
This command launches the Vite development server. # cs732-assignment-P4ALuv
