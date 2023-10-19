function Loader() {
  //blur affects performence issue in lowend hardwere
  // const className =
  //   "absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm";

  const className =
    "fixed inset-0 flex items-center justify-center bg-slate-950/50 ";

  return (
    <div className={className}>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
