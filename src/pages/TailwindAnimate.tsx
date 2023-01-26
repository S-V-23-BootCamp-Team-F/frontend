// test page
// tailwind animate css
export default function TailwindAnimate() {
  return (
    <div className="h-screen w-screen">
      <div className="group relative m-auto mt-36 h-96 w-96 overflow-hidden bg-black">
        <img
          className="h-full w-full transform object-cover backdrop-opacity-100 duration-700"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80"
        />
        <div className="absolute inset-y-full h-full w-full transform bg-gradient-to-t from-black duration-500 group-hover:-inset-y-0">
          <div className="absolute flex w-full place-content-center">
            <p className="mt-10 text-center font-serif text-3xl font-bold capitalize text-white shadow-2xl">
              Team work
            </p>
          </div>
          <div className="absolute mt-20 flex w-full place-content-center">
            <p className="mt-5 w-4/5 text-center font-sans text-white">
              Collaborative effort of a group to achieve a common goal the most
              effective and efficient way!
            </p>
          </div>
          <button className="absolute left-1/4 bottom-4 h-10 w-48 rounded-lg bg-white font-bold text-black">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
