export function LoadingWave() {
  return (
    <div className="w-[300px] h-[100px] flex justify-center items-end">
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className={`
            w-5 h-2.5 mx-[5px] bg-primary rounded-[5px]
            animate-loading-wave
          `}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
}
