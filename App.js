// Step 2: Import required libraries

// Provides status bar component for styling and display control
import { StatusBar } from 'expo-status-bar'; 

// Importing React library to use JSX syntax and React components
import React from 'react'; 

// Importing necessary components from React Native for UI
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'; 

// Navigation container to wrap the entire app and manage navigation state
import { NavigationContainer } from '@react-navigation/native'; 

// Stack navigator to implement stack-based navigation between screens
import { createStackNavigator } from '@react-navigation/stack'; 

// Importing components to create table views with sections and cells
import { Cell, Section, TableView } from 'react-native-tableview-simple'; 

// Step 3: Create a Stack navigator instance
const Stack = createStackNavigator(); // Initialize Stack navigator for navigation between screens

// Custom data for table cells, including menu items with prices, calories, and descriptions
// Each restaurant object contains title, tagline, ETA, an image URI, and a menu array with details about each item
const restaurantsData = [
  {
    title: "Joe's Gelato",
    tagline: "Dessert, Ice cream, £££",
    eta: "10-30",
    imgUri: require('./assets/pexels_iceCream.jpg'),
    menu: [
      { 
        title: "Vanilla", 
        calories: "200 kcal", 
        price: "£3.00", 
        imgUri: require('./assets/unsplash_vanillaIceCream.jpg'), 
        description: "Creamy vanilla gelato made with fresh vanilla beans." 
      },
      { 
        title: "Mint", 
        calories: "250 kcal", 
        price: "£3.50", 
        imgUri: require('./assets/unsplash_mintIceCream.jpg'), 
        description: "Fresh mint gelato with chocolate chips." 
      },
      { 
        title: "Strawberry", 
        calories: "220 kcal", 
        price: "£3.20", 
        imgUri: require('./assets/pexels_strawberryIceCream.jpg'), 
        description: "Sweet strawberry gelato made from organic strawberries." 
      }
    ],
  },
  {
    title: "Pizza Palace",
    tagline: "Pizza, Italian, ££",
    eta: "15-40",
    imgUri: require('./assets/unsplash_pizza.jpg'),
    menu: [
      { 
        title: "Margherita", 
        calories: "700 kcal", 
        price: "£8.00", 
        imgUri: require('./assets/pexels_margheritaPizza.jpg'), 
        description: "Classic margherita pizza with fresh mozzarella and basil." 
      },
      { 
        title: "Pepperoni", 
        calories: "850 kcal", 
        price: "£9.00", 
        imgUri: require('./assets/pexels_pepperoniPizza.jpg'), 
        description: "Pepperoni pizza topped with spicy pepperoni slices." 
      },
      { 
        title: "Vegetarian", 
        calories: "650 kcal", 
        price: "£8.50", 
        imgUri: require('./assets/pexels_vegetarianPizza.jpg'), 
        description: "Vegetarian pizza with a selection of seasonal vegetables." 
      }
    ],
  },
  {
    title: "Joe's Café",
    tagline: "Coffee, ££",
    eta: "5-10",
    imgUri: require('./assets/unsplash_cafe.jpg'),
    menu: [
      { 
        title: "Cappuccino", 
        calories: "150 kcal", 
        price: "£2.80", 
        imgUri: require('./assets/pexels_cappuccino.jpg'), 
        description: "Rich and creamy cappuccino topped with foam." 
      },
      { 
        title: "Latte", 
        calories: "180 kcal", 
        price: "£3.00", 
        imgUri: require('./assets/pexels_latte.jpg'), 
        description: "Smooth latte with steamed milk and espresso." 
      },
      { 
        title: "Flat White", 
        calories: "170 kcal", 
        price: "£3.20", 
        imgUri: require('./assets/pexels_flatWhite.jpg'), 
        description: "Flat white with a perfect blend of espresso and microfoam." 
      }
    ],
  },
  {
    title: "Joe's Diner",
    tagline: "Burgers, ££",
    eta: "50+",
    imgUri: require('./assets/unsplash_diner.jpg'),
    menu: [
      { 
        title: "Classic Burger", 
        calories: "600 kcal", 
        price: "£6.00", 
        imgUri: require('./assets/pexels_classicBurger.jpg'), 
        description: "Classic beef burger served with fresh lettuce and tomatoes." 
      },
      { 
        title: "Cheeseburger", 
        calories: "700 kcal", 
        price: "£6.50", 
        imgUri: require('./assets/pexels_cheeseburger.jpg'), 
        description: "Cheeseburger topped with cheddar and served with fries." 
      },
      { 
        title: "Veggie Burger", 
        calories: "500 kcal", 
        price: "£5.50", 
        imgUri: require('./assets/pexels_veggieBurger.jpg'), 
        description: "Delicious veggie burger made with fresh vegetables." 
      }
    ],
  },
];

