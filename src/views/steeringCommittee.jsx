import React from 'react';

// Example committee member data
const committeeMembers = [
  {
    name: 'Dr. John Doe',
    designation: 'Chairperson',
    affiliation: 'University of ABC',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Prof. Jane Smith',
    designation: 'Co-Chairperson',
    affiliation: 'Institute of XYZ',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Dr. Emily Johnson',
    designation: 'Member',
    affiliation: 'College of LMN',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  // Add more members as needed
];

const SteeringCommittee = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      {/* Banner Section */}
      <div className="w-full h-64 bg-cover bg-center flex items-center justify-center" 
           style={{ backgroundImage: "url('https://via.placeholder.com/1920x500')" }}>
        {/* Replace the above URL with the actual banner image URL */}
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-extrabold">Steering Committee</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl w-full py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <p className="text-center text-lg text-gray-700">
            Meet the distinguished members of our Steering Committee.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center"
            >
              <img
                className="w-32 h-32 rounded-full object-cover mb-4"
                src={member.image}
                alt={member.name}
              />
              <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
              <p className="text-sm text-indigo-600">{member.designation}</p>
              <p className="text-sm text-gray-500">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SteeringCommittee;
