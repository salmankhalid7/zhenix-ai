import React from 'react'

const BasicFooter = () => {
  return (
    <div>
            {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">© 2024 Zhenix. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm">Twitter</a>
              <a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm">GitHub</a>
              <a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BasicFooter