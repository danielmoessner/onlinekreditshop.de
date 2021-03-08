import React from 'react';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
// import { Transition } from '@headlessui/react';
// import Layout from '../components/Layout';
// import AnimalCard from '../components/AnimalCard';
// import Seo from '../components/Seo';
// import Animate from '../components/Animate';
import Navigation from '../components/Navigation';

function index() {
  // const homePage = data.pagesYaml;

  return (
    <div>
      <div className="bg-gray-100">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
            <div className="relative h-full">
              <svg
                className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
                width="404"
                height="784"
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="404" height="784" fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
              </svg>
              <svg
                className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
                width="404"
                height="784"
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="404" height="784" fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
              </svg>
            </div>
          </div>
          <div className="relative pt-6 pb-16 sm:pb-24">
            <Navigation />
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Wir finden den für Sie</span>
                  <span className="block text-yellow-vivid-600">passenden Kredit</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Wir helfen Ihnen bei der Baufinanzierung, sowie mit persönlichen Ratenkrediten.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1" />
              <div className="flex-1 w-full bg-gray-800" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="bg-white pt-6 pb-8 px-8 relative rounded-lg shadow-lg">
                <h2 className="text-3xl tracking-tight font-bold text-gray-900">
                  Baufinanzierungskredit suchen:
                </h2>
                <form action="" className="flex flex-nowrap space-x-4 mt-8">
                  <div className="w-1/5">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                      Finanzierungsgrund
                      <select
                        id="location"
                        name="location"
                        defaultValue="Immobilienkauf"
                        className="text-gray-700 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-vivid-500 focus:border-yellow-vivid-500 sm:text-sm rounded-md"
                      >
                        <option>Immobilienkauf</option>
                        <option>Eigenes Bauvorhaben</option>
                        <option>Anschlussfinanzierung</option>
                      </select>
                    </label>
                  </div>
                  <div className="w-1/5">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                      Kaufpreis
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="text-gray-700 focus:ring-yellow-vivid-500 focus:border-yellow-vivid-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder="200000"
                          aria-describedby="price-currency"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm" id="price-currency">
                            €
                          </span>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="w-1/5">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                      Eigenkapital
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="text-gray-700 focus:ring-yellow-vivid-500 focus:border-yellow-vivid-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder="100000"
                          aria-describedby="price-currency"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm" id="price-currency">
                            €
                          </span>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="w-1/5">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      PLZ der Immobilie
                      <div className="mt-1">
                        <input
                          type="number"
                          name="email"
                          id="email"
                          className="shadow-sm focus:ring-yellow-vivid-500 focus:border-yellow-vivid-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="90933"
                        />
                      </div>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-1/5 self-end ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-vivid-600 hover:bg-yellow-vivid-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-vivid-500"
                  >
                    Suchen
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:px-8">
            <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
              Bereits mehr als 2344 Bauvorhaben finanziert.
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Unser Angebot für Sie
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Baufinanzierungskredite, Ratenkredite und Finanzierung ohne Eigenkapital
              </p>
            </div>
            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
              <div className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-light-blue-vivid-700"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">Baufinanzierung</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie
                    blandit quis ac. Lacus.
                    <div className="block mt-2">
                      <Link
                        to="/"
                        className="text-base font-semibold text-light-blue-vivid-800 hover:text-light-blue-vivid-700"
                      >
                        Mehr erfahren
                      </Link>
                    </div>
                  </dd>
                </div>
              </div>

              <div className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-light-blue-vivid-500"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">Ratenkredite</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non
                    parturient.
                    <div className="block mt-2">
                      <Link
                        to="/"
                        className="text-base font-semibold text-light-blue-vivid-800 hover:text-light-blue-vivid-700"
                      >
                        Mehr erfahren
                      </Link>
                    </div>
                  </dd>
                </div>
              </div>

              <div className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-light-blue-vivid-500"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Finanzierung ohne Eigenkapital
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum
                    lacus.
                    <div className="block mt-2">
                      <Link
                        to="/"
                        className="text-base font-semibold text-light-blue-vivid-800 hover:text-light-blue-vivid-700"
                      >
                        Mehr erfahren
                      </Link>
                    </div>
                  </dd>
                </div>
              </div>

              <div className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-light-blue-vivid-500"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Ihr Partner aus München
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris
                    sagittis.
                    <div className="block mt-2">
                      <Link
                        to="/"
                        className="text-base font-semibold text-light-blue-vivid-800 hover:text-light-blue-vivid-700"
                      >
                        Mehr erfahren
                      </Link>
                    </div>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-50 pt-16 sm:pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Die Schritte zu Ihrem Kredit
              </h2>
              <p className="mt-3 text-lg text-gray-500 sm:mt-4">
                Wie kommen Sie zu Ihrem Wunschkredit?
              </p>
            </div>
          </div>
          <div className="mt-10 pb-16 sm:pb-28">
            <div className="relative">
              {/* <div className="absolute inset-0 h-1/2 bg-gray-50" /> */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                    <div className="flex flex-col border-b border-gray-100 p-6 sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 leading-6 text-gray-600">
                        Kontakt aufnehmen oder Rechnerformular ausfüllen.
                      </dt>
                      <dd className="order-1 text-3xl font-extrabold text-light-blue-vivid-800">
                        1. Kontakt
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-100 p-6 sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 leading-6 text-gray-600">
                        Wir analysieren zusammen Ihre Situation und finden die für Sie am besten
                        passenden Kredite.
                      </dt>
                      <dd className="order-1 text-3xl font-extrabold text-light-blue-vivid-800">
                        2. Analyse
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-gray-100 p-6 sm:border-0 sm:border-l">
                      <dt className="order-2 mt-2 leading-6 text-gray-600">
                        Wir kümmern uns um den Papierkram und Sie bekommen Ihren Kredit.
                      </dt>
                      <dd className="order-1 text-3xl font-extrabold text-light-blue-vivid-800">
                        3. Kredit
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Ratgeber
              </h2>
              <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                <p className="text-xl text-gray-500">
                  Unser Ratgeber hilft Ihnen mit Artikeln zur Immobilienfinazierung und
                  Anschlussfinanzierung.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
              <div>
                <Link to="/" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                  <p className="mt-3 text-base text-gray-500">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat
                    consectetur nulla deserunt vel. Iusto corrupti dicta.
                  </p>
                </Link>
                <div className="mt-3">
                  <Link
                    to="/"
                    className="text-base font-semibold text-light-blue-vivid-800 hover:text-light-blue-vivid-700"
                  >
                    Artikel lesen
                  </Link>
                </div>
              </div>

              <div>
                <Link to="/" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    How to use search engine optimization to drive sales
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam
                    fugiat nemo cumque.
                  </p>
                </Link>
                <div className="mt-3">
                  <Link
                    to="/"
                    className="text-base font-semibold text-light-blue-vivid-800 hover:text-light-blue-vivid-700"
                  >
                    Artikel lesen
                  </Link>
                </div>
              </div>

              <div>
                <Link to="/" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    Improve your customer experience
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas
                    iusto libero adipisci rem et corporis.
                  </p>
                </Link>
                <div className="mt-3">
                  <Link
                    to="/"
                    className="text-base font-semibold text-light-blue-vivid-800 hover:text-light-blue-vivid-700"
                  >
                    Artikel lesen
                  </Link>
                </div>
              </div>

              <div>
                <Link to="/" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    Writing effective landing page copy
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias
                    quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores
                    vitae cupiditate. Cumque id deleniti explicabo.
                  </p>
                </Link>
                <div className="mt-3">
                  <Link
                    to="/"
                    className="text-base font-semibold text-light-blue-vivid-800 hover:text-light-blue-vivid-700"
                  >
                    Artikel lesen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              <span className="block">Bereit?</span>
              <span className="block text-yellow-vivid-600">
                Jetzt Baufinanzierungskredite suchen.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow" />
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  to="/"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-vivid-600 ring-offset-gray-800 hover:bg-yellow-vivid-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-vivid-500"
                >
                  Rechner öffnen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <footer className="bg-gray-800" aria-labelledby="footerHeading">
          <h2 id="footerHeading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-7xl mx-auto pb-8 px-4 sm:px-6 lg:px-8">
            <div className="border-t-2 border-gray-600 pb-10 pt-12 lg:pt-16">
              <div className=" xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        Angebot
                      </h3>
                      <ul className="mt-4 space-y-4">
                        <li>
                          <Link to="/" className="text-base text-gray-300 hover:text-white">
                            Baufinanzierung
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="text-base text-gray-300 hover:text-white">
                            Ratenkredit
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="text-base text-gray-300 hover:text-white">
                            Finanzierung ohne Eigenkapital
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-12 md:mt-0">
                      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        Navigation
                      </h3>
                      <ul className="mt-4 space-y-4">
                        <li>
                          <Link to="/" className="text-base text-gray-300 hover:text-white">
                            Startseite
                          </Link>
                        </li>

                        <li>
                          <Link to="/" className="text-base text-gray-300 hover:text-white">
                            Über uns
                          </Link>
                        </li>

                        <li>
                          <Link to="/" className="text-base text-gray-300 hover:text-white">
                            Rategeber
                          </Link>
                        </li>

                        <li>
                          <Link to="/" className="text-base text-gray-300 hover:text-white">
                            Kontakt
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        Kontakt
                      </h3>
                      <ul className="mt-4 space-y-4 text-gray-300">
                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 flex-shrink-0 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <Link to="/" className="text-base text-gray-300 hover:text-white">
                            kontakt@beispiel.de
                          </Link>
                        </li>

                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 flex-shrink-0 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <Link to="/" className="text-base text-gray-300 hover:text-white">
                            089 9876543
                          </Link>
                        </li>

                        <li className="flex">
                          <svg
                            className="w-5 h-5 flex-shrink-0 mr-2 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <address>
                            <p>
                              Dachauer Str. x
                              <br />
                              80993 München
                            </p>
                          </address>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-12 md:mt-0">
                      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        Rechtliches
                      </h3>
                      <ul className="mt-4 space-y-4">
                        <li>
                          <Link to="/" className="text-base text-gray-300 hover:text-white">
                            Impressum
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="text-base text-gray-300 hover:text-white">
                            Datenschutz
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
              <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                &copy; Online Kreditshop
              </p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

index.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // data: PropTypes.object.isRequired,
};

export default index;

// export const query = graphql`
//   {
//     allMarkdownRemark(filter: { frontmatter: { collection: { eq: "animal" } } }) {
//       edges {
//         node {
//           frontmatter {
//             slug
//             excerpt
//             category
//             title
//             image {
//               childImageSharp {
//                 fluid {
//                   aspectRatio
//                   base64
//                   sizes
//                   src
//                   srcSet
//                 }
//               }
//             }
//           }
//           id
//         }
//       }
//     }
//     pagesYaml(slug: { eq: "home" }) {
//       meta {
//         image {
//           childImageSharp {
//             resize(width: 1200) {
//               src
//             }
//           }
//         }
//         description
//         title
//       }
//     }
//   }
// `;
