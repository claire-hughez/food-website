export const restaurants: Array<Restaurant> = [
  {
    id: "oddonos",
    name: "Oddono's",
    chainRestaurant: true,
    category: "ice-cream",
    website: "http://www.oddonos.com",
    source: "friend"
  },
  {
    id: "bilmonte",
    name: "Bilmonte",
    chainRestaurant: false,
    category: "ice-cream",
    website: "https://www.bilmonte.it",
    source: "friend",
    pageContent: [
      {
        type: "paragraph",
        value: "An excellent ice cream place on the boundary of Soho and Picadilly, it's a great way to finish off a meal after eating at the Blacklock opposite."
      }
    ]
  },
  {
    id: "crosstown",
    name: "Crosstown",
    chainRestaurant: true,
    category: "baked-goods",
    website: "https://www.crosstown.co.uk",
    source: "friend"
  },
  {
    id: "crumbs-and-doilies",
    name: "Crumbs and Doilies",
    chainRestaurant: false,
    category: "baked-goods",
    website: "https://www.crumbsanddoilies.co.uk"
  },
  {
    id: "buns-from-home",
    name: "Buns From Home",
    chainRestaurant: true,
    category: "baked-goods",
    website: "https://www.bunsfromhome.com"
  },
  {
    id: "ole-and-steen",
    name: "Ole & Steen",
    chainRestaurant: true,
    category: "baked-goods",
    website: "https://oleandsteen.co.uk",
    source: "friend"
  },
  {
    id: "xo-chocolate",
    name: "XO Chocolate",
    chainRestaurant: false,
    category: "chocolates",
    website: "https://www.xochocolate.co.uk"
  },
  {
    id: "laderach",
    name: "Laderach",
    chainRestaurant: false,
    category: "chocolates",
    website: "https://laderach.com/uk-en/"
  },
  {
    id: "blacklock",
    name: "Blacklock",
    chainRestaurant: true,
    category: "steak",
    website: "https://theblacklock.com",
    source: "friend"
  },
  {
    id: "flat-iron",
    name: "Flat Iron",
    chainRestaurant: true,
    category: "steak",
    website: "https://flatironsteak.co.uk"
  },
  {
    id: "the-heliot",
    name: "The Heliot",
    chainRestaurant: false,
    category: "steak",
    website: "https://www.hippodromecasino.com/restaurant-bars-lounges/",
    source: "friend"
  },
  {
    id: "yard-sale-pizza",
    name: "Yard Sale Pizza",
    chainRestaurant: false,
    category: "pizza",
    website: "https://yardsalepizza.com",
    source: "off-menu"
  },
  {
    id: "pizza-pilgrims",
    name: "Pizza Pilgrims",
    chainRestaurant: true,
    category: "pizza",
    website: "https://www.pizzapilgrims.co.uk"
  },
  {
    id: "world-famous-gordos",
    name: "World Famous Gordos",
    chainRestaurant: false,
    category: "pizza",
    website: "https://www.instagram.com/worldfamousgordos"
  },
  {
    id: "alley-cats-pizza",
    name: "Alley Cats Pizza",
    chainRestaurant: false,
    category: "pizza",
    website: "https://www.alleycatspizza.co.uk",
    menuItemsTried: [
      "Bread bites (cheese, garlic)",
      "Meatballs",
      "Pepperoni pizza"
    ],
    pageContent: [
      {
        type: "paragraph",
        value: "All of the food we tried excellent, probably our second favourite pizza in London (and by a small margin, to World Famous Gordos). The pizza crust in particular was incredible."
      },
      {
        type: "paragraph",
        value: "Despite that, when we next go back, I imagine we'll stick with the pizza - it was just that good - and try some other bases and toppings."
      },
      {
        type: "paragraph",
        value: "While we didn't manage to try their desert, Ottolenghi nearby provides an excellent choice of cakes to enjoy afterwards."
      }
    ]
  },
  {
    id: "bancone",
    name: "Bancone",
    chainRestaurant: true,
    category: "italian-restaurants",
    website: "https://www.bancone.co.uk"
  },
  {
    id: "padella",
    name: "Padella",
    chainRestaurant: false,
    category: "italian-restaurants",
    website: "https://www.padella.co"
  },
  {
    id: "circolo-popolaire",
    name: "Circolo Popolaire",
    chainRestaurant: false,
    category: "italian-restaurants",
    website: "https://www.bigmammagroup.com/en/trattorias/circolo-popolare"
  },
  {
    id: "gloria",
    name: "Gloria",
    chainRestaurant: false,
    category: "italian-restaurants",
    website: "https://www.bigmammagroup.com/en/trattorias/gloria"
  },
  {
    id: "ave-mario",
    name: "Ave Mario",
    chainRestaurant: false,
    category: "italian-restaurants",
    website: "https://www.bigmammagroup.com/en/trattorias/ave-mario"
  },
  {
    id: "luca",
    name: "Luca",
    chainRestaurant: false,
    category: "italian-restaurants",
    website: "https://luca.restaurant"
  },
  {
    id: "zaibatsu",
    name: "Zaibatsu",
    chainRestaurant: false,
    category: "japanese-restaurants",
    website: "https://www.zaibatsufusion.co.uk"
  },
  {
    id: "sticks-n-sushi",
    name: "Sticks 'n' Sushi",
    chainRestaurant: true,
    category: "japanese-restaurants",
    website: "https://sticksnsushi.com/en"
  },
  {
    id: "kulu-kulu",
    name: "Kulu Kulu",
    chainRestaurant: true,
    category: "japanese-restaurants",
    website: "https://www.kulukulusushi.com"
  },
  {
    id: "maki-yaki",
    name: "Maki Yaki",
    chainRestaurant: false,
    category: "japanese-restaurants",
    website: "https://makiyakiepsom.com/"
  },
  {
    id: "kintan-japanese-bbq",
    name: "Kintan Japanese BBQ",
    chainRestaurant: true,
    category: "japanese-restaurants",
    website: "https://kintan.uk",
    source: "friend"
  },
  {
    id: "kampai-sushi",
    name: "Kampai Sushi",
    chainRestaurant: false,
    category: "japanese-restaurants",
    website: "https://www.kampaisushi.co.uk"
  },
  {
    id: "gyoza-san",
    name: "Gyoza San",
    chainRestaurant: false,
    category: "japanese-restaurants",
    website: "https://gyozasan.co.uk",
    menuItemsTried: [
      "Pork gyoza",
      "Kimchi pork gyoza",
      "Shichimi french fries"
    ]
  },
  {
    id: "formative",
    name: "Formative",
    chainRestaurant: false,
    category: "coffee",
    website: "https://formative.coffee",
    source: "friend"
  },
  {
    id: "julliets",
    name: "Julliet's",
    chainRestaurant: false,
    category: "brunch",
    website: "https://o-juliets.arch2order.com/menu/juliets"
  },
  {
    id: "dropshot-coffee",
    name: "DropShot Coffee",
    chainRestaurant: true,
    category: "brunch",
    website: "https://www.dropshotcoffee.co.uk"
  },
  {
    id: "utter-waffle",
    name: "Utter Waffle",
    chainRestaurant: false,
    category: "brunch",
    website: "https://utterwaffle.co.uk"
  },
  {
    id: "roti-king",
    name: "Roti King",
    chainRestaurant: true,
    category: "other",
    website: "https://www.rotiking.com"
  },
  {
    id: "dishoom",
    name: "Dishoom",
    chainRestaurant: true,
    category: "other",
    website: "https://www.dishoom.com"
  },
  {
    id: "golden-union",
    name: "Golden Union",
    chainRestaurant: false,
    category: "other",
    website: "https://goldenunion.co.uk"
  },
  {
    id: "darjeeling-express",
    name: "Darjeeling Express",
    chainRestaurant: false,
    category: "other",
    website: "https://www.darjeeling-express.com",
    source: "off-menu"
  }
]
