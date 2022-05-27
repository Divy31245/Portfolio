export default function RightSidebar() {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen w-3/4 ">
      <div className="flex flex-col items-center justify-center rounded-md p-4 space-y-3">
          <p className="text-2xl">Hi, I&apos;m Divy Zala.</p>
          <span className="text-5xl text-blue-500 font-extrabold">A React/Next.js Web Developer.</span>
      </div>
      <div className="flex items-center justify-center">
        <button className="flex items-center bg-blue-500 justify-center space-x-1 absolute bottom-0 right-0 mb-8 mr-6 text-white rounded-xl border-b hover:-skew-y-2 p-4 text-xl  hover:bg-indigo-500 hover:text-white hover:animate-pulse transition ease-in-out duration-100 delay-75 ">
          <div>Checkout my skills</div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
        </button>
      </div>
    </div>
  );
}

{/* <div>
  <p className="textmd text-lg">
    I am a React/Next.js web developer. I can make amazing websites for
    your need using my skills. I know a bit backend and hope to be full
    stack developer in near future.
  </p>
</div> */}