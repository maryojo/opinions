import React from 'react'

const Sidebar = () => {
  return (
    <div>
    <div className="flex flex-col">
          <div className="flex flex-col">
            <div>
              Settings
            </div>
            <div>
              <div className="flex gap-2">
              <p>Sort</p>
              <dropdown>
                <select>English</select>
              </dropdown>
              </div>
              <div className="flex gap-2">
              <p>Language</p>
              <dropdown>
                <select>English</select>
              </dropdown>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar