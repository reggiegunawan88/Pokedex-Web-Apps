function Loading() {
  return (
    <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col gap-y-3 text-center">
        <img alt="loading-gif" src="assets/loading-gif.gif" />
        <p className="font-minecraft font-bold text-xl">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
