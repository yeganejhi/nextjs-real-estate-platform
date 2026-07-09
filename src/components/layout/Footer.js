// layout/Footer.js
export default function Footer() {
  return (
    <footer
      className="
        w-full mx-auto
        md:max-w-3xl lg:max-w-5xl
        px-4 sm:px-6 md:px-10
        mb-2
        rounded-xl
        border border-white/10
        bg-linear-to-r from-emerald-600 to-green-600
        py-6
        text-white
        shadow-lg shadow-emerald-900/20
      "
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div>
          <h3 className="text-base sm:text-lg font-semibold tracking-tight">
            lorem10
          </h3>
          <p className="mt-2 text-sm text-white/85 leading-relaxed">
            lorem
          </p>
        </div>

        <div>
          <ul className="mt-3 flex flex-col gap-1 text-sm">
            <li className="rounded-md px-2 py-1 hover:bg-white/10 transition-colors">
              1
            </li>
            <li className="rounded-md px-2 py-1 hover:bg-white/10 transition-colors">
              2
            </li>
            <li className="rounded-md px-2 py-1 hover:bg-white/10 transition-colors">
              3
            </li>
            <li className="rounded-md px-2 py-1 hover:bg-white/10 transition-colors">
              4
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
