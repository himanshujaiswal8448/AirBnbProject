const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1711111038517-f5d61fe63008?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyYm5iJTIwaG90ZWxzfGVufDB8MHwwfHx8Mg%3D%3D",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "A serene retreat in the mountains. Perfect for hiking, skiing, and nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1711111038475-0dc445eeb97e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5iJTIwaG90ZWxzfGVufDB8MHwwfHx8Mg%3D%3D",
    },
    price: 1200,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Urban Apartment",
    description:
      "Modern apartment located in the heart of the city. Close to shopping, dining, and entertainment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1621923898269-bf66d31346fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlyYm5iJTIwaG90ZWxzfGVufDB8MHwwfHx8Mg%3D%3D",
    },
    price: 1800,
    location: "New York",
    country: "United States",
  },
  {
    title: "Lake House",
    description:
      "Charming lake house with stunning views. Ideal for fishing, boating, and relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584006217404-718bb93a2e89?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 1300,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Countryside Villa",
    description:
      "Elegant villa in the countryside. Enjoy the tranquility and beautiful landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1591121213541-c93b6e74c47a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 1700,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Desert Oasis",
    description:
      "Experience the magic of the desert in this luxurious oasis. Perfect for stargazing and relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1718359759373-1b2670b7478b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 1400,
    location: "Palm Springs",
    country: "United States",
  },
  {
    title: "Island Bungalow",
    description:
      "Cozy bungalow on a tropical island. Perfect for a romantic getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601961782698-76c8503d35e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 2000,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Historic Downtown Loft",
    description:
      "Beautifully restored loft in the historic downtown area. Close to museums and cultural attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1629078691977-dc51747c0263?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 1600,
    location: "Savannah",
    country: "United States",
  },
  {
    title: "Ski Chalet",
    description:
      "Luxury chalet located in the best ski resort. Perfect for winter sports enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585531455700-7af2f103924d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 2500,
    location: "Whistler",
    country: "Canada",
  },
  {
    title: "Beachfront Villa",
    description:
      "Spacious villa with private beach access. Ideal for families and groups.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601961782438-9d442fa2f450?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 3000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Charming Cottage",
    description:
      "A quaint cottage surrounded by beautiful gardens. Perfect for a peaceful retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1675870191256-f61699be34a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 1100,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Luxury Penthouse",
    description:
      "Experience the city from this luxurious penthouse with panoramic views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1659559814036-8c22a5a799bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 4000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Cabin",
    description:
      "A rustic cabin in the woods. Perfect for a cozy, secluded getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568941159284-3b299541ee63?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 900,
    location: "Smoky Mountains",
    country: "United States",
  },
  {
    title: "Beachfront Condo",
    description:
      "Modern condo with direct beach access and stunning ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1679907489582-3d9311fa4f53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 2000,
    location: "Miami",
    country: "United States",
  },
  {
    title: "City Center Studio",
    description:
      "Stylish studio apartment in the city center. Perfect for business trips and short stays.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1711114377434-5ea6f68ad0c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 1500,
    location: "San Francisco",
    country: "United States",
  },
  {
    title: "Countryside Manor",
    description:
      "Elegant manor house surrounded by acres of countryside. Perfect for large groups and events.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657002865844-c4127d542c41?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 5000,
    location: "Cheshire",
    country: "United Kingdom",
  },
  {
    title: "Ski-in/Ski-out Condo",
    description: "Convenient ski-in/ski-out condo in a top-rated ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1718585322553-a77879e06ad5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 2200,
    location: "Vail",
    country: "United States",
  },
  {
    title: "Mediterranean Villa",
    description: "Luxurious villa with a private pool and stunning sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1663659507002-304e741e9912?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 3500,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Historic Castle",
    description:
      "Stay in a historic castle with modern amenities. Perfect for a unique and memorable experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1625255052242-7b27595fc76f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 4500,
    location: "Edinburgh",
    country: "United Kingdom",
  },
  {
    title: "Tropical Villa",
    description:
      "Beautiful villa in a tropical paradise. Perfect for a relaxing and luxurious vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1609915725242-3fcc4e5e8150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 3700,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Rustic Farmhouse",
    description:
      "Charming farmhouse surrounded by nature. Ideal for a peaceful and rural getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1663659512973-8df941db5e1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 1200,
    location: "Napa Valley",
    country: "United States",
  },
  {
    title: "Beach House",
    description:
      "Spacious beach house with private beach access. Perfect for a family vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1625244695851-1fc873f942bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 2500,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Modern Loft",
    description:
      "Stylish and modern loft in the heart of the city. Ideal for a weekend getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1589419896452-b460b8b390a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGFpcmJuYiUyMGhvdGVsc3xlbnwwfDB8MHx8fDI%3D",
    },
    price: 2000,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Chateau",
    description:
      "Luxury chateau with private grounds and a pool. Perfect for a luxurious escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1711114435495-76503f9f3181?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxhaXJibmIlMjBob3RlbHN8ZW58MHwwfDB8fHwy",
    },
    price: 5000,
    location: "Provence",
    country: "France",
  },
  {
    title: "Lakeside Cabin",
    description:
      "Cozy cabin on the lakeside. Ideal for fishing, boating, and enjoying nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1652349517763-a4c8e30992dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxhaXJibmIlMjBob3RlbHN8ZW58MHwwfDB8fHwy",
    },
    price: 1000,
    location: "Lake District",
    country: "United Kingdom",
  },
  {
    title: "Beachfront Cottage",
    description:
      "Charming beachfront cottage with stunning views and private beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1706438231376-924f23da45f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxhaXJibmIlMjBob3RlbHN8ZW58MHwwfDB8fHwy",
    },
    price: 1600,
    location: "Cape Cod",
    country: "United States",
  },
  {
    title: "Modern City Apartment",
    description:
      "Modern apartment in the city center. Close to all the main attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1659962911114-5fcd2259aa67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxhaXJibmIlMjBob3RlbHN8ZW58MHwwfDB8fHwy",
    },
    price: 1800,
    location: "Paris",
    country: "France",
  },
  {
    title: "Oceanfront Condo",
    description:
      "Stylish oceanfront condo with stunning views and beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1654885988340-ff157c8408d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHxhaXJibmIlMjBob3RlbHN8ZW58MHwwfDB8fHwy",
    },
    price: 1900,
    location: "Honolulu",
    country: "United States",
  },
  {
    title: "Rustic Mountain Cabin",
    description: "Cozy cabin in the mountains. Perfect for a peaceful retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1645482861807-fa1c0011f4ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxhaXJibmIlMjBob3RlbHN8ZW58MHwwfDB8fHwy",
    },
    price: 1300,
    location: "Rocky Mountains",
    country: "United States",
  },
  {
    title: "Luxury Beach Villa",
    description:
      "Spacious villa with private beach access and stunning ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1641885282183-fc68ff906b9d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxhaXJibmIlMjBob3RlbHN8ZW58MHwwfDB8fHwy",
    },
    price: 4500,
    location: "Barbados",
    country: "Barbados",
  },
  {
    title: "Seaside Cottage",
    description:
      "Charming cottage by the sea with beautiful views and easy beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559767949-0faa5c7e9992?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk2fHxhaXJibmIlMjBob3RlbHN8ZW58MHwwfDB8fHwy",
    },
    price: 1700,
    location: "Cornwall",
    country: "United Kingdom",
  },
];

module.exports = {
  data: sampleListings,
};
