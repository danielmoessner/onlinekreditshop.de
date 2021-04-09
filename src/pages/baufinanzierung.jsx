import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

function Page() {
  return (
    <Layout>
      <Header title="Baufinanzierung" text="lorem" />
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Transactions
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What makes us different
            </p>
          </div>
          <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p className="text-lg text-gray-500">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
              consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
              Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames
              senectus vitae.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                <p>
                  Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem
                  nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet
                  quam urna.
                </p>
                <ul>
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies.
                  Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum
                  consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
                  fermentum lacus in. Viverra.
                </p>
                <h3>We’re here to help</h3>
                <p>
                  Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in
                  volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                  Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec
                  ultricies non morbi. Mi a platea auctor mi.
                </p>
              </div>
              <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                <PrimaryButton>Rechner öffnen</PrimaryButton>
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
              </svg>
              <blockquote className="relative bg-white rounded-lg shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-5">
                  <img
                    src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
                    alt="Workcation"
                    className="h-8"
                  />
                  <div className="relative text-lg text-gray-700 font-medium mt-8">
                    <p className="relative">
                      Fragen? Wir freuen uns von Ihnen zu hören. Rufen Sie uns einfach an.
                    </p>
                    <div className="mt-5 text-base">
                      <SecondaryButton>Tel. 1232 123213</SecondaryButton>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center bg-light-blue-vivid-800 rounded-b-lg not-italic py-5 px-6 sm:items-start sm:py-5 sm:pl-12 sm:pr-10 sm:mt-4" />
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
