import resume from "../assets/Ravi.pdf";

export default function About() {
  return (
    <>
      <div className="px-7 py-7  dark:bg-black dark:text-white">
        <h1 className="text-4xl md:text-4xl font-semibold text-center md:text-justify tracking-tighter">
          About Me:
        </h1>
        <p className="mt-6 text-start">
          <span className="text-5xl font-mono">"</span>
          <span className="text-2xl text-green-400">
            Hello,I'm Ravi Rautela
          </span>
          , hailing from the picturesque state of Uttarakhand. Currently
          pursuing my graduation in Jaipur, I also hold a diploma in computer
          science from Uttarakhand. My fascination with computer science has led
          me to delve into various software development projects aimed at
          serving diverse communities. Proficient in languages such as C, Java
          and JavaScript, I am adept at designing efficient algorithms and have
          a strong grasp of database management systems, enhancing my ability to
          create impactful and user-friendly software solutions. Passionate
          about continuous learning and innovation, I aspire to contribute
          meaningfully to the ever-evolving world of technology.
        </p>
        <a href={resume} target="_blank">
          <button
            type="button"
            className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-black before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center mr-2 mb-2 mt-5 dark:bg-white dark:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
            Download Resume
          </button>
        </a>
      </div>
    </>
  );
}
