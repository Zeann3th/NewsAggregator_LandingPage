const FeatureItem = ({ title, body }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md flex flex-col justify-between">
      <p className="font-bold">{title}</p>
      <p>{body}</p>
    </div>
  )
}

export default FeatureItem
