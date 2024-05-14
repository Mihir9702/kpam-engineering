import OEE from "@/../public/OEE.jpg";
import Image from "next/image";

export default function OEEText() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4 text-kpam-blue">
          Understanding Overall Equipment Effectiveness (OEE)
        </h1>
        <p className="text-lg mb-6">
          Overall Equipment Effectiveness (OEE) is a crucial metric used in
          manufacturing to measure the efficiency of equipment and production
          processes. It provides insights into how well equipment is utilized to
          produce quality products within the scheduled production time.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-kpam-blue">Components of OEE:</h2>
          <ol className="list-decimal ml-6">
            <li>
              <strong className="text-kpam-blue">Availability:</strong> Availability measures the actual
              production time compared to the planned production time. It takes
              into account factors such as downtime due to equipment failures,
              changeovers, and scheduled maintenance.
            </li>
            <li>
              <strong className="text-kpam-blue">Performance:</strong> Performance evaluates the speed at
              which the equipment operates compared to its maximum designed
              speed. It identifies any inefficiencies or slowdowns in the
              production process.
            </li>
            <li>
              <strong className="text-kpam-blue">Quality:</strong> Quality assesses the number of good
              units produced compared to the total units produced. It highlights
              any defects or errors in the manufacturing process that result in
              the production of subpar products.
            </li>
          </ol>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-kpam-blue">Calculating OEE:</h2>
          <p>OEE is calculated using the formula:</p>
          <p className="italic text-kpam-blue font-bold">OEE = Availability × Performance × Quality</p>
          <p>
            Each component is expressed as a percentage, ranging from 0% to
            100%. A higher OEE percentage indicates better overall equipment
            effectiveness.
          </p>
        </div>

        <Image src={OEE} alt="oee" className="my-8 mx-auto" />

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-kpam-blue">Benefits of OEE:</h2>
          <ul className="list-disc text-kpam-blue ml-6">
            <li>
              <strong>Identifying Opportunities for Improvement: </strong><p className="text-black inline">OEE
              helps identify areas of inefficiency in the production process,
              allowing manufacturers to focus on improvement efforts where they
              are needed most.</p>
            </li>
            <li>
              <strong className="text-kpam-blue">Optimizing Equipment Utilization:</strong> <p className="text-black inline">By
              understanding equipment performance and availability,
              manufacturers can optimize production schedules to maximize
              equipment utilization and minimize downtime.</p>
            </li>
            <li>
              <strong className="text-kpam-blue">Enhancing Product Quality:</strong> <p className="text-black inline">Monitoring OEE helps
              in detecting and addressing quality issues promptly, leading to
              improved product quality and customer satisfaction.</p>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-kpam-blue">Implementing OEE:</h2>
          <ol className="list-decimal ml-6">
            <li>
              <strong className="text-kpam-blue">Collect Data:</strong> Gather accurate data on equipment
              downtime, production rates, and product quality.
            </li>
            <li>
              <strong className="text-kpam-blue">Analyze Performance:</strong> Analyze OEE data to identify
              root causes of inefficiencies and develop strategies for
              improvement.
            </li>
            <li>
              <strong className="text-kpam-blue">Continuous Improvement:</strong> Implement continuous
              improvement initiatives to enhance OEE over time, such as
              preventive maintenance programs and employee training.
            </li>
          </ol>
        </div>

        <p className="text-lg">
          Overall Equipment Effectiveness (OEE) is a powerful tool for
          manufacturers seeking to optimize production efficiency, reduce costs,
          and improve product quality. By measuring and analyzing OEE,
          organizations can identify opportunities for improvement and implement
          strategies to enhance overall operational performance.
        </p>
      </div>
    </section>
  );
}
