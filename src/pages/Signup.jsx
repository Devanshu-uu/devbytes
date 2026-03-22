import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Signup() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignup = async () => {
    setMessage('')

    if (!email || !password || !confirmPassword) {
      setMessage('Please fill all fields.')
      return
    }

    if (password.length < 8) {
      setMessage('Password must be at least 8 characters.')
      return
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.')
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Account created successfully. You can now sign in.')
      setTimeout(() => {
        navigate('/login')
      }, 1200)
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#e5e7eb] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <button
          onClick={() => navigate('/login')}
          className="text-sm text-slate-500 hover:text-slate-700 mb-4"
        >
          ← Back to sign in
        </button>

        <h1 className="text-4xl font-bold text-center text-slate-900 mb-8">
          Create your account
        </h1>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2 text-center">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2 text-center">
              Password
            </label>
            <input
              type="password"
              placeholder="Min. 8 characters"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2 text-center">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white py-3 font-semibold transition"
          >
            {loading ? 'Creating...' : 'Create account'}
          </button>

          {message && (
            <p className="text-sm text-center text-slate-600">{message}</p>
          )}
        </div>
      </div>
    </div>
  )
}