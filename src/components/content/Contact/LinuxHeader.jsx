"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Heart } from "lucide-react";

const MySwal = withReactContent(Swal);

const trafficBase =
  "w-[15px] h-[14px] rounded-full border transition-all duration-200";

export default function LinuxHeader() {
  const [inactive, setInactive] = useState(false);

  const handleClose = () => {
    setInactive(true); // window belakang jadi inactive

    MySwal.fire({
      showConfirmButton: false,
      background: "transparent",
      customClass: {
        popup: "p-0 bg-transparent shadow-none",
      },
      html: (
        <div className="flex flex-col rounded-xl overflow-hidden bg-zinc-900 text-white border border-zinc-800 shadow-2xl dark:bg-white dark:text-zinc-900 dark:border-zinc-200">
          {/* Header */}
          <div className="flex items-center space-x-2 px-4 py-2.5 bg-zinc-800 border-b border-zinc-700 dark:bg-zinc-100 dark:border-zinc-200">
            <button
              id="mac-close"
              className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600"
            />
            <span className="w-3.5 h-3.5 rounded-full bg-gray-700/80 dark:bg-gray-300" />
            <span className="w-3.5 h-3.5 rounded-full bg-gray-700/80 dark:bg-gray-300" />
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-pink-700/50 bg-gradient-to-br from-rose-500/10 to-rose-500/30 dark:border-pink-200 dark:from-rose-300/10 dark:to-rose-300/30">
              <Heart className="h-8 w-8 text-pink-400 dark:text-pink-500" />
            </div>

            <h2 className="mb-3 text-lg font-bold">Thank you</h2>

            <p className="mb-6 text-left leading-relaxed text-zinc-300 dark:text-zinc-600">
              Thank you for visiting my portfolio website. Send me a feedback for
              the next project{" "}
              <a
                href="mailto:baimrifqi1@gmail.com"
                className="text-sky-500 hover:text-sky-700 dark:text-sky-700 dark:hover:text-sky-500"
              >
                baimrifqi1@gmail.com
              </a>
            </p>

            <a
              href="https://www.instagram.com/mg_eaterrrr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:text-sky-700 dark:bg-slate-800 dark:text-white dark:hover:text-yellow-300"
            >
              @mg_eaterrrr
            </a>
          </div>
        </div>
      ),
      didOpen: () => {
        const btn = document.getElementById("mac-close");
        if (btn) btn.addEventListener("click", () => Swal.close());
      },
      didClose: () => {
        setInactive(false); // aktif kembali
      },
    });
  };

  return (
    <div className="flex items-center justify-between rounded-t-sm border-b border-white/10 bg-white/5 px-4 py-2 md:px-5 md:py-1.5 dark:border-zinc-200 dark:bg-gray-400/10">
      <div className="flex items-center space-x-2">
        {/* RED */}
        <button
          onClick={handleClose}
          className={`${trafficBase} ${
            inactive
              ? "cursor-not-allowed bg-zinc-400/20 border-zinc-400/15"
              : "bg-gradient-to-b from-red-700 to-red-500 border-red-700 hover:from-red-800 dark:from-red-400 dark:to-red-500 dark:border-red-400"
          }`}
        />

        {/* YELLOW */}
        <span
          className={`${trafficBase} ${
            inactive
              ? "bg-zinc-400/20 border-zinc-400/15"
              : "bg-gradient-to-b from-yellow-700 to-yellow-500 border-yellow-700 dark:from-yellow-400 dark:to-yellow-500 dark:border-yellow-400"
          }`}
        />

        {/* GREEN */}
        <span
          className={`${trafficBase} ${
            inactive
              ? "bg-zinc-400/20 border-zinc-400/15"
              : "bg-gradient-to-b from-green-700 to-green-500 border-green-700 dark:from-green-400 dark:to-green-500 dark:border-green-400"
          }`}
        />
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-600 md:text-base">
        Contact-Form
      </p>
    </div>
  );
}
