export default function Footer() {
  return (
    <>
      <div className="px-2 py-2 dark:bg-slate-500">
        <div className="flex items-center justify-center text-center px-7 py-7 bg-gray-100 rounded-lg dark:text-white dark:bg-black ">
          <p className="w-full">
            © 2023 Developed by{" "}
            <a
              href="https://github.com/ravi-rautela"
              className="font-medium underline"
            >
              Ravi Rautela
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
