// layout/Footer.js
export default function Footer() {
  return (
    <footer
      className="
        w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] max-w-7xl mx-auto
        px-3 sm:px-4 md:px-6 lg:px-8
        mb-2 sm:mb-3 md:mb-4
        rounded-2xl
        border border-white/20
        bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700
        py-4 sm:py-5 md:py-6 lg:py-8
        text-white
        shadow-xl shadow-emerald-900/30
        relative
        overflow-hidden
      "
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <div className="w-full sm:w-1/2 lg:w-3/5">
          <h3 className="relative text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight inline-block">
            Professional Real Estate Advisory
            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-white/40 rounded-full"></span>
          </h3>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-white/85 leading-relaxed">
            We are with you at every step of buying and selling property.<br className="hidden sm:block" />
            From selecting the right property to reviewing legal documents,<br className="hidden sm:block" />
            accurate valuation, negotiating with the seller, and drafting the contract.
          </p>
        </div>

        <div className="w-full sm:w-1/2 lg:w-2/5">
          <ul className="mt-1 sm:mt-2 flex flex-col gap-0.5 sm:gap-1 text-xs sm:text-sm md:text-base">
            {[
              "Smart luxury property with premium finishes and high security.",
              "Modern villa with stunning sea views and complete privacy.",
              "Family home with a large garden and peaceful surroundings.",
              "Bright apartment in a central location, close to all amenities."
            ].map((item, index) => (
              <li 
                key={index}
                className="group relative rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 hover:bg-white/10 transition-all duration-300 break-words pl-5 sm:pl-6"
              >
                <span className="absolute left-1 sm:left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white/60 group-hover:scale-125 transition-all duration-300"></span>
                <span className="text-white/80 group-hover:text-white transition-colors duration-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}