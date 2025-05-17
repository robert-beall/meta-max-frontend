import { createTheme, DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, ThemeProvider } from "flowbite-react";
import Link from "next/link";
import { ReactNode } from "react";
import pkg from "../package.json";

const theme = createTheme({
  navbar: {
    root: {
      base: "bg-gray-100 dark:bg-gray-900 px-4 py-2.5 shadow-md",
    },
    collapse: {
      base: "w-full md:block md:w-auto",
    },
    link: {
      base: "block py-2 pr-4 pl-3 md:p-0 rounded md:hover:bg-transparent",
      active: {
        on: "text-blue-700 dark:text-blue-500 bg-transparent",
        off: "text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500"
      }
    }
  },
});

const Navigation = (): ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar fluid rounded className="border-b border-gray-200 dark:border-gray-700">
        <NavbarBrand as={Link} href="/">
          <span className="text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
            Metadata Singularity
          </span>
        </NavbarBrand>
        
        <div className="flex items-center gap-3 md:order-2">
          <DarkThemeToggle />
          <a 
            href="https://github.com/robert-beall/metadata-singularity" 
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
            </svg>
          </a>
          <NavbarToggle />
        </div>
        
        <NavbarCollapse>
          <NavbarLink as={Link} href="/" active>
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="/upload">
            Upload File
          </NavbarLink>
          <NavbarLink as={Link} href="/about">
            About
          </NavbarLink>
        </NavbarCollapse>
        
        <div className="hidden md:flex items-center text-xs text-gray-500 dark:text-gray-400 absolute right-16 bottom-1">
          v{pkg.version}
        </div>
      </Navbar>
    </ThemeProvider>
  );
};

export default Navigation;