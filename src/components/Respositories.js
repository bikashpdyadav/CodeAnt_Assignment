import React from 'react';
import REFRESH from '../images/refresh.png';
import PLUS from '../images/plus.png';
import SEARCH from '../images/search.png';
import POINT from '../images/Ellipse 1 (1).png';
import DATABASE from '../images/database.png';

const Respositories = () => {
  const repositories = [
    {
      repoName: "design-system",
      repoType: "Public",
      tech: "React",
      repoSize: "7320 KB",
      lastUpdate: "Updated 1 day ago",
    },
    {
      repoName: "codeant-ci-app",
      repoType: "Private",
      tech: "Javascript",
      repoSize: "5871 KB",
      lastUpdate: "Updated 2 days ago",
    },
    {
      repoName: "analytics-dashboard",
      repoType: "Private",
      tech: "Python",
      repoSize: "4521 KB",
      lastUpdate: "Updated 5 days ago",
    },
    {
      repoName: "mobile-app",
      repoType: "Public",
      tech: "Swift",
      repoSize: "3096 KB",
      lastUpdate: "Updated 3 days ago",
    },
    {
      repoName: "e-commerce-platform",
      repoType: "Private",
      tech: "Java",
      repoSize: "6210 KB",
      lastUpdate: "Updated 6 days ago",
    },
    {
      repoName: "blog-website",
      repoType: "Public",
      tech: "HTML/CSS",
      repoSize: "1876 KB",
      lastUpdate: "Updated 4 days ago",
    },
    {
      repoName: "social-network",
      repoType: "Private",
      tech: "PHP",
      repoSize: "5432 KB",
      lastUpdate: "Updated 7 days ago",
    },
  ];

  return (
    <div className='w-full flex min-h-screen flex-wrap justify-start p-4'>
      <div className='w-full bg-white border border-[#E9EAEB] rounded-lg shadow-sm p-6'>
        <div>
          <div className="flex justify-between items-center flex-wrap mb-4">
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold leading-[var(--Lineheightdisplay-xs)] text-left text-[#181D27] my-2">
                Repositories
              </h1>
              <span className="text-[#414651] text-sm font-normal leading-5 text-left mb-4">
                33 total repositories
              </span>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center text-sm font-normal leading-5 text-left text-[#414651] border border-gray-300 rounded-md px-4 py-2 hover:bg-[#1570EF] hover:text-white">
                <img src={REFRESH} alt="refresh" className="mr-2" />
                Refresh All
              </button>
              <button className="flex items-center text-sm font-normal leading-5 text-left text-[#414651] border border-gray-300 rounded-md px-4 py-2 hover:bg-[#1570EF] hover:text-white">
                <img src={PLUS} alt="plus" className="mr-2 bg-gray-400" />
                Add Repository
              </button>
            </div>
          </div>
          <div className="relative flex items-center cursor-pointer lg:w-1/3">
            <div className='absolute left-3 flex gap-2 px-4'>
              <img
                src={SEARCH}
                alt="search"
              />
              <p className='text-base font-normal leading-5'>Search Repositories</p>
            </div>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className='my-4'>
          {repositories.map((repo, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-md bg-white">
              <div className="flex items-center justify-start gap-8">
                <p className="text-lg font-semibold text-gray-800">{repo.repoName}</p>
                <button
                  className={`px-2 py-1 text-sm font-medium rounded-full ${repo.repoType === "Public" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                    }`}
                >
                  {repo.repoType}
                </button>
              </div>
              <div className="flex items-center justify-start gap-8 mt-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <p>{repo.tech}</p>
                  <img src={POINT} alt="point" />
                </div>
                <div className="flex items-center gap-2">
                  <img src={DATABASE} alt="database" />
                  <p>{repo.repoSize}</p>
                </div>
                <p>{repo.lastUpdate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Respositories;