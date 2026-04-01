import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"


const CreatePost = () => {

    const navigate = useNavigate()
    const [preview, setPreview] = useState(null)
    const [caption, setCaption] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsSubmitting(true)

        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post", formData)
            .then((res) => {
                navigate("/feed")

            })
            .catch((err) => {
                console.log(err)
                alert("Error creating post")
            })
            .finally(() => {
                setIsSubmitting(false)
            })


    }

    const handleImageChange = (event) => {
        const file = event.target.files?.[0]

        if (!file) {
            setPreview(null)
            return
        }

        setPreview(URL.createObjectURL(file))
    }

    return (
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/70 bg-slate-950 px-6 py-8 text-white shadow-[0_24px_90px_rgba(15,23,42,0.25)] sm:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Create</p>
                <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">Publish a new post in seconds.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                    Upload an image, add a caption, and share it to the live feed.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Step 1</p>
                        <p className="mt-2 font-medium">Choose media</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Step 2</p>
                        <p className="mt-2 font-medium">Write a caption</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Step 3</p>
                        <p className="mt-2 font-medium">Publish instantly</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">New post</p>
                        <h2 className="mt-2 text-2xl font-semibold text-slate-950">Share something visual</h2>
                    </div>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">Live</span>
                </div>

                <div className="mt-8 space-y-5">
                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-slate-700">Image</span>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                            className="block w-full cursor-pointer rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-slate-950 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:border-slate-400"
                        />
                    </label>

                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-slate-700">Caption</span>
                        <textarea
                            name="caption"
                            placeholder="What do you want to share?"
                            required
                            rows="5"
                            value={caption}
                            onChange={(event) => setCaption(event.target.value)}
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white"
                        />
                    </label>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? "Publishing..." : "Publish post"}
                    </button>
                </div>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                    {preview ? (
                        <img src={preview} alt="Preview" className="h-72 w-full object-cover" />
                    ) : (
                        <div className="flex h-72 items-center justify-center px-6 text-center text-sm text-slate-500">
                            Your image preview will appear here before you publish.
                        </div>
                    )}
                </div>

                <p className="mt-4 text-xs leading-5 text-slate-500">
                    Tip: Use a strong image and a short caption to make the post feel more alive in the feed.
                </p>
            </form>
        </section>
    )
}

export default CreatePost