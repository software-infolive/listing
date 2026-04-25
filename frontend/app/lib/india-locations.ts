export interface City {
  name: string;
  slug: string;
  population: string;
  famousFor: string;
  listingsCount: number;
}

export interface District {
  name: string;
  slug: string;
  cities: City[];
  listingsCount: number;
}

export interface State {
  name: string;
  slug: string;
  capital: string;
  districts: District[];
  totalListings: number;
  famousFor: string;
}

export const indiaLocations: State[] = [
  {
    name: 'Maharashtra',
    slug: 'maharashtra',
    capital: 'Mumbai',
    famousFor: 'Financial capital, Bollywood, Gateway of India',
    totalListings: 1250,
    districts: [
      {
        name: 'Mumbai',
        slug: 'mumbai',
        listingsCount: 450,
        cities: [
          { name: 'Mumbai', slug: 'mumbai-city', population: '12.4M', famousFor: 'Financial capital', listingsCount: 350 },
          { name: 'Navi Mumbai', slug: 'navi-mumbai', population: '1.1M', famousFor: 'Planned city', listingsCount: 100 },
        ]
      },
      {
        name: 'Pune',
        slug: 'pune',
        listingsCount: 380,
        cities: [
          { name: 'Pune', slug: 'pune-city', population: '3.1M', famousFor: 'IT hub, Education', listingsCount: 320 },
          { name: 'Pimpri-Chinchwad', slug: 'pimpri-chinchwad', population: '1.7M', famousFor: 'Industrial area', listingsCount: 60 },
        ]
      },
      {
        name: 'Thane',
        slug: 'thane',
        listingsCount: 220,
        cities: [
          { name: 'Thane', slug: 'thane-city', population: '1.8M', famousFor: 'City of lakes', listingsCount: 180 },
          { name: 'Kalyan', slug: 'kalyan', population: '1.2M', famousFor: 'Historic town', listingsCount: 40 },
        ]
      },
      {
        name: 'Nagpur',
        slug: 'nagpur',
        listingsCount: 200,
        cities: [
          { name: 'Nagpur', slug: 'nagpur-city', population: '2.4M', famousFor: 'Orange city', listingsCount: 200 },
        ]
      }
    ]
  },
  {
    name: 'Delhi',
    slug: 'delhi',
    capital: 'New Delhi',
    famousFor: 'National capital, Red Fort, India Gate',
    totalListings: 980,
    districts: [
      {
        name: 'Central Delhi',
        slug: 'central-delhi',
        listingsCount: 280,
        cities: [
          { name: 'Connaught Place', slug: 'connaught-place', population: '0.2M', famousFor: 'Business district', listingsCount: 150 },
          { name: 'Karol Bagh', slug: 'karol-bagh', population: '0.3M', famousFor: 'Shopping hub', listingsCount: 130 },
        ]
      },
      {
        name: 'South Delhi',
        slug: 'south-delhi',
        listingsCount: 320,
        cities: [
          { name: 'Saket', slug: 'saket', population: '0.5M', famousFor: 'Malls and markets', listingsCount: 180 },
          { name: 'Hauz Khas', slug: 'hauz-khas', population: '0.3M', famousFor: 'Nightlife, cafes', listingsCount: 140 },
        ]
      },
      {
        name: 'North Delhi',
        slug: 'north-delhi',
        listingsCount: 200,
        cities: [
          { name: 'Rohini', slug: 'rohini', population: '1.5M', famousFor: 'Residential area', listingsCount: 120 },
          { name: 'Pitampura', slug: 'pitampura', population: '0.4M', famousFor: 'Metro connectivity', listingsCount: 80 },
        ]
      },
      {
        name: 'East Delhi',
        slug: 'east-delhi',
        listingsCount: 180,
        cities: [
          { name: 'Laxmi Nagar', slug: 'laxmi-nagar', population: '0.3M', famousFor: 'Shopping market', listingsCount: 100 },
          { name: 'Mayur Vihar', slug: 'mayur-vihar', population: '0.4M', famousFor: 'Residential', listingsCount: 80 },
        ]
      }
    ]
  },
  {
    name: 'Karnataka',
    slug: 'karnataka',
    capital: 'Bengaluru',
    famousFor: 'IT hub, Silicon Valley of India, Garden city',
    totalListings: 890,
    districts: [
      {
        name: 'Bengaluru Urban',
        slug: 'bengaluru-urban',
        listingsCount: 520,
        cities: [
          { name: 'Bengaluru', slug: 'bengaluru-city', population: '8.4M', famousFor: 'IT capital', listingsCount: 450 },
          { name: 'Whitefield', slug: 'whitefield', population: '0.3M', famousFor: 'Tech parks', listingsCount: 70 },
        ]
      },
      {
        name: 'Mysuru',
        slug: 'mysuru',
        listingsCount: 180,
        cities: [
          { name: 'Mysuru', slug: 'mysuru-city', population: '0.9M', famousFor: 'Palaces, heritage', listingsCount: 180 },
        ]
      },
      {
        name: 'Mangaluru',
        slug: 'mangaluru',
        listingsCount: 120,
        cities: [
          { name: 'Mangaluru', slug: 'mangaluru-city', population: '0.5M', famousFor: 'Port city', listingsCount: 120 },
        ]
      },
      {
        name: 'Hubballi',
        slug: 'hubballi',
        listingsCount: 70,
        cities: [
          { name: 'Hubballi', slug: 'hubballi-city', population: '0.9M', famousFor: 'Commercial hub', listingsCount: 70 },
        ]
      }
    ]
  },
  {
    name: 'Tamil Nadu',
    slug: 'tamil-nadu',
    capital: 'Chennai',
    famousFor: 'Temples, Classical music, Chennai Marina Beach',
    totalListings: 760,
    districts: [
      {
        name: 'Chennai',
        slug: 'chennai',
        listingsCount: 420,
        cities: [
          { name: 'Chennai', slug: 'chennai-city', population: '7.0M', famousFor: 'Auto hub, Marina Beach', listingsCount: 380 },
          { name: 'Tambaram', slug: 'tambaram', population: '0.5M', famousFor: 'Railway hub', listingsCount: 40 },
        ]
      },
      {
        name: 'Coimbatore',
        slug: 'coimbatore',
        listingsCount: 180,
        cities: [
          { name: 'Coimbatore', slug: 'coimbatore-city', population: '1.6M', famousFor: 'Textile industry', listingsCount: 180 },
        ]
      },
      {
        name: 'Madurai',
        slug: 'madurai',
        listingsCount: 100,
        cities: [
          { name: 'Madurai', slug: 'madurai-city', population: '1.0M', famousFor: 'Meenakshi Temple', listingsCount: 100 },
        ]
      },
      {
        name: 'Tiruchirappalli',
        slug: 'tiruchirappalli',
        listingsCount: 60,
        cities: [
          { name: 'Tiruchirappalli', slug: 'trichy-city', population: '0.9M', famousFor: 'Rock Fort Temple', listingsCount: 60 },
        ]
      }
    ]
  },
  {
    name: 'Uttar Pradesh',
    slug: 'uttar-pradesh',
    capital: 'Lucknow',
    famousFor: 'Taj Mahal, Varanasi, Historical monuments',
    totalListings: 680,
    districts: [
      {
        name: 'Lucknow',
        slug: 'lucknow',
        listingsCount: 250,
        cities: [
          { name: 'Lucknow', slug: 'lucknow-city', population: '2.8M', famousFor: 'City of Nawabs', listingsCount: 250 },
        ]
      },
      {
        name: 'Agra',
        slug: 'agra',
        listingsCount: 180,
        cities: [
          { name: 'Agra', slug: 'agra-city', population: '1.6M', famousFor: 'Taj Mahal', listingsCount: 180 },
        ]
      },
      {
        name: 'Varanasi',
        slug: 'varanasi',
        listingsCount: 140,
        cities: [
          { name: 'Varanasi', slug: 'varanasi-city', population: '1.2M', famousFor: 'Spiritual capital', listingsCount: 140 },
        ]
      },
      {
        name: 'Kanpur',
        slug: 'kanpur',
        listingsCount: 110,
        cities: [
          { name: 'Kanpur', slug: 'kanpur-city', population: '2.7M', famousFor: 'Industrial city', listingsCount: 110 },
        ]
      }
    ]
  },
  {
    name: 'West Bengal',
    slug: 'west-bengal',
    capital: 'Kolkata',
    famousFor: 'Victoria Memorial, Howrah Bridge, Darjeeling tea',
    totalListings: 540,
    districts: [
      {
        name: 'Kolkata',
        slug: 'kolkata',
        listingsCount: 350,
        cities: [
          { name: 'Kolkata', slug: 'kolkata-city', population: '4.5M', famousFor: 'City of Joy', listingsCount: 320 },
          { name: 'Howrah', slug: 'howrah', population: '1.1M', famousFor: 'Howrah Bridge', listingsCount: 30 },
        ]
      },
      {
        name: 'Darjeeling',
        slug: 'darjeeling',
        listingsCount: 90,
        cities: [
          { name: 'Darjeeling', slug: 'darjeeling-city', population: '0.1M', famousFor: 'Tea gardens, Hill station', listingsCount: 90 },
        ]
      },
      {
        name: 'Durgapur',
        slug: 'durgapur',
        listingsCount: 100,
        cities: [
          { name: 'Durgapur', slug: 'durgapur-city', population: '0.6M', famousFor: 'Steel city', listingsCount: 100 },
        ]
      }
    ]
  },
  {
    name: 'Gujarat',
    slug: 'gujarat',
    capital: 'Gandhinagar',
    famousFor: 'Statue of Unity, Rann of Kutch, Gir Forest',
    totalListings: 520,
    districts: [
      {
        name: 'Ahmedabad',
        slug: 'ahmedabad',
        listingsCount: 320,
        cities: [
          { name: 'Ahmedabad', slug: 'ahmedabad-city', population: '5.6M', famousFor: 'Textile hub, Heritage city', listingsCount: 320 },
        ]
      },
      {
        name: 'Surat',
        slug: 'surat',
        listingsCount: 120,
        cities: [
          { name: 'Surat', slug: 'surat-city', population: '4.5M', famousFor: 'Diamond city', listingsCount: 120 },
        ]
      },
      {
        name: 'Vadodara',
        slug: 'vadodara',
        listingsCount: 80,
        cities: [
          { name: 'Vadodara', slug: 'vadodara-city', population: '1.7M', famousFor: 'Cultural capital', listingsCount: 80 },
        ]
      }
    ]
  },
  {
    name: 'Rajasthan',
    slug: 'rajasthan',
    capital: 'Jaipur',
    famousFor: 'Palaces, Forts, Desert tourism',
    totalListings: 450,
    districts: [
      {
        name: 'Jaipur',
        slug: 'jaipur',
        listingsCount: 280,
        cities: [
          { name: 'Jaipur', slug: 'jaipur-city', population: '3.0M', famousFor: 'Pink City, Palaces', listingsCount: 280 },
        ]
      },
      {
        name: 'Jodhpur',
        slug: 'jodhpur',
        listingsCount: 90,
        cities: [
          { name: 'Jodhpur', slug: 'jodhpur-city', population: '1.0M', famousFor: 'Blue City, Mehrangarh Fort', listingsCount: 90 },
        ]
      },
      {
        name: 'Udaipur',
        slug: 'udaipur',
        listingsCount: 80,
        cities: [
          { name: 'Udaipur', slug: 'udaipur-city', population: '0.5M', famousFor: 'City of Lakes', listingsCount: 80 },
        ]
      }
    ]
  },
  {
    name: 'Kerala',
    slug: 'kerala',
    capital: 'Thiruvananthapuram',
    famousFor: 'Backwaters, Ayurveda, God\'s Own Country',
    totalListings: 380,
    districts: [
      {
        name: 'Thiruvananthapuram',
        slug: 'thiruvananthapuram',
        listingsCount: 140,
        cities: [
          { name: 'Thiruvananthapuram', slug: 'trivandrum-city', population: '0.9M', famousFor: 'Beaches, Temples', listingsCount: 140 },
        ]
      },
      {
        name: 'Kochi',
        slug: 'kochi',
        listingsCount: 160,
        cities: [
          { name: 'Kochi', slug: 'kochi-city', population: '2.1M', famousFor: 'Port city, Backwaters', listingsCount: 160 },
        ]
      },
      {
        name: 'Kozhikode',
        slug: 'kozhikode',
        listingsCount: 80,
        cities: [
          { name: 'Kozhikode', slug: 'kozhikode-city', population: '0.6M', famousFor: 'Spice trade', listingsCount: 80 },
        ]
      }
    ]
  },
  {
    name: 'Punjab',
    slug: 'punjab',
    capital: 'Chandigarh',
    famousFor: 'Golden Temple, Agriculture, Culture',
    totalListings: 340,
    districts: [
      {
        name: 'Amritsar',
        slug: 'amritsar',
        listingsCount: 150,
        cities: [
          { name: 'Amritsar', slug: 'amritsar-city', population: '1.1M', famousFor: 'Golden Temple', listingsCount: 150 },
        ]
      },
      {
        name: 'Ludhiana',
        slug: 'ludhiana',
        listingsCount: 120,
        cities: [
          { name: 'Ludhiana', slug: 'ludhiana-city', population: '1.6M', famousFor: 'Industrial city', listingsCount: 120 },
        ]
      },
      {
        name: 'Jalandhar',
        slug: 'jalandhar',
        listingsCount: 70,
        cities: [
          { name: 'Jalandhar', slug: 'jalandhar-city', population: '0.9M', famousFor: 'Sports goods', listingsCount: 70 },
        ]
      }
    ]
  },
  {
    name: 'Telangana',
    slug: 'telangana',
    capital: 'Hyderabad',
    famousFor: 'IT hub, Charminar, Biryani',
    totalListings: 620,
    districts: [
      {
        name: 'Hyderabad',
        slug: 'hyderabad',
        listingsCount: 480,
        cities: [
          { name: 'Hyderabad', slug: 'hyderabad-city', population: '6.9M', famousFor: 'IT hub, Charminar', listingsCount: 420 },
          { name: 'Secunderabad', slug: 'secunderabad', population: '0.3M', famousFor: 'Twin city', listingsCount: 60 },
        ]
      },
      {
        name: 'Warangal',
        slug: 'warangal',
        listingsCount: 90,
        cities: [
          { name: 'Warangal', slug: 'warangal-city', population: '0.8M', famousFor: 'Historic temples', listingsCount: 90 },
        ]
      },
      {
        name: 'Nizamabad',
        slug: 'nizamabad',
        listingsCount: 50,
        cities: [
          { name: 'Nizamabad', slug: 'nizamabad-city', population: '0.3M', famousFor: 'Turmeric market', listingsCount: 50 },
        ]
      }
    ]
  }
];

export function getStateBySlug(slug: string): State | undefined {
  return indiaLocations.find(state => state.slug === slug);
}

export function getDistrictBySlug(stateSlug: string, districtSlug: string): District | undefined {
  const state = getStateBySlug(stateSlug);
  return state?.districts.find(district => district.slug === districtSlug);
}

export function getCityBySlug(stateSlug: string, districtSlug: string, citySlug: string): City | undefined {
  const district = getDistrictBySlug(stateSlug, districtSlug);
  return district?.cities.find(city => city.slug === citySlug);
}

export function getAllStates(): State[] {
  return indiaLocations;
}

export function getTotalListingsCount(): number {
  return indiaLocations.reduce((total, state) => total + state.totalListings, 0);
}
