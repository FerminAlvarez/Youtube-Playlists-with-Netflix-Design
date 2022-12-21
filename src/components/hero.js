export default function Hero() {
  return (
    <div className="hero min-h-[50vh] bg-base-200">
      <section class="flex items-center flex-1">
        <div class="flex flex-col w-full ">
          <h1 class="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
            <span class="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              YOUTUBE-
            </span>

            <span class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
              PLAYLISTS
            </span>
          </h1>

          <p class="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
            <span className="font-bold">Welcome to our website! </span>
            Here you will be able to see all the videos from your
            <span className="font-bold"> YouTube playlists</span>, ordered and
            presented in a more attractive and easy-to-use way.
            <br />
            <br /> We hope that the web page is to your liking and that you can
            enjoy it.
            <br /> <br />
            <span className="font-bold">Thanks for visiting us!</span>
          </p>
        </div>
      </section>
    </div>
  );
}
