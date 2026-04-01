import React, { useState, useEffect } from 'react'
import axios from "axios"

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            caption: "Beautiful scenery",
        }
    ])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)

        axios.get("http://localhost:3000/posts")
            .then((res) => {
                setPosts(res.data.posts)
                setError("")
            })
            .catch(() => {
                setError("Could not load the feed right now.")
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [])

    return (

        <section className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Feed</p>
                        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Recent posts from the community</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                            Browse the latest images and captions published through the app.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl bg-slate-950 px-4 py-3 text-white">
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Posts</p>
                            <p className="mt-2 text-2xl font-semibold">{posts.length}</p>
                        </div>
                        <div className="rounded-2xl bg-amber-100 px-4 py-3 text-slate-950">
                            <p className="text-xs uppercase tracking-[0.3em] text-amber-700">Status</p>
                            <p className="mt-2 text-2xl font-semibold">Live</p>
                        </div>
                    </div>
                </div>
            </div>

            {isLoading ? (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
                            <div className="h-72 animate-pulse bg-slate-200" />
                            <div className="space-y-3 p-5">
                                <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
                                <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : error ? (
                <div className="rounded-3xl border border-rose-200 bg-rose-50 px-6 py-8 text-rose-700">
                    <p className="font-semibold">Feed unavailable</p>
                    <p className="mt-2 text-sm">{error}</p>
                </div>
            ) : posts.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post._id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(15,23,42,0.12)]">
                            <div className="relative overflow-hidden">
                                <img src={post.image} alt={post.caption} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950/60 to-transparent" />
                            </div>
                            <div className="space-y-3 p-5">
                                <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                                    <span>Post</span>
                                    <span>New</span>
                                </div>
                                <p className="text-base leading-6 text-slate-700">{post.caption}</p>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center text-slate-500">
                    <h3 className="text-xl font-semibold text-slate-900">No posts yet</h3>
                    <p className="mt-2 text-sm">Be the first to upload an image and add a caption.</p>
                </div>
            )}

        </section>

    )
}

export default Feed