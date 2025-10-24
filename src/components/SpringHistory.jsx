import React from "react";

const SpringHistory = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-50/50 to-transparent" />

      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24 text-center">
        {/* Eyebrow */}
        <p className="tracking-[0.2em] text-[12px] sm:text-xs font-semibold text-emerald-700/80 uppercase">
          A little story about us
        </p>

        {/* Title */}
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-[42px] font-serif font-bold text-[#3e2f26]">
          Spring History
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-[15px] sm:text-base leading-7 text-gray-600">
          We ship healthy potted plants right to your doorstep. Each plant
          comes with simple care instructions, a money back guarantee, and
          direct access to our plant experts to answer questions. Our goal is
          to make the experience of being a plant parent as wonderful as
          plants themselves.
        </p>

        {/* Quote */}
        <p className="mx-auto mt-6 max-w-2xl italic text-[15px] sm:text-base text-gray-500">
          There is no such thing as a green thumb. Plants take practice —
          just like anything else. The good news is — We’re here to help.
        </p>

        {/* Signature block */}
        <div className="mt-10 flex flex-col items-center gap-3">
          {/* Signature image */}
          <div className="flex justify-center">
            <img
              src="https://see.fontimg.com/api/rf5/mOBm/ODFlOTRmYzJjNmIzNGU2ZWExNWI1NzM5ZTVlMDAyNGEudHRm/TmFpbWFhc2hyYWZUaXRoaQ/autograf-personal-use-only.png?r=fs&h=80&w=1000&fg=111111&bg=FFFFFF&tb=1&s=80"
              alt="Signature of Naima Ashraf Tithi"
              className="w-48 sm:w-56 md:w-64 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.1))" }}
            />
          </div>

          {/* Name and role */}
          <div className="text-center">
            <div className="text-sm sm:text-base font-semibold tracking-wide text-gray-700">
              Naima Ashraf Tithi
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              Director of GreenNest Store
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-emerald-50/50 to-transparent" />
    </section>
  );
};

export default SpringHistory;
