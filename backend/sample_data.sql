-- Sample Data for InfoLive Database
USE infolive;

-- Clear existing data (in reverse order of foreign keys)
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE newsletter_subscriptions;
TRUNCATE TABLE contacts;
TRUNCATE TABLE blog_tags;
TRUNCATE TABLE blogs;
TRUNCATE TABLE listing_features;
TRUNCATE TABLE listing_specifications;
TRUNCATE TABLE listing_images;
TRUNCATE TABLE listings;
TRUNCATE TABLE cities;
TRUNCATE TABLE districts;
TRUNCATE TABLE states;
TRUNCATE TABLE categories;
TRUNCATE TABLE users;
SET FOREIGN_KEY_CHECKS = 1;

-- 1. Users
INSERT INTO users (id, full_name, email, phone, password, role, bio) VALUES
(1, 'Admin User', 'admin@infolive.com', '9876543210', 'admin123', 'admin', 'System administrator for InfoLive.'),
(2, 'Rajesh Kumar', 'rajesh@example.com', '9812345678', 'password123', 'seller', 'Professional real estate agent with 10 years experience.'),
(3, 'Priya Sharma', 'priya@example.com', '9823456789', 'password123', 'seller', 'Tech enthusiast and gadget seller.'),
(4, 'Amit Patel', 'amit@example.com', '9834567890', 'password123', 'user', 'Looking for a new apartment in Mumbai.'),
(5, 'Sneha Gupta', 'sneha@example.com', '9845678901', 'password123', 'user', 'Frequent traveler and blogger.');

-- 2. Categories
INSERT INTO categories (id, name, slug, icon, color) VALUES
(1, 'Real Estate', 'real-estate', '🏠', 'bg-blue-100 text-blue-600'),
(2, 'Vehicles', 'vehicles', '🚗', 'bg-red-100 text-red-600'),
(3, 'Electronics', 'electronics', '💻', 'bg-purple-100 text-purple-600'),
(4, 'Jobs', 'jobs', '💼', 'bg-green-100 text-green-600'),
(5, 'Services', 'services', '🛠️', 'bg-yellow-100 text-yellow-600'),
(6, 'Furniture', 'furniture', '🪑', 'bg-orange-100 text-orange-600'),
(7, 'Education', 'education', '📚', 'bg-indigo-100 text-indigo-600'),
(8, 'Pets', 'pets', '🐾', 'bg-pink-100 text-pink-600'),
(9, 'Fashion', 'fashion', '👗', 'bg-rose-100 text-rose-600'),
(10, 'Books', 'books', '📖', 'bg-cyan-100 text-cyan-600');

-- 3. States
INSERT INTO states (id, name, slug, capital, famous_for) VALUES
(1, 'Maharashtra', 'maharashtra', 'Mumbai', 'Financial capital, Bollywood, Ajanta Caves'),
(2, 'Delhi', 'delhi', 'New Delhi', 'National capital, Red Fort, Street food'),
(3, 'Karnataka', 'karnataka', 'Bengaluru', 'IT hub, Silicon Valley of India, Mysore Palace'),
(4, 'Tamil Nadu', 'tamil-nadu', 'Chennai', 'Temples, Marina Beach, Classical music'),
(5, 'Uttar Pradesh', 'uttar-pradesh', 'Lucknow', 'Taj Mahal, Varanasi, Nawabi culture'),
(6, 'West Bengal', 'west-bengal', 'Kolkata', 'Culture, Sweets, Victoria Memorial'),
(7, 'Gujarat', 'gujarat', 'Gandhinagar', 'Statue of Unity, Business, Snacks'),
(8, 'Rajasthan', 'rajasthan', 'Jaipur', 'Forts, Palaces, Thar Desert'),
(9, 'Kerala', 'kerala', 'Thiruvananthapuram', 'Backwaters, Ayurveda, Literacy'),
(10, 'Punjab', 'punjab', 'Chandigarh', 'Golden Temple, Agriculture, Hospitality');

