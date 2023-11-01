import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const handleClickHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleClickContact = (e) => {
    e.preventDefault();
    navigate("/contact");
  };
  return (
    <>
      <div className="flex justify-center items-center text-center">
        <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
          <div className="flex items-center justify-center px-2 md:my-24 md:px-0">
            <div className="lg:flex flex-col lg:items-center lg:space-x-10">
              <div>
                <p className="text-4xl mt-2 font-semibold text-black">
                  404 error
                </p>
                <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
                  We can&#x27;t find that page
                </h1>
                <p className="mt-4 text-gray-500">
                  Sorry, the page you are looking for doesn&#x27;t exist or has
                  been moved.
                </p>
                <div className="mt-6 flex items-center space-x-3 justify-center">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={handleClickHome}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Go back
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={handleClickContact}
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
