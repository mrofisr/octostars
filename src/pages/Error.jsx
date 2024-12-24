const Error = () => {
  // Get current UTC date and time
  const currentDate = new Date().toISOString().replace('T', ' ').slice(0, -5);
  const userLogin = "anonymous";

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="container mx-auto flex items-center justify-center min-h-screen p-4 relative">
        <div className="bg-white border-[3px] border-black shadow-neo-lg p-8 max-w-2xl w-full transform hover:-translate-y-1 transition-all">
          {/* Error Header */}
          <div className="flex flex-col items-center space-y-6 mb-8">
            <img
              src="https://github.githubassets.com/assets/mona-loading-dimmed-5da225352fd7.gif"
              alt="Error 404"
              className="w-24 h-24"
            />
            <h1 className="text-4xl font-bold text-black uppercase font-mono border-[3px] border-black bg-yellow-300 px-4 py-2 shadow-neo">
              Error 404
            </h1>
          </div>

          {/* Error Details */}
          <div className="space-y-6">
            <div className="bg-gray-100 border-[3px] border-black p-4 font-mono text-sm">
              <p className="mb-2">
                <span className="text-gray-600">Current Date and Time (UTC):</span>{" "}
                <span className="font-bold">{currentDate}</span>
              </p>
              <p>
                <span className="text-gray-600">Current User's Login:</span>{" "}
                <span className="font-bold">{userLogin}</span>
              </p>
            </div>

            <p className="text-lg text-black font-mono leading-relaxed">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/"
                className="bg-green-400 text-black font-mono py-2 px-6 border-[3px] border-black shadow-neo hover:shadow-neo-lg hover:-translate-y-[2px] transition-all text-center"
              >
                Return Home
              </a>
              <button
                onClick={() => window.history.back()}
                className="bg-blue-400 text-black font-mono py-2 px-6 border-[3px] border-black shadow-neo hover:shadow-neo-lg hover:-translate-y-[2px] transition-all"
              >
                Go Back
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t-[3px] border-black">
            <p className="text-center font-mono text-sm">
              Need help? Check our{" "}
              <a
                href="/docs"
                className="text-blue-600 underline hover:text-blue-800"
              >
                documentation
              </a>{" "}
              or{" "}
              <a
                href="/contact"
                className="text-blue-600 underline hover:text-blue-800"
              >
                contact support
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="fixed top-4 left-4 w-8 h-8 border-[3px] border-black bg-red-400 transform rotate-45"></div>
      <div className="fixed bottom-4 right-4 w-8 h-8 border-[3px] border-black bg-blue-400 transform rotate-45"></div>
    </div>
  );
};

export default Error;