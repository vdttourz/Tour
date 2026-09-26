import { Button } from "@/components/ui/Button";

export function InquiryForm() {
  return (
    <form action="/api/inquiry" method="post" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900">Request a custom quote</h3>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Full name
          <input name="name" type="text" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Email address
          <input name="email" type="email" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Tour interest
          <input name="tour" type="text" placeholder="Example: Classic Sri Lanka Highlights" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Travelers
          <input name="travelers" type="number" min="1" defaultValue="2" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500" />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-slate-700">
        Message
        <textarea name="message" rows={5} placeholder="Tell us your dream itinerary, dates, and special preferences" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500" />
      </label>

      <div className="mt-6">
        <Button type="submit" className="w-full justify-center rounded-full">Send inquiry</Button>
      </div>
    </form>
  );
}