// Step 4: The Home Screen component, displaying a ScrollView containing TableView and Section
// RestaurantsScreen - Displays a list of restaurants
const RestaurantsScreen = ({ navigation }) => { // Receives navigation prop to navigate between screens
  return (
    <ScrollView style={styles.container}>
      <TableView>
        <Section header="" hideSeparator separatorTintColor="#ccc"> {/* Section for restaurant list, hides separator */}
          {/* Step 5: Define and display HomeScreenCell for each restaurant with props */}
          {restaurantsData.map((restaurant, index) => (
            <HomeScreenCell
              key={index} // Unique key for each restaurant cell
              title={restaurant.title} // Passes restaurant title as prop
              tagline={restaurant.tagline} // Passes tagline describing cuisine or type
              eta={restaurant.eta} // Passes estimated time for preparation/delivery
              imgUri={restaurant.imgUri} // Passes image URI for the restaurant's header
              action={() => navigation.navigate('Menu', { items: restaurant.menu })} // Navigates to Menu screen with menu items as parameters
            />
          ))}
        </Section>
      </TableView>
    </ScrollView>
  );
};

// Step 5: HomeScreenCell for displaying restaurant information
// HomeScreenCell - Custom component for each restaurant cell
const HomeScreenCell = ({ title, tagline, eta, imgUri, action }) => (
  // Step 6: Setup onPress to navigate to Menu screen upon clicking
  <TouchableOpacity onPress={action} style={styles.cell}>
    <Cell
      cellContentView={
        <View style={styles.cellContentView}>
          {/* Image as per Step 5 */}
          <Image source={imgUri} style={styles.image} />
          {/* Display ETA in absolute position */}
          <Text style={styles.etaText}>{eta} min</Text>
          {/* Restaurant title and tagline */}
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.taglineText}>{tagline}</Text>
        </View>
      }
      backgroundColor="white"
    />
  </TouchableOpacity>
);

// Step 7: MenuScreen to display a table view of menu items with details
// MenuScreen - Displays menu items of the selected restaurant
const MenuScreen = ({ route, navigation }) => {
  const { items } = route.params;

  return (
    <ScrollView style={styles.container}>
      <TableView>
        <Section header="Menu" hideSeparator>
          {items.map((item, idx) => (
            <Cell
              key={idx}
              title={<Text style={styles.menuTitleText}>{item.title}</Text>} // Apply title text style
              detail={<Text style={styles.menuDetailText}>{`${item.price} • ${item.calories}`}</Text>} // Apply detail text style
              accessory="DisclosureIndicator"
              onPress={() => navigation.navigate('Details', { item })}
              backgroundColor="white"
            />
          ))}
        </Section>
      </TableView>
    </ScrollView>
  );
};

// New DetailsScreen component to display detailed information for each menu item
// DetailsScreen - Shows detailed view of the selected menu item
const DetailsScreen = ({ route }) => {  // Receives route prop to access parameters
  const { item } = route.params; // Destructures item details from route parameters

  return (
    <ScrollView contentContainerStyle={styles.detailsContainer}>
      <Image source={item.imgUri} style={styles.detailsImage} />
      <Text style={styles.detailsTitle}>{item.title}</Text>
      <Text style={styles.detailsDescription}>{item.description}</Text>
      <Text style={styles.detailsPrice}>Price: {item.price}</Text>
      <Text style={styles.detailsCalories}>Calories: {item.calories}</Text>
    </ScrollView>
  );
};

