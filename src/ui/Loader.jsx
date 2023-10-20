function Loader() {
  return (
    <div className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-slate-950/50">
      <div className="spinner-box">
        <div className="pulse-container">
          <div className="pulse-bubble pulse-bubble-1"></div>
          <div className="pulse-bubble pulse-bubble-2"></div>
          <div className="pulse-bubble pulse-bubble-3"></div>
        </div>
      </div>
      <p className="text-2xl font-semibold text-slate-50">Loading...</p>
    </div>
  );
}

export default Loader;
