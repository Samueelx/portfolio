import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="text-neutral-900 dark:text-neutral-500">© 2023 Samuel Gitimu</div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/Samueelx" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-900 dark:text-neutral-500"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/sammypimo3"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-900 dark:text-neutral-500"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/samuel-gitimu-03ba6424b/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-900 dark:text-neutral-500"
              size={30}
            />
          </a>
          <a
            href="https://www.instagram.com/sam.ueelx/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-900 dark:text-neutral-500"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
