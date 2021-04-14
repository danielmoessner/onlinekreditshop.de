import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Transition } from '@headlessui/react';
import { GatsbyImage } from 'gatsby-plugin-image';

function Navigation() {
  const data = useStaticQuery(graphql`
    {
      settingsYaml(slug: { eq: "global" }) {
        logo {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 320)
          }
        }
      }
      allMarkdownRemark(filter: { frontmatter: { collection: { eq: "calculator" } } }) {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);
  const calculators = data.allMarkdownRemark.nodes.map((node) => node.frontmatter);
  const [isOpen, setIsOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  function changeOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 top-0 left-0 right-0 w-full absolute z-50">
        <div className="relative flex items-center justify-between sm:h-10 md:justify-center">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link className="block" to="/">
                <GatsbyImage
                  className="w-20 h-auto sm:w-40"
                  image={data.settingsYaml.logo.childImageSharp.gatsbyImageData}
                  alt="Logo"
                />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  onClick={changeOpen}
                  className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">Menü öffnen</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
            <div className="relative">
              <button
                onClick={() => setOfferOpen(!offerOpen)}
                type="button"
                className={`group rounded-md inline-flex items-center text-base font-medium ring-offset-gray-050 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
                  offerOpen ? 'text-gray-900' : 'text-gray-500'
                }`}
                aria-expanded="false"
              >
                <span>Angebot</span>
                <svg
                  className={`ml-2 h-5 w-5 group-hover:text-gray-500 ${
                    offerOpen ? 'text-gray-600' : 'text-gray-400'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <Transition
                show={offerOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                from="opacity-100 translate-y-0"
                to="opacity-0 translate-y-1"
                className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <Link
                      to="/baufinanzierung/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Baufinanzierung</p>
                        <p className="mt-1 text-sm text-gray-500">
                          Mit dem richtigen Kredit zum Eigenheim.
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/ratenkredit/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Ratenkredit</p>
                        <p className="mt-1 text-sm text-gray-500">
                          Wir finden die für Sie passende Rate.
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/finanzierung-ohne-eigenkapital/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Finanzierung ohne Eigenkapital
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Wir helfen Ihnen auch wenn Sie kein Eigenkapital zur Verfügung haben.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </Transition>
            </div>
            <Link to="/ueber-uns/" className="font-medium text-gray-500 hover:text-gray-900">
              Über uns
            </Link>
            <Link to="/ratgeber/" className="font-medium text-gray-500 hover:text-gray-900">
              Ratgeber
            </Link>
            <div className="relative">
              <button
                onClick={() => setCalculatorOpen(!calculatorOpen)}
                type="button"
                className={`group rounded-md inline-flex items-center text-base font-medium ring-offset-gray-050 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
                  calculatorOpen ? 'text-gray-900' : 'text-gray-500'
                }`}
                aria-expanded="false"
              >
                <span>Rechner</span>
                <svg
                  className={`ml-2 h-5 w-5 group-hover:text-gray-500 ${
                    calculatorOpen ? 'text-gray-600' : 'text-gray-400'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <Transition
                show={calculatorOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                from="opacity-100 translate-y-0"
                to="opacity-0 translate-y-1"
                className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {calculators.map((calculator) => (
                      <Link
                        key={calculator.slug}
                        to={`/rechner/${calculator.slug}/`}
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="">
                          <p className="text-base font-medium text-gray-900">{calculator.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Transition>
            </div>
            <Link to="/kontakt/" className="font-medium text-gray-500 hover:text-gray-900">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="z-50 absolute top-0 inset-x-0 p-2 transition-all transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <GatsbyImage
                className="w-20 h-auto"
                image={data.settingsYaml.logo.childImageSharp.gatsbyImageData}
                alt="Logo"
              />
            </div>
            <div className="-mr-2">
              <button
                onClick={changeOpen}
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
              >
                <span className="sr-only">Menü schließen</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Startseite
            </Link>
            <Link
              to="/baufinanzierung/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Baufinanzierung
            </Link>
            <Link
              to="/ratenkredit/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Ratenkredit
            </Link>
            <Link
              to="/finanzierung-ohne-eigenkapital/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Finanzierung ohne Eigenkapital
            </Link>
            <Link
              to="/ueber-uns/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Über uns
            </Link>
            <Link
              to="/rategeber/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Ratgeber
            </Link>
            {calculators.map((calculator) => (
              <Link
                key={calculator.slug}
                to={`/rechner/${calculator.slug}/`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Rechner: {calculator.title}
              </Link>
            ))}
            <Link
              to="/kontakt/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </Transition>
    </nav>
  );
}

export default Navigation;
