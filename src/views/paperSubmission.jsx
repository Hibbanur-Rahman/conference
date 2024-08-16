import React from 'react';

const PaperSubmission = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x500')" }}
      >
        {/* Replace the above URL with the actual banner image URL */}
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-extrabold">Paper Submission</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl w-full py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Submission Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Instructions for Paper Submission</h2>
          <p className="mt-4 text-gray-700 text-justify">
            Authors are invited to submit original, unpublished research papers that are not currently under review 
            by another conference or journal. The submission must be formatted according to the conference guidelines 
            and submitted via the online submission portal. Each submission will undergo a rigorous peer-review process.
          </p>
        </div>

        {/* Submission Portal Link */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Online Submission Portal</h3>
          <p className="mt-4 text-gray-700">
            Please submit your papers through the following link:
          </p>
          <div className="mt-4">
            <a
              href="https://easychair.org/conferences/?conf=icicc2024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Submit via EasyChair
            </a>
          </div>
        </div>

        {/* Formatting Guidelines */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Formatting Guidelines</h3>
          <p className="mt-4 text-gray-700 text-justify">
            All papers must adhere to the IEEE conference paper format. The maximum length of the paper is 6 pages, 
            including references and appendices. Papers should be written in English and submitted as a PDF file. 
            Submissions that do not comply with the formatting guidelines may be rejected without review.
          </p>
          <div className="mt-4">
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Download IEEE Template
            </a>
          </div>
        </div>

        {/* Review Process */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Review Process</h3>
          <p className="mt-4 text-gray-700 text-justify">
            All submitted papers will be subject to a thorough peer-review process by expert reviewers. Each paper will 
            be evaluated based on its originality, technical quality, clarity, and relevance to the conference themes. 
            Authors of accepted papers will be required to submit a final camera-ready version and register for the 
            conference to present their work.
          </p>
        </div>

        {/* Important Dates */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Important Dates</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
              <span className="font-medium text-gray-900">Paper Submission Deadline</span>
              <span className="text-indigo-600">October 15, 2024</span>
            </li>
            <li className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
              <span className="font-medium text-gray-900">Notification of Acceptance</span>
              <span className="text-indigo-600">November 20, 2024</span>
            </li>
            <li className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
              <span className="font-medium text-gray-900">Camera-Ready Submission</span>
              <span className="text-indigo-600">December 5, 2024</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaperSubmission;