-- 4. Districts
INSERT INTO districts (id, state_id, name, slug) VALUES
(1, 1, 'Mumbai City', 'mumbai-city'),
(2, 1, 'Pune', 'pune'),
(3, 2, 'New Delhi', 'new-delhi'),
(4, 3, 'Bengaluru Urban', 'bengaluru-urban'),
(5, 4, 'Chennai', 'chennai'),
(6, 5, 'Agra', 'agra'),
(7, 5, 'Lucknow', 'lucknow'),
(8, 6, 'Kolkata', 'kolkata'),
(9, 7, 'Ahmedabad', 'ahmedabad'),
(10, 8, 'Jaipur', 'jaipur'),
(11, 9, 'Ernakulam', 'ernakulam'),
(12, 10, 'Amritsar', 'amritsar');

-- 5. Cities
INSERT INTO cities (id, district_id, name, slug, population, famous_for) VALUES
(1, 1, 'Mumbai', 'mumbai', '12.4M', 'Financial Hub'),
(2, 1, 'Navi Mumbai', 'navi-mumbai', '1.1M', 'Planned City'),
(3, 2, 'Pune', 'pune-city', '3.1M', 'Education Hub'),
(4, 3, 'Connaught Place', 'connaught-place', '0.1M', 'Business Center'),
(5, 3, 'Saket', 'saket', '0.2M', 'Shopping Malls'),
(6, 4, 'Bengaluru', 'bengaluru', '8.4M', 'Tech Parks'),
(7, 4, 'Whitefield', 'whitefield', '0.5M', 'IT Corridor'),
(8, 5, 'Chennai', 'chennai-city', '7.0M', 'Marina Beach'),
(9, 5, 'Adyar', 'adyar', '0.3M', 'Residential area'),
(10, 6, 'Agra', 'agra-city', '1.5M', 'Taj Mahal'),
(11, 7, 'Lucknow', 'lucknow-city', '2.8M', 'Chikankari work'),
(12, 8, 'Kolkata', 'kolkata-city', '4.5M', 'Howrah Bridge'),
(13, 9, 'Ahmedabad', 'ahmedabad-city', '5.5M', 'Sabarmati Ashram'),
(14, 10, 'Jaipur', 'jaipur-city', '3.0M', 'Hawa Mahal'),
(15, 11, 'Kochi', 'kochi', '2.1M', 'Chinese Fishing Nets'),
(16, 12, 'Amritsar', 'amritsar-city', '1.1M', 'Golden Temple');

