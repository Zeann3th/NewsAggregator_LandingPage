import FeatureItem from "./feature/FeatureItem"

const features = new Map([
  ['Stay Informed, Every Hour', 'With news updates every hour, our app keeps you on top of the latest trends and breakthroughs in the blockchain space, 24/7.'],
  ['Curated from a Vast Network of Trusted Sources', 'Our app aggregates news from a wide variety of trusted outlets, ensuring you get diverse and reliable blockchain news.'],
  ['Make Data-Driven Decisions with Historical Price Charts', 'With news updates every hour, our app keeps you on top of the latest trends and breakthroughs in the blockchain space, 24/7.'],
  ['Read Later, Anytime', 'Our bookmarking feature lets you save articles to catch up on the latest blockchain developments when it’s convenient for you.'],
])

const Feature = () => {
  return (
    <div className="bg-gradient-to-br from-green-400 to-blue-600 py-20">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-20">
        {Array.from(features).map(([k, v]) => (
          <FeatureItem title={k} body={v} />
        ))}
      </div>
    </div>
  )
}
export default Feature
