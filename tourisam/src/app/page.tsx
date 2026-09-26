import { Hero, HeroSearch } from "@/components/home/Hero";
import { FeaturedTours } from "@/components/home/FeaturedTours";
import { PopularDestinations } from "@/components/home/PopularDestinations";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { InquiryForm } from "@/components/booking/InquiryForm";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroSearch />
      <FeaturedTours />
      <PopularDestinations />
      <WhyChooseUs />

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] bg-[#113d48] px-6 py-10 text-white md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <div>
            <p className="script text-3xl text-[#7ed7ea]">Travel better</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Planning a holiday should feel effortless.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/75">
              Let us shape a custom route around the experiences you care about most, whether that’s culture, wildlife, beaches, or a slower, more personal journey.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/tours" variant="primary" className="bg-[#1ca8cb] text-white shadow-none hover:bg-[#1593b3]">
                Explore tours
              </Button>
              <Button href="/contact" variant="ghost" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                Talk to us
              </Button>
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>
    </>
  );
}