-- 6. Listings
INSERT INTO listings (id, title, slug, category_id, location_id, price, type, description, `condition`, brand, model, seller_id) VALUES
(1, '3 BHK Luxury Apartment in South Mumbai', '3-bhk-luxury-apartment-mumbai', 1, 1, 45000000.00, 'Sale', 'Spacious 3 BHK with sea view and all modern amenities.', 'Brand New', 'Lodha', 'The Park', 2),
(2, 'Honda City 2022 VMT', 'honda-city-2022-vmt', 2, 3, 1250000.00, 'Sale', 'Well maintained car, single owner, comprehensive insurance.', 'Excellent', 'Honda', 'City', 3),
(3, 'MacBook Pro M2 14-inch', 'macbook-pro-m2-14-inch', 3, 6, 165000.00, 'Sale', 'Brand new MacBook Pro with M2 Pro chip, 16GB RAM, 512GB SSD.', 'New', 'Apple', 'MacBook Pro', 3),
(4, 'Full Stack Developer needed at TechCorp', 'full-stack-developer-techcorp', 4, 7, 1200000.00, 'Sale', 'Looking for a developer with 3+ years experience in React and Node.', 'N/A', 'TechCorp', 'Job', 1),
(5, 'Professional House Cleaning Service', 'professional-house-cleaning', 5, 4, 2500.00, 'Rent', 'Deep cleaning services for apartments and villas.', 'N/A', 'CleanCo', 'Service', 2),
(6, 'Modern Wooden Dining Table', 'modern-wooden-dining-table', 6, 14, 35000.00, 'Sale', '6-seater premium teak wood dining table with glass top.', 'Like New', 'Custom', 'Furniture', 4),
(7, 'Golden Retriever Puppies', 'golden-retriever-puppies', 8, 11, 25000.00, 'Sale', 'Healthy and vaccinated Golden Retriever puppies available for loving homes.', 'Healthy', 'N/A', 'N/A', 5),
(8, '2 BHK Flat for Rent in Whitefield', '2-bhk-flat-whitefield', 1, 7, 35000.00, 'Rent', 'Fully furnished 2 BHK near ITPL, ready to move in.', 'Excellent', 'Sobha', 'Dream Acres', 2),
(9, 'BMW 5 Series 2021', 'bmw-5-series-2021', 2, 1, 5500000.00, 'Sale', 'Executive luxury sedan, M Sport edition, very low mileage.', 'Pristine', 'BMW', '5 Series', 3),
(10, 'iPhone 15 Pro 256GB', 'iphone-15-pro-256gb', 3, 4, 115000.00, 'Sale', 'Titanium body, 48MP camera, latest A17 Pro chip.', 'New', 'Apple', 'iPhone 15 Pro', 3),
(11, 'Office Space in Connaught Place', 'office-space-cp-delhi', 1, 4, 150000.00, 'Rent', 'Prime office location, 1500 sq ft, fully air-conditioned.', 'Fitted', 'N/A', 'N/A', 2),
(12, 'Commercial Shop in Jaipur Market', 'commercial-shop-jaipur', 1, 14, 8500000.00, 'Sale', 'Busy market area, high footfall, perfect for boutique or showroom.', 'Good', 'N/A', 'N/A', 2),
(13, 'Web Design Services for Small Businesses', 'web-design-services', 5, 12, 15000.00, 'Sale', 'Custom website design including hosting and maintenance.', 'N/A', 'DesignPros', 'Service', 3),
(14, 'Used Royal Enfield Himalayan', 'used-re-himalayan', 2, 15, 180000.00, 'Sale', 'Adventure tourer in great condition, many accessories included.', 'Good', 'Royal Enfield', 'Himalayan', 4),
(15, 'Tuition for Class 10 Board Exams', 'tuition-class-10-boards', 7, 10, 5000.00, 'Rent', 'Experienced teacher offering math and science coaching.', 'N/A', 'N/A', 'Education', 5);