// Step 3: Wrap App() contents in a NavigationContainer with a Stack.Navigator
export default function App() 
{
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Restaurants">
        {/* Step 3: Add Restaurants, Menu, and Details screens to Stack.Navigator */}
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styling according to specifications given in steps
const styles = StyleSheet.create({
  container: 
  {
    flex: 1, // Fullscreen layout
    backgroundColor: '#fff', // White background
  },
  cell: 
  {
    height: 290, // Fixed cell height for restaurant entries
    backgroundColor: 'transparent',
    highlightColor: '#ccc', // Highlight color for when the cell is pressed
  },
  cellContentView: 
  {
    flex: 1, // Cell content fills available space
    alignItems: 'center', // Center align contents
    justifyContent: 'center', // Center contents vertically
    backgroundColor: 'white',
  },
  image: 
  {
    width: '100%', // Full width of cell
    height: 220, // Fixed height
    borderRadius: 10, // Rounded corners
  },
  etaText: 
  {
    position: 'absolute', // Positioned relative to parent
    top: 10, // Distance from top of image
    left: 10, // Distance from left of image
    backgroundColor: '#000', // Black background
    color: '#fff', // White text color
    padding: 5, // Padding inside label
    borderRadius: 5, // Rounded corners
    fontSize: 12, // Font size for ETA text
  },
  titleText: 
  {
    fontSize: 18, // Large font for title
    fontWeight: 'bold', // Bold font weight
    marginTop: 10, // Spacing above title
    textAlign: 'center', // Center-aligned text
  },
  taglineText: 
  {
    fontSize: 14, // Smaller font for tagline
    color: '#555', // Gray color for tagline text
    textAlign: 'center', // Center-aligned text
    marginBottom: 10, // Bottom margin for spacing
  },
  menuTitleText: 
  {
    fontSize: 18, // Set font size for the menu title
    color: 'black', // Set text color 
  },
  detailsContainer: 
  {
    padding: 20, // Padding around details content
    alignItems: 'center', // Center align details content
  },
  detailsImage: 
  {
    width: '100%', // Full width
    height: 500, // Fixed height for detail image
    marginBottom: 20, // Bottom margin
    borderRadius: 10, // Rounded corners for detail image
  },
  detailsTitle: 
  {
    fontSize: 24, // Large font for title
    fontWeight: 'bold', // Bold font weight for emphasis
    marginBottom: 10, // Bottom margin
  },
  detailsDescription: 
  {
    fontSize: 16, // Standard font for description
    textAlign: 'center', // Centered text alignment
    color: '#555', // Gray color for description text
    marginBottom: 10, // Bottom margin for spacing
  },
  detailsPrice: 
  {
    fontSize: 18, // Font size for price text
    fontWeight: 'bold', // Bold for emphasis
    marginTop: 10, // Top margin for spacing
  },
  detailsCalories: 
  {
    fontSize: 16, // Font size for calories
    color: '#777', // Light gray for calories info
    marginTop: 5, // Top margin for spacing
  },
});

/*
Image Sources:
Ice Cream - https://www.pexels.com/photo/close-up-photo-of-a-bowl-of-ice-cream-2586924/
Pizza - https://unsplash.com/photos/close-up-photo-of-pizza-with-cheese-D3Mag4BKqns
Cafe - https://unsplash.com/photos/round-brown-wooden-table-with-french-press-on-top-with-white-ceramic-teacup-beside-3b2tADGAWnU
Diner - https://unsplash.com/photos/empty-red-leather-padded-bench-JpuAYS3vxjk
Vanilla Ice Cream - https://unsplash.com/photos/a-cup-of-ice-cream-with-a-spoon-in-it-OxrbM3WCaI8
Mint Ice Cream - https://unsplash.com/photos/selective-focus-photo-of-cup-of-ice-cream-Q6uTgpjlE7A
Strawberry Ice Cream - https://www.pexels.com/photo/ice-cream-with-strawberry-on-clear-glass-footed-cup-11569103/
Margherita Pizza - https://www.pexels.com/photo/pizza-on-a-wooden-table-16890470/
Pepperoni Pizza - https://www.pexels.com/photo/pizza-on-brown-wooden-board-825661/
Vegetarian Pizza - https://www.pexels.com/photo/pizza-margherita-cut-in-four-18431672/
Cappuccino - https://www.pexels.com/photo/artistic-cappuccino-and-coffee-table-setup-29064588/
Latte - https://www.pexels.com/photo/cappuccino-filled-glass-on-saucer-350478/
Flat White - https://www.pexels.com/photo/coffee-in-white-ceramic-teacup-on-white-ceramic-suacer-894696/
Classic Burger - https://www.pexels.com/photo/burgers-on-ceramic-plate-4109133/
Cheeseburger - https://www.pexels.com/photo/btl-burger-with-fries-551991/
Veggie Burger - https://www.pexels.com/photo/bread-food-sandwich-healthy-6546029/
*/