import { BoltIcon, PresentationChartLineIcon, RectangleGroupIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const features = [
  {
    name: '360° Campaign Management',
    description:
      'We use cloud-based CRM solution that helps us manage customer and client relationship, empowering teams to centralize, organize, and optimize their interactions with clients.',
    icon: RectangleGroupIcon,
  },
  {
    name: 'Dedicated Marketing Teams',
    description:
      'With a deep understanding of your objectives and unwavering commitment to excellence, our teams seamlessly integrate into your workflow, ensuring optimal results and smooth collaboration.',
    icon: UserGroupIcon,
  },
  {
    name: 'Outsource Media Production',
    description:
      'Our dedicated team is always on standby to swiftly address any concerns, ensuring minimal disruptions and maximum efficientcy on autonomous projects.',
    icon: BoltIcon,
  },
  {
    name: 'Reporting and Marketing Trends',
    description:
      'From monitoring key metrics to identifying trends as they happen, with real-time reporting you can make informed decision and stay ahead of competition.',
    icon: PresentationChartLineIcon,
  },
]

const Features = () => {
  return (
    <MaxWidthWrapper>
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-screen-lg lg:text-center">
          <h2 className="text-base font-bold leading-7 text-blue-500">INTEGRATED AGENCY APPROACH</h2>
          <p className="mt-2 lg:text-5xl md:text-4xl text-3xl font-bold tracking-tight text-gray-900">
          A Full-service, Integrated Marketing Studio
          </p>
          <p className="mt-6 text-gray-700">
          We aim to become the central hub embracing digital transformation for teams and businesses alike, providing comprehensive media production and seamlessly integrating marketing technologies into every facet of business operations. We seek to enhance customer experiences, streamline work processes, and facilitate data-driven decision-making.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
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