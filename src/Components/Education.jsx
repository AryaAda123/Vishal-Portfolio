import React from 'react';

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science & Engineering",
    institution: "ABC Institute of Technology",
    year: "2021 - 2025",
    grade: "8.4 CGPA",
  },
  {
    degree: "Senior Secondary (12th)",
    branch: "Science (PCM)",
    institution: "XYZ Public School",
    year: "2019 - 2021",
    grade: "85%",
  },
  {
    degree: "Secondary (10th)",
    institution: "XYZ Public School",
    year: "2017 - 2019",
    grade: "90%",
  },
];

const Education = () => {
  return (
    <div id="education" className="p-8 bg-white text-black">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-red-500 inline-block">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            {edu.branch && <p className="text-md italic">{edu.branch}</p>}
            <p className="text-md">{edu.institution}</p>
            <p className="text-sm text-gray-600">{edu.year}</p>
            <p className="text-sm text-gray-700 font-medium">Grade: {edu.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
