import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT SECTION */}
            <div className="overflow-hidden rounded-3xl border border-white/70 bg-slate-950 px-6 py-8 text-white shadow-[0_24px_90px_rgba(15,23,42,0.25)] sm:px-8 lg:px-10 lg:py-10">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Home</p>
                <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                    A simple posting website for sharing images and captions.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                    Create a post and browse the feed.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                        to="/create-post"
                        className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
                    >
                        Create your first post
                    </Link>
                    <Link
                        to="/feed"
                        className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                        View the feed
                    </Link>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Images</p>
                        <p className="mt-2 text-xl font-semibold">Upload</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Captions</p>
                        <p className="mt-2 text-xl font-semibold">Write</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Feed</p>
                        <p className="mt-2 text-xl font-semibold">Share</p>
                    </div>
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="grid gap-6">

                {/* top section */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
                        What you can do
                    </p>

                    <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                        <p>Create and share posts with images instantly.</p>
                        <p>Upload photos and express your thoughts visually.</p>
                        <p>Explore posts shared by others in a clean feed.</p>
                        <p>Experience fast performance with a minimal UI.</p>
                    </div>
                </div>

                {/* middle section */}
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-amber-100 via-white to-slate-100 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700">
                        Why this app?
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                        A simple and modern way to share your moments.
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                        This platform is designed to help you quickly post updates, share images,
                        and connect through a lightweight social feed — without distractions.
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                        Whether you're showcasing creativity, documenting moments, or just exploring,
                        this app keeps everything smooth and user-friendly.
                    </p>
                </div>

                {/* Bottom section */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:p-8">
                    <h3 className="text-xl font-semibold text-slate-900">
                        Ready to share something?
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                        Start creating your first post and let others see your ideas.
                    </p>

                    <Link
                        to="/create-post"
                        className="mt-4 inline-block rounded-xl bg-amber-500 px-6 py-2 text-sm font-semibold text-white hover:bg-amber-600 transition"
                    >
                        Create Post
                    </Link>
                </div>

            </div>

        </section>
    )
}

export default Home