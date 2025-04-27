import React from 'react';

const Chatbot: React.FC = () => {
  return (
    <div style={styles.body}>
      <div style={styles.chatbotContainer}>
        <h2 style={styles.heading}>Talk to Our Retail Assistant</h2>
        <iframe
          style={styles.iframe}
          allow="microphone;"
          src="http://console.dialogflow.com/api-client/demo/embedded/9acce4b4-feb5-4ece-a86e-978e7479aaad"
        />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    fontFamily: "'Montserrat', sans-serif", // Change to a more modern font
    margin: 0,
    padding: 0,
    backgroundColor: '#2D2D72', // Darker blue background for a more elegant look
    display: 'flex',
    justifyContent: 'center', // Centering the content
    alignItems: 'center', // Vertically center the content
    minHeight: '100vh', // Full viewport height
  },
  chatbotContainer: {
    width: '100%',
    maxWidth: '600px', // Wider container for more spacious look
    margin: '0 20px',
    backgroundColor: '#ffffff', // White background for the container
    padding: '30px', // Increased padding for a spacious feel
    borderRadius: '12px', // Larger radius for smoother corners
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)', // Stronger shadow for a more modern depth
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  chatbotContainerHover: {
    transform: 'scale(1.05)', // Slight zoom effect when hovered
    boxShadow: '0 16px 32px rgba(0, 0, 0, 0.2)', // Enhanced shadow on hover
  },
  iframe: {
    width: '100%',
    height: '500px', // Increased height for a better visual experience
    border: 'none',
    borderRadius: '10px', // Slightly round the iframe borders
  },
  heading: {
    fontSize: '26px', // Larger heading
    fontWeight: '600',
    marginBottom: '25px',
    color: '#4F4F4F', // Darker color for the heading text
    letterSpacing: '1px', // Slight letter-spacing for a modern feel
    textTransform: 'uppercase', // Making it uppercase for emphasis
  },
};

export default Chatbot;