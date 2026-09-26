import { InquiryForm } from "@/components/booking/InquiryForm";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Contact"
        title="Let us design your Sri Lanka experience"
        description="Tell us about your dream trip, travel dates, and the kind of moments you want to capture."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-orange-500">Call us</div>
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="mt-2 block text-2xl font-bold text-slate-900">
              {siteConfig.phone}
            </a>
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-orange-500">Email</div>
            <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-lg text-slate-700">
              {siteConfig.email}
            </a>
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-orange-500">Office</div>
            <div className="mt-2 text-lg text-slate-700">Colombo, Sri Lanka</div>
          </div>
        </div>

        <InquiryForm />
      </div>
    </main>
  );
}
