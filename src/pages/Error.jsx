const Error = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-center py-8 h-screen">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://github.githubassets.com/assets/mona-loading-dimmed-5da225352fd7.gif"
            alt="Error 404"
            className="w-24 h-24 object-cover"
          />
          <h1 className="text-3xl font-bold text-gray-600 uppercase font-mono">
            Error 404 Page Not Found
          </h1>
          <p className="text-lg text-gray-500 font-mono">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <a
            href="/"
            className="text-gray-600 font-mono hover:text-amber-500 text-xs"
          >
            Go back to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default Error;
