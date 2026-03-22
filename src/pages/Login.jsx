import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    setLoading(true)
    setMessage('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setMessage(error.message)
    } else {
      navigate('/')
    }

    setLoading(false)
  }

  const handleGoogleLogin = async () => {
    setLoading(true)
    setMessage('')

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    })

    if (error) {
      setMessage(error.message)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center border border-white/10">
            <span className="text-red-500 text-xl font-bold">↑↑</span>
          </div>
        </div>

        <h1 className="text-xl font-bold text-center text-white">
          Welcome to DevBytes Portfolio
        </h1>
        <p className="text-gray-400 text-sm text-center mt-1 mb-6">
          Sign in to continue
        </p>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition disabled:opacity-70"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="Google"
          />
          Continue with Google
        </button>

        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-gray-500">OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <input
          type="email"
          placeholder="you@example.com"
          className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white text-sm mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white text-sm mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl font-semibold transition disabled:opacity-70"
        >
          Sign in
        </button>

        {message && (
          <p className="text-red-400 text-xs mt-3 text-center">{message}</p>
        )}

        <div className="flex justify-between text-xs text-gray-500 mt-4">
          <span className="hover:text-white cursor-pointer">
            Forgot password?
          </span>
          <button
            onClick={() => navigate('/signup')}
            className="hover:text-white"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}