import React, { useState } from 'react';
import CODEANT_LOGO from '../images/logo.png';
import GITHUB_LOGO from '../images/githublogo.png';
import BITBUCKET_LOGO from '../images/bitbucketlogo.png';
import AZURE_LOGO from '../images/azurelogo.png';
import GITLAB_LOGO from '../images/gitlblogo.png';
import { useNavigate } from 'react-router-dom';

const SigninForm = () => {
  const navigate = useNavigate();
  const [SaasPressed, setSaasPressed] = useState(true);
  const handleButtonClick = (value) => setSaasPressed(value);

  const SignInOption = ({ imgSrc, text }) => (
    <div className="flex items-center justify-center px-4 py-4 my-4 border border-gray-300 rounded-lg hover:bg-gray-100 hover:shadow-lg transition duration-300" onClick={() => navigate("/home")}>
      <img src={imgSrc} alt={text} />
      <button className="text-[#171717] text-sm md:text-base font-semibold ml-4">
        {text}
      </button>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="w-full max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-md min-h-[75%]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-6 gap-3">
            <img src={CODEANT_LOGO} alt="logo" />
            <p className="text-xl md:text-3xl font-normal leading-8 text-left text-[#181D27]">CodeAnt AI</p>
          </div>
          <p className="text-xl md:text-3xl font-semibold leading-8 md:leading-10 text-left mb-6 md:mb-8 text-[#181D27]">
            Welcome to CodeAnt AI
          </p>
          <div className="relative flex items-center justify-center mb-8 w-full md:w-11/12">
            <div
              className={`absolute left-0 top-0 h-full w-1/2 transition-transform duration-300 bg-blue-500 rounded-lg ${SaasPressed ? 'translate-x-0' : 'translate-x-full'}`}
            ></div>
            <button
              onClick={() => handleButtonClick(true)}
              className="relative z-10 w-1/2 px-4 py-2 md:px-6 md:py-2 text-sm md:text-xl font-semibold leading-6 md:leading-7 text-center focus:outline-none"
              style={{ color: SaasPressed ? 'white' : 'black' }}
            >
              SAAS
            </button>
            <button
              onClick={() => handleButtonClick(false)}
              className="relative z-10 w-1/2 px-4 py-2 md:px-6 md:py-2 text-sm md:text-xl font-semibold leading-6 md:leading-7 text-center focus:outline-none"
              style={{ color: !SaasPressed ? 'white' : 'black' }}
            >
              Self Hosted
            </button>
          </div>
        </div>

        <hr />

        <div className="px-4 md:px-12">
          <SignInOption imgSrc={GITHUB_LOGO} text="Sign in with Github" />
          <SignInOption imgSrc={BITBUCKET_LOGO} text="Sign in with Bitbucket" />
          {SaasPressed && (
            <>
              <SignInOption imgSrc={AZURE_LOGO} text="Sign in with Azure Devops" />
              <SignInOption imgSrc={GITLAB_LOGO} text="Sign in with GitLab" />
            </>
          )}
        </div>
      </div>

      <p className="text-sm md:text-base text-[#181D27] mt-8 font-normal">
        By signing up you agree to the{' '}
        <span className="text-center leading-6 font-bold">Privacy Policy</span>.
      </p>
    </div>
  );
};

export default SigninForm;
