import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import SecondaryButton from '../components/SecondaryButton';

function Page() {
  return (
    <Layout>
      <Header title="Über uns" text="lorem" />
      <div className="relative bg-white">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-600 to-green-400" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
          <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-base font-semibold tracking-wide text-blue-700 uppercase">
                Ihr Partner in München
              </h2>
              <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Wir bieten Baufinanzierung und Ratenkredite
              </p>
              <dl className="mt-12 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute h-7 w-7 rounded-md flex items-center justify-center">
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-blue-500"
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
                    </div>
                    <p className="ml-10 text-lg leading-6 font-medium text-gray-900">List view</p>
                  </dt>
                  <dd className="mt-2 ml-10 text-base text-gray-500">
                    Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis
                    aliquam platea vestibulum condimentum morbi.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute h-12 w-12 bg-gradient-to-r from-blue-600 to-green-400 rounded-md flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-white"
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
                          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Boards</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada
                    feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor
                    rutrum.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute h-12 w-12 bg-gradient-to-r from-blue-600 to-green-400 rounded-md flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-white"
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Calendar</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada
                    feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor
                    rutrum.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute h-12 w-12 bg-gradient-to-r from-blue-600 to-green-400 rounded-md flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-white"
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
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Teams</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut
                    sit justo non, consectetur et varius.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-green-400 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
            <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
              <div>
                <h2 className="sr-only">Price</h2>
                <p className="relative grid grid-cols-2">
                  <span className="flex flex-col text-center">
                    <span className="text-5xl font-extrabold text-white tracking-tight">$99</span>
                    <span className="mt-2 text-base font-medium text-blue-100">Setup fee</span>
                    <span className="sr-only">plus</span>
                  </span>
                  <span
                    className="pointer-events-none absolute h-12 w-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-6 w-6 text-blue-200"
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                  <span>
                    <span className="flex flex-col text-center">
                      <span className="text-5xl font-extrabold text-white tracking-tight">$4</span>
                      <span className="mt-2 text-base font-medium text-blue-100">Per month</span>
                    </span>
                  </span>
                </p>
              </div>
              <ul className="rounded overflow-hidden grid gap-px sm:grid-cols-2">
                <li className="bg-blue-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                  <svg
                    className="h-6 w-6 text-blue-200"
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
                  <span className="ml-3">Unlimited projects</span>
                </li>

                <li className="bg-blue-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                  <svg
                    className="h-6 w-6 text-blue-200"
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
                  <span className="ml-3">No per user fees</span>
                </li>

                <li className="bg-blue-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                  <svg
                    className="h-6 w-6 text-blue-200"
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
                  <span className="ml-3">Unlimited storage</span>
                </li>

                <li className="bg-blue-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                  <svg
                    className="h-6 w-6 text-blue-200"
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
                  <span className="ml-3">24/7 support</span>
                </li>

                <li className="bg-blue-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                  <svg
                    className="h-6 w-6 text-blue-200"
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
                  <span className="ml-3">Cancel any time</span>
                </li>

                <li className="bg-blue-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                  <svg
                    className="h-6 w-6 text-blue-200"
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
                  <span className="ml-3">14 days free</span>
                </li>
              </ul>
              <div
                href="#"
                className="w-full bg-white border border-transparent rounded-md py-4 px-8 flex items-center justify-center text-lg leading-6 font-medium text-blue-700 hover:bg-blue-50 md:px-10"
              >
                Get started today
              </div>
              <div
                href="#"
                className="block text-center text-base font-medium text-blue-100 hover:text-white"
              >
                Try Workflow Lite for free
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 bg-opacity-25">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-3xl font-extrabold text-blue-900 text-center lg:text-left lg:col-span-2">
              Wir freuen uns darauf von Ihnen zu hören.
            </h2>
            <div className="mt-8 flex lg:mt-0 justify-end lg:items-baseline">
              <SecondaryButton>Zum Kontakt</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
