import { useState } from 'react'; // Import the useState hook

function App() {
  const [email, setEmail] = useState(''); // State to hold the email input value
  const [isLoading, setLoading] = useState(false); // State to track loading animation
  const [isSubscribed, setSubscribed] = useState(false); // State to track subscription status

  const handleInputChange = (e) => {
    setEmail(e.target.value); // Update the email state with the input value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading animation

    // Simulate a delay for demonstration purposes (remove this in the actual implementation)
    setTimeout(() => {
      setLoading(false); // Hide loading animation
      setSubscribed(true); // Mark the user as subscribed
    }, 2000); // Delay time in milliseconds (2 seconds in this example)
  };

  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcome to</h2>
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase mb-8">
          Richiwin Clothing
        </h1>

        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          942,245 members
        </div>

        <div className="opacity-75 italic">
          {!isSubscribed ? ( // Display the form if the user is not subscribed
            <div className="Subscribe">
              <h3>Subscribe to our shopping site</h3>
              <p>Your beauty is our priority</p>

              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row justify-center mb-4">
                  <input
                    className="text-lg md:text-2xl placeholder:text-gray-400 placeholder-italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none"
                    type="email" // Change the input type to 'email'
                    id="member_email"
                    name="member[email]"
                    placeholder="E.g. richiwin@gmail.com"
                    value={email} // Set the input value to the 'email' state
                    onChange={handleInputChange} // Handle input changes
                  />

                  <button
                    className="submit bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 cursor-pointer hover:opacity-75 duration-150"
                    name="member[subscribe]"
                  >
                    Join today
                  </button>
                </div>
              </form>

              {isLoading && ( // Display the loading animation while loading
                <div className="Loading">
                  <div className="LoadingDot"></div>
                  <div className="LoadingDot"></div>
                  <div className="LoadingDot"></div>
                  <div className="LoadingDot"></div>
                  <span></span>
                </div>
              )}
            </div>
          ) : (
            // Display the confirmation message if the user is subscribed
            <div className="Complete">
              <div className="Tick">
                {/* Your SVG code for the tick icon */}
              </div>
              <h4>Thank you for subscribing</h4>
              <span>You will receive a confirmation email shortly</span>
            </div>
          )}

          <small>We are open 24/7 for your quality wears</small>
        </div>
      </main>

      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>Built by Iwebuke Rachel</p>

        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-80 duration-150 text-black">
            About us
          </a>
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Privacy
          </a>
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

