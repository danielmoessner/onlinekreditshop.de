import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';

function Page() {
  return (
    <Layout>
      <Header title="Ratgeber" text="lorem" />
      <section>
        <div className="bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
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
    </Layout>
  );
}

export default Page;
