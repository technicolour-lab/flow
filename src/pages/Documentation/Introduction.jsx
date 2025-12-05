import React from 'react'
import { NavLink } from 'react-router-dom'

const Introduction = () => {
  return (
    <div>
      <div className='rounded-md shadow-md border mb-6 relative'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold drop-shadow-md z-10'>
          Flow
        </div>
        <img className='rounded-md w-full ' src='/doc/introScreen.png'/>
      </div>
      <article>
          <header>
            <p className="text-base ">
              Getting started
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Introduction 
            </h1>
          </header>
          <p className="mt-2 text-xl">
          Welcome to Flow, a powerful web application for creating and editing interactive user flows. Design and visualise user journeys across websites and applications using customisable shapes, wireframes, and social platform icons.
          </p>
          <hr className='my-4' />
          <div className="mt-6">
            <h2 className='font-semibold text-xl my-2 text-gray-900'>
            What is Flow?
            </h2>
            <p>
            Flow is a web-based application that allows you to create, customise, and share interactive user flow diagrams. Whether you're designing user journeys, mapping out application workflows, or visualising customer experiences, Flow provides an intuitive interface to bring your ideas to life.
            </p>
            <p className="mt-4">
            With Flow, you can:
            </p>
            <ul className='list-disc ml-5 leading-7 mt-2'>
              <li>Create visual flow diagrams with customisable nodes and connections</li>
              <li>Use a variety of shapes, wireframes, and social media icons</li>
              <li>Organise flows into groups for better project management</li>
              <li>Share your flows with others via shareable links</li>
              <li>Export flows as PNG images</li>
              <li>Preview flows in a dedicated viewer mode</li>
            </ul>
          </div>
          <div className="mt-6">
            <h2 className='font-semibold text-xl my-2 text-gray-900'>
            How Your Data is Stored
            </h2>
            <p>
            Flow uses your browser's <strong>localStorage</strong> to store all your flows and groups. This means:
            </p>
            <ul className='list-disc ml-5 leading-7 mt-2'>
              <li>Your data stays private and is stored locally in your browser</li>
              <li>No account or login required - start using Flow immediately</li>
              <li>All your flows are automatically saved as you work</li>
              <li>Your data persists between sessions on the same browser</li>
            </ul>
            <p className="mt-4">
            <strong>Note:</strong> Since data is stored locally, your flows will only be accessible on the browser and device where you created them. If you clear your browser data, your flows will be removed.
            </p>
          </div>
          <div className="mt-6">
            <h2 className='font-semibold text-xl my-2 text-gray-900'>
            Getting Started
            </h2>
            <p>
            Ready to create your first flow? Simply click "Create New" from the workspace to get started. No installation or setup required - Flow runs entirely in your browser!
            </p>
          </div>
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/flows'} className="text-base font-semibold text-slate-900 hover:underline">
                Flows
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default Introduction