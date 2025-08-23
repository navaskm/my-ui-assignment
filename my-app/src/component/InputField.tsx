import { useState } from "react";

interface InputFieldProps { 
  value?: 
  string; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  label?: string; 
  placeholder?: string; 
  helperText?: string; 
  errorMessage?: string; 
  disabled?: boolean; 
  invalid?: boolean; 
  variant?: "filled" | "outlined" | "ghost"; 
  size?: "sm" | "md" | "lg"; 
  type?: "text" | "password"; 
  loading?: boolean; 
}

export const InputField: React.FC<InputFieldProps> = ({ 
  value, 
  onChange, 
  label, 
  placeholder, 
  helperText, 
  errorMessage, 
  disabled, 
  invalid, 
  variant = "outlined", 
  size = "md",
  loading = false,
}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Validation
  const usernameError =
    username.length > 0 && username.length < 6
      ? "Username must be at least 6 characters"
      : "";

  const passwordError =
    password.length > 0 && password.length < 8
      ? "Password must be at least 8 characters"
      : "";

  const sizeClasses = { 
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  const variantClasses = { 
    filled: "bg-gray-100 border border-gray-300", 
    outlined: "border border-gray-400", 
    ghost: "bg-transparent border-b border-gray-300", 
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:space-x-4 w-full">

        {/* Username Field */}
        <div className="flex flex-col space-y-1 w-full md:w-1/2">

          {label && (
            <label className="text-sm font-medium text-gray-700">{label}</label>
          )}

          <div className="relative">
            <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder={placeholder}
              disabled={disabled || loading}
              aria-invalid={invalid}
              className={[
                "rounded-md w-full focus:outline-none focus:ring-2",
                sizeClasses[size],
                variantClasses[variant],
                invalid ? "border-red-500 ring-red-300" : "focus:ring-blue-400",
                (disabled || loading) && "bg-gray-200 cursor-not-allowed",
              ].join(" ")}
            />

            {loading && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <div className="h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

          </div>

          {usernameError && (
            <p className="text-red-500 text-xs">{usernameError}</p>
          )}

        </div>

        {/* Password Field */}
        <div className="flex flex-col space-y-1 w-full md:w-1/2 mt-3 md:mt-0">

          <label className="text-sm font-medium text-gray-700">Password</label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className={[
                "rounded-md w-full focus:outline-none focus:ring-2",
                sizeClasses[size],
                variantClasses[variant],
                invalid ? "border-red-500 ring-red-300" : "focus:ring-blue-400",
                (disabled || loading) && "bg-gray-200 cursor-not-allowed",
              ].join(" ")}
            />

            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

          {passwordError && (
            <p className="text-red-500 text-xs">{passwordError}</p>
          )}

        </div>

      </div>

      {/* Error / Helper */}
      {invalid && errorMessage ? (
        <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
      ) : (
        helperText && <p className="text-xs text-gray-500 mt-1">{helperText}</p>
      )}
      
    </>
  )
};