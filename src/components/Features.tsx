import { BoltIcon, PresentationChartLineIcon, RectangleGroupIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const features = [
  {
    name: '360° CAMPAIGN MANAGEMENT',
    description:
      'We plan, run, and track campaigns across channels using smart proprietary tools—keeping client interactions organized and results clear.',
    icon: RectangleGroupIcon,
  },
  {
    name: 'DEDICATED MARKETING SERVICES',
    description:
      'An extension of your team. We align with your goals, work seamlessly with your processes, and stay focused on driving outcomes that matter.',
    icon: UserGroupIcon,
  },
  {
    name: 'COMMERCIAL POST PRODUCTION',
    description:
      'From videos to digital assets, our in-house production team delivers fast, high-quality content so your projects stay on track without delays.',
    icon: BoltIcon,
  },
  {
    name: 'REAL-TIME REPORTING',
    description:
      'We provide live dashboards and reports, helping you see what is working, spot new opportunities, and stay ahead of competitors.',
    icon: PresentationChartLineIcon,
  },
]

const Features = () => {
  return (
    <MaxWidthWrapper>
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="text-base font-bold leading-7 text-blue-500">UNIFIED THINKING, ONE MARKETING STUDIO</h2>
          <p className="mt-2 lg:text-5xl md:text-4xl text-3xl font-bold tracking-tight text-gray-900">
           Integrated. Intelligent. Impactful.
          </p>
          <p className="mt-6 text-gray-700">
          We are the central hub embracing digital transformation, providing comprehensive media production and seamlessly integrating marketing technologies into every facet of business operations. Seeking to enhance customer experiences, streamline work processes, and facilitate data-driven decision-making.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-sm font-bold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  )
}


export default Features;