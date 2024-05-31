import React, { useState } from 'react';

const Notification = () => {
  // State to control whether the notification is visible or not
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle close button click
  const handleCloseClick = () => {
    // Update the state to hide the notification
    setIsVisible(false);
  };

  // Render the notification only if isVisible is true
  return (
    <>
      {isVisible && (
      <div className=' relative z-50'>
          <div className='flex justify-center notify ' >
          <div className='max-w-[400px] md:max-w-[700px] lg:max-w-[900px] m-auto fixed top-16 lg:top-36 px-4'>
            <div className='h-[35rem] rounded-lg lg:h-[30rem] shadow-2xl overflow-y-scroll' style={{ scrollbarWidth: 'none' }}>
              <div className='bg-gray-200 rounded-lg m-auto max-w-[400px] md:max-w-[700px] max-h-full h-full overflow-auto lg:max-w-[900px] sl:mr-[-17px]'>
                <div className='bg-gray-400 py-2 rounded-tr-lg rounded-tl-lg text-center text-white sticky top-0 w-full max-w-[400px] md:max-w-[700px] lg:max-w-[900px]'>
                  <h2>Welcome To TS-WORLD</h2>
                </div>
                <div className='px-4'>
                  <h3 className='text-center'>Announcement!!!</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam quo? Sapiente ducimus impedit maxime itaque error nobis facere, quos repellat laboriosam reprehenderit possimus natus magnam. Nostrum eaque debitis accusantium?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo labore, maiores praesentium dolorum nostrum voluptatum assumenda accusamus laboriosam nesciunt.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam quo? Sapiente ducimus impedit maxime itaque error nobis facere, quos repellat laboriosam reprehenderit possimus natus magnam. Nostrum eaque debitis accusantium?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo labore, maiores praesentium dolorum nostrum voluptatum assumenda accusamus laboriosam nesciunt.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam quo? Sapiente ducimus impedit maxime itaque error nobis facere, quos repellat laboriosam reprehenderit possimus natus magnam. Nostrum eaque debitis accusantium?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo labore, maiores praesentium dolorum nostrum voluptatum assumenda accusamus laboriosam nesciunt.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam quo? Sapiente ducimus impedit maxime itaque error nobis facere, quos repellat laboriosam reprehenderit possimus natus magnam. Nostrum eaque debitis accusantium?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo labore, maiores praesentium dolorum nostrum voluptatum assumenda accusamus laboriosam nesciunt.</p>
                </div>
                <div className='sticky bottom-0'>
                  <button onClick={handleCloseClick} className='bg-gray-800 w-full uppercase py-2 text-white rounded-br-lg rounded-bl-lg'>close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default Notification;
