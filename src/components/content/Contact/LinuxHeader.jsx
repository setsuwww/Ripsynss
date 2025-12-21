import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Heart } from "lucide-react";

const MySwal = withReactContent(Swal);

export default function LinuxHeader() {
  const handleClose = () => {
    MySwal.fire({ showConfirmButton: false, background: "transparent",
      customClass: { popup: "p-0 bg-transparent shadow-none"},
      html: (
        <div className="flex flex-col rounded-xl overflow-hidden bg-zinc-900 text-white border border-zinc-800 shadow-2xl dark:bg-white dark:text-zinc-900 dark:border-zinc-200">
          <div className="flex items-center space-x-2 px-4 py-3 bg-zinc-800 border-b border-zinc-700 dark:bg-zinc-100 dark:border-zinc-200">
            <button id="mac-close" className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"/>
            <span className="w-3 h-3 rounded-full bg-gray-700/80 dark:bg-gray-300" />
            <span className="w-3 h-3 rounded-full bg-gray-700/80 dark:bg-gray-300" />
          </div>

          <div className="p-8 text-center">
            <div className="bg-gradient-to-br from-rose-500/10 to-rose-500/30 border border-pink-700 dark:from-rose-400/20 dark:to-rose-400/40 dark:border-pink-400 rounded-md w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-pink-400 dark:text-pink-500" />
            </div>

            <h2 className="text-lg font-bold mb-2">Thank you</h2>

            <p className="text-zinc-300 dark:text-zinc-600 mb-2">
              Thank you for visiting my portfolio website.
            </p>

            <a className="text-zinc-500 dark:text-zinc-400">
              @mg_eaterrrr
            </a>
          </div>
        </div>
      ),
      didOpen: () => { const btn = document.getElementById("mac-close");
        if (btn) { btn.addEventListener("click", () => Swal.close())}
      },
    });
  };

  return (
    <div className="flex items-center justify-between py-2 md:py-1.5 px-4 md:px-5 border-b border-white/10 bg-white/5 rounded-t-sm dark:bg-gray-400/10 dark:border-zinc-200">
      <div className="flex items-center space-x-1.5 md:space-x-2">
        <button onClick={handleClose} className="w-3.5 h-3.5 rounded-full bg-gradient-to-b from-red-700 to-red-500 border border-red-700 hover:from-red-800 dark:from-red-400 dark:to-red-500 dark:border-red-400" title="Close?"/>
        <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-b from-yellow-700 to-yellow-500 border border-yellow-700 dark:from-yellow-400 dark:to-yellow-500 dark:border-yellow-400"/>
        <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-b from-green-700 to-green-500 border border-green-700 dark:from-green-400 dark:to-green-500 dark:border-green-400"/>
      </div>
      <p className="text-sm md:text-base text-slate-500 dark:text-slate-600">
        Contact-Form
      </p>
    </div>

  );
}
