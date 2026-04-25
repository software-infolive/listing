export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  views: number;
}

export const blogCategories = [
  { name: 'All', slug: 'all', count: 18 },
  { name: 'Technology', slug: 'technology', count: 6 },
  { name: 'Science', slug: 'science', count: 3 },
  { name: 'Business', slug: 'business', count: 3 },
  { name: 'Health', slug: 'health', count: 2 },
  { name: 'Lifestyle', slug: 'lifestyle', count: 2 },
  { name: 'Marketing', slug: 'marketing', count: 2 },
];

export const allBlogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'future-of-artificial-intelligence-2024',
    title: 'The Future of Artificial Intelligence in 2024',
    excerpt: 'Exploring the latest developments in AI technology and how they\'re shaping our world.',
    content: `
      <p>Artificial Intelligence has reached unprecedented heights in 2024, transforming industries and reshaping our daily lives. From advanced language models to autonomous systems, AI continues to push the boundaries of what's possible.</p>
      
      <h2>Key Developments in AI</h2>
      <p>This year has seen remarkable progress in several areas including natural language processing, computer vision, and robotics. Companies and researchers worldwide are working on making AI more accessible, ethical, and powerful.</p>
      
      <h2>Impact on Industries</h2>
      <p>Healthcare, finance, education, and manufacturing are experiencing revolutionary changes thanks to AI integration. Automation and intelligent decision-making systems are becoming the norm rather than the exception.</p>
      
      <h2>Looking Ahead</h2>
      <p>As we move forward, the focus is shifting towards responsible AI development, ensuring these powerful tools benefit humanity while addressing concerns about privacy, bias, and job displacement.</p>
    `,
    author: 'Dr. Sarah Chen',
    authorBio: 'AI researcher and technology journalist with 15+ years of experience in machine learning and artificial intelligence.',
    date: '2024-03-15',
    category: 'Technology',
    readTime: '5 min read',
    image: '🤖',
    tags: ['AI', 'Technology', 'Future', 'Machine Learning'],
    views: 2453
  },
  {
    id: 2,
    slug: 'understanding-climate-change-comprehensive-guide',
    title: 'Understanding Climate Change: A Comprehensive Guide',
    excerpt: 'Breaking down the science behind climate change and what we can do to address it.',
    content: `
      <p>Climate change is one of the most pressing challenges of our time. Understanding its causes, effects, and solutions is crucial for everyone.</p>
      
      <h2>The Science Behind Climate Change</h2>
      <p>Global warming is primarily caused by greenhouse gas emissions from human activities. Carbon dioxide, methane, and other gases trap heat in the atmosphere, leading to rising temperatures.</p>
      
      <h2>Current Impact</h2>
      <p>We're already seeing the effects: melting ice caps, rising sea levels, extreme weather events, and shifting ecosystems. These changes affect billions of people worldwide.</p>
      
      <h2>What We Can Do</h2>
      <p>Individual actions matter. From reducing energy consumption to supporting sustainable practices, everyone can contribute to fighting climate change. Collective action through policy changes and technological innovation is equally important.</p>
    `,
    author: 'Michael Rodriguez',
    authorBio: 'Environmental scientist and climate researcher focused on sustainable solutions.',
    date: '2024-03-12',
    category: 'Science',
    readTime: '8 min read',
    image: '🌍',
    tags: ['Climate', 'Environment', 'Science', 'Sustainability'],
    views: 3120
  },
  {
    id: 3,
    slug: 'rise-of-remote-work-trends-predictions',
    title: 'The Rise of Remote Work: Trends and Predictions',
    excerpt: 'How remote work is transforming the modern workplace and what to expect in the coming years.',
    content: `
      <p>Remote work has evolved from a temporary solution to a permanent fixture in the modern workplace. This transformation brings both opportunities and challenges.</p>
      
      <h2>Current State of Remote Work</h2>
      <p>More companies are adopting hybrid or fully remote models. Technology has made it possible to collaborate effectively across continents, leading to diverse and talented teams.</p>
      
      <h2>Benefits and Challenges</h2>
      <p>While remote work offers flexibility and work-life balance, it also presents challenges in communication, team building, and maintaining productivity. Companies are developing new strategies to address these issues.</p>
      
      <h2>Future Outlook</h2>
      <p>The future of work is likely to be hybrid, combining the best of remote and in-office experiences. Virtual reality offices and advanced collaboration tools will play a significant role.</p>
    `,
    author: 'Jennifer Liu',
    authorBio: 'Business consultant specializing in workplace transformation and organizational development.',
    date: '2024-03-10',
    category: 'Business',
    readTime: '6 min read',
    image: '💼',
    tags: ['Remote Work', 'Business', 'Future of Work', 'Productivity'],
    views: 1987
  },
  {
    id: 4,
    slug: 'mental-health-awareness-breaking-stigma',
    title: 'Mental Health Awareness: Breaking the Stigma',
    excerpt: 'The importance of mental health awareness and how to support those around us.',
    content: `
      <p>Mental health is as important as physical health, yet it often receives less attention. Breaking the stigma and creating supportive environments is essential.</p>
      
      <h2>Understanding Mental Health</h2>
      <p>Mental health encompasses emotional, psychological, and social well-being. It affects how we think, feel, and act in daily life.</p>
      
      <h2>Common Challenges</h2>
      <p>Anxiety, depression, and stress are increasingly common. Recognizing the signs and seeking help early can make a significant difference in recovery and well-being.</p>
      
      <h2>How to Support Others</h2>
      <p>Listen without judgment, encourage professional help when needed, and create a supportive environment. Small acts of kindness can have a profound impact.</p>
    `,
    author: 'Dr. Alex Thompson',
    authorBio: 'Licensed psychologist and mental health advocate with expertise in clinical psychology.',
    date: '2024-03-08',
    category: 'Health',
    readTime: '7 min read',
    image: '🧠',
    tags: ['Mental Health', 'Wellness', 'Psychology', 'Support'],
    views: 2765
  },
  {
    id: 5,
    slug: 'sustainable-living-small-changes-big-impact',
    title: 'Sustainable Living: Small Changes, Big Impact',
    excerpt: 'Simple steps you can take to live more sustainably and reduce your environmental footprint.',
    content: `
      <p>Living sustainably doesn't require drastic changes. Small, consistent actions can collectively make a significant impact on our planet.</p>
      
      <h2>Starting at Home</h2>
      <p>Reduce energy consumption, minimize waste, and choose eco-friendly products. Simple swaps like reusable bags, water bottles, and LED bulbs make a difference.</p>
      
      <h2>Sustainable Consumption</h2>
      <p>Buy less, choose quality over quantity, and support ethical brands. Consider the lifecycle of products before purchasing.</p>
      
      <h2>Community Impact</h2>
      <p>Share knowledge, participate in local environmental initiatives, and inspire others. Collective action amplifies individual efforts.</p>
    `,
    author: 'Emma Wilson',
    authorBio: 'Sustainability advocate and environmental educator promoting eco-friendly lifestyles.',
    date: '2024-03-05',
    category: 'Lifestyle',
    readTime: '4 min read',
    image: '🌱',
    tags: ['Sustainability', 'Lifestyle', 'Environment', 'Green Living'],
    views: 1654
  },
  {
    id: 6,
    slug: 'evolution-digital-marketing-2024',
    title: 'The Evolution of Digital Marketing in 2024',
    excerpt: 'Latest trends and strategies in digital marketing that are driving business growth.',
    content: `
      <p>Digital marketing continues to evolve rapidly. Staying current with trends and best practices is essential for business success.</p>
      
      <h2>AI-Powered Marketing</h2>
      <p>Artificial intelligence is revolutionizing how we understand customers, personalize content, and optimize campaigns. Predictive analytics and automation are becoming standard tools.</p>
      
      <h2>Content Strategy</h2>
      <p>Quality content remains king. Video marketing, interactive content, and authentic storytelling are driving engagement and conversions.</p>
      
      <h2>Privacy and Trust</h2>
      <p>With increasing data privacy concerns, transparent practices and building trust with customers are more important than ever.</p>
    `,
    author: 'David Park',
    authorBio: 'Digital marketing strategist with 10+ years helping brands grow online.',
    date: '2024-03-03',
    category: 'Marketing',
    readTime: '9 min read',
    image: '📱',
    tags: ['Marketing', 'Digital Marketing', 'Strategy', 'Business'],
    views: 2234
  },
  {
    id: 7,
    slug: 'blockchain-technology-explained',
    title: 'Blockchain Technology Explained',
    excerpt: 'Understanding blockchain technology and its applications beyond cryptocurrency.',
    content: `
      <p>Blockchain is more than just the technology behind Bitcoin. It's a revolutionary approach to data storage and verification with applications across industries.</p>
      
      <h2>How Blockchain Works</h2>
      <p>Blockchain is a distributed ledger that records transactions across multiple computers. Each block contains data, a timestamp, and a link to the previous block, creating an immutable chain.</p>
      
      <h2>Real-World Applications</h2>
      <p>Beyond cryptocurrency, blockchain is being used in supply chain management, healthcare records, voting systems, and digital identity verification.</p>
    `,
    author: 'Dr. Sarah Chen',
    authorBio: 'AI researcher and technology journalist with 15+ years of experience in machine learning and artificial intelligence.',
    date: '2024-03-01',
    category: 'Technology',
    readTime: '6 min read',
    image: '⛓️',
    tags: ['Blockchain', 'Technology', 'Cryptocurrency', 'Innovation'],
    views: 1876
  },
  {
    id: 8,
    slug: 'nutrition-guide-healthy-eating',
    title: 'Nutrition Guide: Healthy Eating Habits',
    excerpt: 'Evidence-based nutrition advice for building healthier eating habits.',
    content: `
      <p>Proper nutrition is fundamental to good health. Understanding what your body needs and developing healthy eating habits can transform your well-being.</p>
      
      <h2>Balanced Diet Basics</h2>
      <p>Include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Portion control and meal timing also play important roles.</p>
      
      <h2>Common Myths</h2>
      <p>Debunking nutrition myths and understanding evidence-based dietary recommendations helps make informed choices.</p>
    `,
    author: 'Dr. Alex Thompson',
    authorBio: 'Licensed psychologist and mental health advocate with expertise in clinical psychology.',
    date: '2024-02-28',
    category: 'Health',
    readTime: '5 min read',
    image: '🥗',
    tags: ['Nutrition', 'Health', 'Wellness', 'Diet'],
    views: 2098
  },
  {
    id: 9,
    slug: 'cybersecurity-best-practices-2024',
    title: 'Cybersecurity Best Practices for 2024',
    excerpt: 'Essential security measures to protect your digital life and business.',
    content: `
      <p>In an increasingly connected world, cybersecurity is more important than ever. Protecting personal and business data requires vigilance and proper security measures.</p>
      
      <h2>Common Threats</h2>
      <p>Phishing attacks, ransomware, and data breaches are evolving. Understanding these threats is the first step in protection.</p>
      
      <h2>Protection Strategies</h2>
      <p>Use strong passwords, enable two-factor authentication, keep software updated, and be cautious with emails and links.</p>
    `,
    author: 'Dr. Sarah Chen',
    authorBio: 'AI researcher and technology journalist with 15+ years of experience in machine learning and artificial intelligence.',
    date: '2024-02-25',
    category: 'Technology',
    readTime: '7 min read',
    image: '🔒',
    tags: ['Cybersecurity', 'Security', 'Technology', 'Privacy'],
    views: 3245
  },
  {
    id: 10,
    slug: 'startup-funding-complete-guide',
    title: 'Startup Funding: A Complete Guide',
    excerpt: 'Everything you need to know about raising capital for your startup.',
    content: `
      <p>Securing funding is one of the biggest challenges for startups. Understanding different funding options and how to approach investors is crucial.</p>
      
      <h2>Funding Stages</h2>
      <p>From bootstrapping and angel investors to venture capital and IPOs, each stage has its own requirements and implications.</p>
      
      <h2>Preparing Your Pitch</h2>
      <p>A compelling pitch deck, solid business plan, and clear financial projections are essential for attracting investors.</p>
    `,
    author: 'Jennifer Liu',
    authorBio: 'Business consultant specializing in workplace transformation and organizational development.',
    date: '2024-02-22',
    category: 'Business',
    readTime: '10 min read',
    image: '💰',
    tags: ['Startup', 'Funding', 'Business', 'Investment'],
    views: 1765
  },
  {
    id: 11,
    slug: 'space-exploration-new-frontiers',
    title: 'Space Exploration: New Frontiers',
    excerpt: 'Recent achievements in space exploration and what lies ahead.',
    content: `
      <p>Space exploration has entered an exciting new era with private companies joining government agencies in pushing the boundaries of human achievement.</p>
      
      <h2>Recent Missions</h2>
      <p>From Mars rovers to the James Webb Space Telescope, recent missions have provided unprecedented insights into our universe.</p>
      
      <h2>The Future of Space Travel</h2>
      <p>Commercial space travel, lunar bases, and Mars colonization are no longer science fiction but realistic goals for the coming decades.</p>
    `,
    author: 'Michael Rodriguez',
    authorBio: 'Environmental scientist and climate researcher focused on sustainable solutions.',
    date: '2024-02-20',
    category: 'Science',
    readTime: '8 min read',
    image: '🚀',
    tags: ['Space', 'Science', 'Exploration', 'NASA'],
    views: 2987
  },
  {
    id: 12,
    slug: 'mindfulness-meditation-beginners',
    title: 'Mindfulness and Meditation for Beginners',
    excerpt: 'Getting started with mindfulness practice for stress reduction and mental clarity.',
    content: `
      <p>Mindfulness and meditation offer powerful tools for managing stress and improving overall well-being. Starting a practice is simpler than you might think.</p>
      
      <h2>What is Mindfulness?</h2>
      <p>Mindfulness is the practice of being present and fully engaged with the current moment, without judgment.</p>
      
      <h2>Starting Your Practice</h2>
      <p>Begin with just 5 minutes a day. Find a quiet space, focus on your breath, and gently return your attention when your mind wanders.</p>
    `,
    author: 'Emma Wilson',
    authorBio: 'Sustainability advocate and environmental educator promoting eco-friendly lifestyles.',
    date: '2024-02-18',
    category: 'Lifestyle',
    readTime: '6 min read',
    image: '🧘',
    tags: ['Mindfulness', 'Meditation', 'Wellness', 'Mental Health'],
    views: 1543
  },
  {
    id: 13,
    slug: 'quantum-computing-revolution',
    title: 'Quantum Computing Revolution',
    excerpt: 'How quantum computers are set to transform computing as we know it.',
    content: `
      <p>Quantum computing represents a paradigm shift in computational power, promising to solve problems that are impossible for classical computers.</p>
      
      <h2>Quantum Mechanics Basics</h2>
      <p>Unlike classical bits, quantum bits (qubits) can exist in multiple states simultaneously, enabling parallel processing at unprecedented scales.</p>
      
      <h2>Potential Applications</h2>
      <p>Drug discovery, cryptography, financial modeling, and climate prediction are just a few areas where quantum computing will make breakthroughs.</p>
    `,
    author: 'Dr. Sarah Chen',
    authorBio: 'AI researcher and technology journalist with 15+ years of experience in machine learning and artificial intelligence.',
    date: '2024-02-15',
    category: 'Technology',
    readTime: '7 min read',
    image: '⚛️',
    tags: ['Quantum Computing', 'Technology', 'Science', 'Innovation'],
    views: 2156
  },
  {
    id: 14,
    slug: 'social-media-marketing-strategies',
    title: 'Social Media Marketing Strategies That Work',
    excerpt: 'Proven strategies for growing your brand on social media platforms.',
    content: `
      <p>Social media marketing is essential for modern businesses. Understanding platform-specific strategies and audience engagement is key to success.</p>
      
      <h2>Platform Selection</h2>
      <p>Choose platforms where your target audience is most active. Each platform has unique characteristics and best practices.</p>
      
      <h2>Content Strategy</h2>
      <p>Create valuable, engaging content that resonates with your audience. Consistency and authenticity are crucial for building trust and loyalty.</p>
    `,
    author: 'David Park',
    authorBio: 'Digital marketing strategist with 10+ years helping brands grow online.',
    date: '2024-02-12',
    category: 'Marketing',
    readTime: '8 min read',
    image: '📲',
    tags: ['Social Media', 'Marketing', 'Strategy', 'Business'],
    views: 1897
  },
  {
    id: 15,
    slug: 'entrepreneurship-lessons-learned',
    title: 'Entrepreneurship: Lessons Learned',
    excerpt: 'Key insights from successful entrepreneurs on building and scaling businesses.',
    content: `
      <p>Entrepreneurship is a journey filled with challenges and rewards. Learning from those who've succeeded can help navigate the path.</p>
      
      <h2>Starting Out</h2>
      <p>Validate your idea, understand your market, and build a minimum viable product. Don't wait for perfection before launching.</p>
      
      <h2>Growth and Scaling</h2>
      <p>Focus on customer satisfaction, build a strong team, and iterate based on feedback. Sustainable growth is better than rapid expansion.</p>
    `,
    author: 'Jennifer Liu',
    authorBio: 'Business consultant specializing in workplace transformation and organizational development.',
    date: '2024-02-10',
    category: 'Business',
    readTime: '9 min read',
    image: '🚀',
    tags: ['Entrepreneurship', 'Business', 'Startup', 'Success'],
    views: 2341
  },
  {
    id: 16,
    slug: 'renewable-energy-future',
    title: 'Renewable Energy: Powering the Future',
    excerpt: 'Exploring renewable energy technologies and their role in combating climate change.',
    content: `
      <p>Renewable energy is crucial for a sustainable future. Solar, wind, hydro, and other renewable sources are becoming increasingly viable and affordable.</p>
      
      <h2>Current Technologies</h2>
      <p>Solar panels, wind turbines, and battery storage have improved dramatically. Costs have fallen while efficiency has increased.</p>
      
      <h2>The Path Forward</h2>
      <p>Transitioning to renewable energy requires infrastructure investment, policy support, and continued innovation.</p>
    `,
    author: 'Michael Rodriguez',
    authorBio: 'Environmental scientist and climate researcher focused on sustainable solutions.',
    date: '2024-02-08',
    category: 'Science',
    readTime: '7 min read',
    image: '⚡',
    tags: ['Renewable Energy', 'Science', 'Climate', 'Sustainability'],
    views: 1987
  },
  {
    id: 17,
    slug: 'web3-decentralized-internet',
    title: 'Web3 and the Decentralized Internet',
    excerpt: 'Understanding Web3 and how it\'s reshaping the internet landscape.',
    content: `
      <p>Web3 represents the next evolution of the internet, built on blockchain technology and emphasizing decentralization, user ownership, and privacy.</p>
      
      <h2>Core Principles</h2>
      <p>Decentralization, token-based economics, and user ownership are the foundations of Web3. Users control their data and digital assets.</p>
      
      <h2>Applications and Use Cases</h2>
      <p>DeFi, NFTs, DAOs, and decentralized social networks are early examples of Web3 applications gaining traction.</p>
    `,
    author: 'Dr. Sarah Chen',
    authorBio: 'AI researcher and technology journalist with 15+ years of experience in machine learning and artificial intelligence.',
    date: '2024-02-05',
    category: 'Technology',
    readTime: '8 min read',
    image: '🌐',
    tags: ['Web3', 'Blockchain', 'Technology', 'Decentralization'],
    views: 2567
  },
  {
    id: 18,
    slug: 'electric-vehicles-mainstream-adoption',
    title: 'Electric Vehicles: The Road to Mainstream Adoption',
    excerpt: 'How electric vehicles are becoming the new standard in transportation.',
    content: `
      <p>Electric vehicles are transitioning from niche products to mainstream options. Improvements in battery technology, charging infrastructure, and government incentives are accelerating adoption.</p>
      
      <h2>Technology Advances</h2>
      <p>Battery range, charging speed, and vehicle performance have improved significantly. Modern EVs rival or exceed traditional vehicles in many aspects.</p>
      
      <h2>Environmental Impact</h2>
      <p>EVs significantly reduce carbon emissions, especially when charged with renewable energy. They're a crucial part of climate change mitigation efforts.</p>
    `,
    author: 'Michael Rodriguez',
    authorBio: 'Environmental scientist and climate researcher focused on sustainable solutions.',
    date: '2024-02-01',
    category: 'Technology',
    readTime: '6 min read',
    image: '🚗',
    tags: ['Electric Vehicles', 'Technology', 'Environment', 'Transportation'],
    views: 1765
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === 'all' || category === 'All') {
    return allBlogPosts;
  }
  return allBlogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}
