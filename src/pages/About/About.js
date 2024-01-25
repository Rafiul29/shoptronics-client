import SectionTitle from "../../components/SectionTitle";
import { useTitle } from "../../hooks/useTitle";

const About = () => {
  // title
  useTitle("About");
  return (
    <div className="section-padding mt-20 min-h-[calc(100vh-9rem)]">
      <div className="wrapper">
        <SectionTitle title={" About Shoptronics "} />
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-wider">
              Welcome to Shoptronics – Your Ultimate Destination for
              Cutting-Edge Electronics!
            </h2>
            <p className="text-xl font-light text-justify tracking-wide">
              At Shoptronics, we believe in the transformative power of
              technology. Our journey began with a simple yet profound vision:
              to provide our customers with a seamless and enriching shopping
              experience for the latest and most innovative electronics. Today,
              we stand proud as a leading e-commerce platform, bringing you a
              diverse range of high-quality products that redefine the way you
              live, work, and play.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold tracking-wider">Our Commitment</h3>
            <p className="text-xl font-light text-justify tracking-wide">
              Shoptronics is not just a marketplace; it's a commitment to
              excellence. We are dedicated to curating a selection of products
              that exemplify the pinnacle of technological advancement. Whether
              you're a tech enthusiast, a professional, or a casual user, our
              collection caters to your diverse needs.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold tracking-wider">Quality You Can Trust</h3>
            <p className="text-xl font-light text-justify tracking-wide">
            We understand that your trust is earned, not given. That's why each product at Shoptronics undergoes rigorous quality checks and evaluations. We partner with renowned brands and manufacturers to ensure that every item in our inventory meets the highest industry standards. Your satisfaction and peace of mind are our top priorities.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold tracking-wider">Shop with Confidence</h3>
            <p className="text-xl font-light text-justify tracking-wide">
            When you choose Shoptronics, you're not just making a purchase; you're making a statement. A statement of trust, reliability, and a belief in the transformative power of technology. Join us on this exciting journey, where every click brings you closer to a world of endless possibilities.
            </p>
          </div>
          <p className="text-xl font-light text-justify tracking-wide">Thank you for choosing Shoptronics — Where Innovation Meets Convenience.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
