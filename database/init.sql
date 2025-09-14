-- Bhajans Database Initialization
-- Complete schema and essential data for the website

-- Create main tables
CREATE TABLE IF NOT EXISTS festivals (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    duration TEXT,
    icon TEXT,
    color TEXT,
    date_celebrated TEXT,
    significance TEXT,
    featured BOOLEAN DEFAULT false,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS gods (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    domain TEXT,
    icon TEXT,
    color TEXT,
    mantras TEXT,
    significance TEXT,
    featured BOOLEAN DEFAULT false,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS bhajans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    hindi_text TEXT,
    hinglish_text TEXT,
    english_translation TEXT,
    deity_id TEXT,
    festival_id TEXT,
    audio_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (deity_id) REFERENCES gods(id),
    FOREIGN KEY (festival_id) REFERENCES festivals(id)
);

-- Insert essential festival data
INSERT OR REPLACE INTO festivals (id, name, title, description, duration, icon, color, featured) VALUES
('diwali', 'Diwali', 'Festival of Lights', 'The most celebrated Hindu festival, symbolizing the victory of light over darkness and good over evil.', '5 days', '🪔', 'from-yellow-400 to-orange-500', true),
('holi', 'Holi', 'Festival of Colors', 'Spring festival celebrating love, joy, and the triumph of good over evil through colors and music.', '2 days', '🎨', 'from-pink-400 to-red-500', true),
('navratri', 'Navratri', 'Nine Nights of the Goddess', 'Nine-day festival honoring Goddess Durga and her nine divine forms (Navadurga).', '9 nights, 10 days', '🌙', 'from-purple-400 to-indigo-500', true),
('ganesh-chaturthi', 'Ganesh Chaturthi', 'Festival of Lord Ganesha', 'A vibrant Hindu festival celebrating the birth of Lord Ganesha, the remover of obstacles.', '11 days', '🐘', 'from-green-400 to-teal-500', true),
('jivitputrika-vrat', 'Jivitputrika Vrat', 'Sacred Fast for Children''s Wellbeing', 'A powerful fast observed by mothers for the long life, health, and prosperity of their children.', '1 day', '🙏', 'from-orange-400 to-red-500', false);

-- Insert essential gods data
INSERT OR REPLACE INTO gods (id, name, title, description, domain, icon, color, featured) VALUES
('krishna', 'Lord Krishna', 'The Divine Cowherd', 'The eighth avatar of Vishnu, known for his teachings in the Bhagavad Gita and his playful, loving nature.', 'Love, Compassion, Divine Play', '🦚', 'from-blue-400 to-indigo-600', true),
('ganesha', 'Lord Ganesha', 'The Remover of Obstacles', 'The elephant-headed deity who removes obstacles and brings good fortune, wisdom, and new beginnings.', 'Wisdom, Prosperity, New Beginnings', '🐘', 'from-orange-400 to-red-500', true),
('durga', 'Goddess Durga', 'The Divine Mother', 'The fierce and protective goddess who represents divine feminine power and the triumph of good over evil.', 'Protection, Strength, Divine Feminine', '🌺', 'from-pink-400 to-purple-600', true),
('rama', 'Lord Rama', 'The Ideal King', 'The seventh avatar of Vishnu, embodying dharma, righteousness, and the perfect devotion of a son, husband, and king.', 'Dharma, Righteousness, Honor', '🏹', 'from-green-400 to-teal-600', true);

-- Insert sample bhajans
INSERT OR REPLACE INTO bhajans (title, hindi_text, hinglish_text, english_translation, deity_id, festival_id) VALUES
('Ganesha Aarti', 'जय गणेश जय गणेश जय गणेश देवा', 'Jai Ganesha Jai Ganesha Jai Ganesha Deva', 'Victory to Lord Ganesha, Victory to Lord Ganesha', 'ganesha', 'ganesh-chaturthi'),
('Krishna Bhajan', 'हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे', 'Hare Krishna Hare Krishna Krishna Krishna Hare Hare', 'Chant the holy names of Krishna', 'krishna', null),
('Durga Aarti', 'जय अम्बे गौरी मैया जय श्यामा गौरी', 'Jai Ambe Gauri Maiya Jai Shyama Gauri', 'Victory to Mother Durga, the fair and dark goddess', 'durga', 'navratri');
