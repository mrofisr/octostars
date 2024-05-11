const Error = () => {
  setTimeout(() => {
    window.location.href = "/";
  }, 3000);
  return (
    <>
      <div className="container mx-auto flex items-center justify-center py-8 h-screen">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://github.githubassets.com/assets/mona-loading-dimmed-5da225352fd7.gif"
            alt="Error"
            className="w-24 h-24"
          />
          <h1 className="text-3xl font-bold text-black uppercase font-mono">
            Error 404
          </h1>
        </div>
      </div>
    </>
  );
};

export default Error;
