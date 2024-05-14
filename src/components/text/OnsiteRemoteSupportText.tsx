import Link from 'next/link'
import Image from 'next/image'
import Onsite from '@/../public/Onsite.jpg'

export default function OnsiteRemoteSupportText() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4 text-kpam-blue">
          Responsive Support When You Need It
        </h1>
        <p className="text-lg mb-6">
          Efficiency thrives on measurement. Your significant investment in
          industrial automation equipment and processes reflects your commitment
          to optimal performance and consistent results. At Kpam Engineering,
          we recognize your desire to achieve the highest returns from your
          investment while ensuring the continuous operation of reliable
          equipment. We offer a specialized solution in the form of Overall
          Equipment Effectiveness (OEE), a potent tool that uncovers your hidden
          factory - the realm where streamlined operations and enhanced
          production quality are unlocked through meticulous OEE calculation.
        </p>


        <h2 className="text-2xl font-bold mb-2 text-kpam-blue">
          Tailored On-Demand Support Solutions
        </h2>
        <p className="text-lg mb-6">
          Benefit from Kpam Engineering&apos;s easily accessible remote support
          services, which are designed to optimize control system efficiency,
          enhance Overall Equipment Effectiveness (OEE), and curtail maintenance
          expenses. Our proficiency in proactively identifying and rectifying
          problems before they escalate translates into reduced unplanned
          downtime.
        </p>

        <h3 className="text-xl font-bold mb-2 text-kpam-blue">
          Remote Assistance for PLC Systems:
        </h3>
        <p className="text-lg mb-6">
          Our remote capabilities extend globally, allowing Kpam Engineering to
          provide expert support for your machinery or processes from any corner
          of the world. Utilizing an advanced Industrial Remote Access Router,
          we ensure top-notch service that significantly minimizes maintenance
          costs and optimizes machine uptime. Our remote solutions encompass PLC
          troubleshooting and programming, HMI monitoring and control,
          webcam-assisted guidance, and even assistance to our field
          technicians. For a tailored remote support solution, Kpam Engineering
          offers controls network analysis. Learn More About the Benefits of PLC
          Remote Support Here
        </p>

        <h3 className="text-xl font-bold mb-2 text-kpam-blue">On-Site Field Services:</h3>
        <Image src={Onsite} alt="onsite-remote-support" />
        <p className="text-lg my-4">
          Our on-site field services cover the spectrum of troubleshooting,
          whether the issue originates from the PLC program, system wiring,
          instrumentation, VFDs, or any other control system element. Upon issue
          identification, we strive to swiftly rectify it on-site or aid you in
          procuring the requisite components and personnel for repairs. Our
          field service experts are available whenever you require their
          assistance, genuinely invested in your success. Regardless of whether
          it&apos;s the middle of the night or the commencement of a major
          event, count on us. Our field services are billed based on Time and
          Materials (T&M). Additionally, we offer the flexibility to purchase
          service through time blocks or service contracts.
        </p>

        <h3 className="text-xl font-bold mb-2 text-kpam-blue">Service Coverage:</h3>
        <p className="text-lg mb-6">
          Nestled in central Massachusetts, our manufacturing support services
          extend to USA, Canada, Latin America, Europe and beyond. We provide
          nationwide remote and on-site support services.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-kpam-blue">How Can We Assist You?</h2>
        <p className="text-lg mb-6">
          While we are always poised to respond to emergencies, it&apos;s worth
          noting that this service comes with associated costs. Many of our
          clients prefer to capitalize on our annual support plans, which not
          only curtail expenses but also expedite response times. We invite you
          to connect with us at{" "}
          <Link href="tel:+12679495726" className="text-kpam-blue font-semibold">
            +1 267 949 5726
          </Link>{" "}
          to delve into your specific requirements and explore our comprehensive
          support solutions.
        </p>
      </div>
    </section>
  );
}
