const Hero = () => {
  return (
    <div className="text-center py-20">
      <h1 className="lg:text-[60px] font-bold mb-20">
        Your trusted source for
        <br />
        <span className="bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent">{'{'}Blockchain{'}'}</span>
        <br />
        News
      </h1>
      <div className="flex justify-center items-center">
        <video controls src="./demo.mp4" width={1024} height={576}></video>
      </div>
    </div>
  )
}

export default Hero
