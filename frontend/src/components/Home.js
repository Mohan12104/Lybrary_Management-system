import React from 'react';
import Footer from './Footer';
import libraryImage from '../Images/library.jpg'; // Import the image file

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to Our Friendly Library</h1>
      <img src={libraryImage} alt="Library" style={{ maxWidth: '20%', margin: '10px auto' }} /> {/* Display the image */}
      <h4 style={{ marginBottom: '10px' }}>Let's Make A Habit To Read A Book Daily</h4>
      <Footer />
    </div>
  );
};

export default Home;
