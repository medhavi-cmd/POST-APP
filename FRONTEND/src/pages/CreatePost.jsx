import React from 'react'

const CreatePost = () => {
  return (
    <section className='create-post'>
        <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
        <form className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>

                <input type="file"  name="image" accept='image/*' className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter post title" />
            </div>
            <div>
                <label htmlFor="caption" className="block text-sm font-medium text-gray-700">Caption</label>

                <textarea id="caption" name="caption" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Write your post caption here"></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit Post</button>
        </form>
    </section>
  )
}

export default CreatePost
