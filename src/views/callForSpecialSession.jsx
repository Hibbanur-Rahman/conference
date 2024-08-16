import React from 'react';

const CallForSpecialSessions = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x500')" }}
      >
        {/* Replace the above URL with the actual banner image URL */}
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-extrabold">Call for Special Sessions</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl w-full py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Introduction */}
        <div>
          <p className="mt-4 text-gray-700 text-justify">
            Dear Sir/ Mam,
            <br />
            Greetings from ICAIN-2024!
          </p>
          <p className="mt-4 text-gray-700 text-justify">
            ICAIN-2024 Conference team invites you to organize a special session in the first version of the 
            "International Conference on Artificial Intelligence and Networking" (ICAIN-2024), to be held at 
            Guru Tegh Bahadur Institute of Technology (GTBIT)(GGSIPU), New Delhi, during 19th-20th September 2024, 
            in your research domain. We are diligently working to bring some of the most knowledgeable researchers 
            from all over the world, along with leaders from the industry, to explore important research topics. 
            The two-day conference will include workshops, technical sessions, and keynotes on cutting-edge technologies 
            related to our industry.
          </p>
          <p className="mt-4 text-gray-700 text-justify">
            The URL for the conference: <a href="https://icain-conf.com" className="text-blue-600 hover:underline">icain-conf.com</a>. 
            "International Conference on Artificial Intelligence and Networking" ICAIN-2024 is organized with the objective 
            of bringing together innovative scientists, professors, research scholars, students, and industrial experts 
            in the field of Computing and Communication to a common forum. The primary goal of the conference is to promote 
            the exchange of innovative scientific information between researchers, developers, engineers, students, and practitioners. 
            Another goal is to promote the transformation of fundamental research into institutional and industrialized research 
            and to convert applied exploration into real-time applications.
          </p>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Highlights of the Conference and Special Session Benefits:</h2>
          <ul className="list-disc mt-4 ml-5 text-gray-700 space-y-3">
            <li>All accepted papers will be published in the proceedings of ICAIN-2024. (All the papers and the proceedings of ICAIN-2024 will be sent to SCOPUS for evaluation!)</li>
            <li>You will get 20% of the total fees collected in your session.</li>
            <li>The minimum number of papers should be 10.</li>
            <li>Extended papers in SCI/Scopus/ESCI/DBLP/ACM Digital Library journals. We have already got approval from some Scopus and high-quality journals. (Soon will be declared)</li>
            <li>High-quality publishing houses are part of this conference like Elsevier, Inderscience, IEEE, Bentham Science, IGI Global, and many more.</li>
            <li>Opportunity to be a Session Chair at the conference.</li>
            <li>Special discount for your personal paper if the above conditions are met. (If the minimum number of papers get registered in your session)</li>
            <li>Extra weightage and support will be provided for your session extended paper in SCI/Scopus Journals.</li>
            <li>Many international and national keynote speakers will be delivering their lectures on the latest innovative technologies in the conference.</li>
            <li>Easy accessibility of the well-connected conference venue.</li>
          </ul>
        </div>

        {/* Proposal Submission */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Proposal Submission:</h2>
          <p className="mt-4 text-gray-700 text-justify">
            If you are interested in conducting a special session, kindly mail us the special session proposal at 
            <a href="mailto:icain.conf@gmail.com" className="text-blue-600 hover:underline"> icain.conf@gmail.com</a> 
            latest by 30th July 2024 as per the template given below.
          </p>
        </div>

        {/* Closing Note */}
        <div>
          <p className="mt-4 text-gray-700 text-justify">
            ICAIN brings together innovative research in the field of Computing and Communication to a common platform. 
            The primary goal of the conference is to promote research and developmental activities. Another goal is to 
            promote scientific information interchange between researchers, developers, engineers, students, and practitioners 
            working in and around the world.
          </p>
          <p className="mt-4 text-gray-700 text-justify">
            All the accepted papers (after double-blind peer review) will be published in a Springer LNNS series (Approved) 
            and further extended accepted papers will be published in the special issues of SCI/SCOPUS/WoS/DBLP/ACM/EI indexed Journals.
          </p>
          <p className="mt-4 text-gray-700 text-justify">
            Looking to see you in ICAIN-2024.
          </p>
          <p className="mt-4 text-gray-700 text-justify">
            Sincerely,
            <br />
            Organizer and Convener
            <br />
            ICAIN-2024
          </p>
        </div>

        {/* Proposal Template Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Session Proposal Template:</h2>
          {/* Add the details of the proposal template or a downloadable link here */}
          <div className="mt-4">
            <a
              href="https://www.icain-conf.com/proposal-template"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Download Proposal Template
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForSpecialSessions;
