const Hero = () => {
  return (
    <div>
        <section className="relative bg-white bg-cover bg-center bg-no-repeat flex">
          <div className="relative mx-auto max-w-screen-xl py-20">
            <div className="max-w-5xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-blue-500 text-4xl font-extrabold sm:text-6xl">
                The Codehub Blogs
              </h1>

              <p className="mt-4 max-w-2xl mx-auto text-3xl text-black pb-2 sm:text-xl/relaxed ">
                A blog about code and love
              </p>

              <div className="mt-8 flex flex-wrap text-left">
                <input className="mx-auto border-2 px-9 rounded-full border-black " type="text" />
              </div>
            </div>
          </div>
          <div>
            <h1></h1>
          </div>
        </section>
      </div>
  )
}

export default Hero