-- 7. Listing Images
INSERT INTO listing_images (listing_id, image_url) VALUES
(1, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'),
(1, 'https://images.unsplash.com/photo-1484154218962-a197022b5858'),
(2, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf'),
(2, 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8'),
(3, 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'),
(3, 'https://images.unsplash.com/photo-1611186871348-b1ec696e523b'),
(6, 'https://images.unsplash.com/photo-1577146333355-bd1e8e527c7a'),
(8, 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'),
(9, 'https://images.unsplash.com/photo-1555215695-3004980ad54e'),
(10, 'https://images.unsplash.com/photo-1695048133142-1a20484d2569');

-- 8. Listing Specifications
INSERT INTO listing_specifications (listing_id, spec_key, spec_value) VALUES
(1, 'Area', '2200 sq ft'),
(1, 'Bedrooms', '3'),
(1, 'Bathrooms', '4'),
(2, 'Year', '2022'),
(2, 'Fuel Type', 'Petrol'),
(2, 'Transmission', 'Manual'),
(3, 'RAM', '16GB'),
(3, 'Storage', '512GB SSD'),
(8, 'Area', '1200 sq ft'),
(9, 'Engine', '3000cc'),
(14, 'Engine', '411cc'),
(14, 'Year', '2019');

-- 9. Listing Features
INSERT INTO listing_features (listing_id, feature) VALUES
(1, 'Swimming Pool'),
(1, 'Gym'),
(1, 'Security'),
(2, 'Power Windows'),
(2, 'Air Conditioning'),
(3, 'Retina Display'),
(3, 'Touch ID'),
(8, 'Balcony'),
(8, 'Elevator'),
(9, 'Sunroof'),
(9, 'Leather Seats'),
(14, 'ABS'),
(14, 'Disc Brakes');

-- 10. Blogs
INSERT INTO blogs (id, slug, title, excerpt, content, author, author_bio, `date`, category, read_time, image) VALUES
(1, 'real-estate-trends-2024', 'Real Estate Market Trends in 2024', 'What to expect from the Indian property market this year.', '<p>The Indian real estate market is poised for significant growth in 2024. With increasing urbanization and favorable government policies, residential and commercial sectors are seeing high demand.</p>', 'Rajesh Kumar', 'Real Estate Expert', '2024-01-15', 'Real Estate', '5 min read', '🏢'),
(2, 'buying-used-cars-guide', 'Complete Guide to Buying Used Cars in India', 'Don\'t get fooled when buying your next pre-owned vehicle.', '<p>Buying a used car requires careful inspection. Always check the service history, engine condition, and ownership documents before making a payment.</p>', 'Amit Patel', 'Auto Enthusiast', '2024-02-10', 'Vehicles', '8 min read', '🚗'),
(3, 'top-gadgets-2024', 'Must-Have Tech Gadgets for 2024', 'From AI-powered smartphones to smart home hubs.', '<p>Technology is evolving faster than ever. This year, we see a heavy focus on AI integration across all devices, making our lives smarter and more efficient.</p>', 'Priya Sharma', 'Tech Blogger', '2024-03-05', 'Electronics', '6 min read', '📱'),
(4, 'sustainable-living-tips', '10 Tips for Sustainable Living', 'Small changes in your daily life can make a big difference.', '<p>Sustainability is no longer a choice but a necessity. Learn how to reduce your carbon footprint with simple changes like using cloth bags and saving energy.</p>', 'Sneha Gupta', 'Lifestyle Blogger', '2024-03-20', 'Lifestyle', '4 min read', '🌱'),
(5, 'remote-work-productivity', 'How to Stay Productive While Working Remotely', 'Strategies for maintaining focus and balance at home.', '<p>Remote work is here to stay. Discover the best tools and habits to keep your productivity high while avoiding burnout.</p>', 'Admin User', 'Professional Coach', '2024-04-01', 'Jobs', '7 min read', '💻');

-- 11. Blog Tags
INSERT INTO blog_tags (blog_id, tag) VALUES
(1, 'Property'), (1, 'Investment'), (1, 'India'),
(2, 'Used Cars'), (2, 'Auto Tips'), (2, 'Maintenance'),
(3, 'Tech'), (3, 'Gadgets'), (3, 'AI'),
(4, 'Environment'), (4, 'Green Living'),
(5, 'Remote Work'), (5, 'Productivity'), (5, 'Business');

-- 12. Contacts
INSERT INTO contacts (name, email, phone, message, listing_id) VALUES
(4, 'amit@example.com', '9834567890', 'I am interested in the 3 BHK apartment in South Mumbai. Can we schedule a visit?', 1),
(5, 'sneha@example.com', '9845678901', 'Is the price for the BMW 5 series negotiable?', 9),
(1, 'random@visitor.com', '9000000000', 'General inquiry about advertisement packages.', NULL);

-- 13. Newsletter
INSERT INTO newsletter_subscriptions (email) VALUES
('amit@example.com'),
('sneha@example.com'),
('newsletter1@test.com'),
('newsletter2@test.com'),
('newsletter3@test.com'),
('newsletter4@test.com'),
('newsletter5@test.com'),
('newsletter6@test.com');
