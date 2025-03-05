import React, { useState, useEffect } from 'react';
import ContactInfo from './ContactInfo';
/* import SocialLinks from './SocialLinks';
import HeroCards from './HeroCards'; */

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [bioText, setBioText] = useState('');
  const fullName = 'Seif Eddine Kharrachi';
  const bio = `Throughout my career, I've developed for Android, expanded into React and React Native for Android and iOS, implemented an Ethereum Blockchain DAPP, and successfully led product teams as scrum master. These experiences have strengthened my communication and project efficiency skills, allowing me to contribute effectively.`;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bioIndex, setBioIndex] = useState(0);
  const [isBioComplete, setIsBioComplete] = useState(false);

  // Name typing effect
  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullName[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Bio typing effect
  useEffect(() => {
    if (!isBioComplete && bioIndex < bio.length) {
      const timeout = setTimeout(() => {
        setBioText(prev => prev + bio[bioIndex]);
        setBioIndex(bioIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (!isBioComplete) {
      setIsBioComplete(true);
      setTimeout(() => {
        setBioText('');
        setBioIndex(0);
        setIsBioComplete(false);
      }, 2000);
    }
  }, [bioIndex, isBioComplete]);

  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQEXGxvnZHkTuA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699499361429?e=1746662400&v=beta&t=ehHqB26Pd2m11RVCHVXb4bKv3O8ZDmkocFNGslota7c"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
          />
          <h1 className="font-mono text-3xl font-bold mb-2 text-blue-400">
            {displayText}
            <span className="animate-blink">|</span>
          </h1>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Front / Mobile Developer
          </h2>
          
          <div className="flex justify-center space-x-6 mb-6">
            <ContactInfo />
          </div>

          <div className="text-xl text-gray-300 max-w-4xl mx-auto h-32">
            <p className="font-mono">
              {bioText}
              <span className="animate-blink">|</span>
            </p>
          </div>

          {/* <div className="flex justify-center space-x-6 mt-10">
            <SocialLinks />
          </div> */}

          {/* <HeroCards /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
