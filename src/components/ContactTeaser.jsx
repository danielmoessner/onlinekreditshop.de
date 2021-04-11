import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
// import PropTypes from 'prop-types';
// import { Transition } from '@headlessui/react';
import SecondaryButton from './SecondaryButtonA';

function Component() {
  const data = useStaticQuery(graphql`
    {
      settingsYaml(slug: { eq: "teaser" }) {
        buttonText
        buttonLink
        text
      }
    }
  `);
  const content = data.settingsYaml;

  return (
    <div className="relative bg-white rounded-lg shadow-lg">
      <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-5">
        <img
          src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
          alt="Workcation"
          className="h-8"
        />
        <div className="relative text-lg text-gray-700 font-medium mt-8">
          <p className="relative">{content.text}</p>
          <div className="mt-5 text-base">
            <SecondaryButton href={content.buttonLink}>{content.buttonText}</SecondaryButton>
          </div>
        </div>
      </div>
      <div className="relative flex items-center bg-blue-800 rounded-b-lg not-italic py-5 px-6 sm:items-start sm:py-5 sm:pl-12 sm:pr-10 sm:mt-4" />
    </div>
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export default Component;
