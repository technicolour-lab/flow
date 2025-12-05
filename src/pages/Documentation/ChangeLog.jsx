import React from 'react'
import { NavLink } from 'react-router-dom'

const ChangeLog = () => {
  return (
    <div>
      <article>
          <header>
            <p className="text-base ">
              Appendix
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            ChangeLog
            </h1>
          </header>
          <hr className='my-4' />
          <div className='m-6'>

            <h2 className="font-semibold text-lg mb-3">Version 1.2.0 (~February 15, 2025)</h2>
            <p>This release focuses on adding autolayout options and small improvements</p>
            <ul className="list-disc ml-4 my-3 leading-8">
              <li><strong>New</strong>: Auto layout option</li>
              <li><strong>New</strong>: Two wireframes for AI page</li>
              <li>Fix: Share, actions, groups, keyboard - click outside ref</li>
              <li>Fix: Stop propagation on key down in label and url in node edit</li>
              <li>Fix: Name update in localStorage version</li>
              <li>Fix: Orange stroke colour for edges</li>
              <li>Improvement: Truncate large url in browser</li>
              <li>Improvement: Hide Toolbox on outside click</li>
              <li>Improvement: Remove passing id to the nodes for handlers (not necessary)</li>
            </ul>
         </div>
          <div className='m-6'>

            <h2 className="font-semibold text-lg mb-3">Version 1.1.0 (February 5, 2025)</h2>
            <p>This release focuses on adding new wireframes and new features to editor.</p>
            <ul className="list-disc ml-4 my-3 leading-8">
              <li><strong>New wireframes:</strong> About page, Error, Landing 2, Pricing, Map, Search, Contact, Portfolio, Review, Blog, Table, Product List, Product detail, Payment, Shopping Cart, Files, Dashboard.</li>
              <li>New social icons </li>
              <li>Keyboard shortcuts</li>
              <li>Reverse animation of flow</li>
              <li>Url to wireframe nodes</li>
              <li>Export to png feature</li>
              <li>Separate api calls into own service</li>
              <li>Version with Node.js + SQLite</li>
            </ul>
         </div>
          <div className='m-6'>

            <h2 className="font-semibold text-lg mb-3">Version 1.0.0 - Initial Release (~December 6, 2024)</h2>
            <p>The initial version includes all the core features and functionalities designed to provide interactive user flow creator experience.</p>
            
         </div>
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/support'} className="text-base font-semibold text-slate-900 hover:underline">
                  Support 
                </NavLink>
              </dd>
          </div>
        </dl>
    </div>
  )
}

export default ChangeLog