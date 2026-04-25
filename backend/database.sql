-- Create Database if not exists
CREATE DATABASE IF NOT EXISTS infolive;
USE infolive;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'admin', 'seller') DEFAULT 'user',
  avatar VARCHAR(255),
  bio TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX (email)
);

-- 2. Categories Table
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  icon VARCHAR(50),
  color VARCHAR(50),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX (slug)
);

-- 3. States Table
CREATE TABLE IF NOT EXISTS states (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  capital VARCHAR(100),
  famous_for TEXT,
  INDEX (slug)
);

-- 4. Districts Table
CREATE TABLE IF NOT EXISTS districts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  state_id INT,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL,
  FOREIGN KEY (state_id) REFERENCES states(id) ON DELETE CASCADE,
  INDEX (slug)
);

-- 5. Cities Table
CREATE TABLE IF NOT EXISTS cities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  district_id INT,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL,
  population VARCHAR(50),
  famous_for TEXT,
  FOREIGN KEY (district_id) REFERENCES districts(id) ON DELETE CASCADE,
  INDEX (slug)
);

-- 6. Listings Table
CREATE TABLE IF NOT EXISTS listings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  category_id INT,
  location_id INT, -- Refers to city_id
  price DECIMAL(15, 2),
  type ENUM('Sale', 'Rent') DEFAULT 'Sale',
  description TEXT,
  `condition` VARCHAR(100),
  brand VARCHAR(100),
  model VARCHAR(100),
  seller_id INT,
  views INT DEFAULT 0,
  date_posted DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
  FOREIGN KEY (location_id) REFERENCES cities(id) ON DELETE SET NULL,
  FOREIGN KEY (seller_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX (slug),
  INDEX (category_id),
  INDEX (location_id),
  INDEX (seller_id)
);

-- 7. Listing Images Table
CREATE TABLE IF NOT EXISTS listing_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  listing_id INT,
  image_url VARCHAR(255) NOT NULL,
  FOREIGN KEY (listing_id) REFERENCES listings(id) ON DELETE CASCADE
);

-- 8. Listing Specifications Table
CREATE TABLE IF NOT EXISTS listing_specifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  listing_id INT,
  spec_key VARCHAR(255) NOT NULL,
  spec_value VARCHAR(255) NOT NULL,
  FOREIGN KEY (listing_id) REFERENCES listings(id) ON DELETE CASCADE
);

-- 9. Listing Features Table
CREATE TABLE IF NOT EXISTS listing_features (
  id INT AUTO_INCREMENT PRIMARY KEY,
  listing_id INT,
  feature VARCHAR(255) NOT NULL,
  FOREIGN KEY (listing_id) REFERENCES listings(id) ON DELETE CASCADE
);

-- 10. Blogs Table
CREATE TABLE IF NOT EXISTS blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content LONGTEXT,
  author VARCHAR(255),
  author_bio TEXT,
  `date` DATE,
  category VARCHAR(100),
  read_time VARCHAR(50),
  image VARCHAR(255),
  views INT DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX (slug)
);

-- 11. Blog Tags Table
CREATE TABLE IF NOT EXISTS blog_tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  blog_id INT,
  tag VARCHAR(100) NOT NULL,
  FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE
);

-- 12. Contacts Table
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT,
  listing_id INT, -- Optional: link to a specific listing
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (listing_id) REFERENCES listings(id) ON DELETE SET NULL
);

-- 13. Newsletter Table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
