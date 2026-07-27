import { useState } from "react";
import { Eye, EyeOff, ShieldCheck, Lock, User, AlertCircle, Loader2 } from "lucide-react";
import { useAdminAuth } from "@/lib/useAdminAuth";

export default function AdminLogin() {
  const { login, error, isLoading, failedAttempts, lockedUntil } = useAdminAuth();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [shake, setShake] = useState(false);

  const isLocked = lockedUntil !== null && Date.now() < (lockedUntil ?? 0);
  const remainingMin = isLocked ? Math.ceil(((lockedUntil ?? 0) - Date.now()) / 60000) : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await login(userId, password);
    if (!ok) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center relative overflow-hidden">

      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-2xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Login Card */}
      <div
        className={[
          "relative w-full max-w-md mx-4 transition-all",
          shake ? "animate-[shake_0.5s_ease-in-out]" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={shake ? { animation: "shake 0.5s ease-in-out" } : {}}
      >
        {/* Glassmorphism card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />

          <div className="p-8 md:p-10">

            {/* Logo / Header */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-lg shadow-orange-500/30 mb-4">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight">
                Admin Access
              </h1>
              <p className="mt-1 text-sm text-neutral-400">
                ExcelPack Machines — Secure Command Center
              </p>
            </div>

            {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-5" noValidate autoComplete="off">

              {/* User ID */}
              <div>
                <label
                  htmlFor="admin-userid"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400"
                >
                  User ID
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                  <input
                    id="admin-userid"
                    type="text"
                    autoComplete="off"
                    required
                    disabled={isLocked}
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter your User ID"
                    className="
                      w-full rounded-xl border border-white/10 bg-white/8 py-3 pl-10 pr-4
                      text-sm text-white placeholder-neutral-600
                      focus:border-orange-500/60 focus:bg-white/10 focus:outline-none
                      transition-all duration-200
                      disabled:opacity-50 disabled:cursor-not-allowed
                    "
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="admin-password"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                  <input
                    id="admin-password"
                    type={showPass ? "text" : "password"}
                    autoComplete="off"
                    required
                    disabled={isLocked}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="
                      w-full rounded-xl border border-white/10 bg-white/8 py-3 pl-10 pr-11
                      text-sm text-white placeholder-neutral-600
                      focus:border-orange-500/60 focus:bg-white/10 focus:outline-none
                      transition-all duration-200
                      disabled:opacity-50 disabled:cursor-not-allowed
                    "
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition"
                    aria-label={showPass ? "Hide password" : "Show password"}
                  >
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Attempts warning */}
              {failedAttempts > 0 && !isLocked && !error && (
                <p className="text-center text-xs text-amber-400">
                  {failedAttempts} failed attempt{failedAttempts > 1 ? "s" : ""}. Account locks after 5.
                </p>
              )}

              {/* Lockout notice */}
              {isLocked && (
                <div className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>Account locked. Try again in {remainingMin} minute{remainingMin !== 1 ? "s" : ""}.</span>
                </div>
              )}

              {/* Error message */}
              {error && !isLocked && (
                <div className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading || !userId || !password || isLocked}
                className="
                  mt-2 flex w-full items-center justify-center gap-2 rounded-xl
                  bg-gradient-to-r from-orange-500 to-amber-500
                  py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30
                  transition-all duration-200
                  hover:from-orange-600 hover:to-amber-600 hover:shadow-orange-500/50
                  disabled:cursor-not-allowed disabled:opacity-50
                  active:scale-[0.98]
                "
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Verifying Identity…
                  </>
                ) : (
                  <>
                    <ShieldCheck className="h-4 w-4" />
                    Sign In to Admin
                  </>
                )}
              </button>
            </form>

            {/* Footer note */}
            <p className="mt-6 text-center text-xs text-neutral-600">
              🔒 This area is restricted to authorised personnel only.
              <br />
              All access attempts are logged.
            </p>
          </div>
        </div>
      </div>

      {/* Shake keyframe via style tag */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          15%       { transform: translateX(-8px); }
          30%       { transform: translateX(8px); }
          45%       { transform: translateX(-6px); }
          60%       { transform: translateX(6px); }
          75%       { transform: translateX(-4px); }
          90%       { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
