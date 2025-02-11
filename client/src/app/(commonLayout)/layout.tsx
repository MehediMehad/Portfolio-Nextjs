import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={roboto.className}>
      <h1>Add Nav-Bar</h1>
      <div className="min-h-screen">{children}</div>
      <footer className="min-h-8 justify-center text-center bg-gray-600 text-white">
        This is footer
      </footer>
    </div>
  );
};

export default CommonLayout;
