import React from 'react';

const importantDates = [
  { event: 'Paper Submission Deadline', date: 'October 15, 2024' },
  { event: 'Notification of Acceptance', date: 'November 20, 2024' },
  { event: 'Camera-Ready Submission', date: 'December 5, 2024' },
  { event: 'Conference Dates', date: 'January 15-17, 2025' },
];

const CallForPapers = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="w-full h-64 bg-cover bg-center flex items-center justify-center" 
           style={{ backgroundImage: "url('https://via.placeholder.com/1920x500')" }}>
        {/* Replace the above URL with the actual banner image URL */}
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-extrabold">Call for Papers</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl w-full py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Introduction */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Invitation for Paper Submission</h2>
          <p className="mt-4 text-gray-700 text-justify">
            We invite researchers, academicians, and industry professionals to submit original research papers to the 
            7th International Conference on Intelligent Computing and Communication (ICICC – 2024). The conference aims 
            to provide a platform for the exchange of ideas, innovations, and research results in various disciplines 
            of computing and communication. Papers should focus on cutting-edge developments in fields such as artificial 
            intelligence, machine learning, cloud computing, big data, cybersecurity, and other related areas.
          </p>
        </div>

        {/* Important Dates */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Important Dates</h3>
          <ul className="mt-4 space-y-4">
            {importantDates.map((item, index) => (
              <li key={index} className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
                <span className="font-medium text-gray-900">{item.event}</span>
                <span className="text-indigo-600">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Submission Guidelines */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Submission Guidelines</h3>
          <p className="mt-4 text-gray-700 text-justify">
            Authors are requested to submit their papers through the online submission system. The papers should be 
            formatted according to the conference guidelines, and they must not exceed 8 pages, including references 
            and appendices. Submissions will be peer-reviewed, and accepted papers will be published in the conference 
            proceedings. The submission link and detailed formatting instructions can be found on the conference website.
          </p>
          <div className="mt-6">
            <a 
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Submit Your Paper
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
