// src/components/Loader.jsx
export default function Loader({ label = "Loading..." }) {
  return (
    <div className="min-h-[40vh] grid place-items-center">
      <div className="flex flex-col items-center gap-3">
        <img src="/asset/logo.png" className="h-16 w-16 animate-spin" alt="loading" />
        <p className="opacity-75">{label}</p>
      </div>
    </div>
  );
}

