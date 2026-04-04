import cookie1 from "./assets/cookie1.jpg";
import cookie2 from "./assets/cookie2.png";
import cookie3 from "./assets/cookie3.png";
import cookie4 from "./assets/cookie4.png";

export default function App() {
  const gallery = [
    {
      src: cookie1,
      alt: "School cookies",
    },
    {
      src: cookie2,
      alt: "Beach cookies",
    },
    {
      src: cookie3,
      alt: "Wedding cookies",
    },
    {
      src: cookie4,
      alt: "Birthday cookies",
    },
  ];

  const faqs = [
    {
      q: "How far in advance should I order?",
      a: "At least 1 to 2 weeks is ideal. Rush orders may be available depending on the calendar.",
    },
    {
      q: "Do you make custom themes?",
      a: "Yes. Birthday parties, showers, holidays, sports themes, baby announcements, and more.",
    },
    {
      q: "Do you offer delivery?",
      a: "Pickup is easiest, but local delivery can be discussed depending on location and schedule.",
    },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffaf7_0%,#fff5ef_100%)] text-stone-800">
      <header className="sticky top-0 z-20 border-b border-stone-200/70 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="font-serif text-xl tracking-wide">Elise Sweets Co.</p>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Custom decorated cookies</p>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#gallery" className="transition hover:text-stone-950">Gallery</a>
            <a href="#pricing" className="transition hover:text-stone-950">Pricing</a>
            <a href="#faq" className="transition hover:text-stone-950">FAQ</a>
            <a href="#contact" className="transition hover:text-stone-950">Order</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-4 inline-block rounded-full border border-rose-200 bg-rose-50 px-4 py-1 text-sm text-rose-700">
              Lovingly made for birthdays, showers, holidays, and special events
            </p>
            <h1 className="max-w-xl font-serif text-5xl leading-tight text-stone-900 md:text-6xl">
              Beautiful custom cookies that make your event feel extra special.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
              Hand-decorated sugar cookies made for celebrations of all kinds. Soft colors, fun details, and custom designs your guests will absolutely obsess over.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                Request an Order
              </a>
              <a
                href="#gallery"
                className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:-translate-y-0.5"
              >
                View Gallery
              </a>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-100">
                <p className="font-serif text-2xl">1–2</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">Weeks lead time</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-100">
                <p className="font-serif text-2xl">100%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">Custom themes</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-100">
                <p className="font-serif text-2xl">Local</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">Pickup available</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-rose-100 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-amber-100 blur-2xl" />
            <div className="grid gap-4 md:grid-cols-2">
              <img
                src={gallery[0].src}
                alt={gallery[0].alt}
                className="h-72 w-full rounded-[2rem] object-cover shadow-xl md:h-96"
              />
              <div className="grid gap-4">
                <img
                  src={gallery[2].src}
                  alt={gallery[2].alt}
                  className="w-full rounded-[2rem] object-cover shadow-lg md:h-44"
                />
                <div className="grid gap-4">
                  <img
                    src={gallery[3].src}
                    alt={gallery[3].alt}
                    className="w-full rounded-[2rem] object-cover shadow-lg md:h-44"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-6xl px-6 py-8 md:py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Gallery</p>
              <h2 className="mt-2 font-serif text-4xl text-stone-900">A few favorite sets</h2>
            </div>
            
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-stone-100">
                <img src={item.src} alt={item.alt} className="h-72 w-full object-cover transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-6 py-8 md:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-100">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Starter pricing</p>
              <h3 className="mt-3 font-serif text-3xl">Custom Sets</h3>
              <p className="mt-4 text-3xl font-semibold">$50<span className="text-lg font-normal text-stone-500"> / dozen</span></p>
              <p className="mt-4 text-sm leading-7 text-stone-600">Great for birthdays, showers, parties, and themed events. Final price depends on detail level and quantity.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-100">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Add-ons</p>
              <h3 className="mt-3 font-serif text-3xl">Extras</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-600">
                <li>Mini cookies for party favors</li>
                <li>Individual wrapping</li>
                <li>Custom colors and themes</li>
                <li>Local delivery by request</li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-300">How it works</p>
              <ol className="mt-4 space-y-4 text-sm leading-7 text-stone-100">
                <li>1. Send an order inquiry</li>
                <li>2. Confirm your date, quantity, and theme</li>
                <li>3. Approve the details and payment</li>
                <li>4. Pickup or delivery gets arranged</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-6 py-8 md:py-16">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">FAQ</p>
            <h2 className="mt-2 font-serif text-4xl text-stone-900">Good things to know</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {faqs.map((item, index) => (
              <div key={index} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-stone-100">
                <h3 className="font-medium text-stone-900">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-8 pb-20 md:py-16 md:pb-24">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-100 md:p-10">
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Order inquiry</p>
              <h2 className="mt-2 font-serif text-4xl text-stone-900">Let’s make something sweet.</h2>

              <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-8 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input name="name" placeholder="Your name" className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-stone-400" />
                  <input name="email" type="email" placeholder="Email address" className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-stone-400" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input name="date" placeholder="Event date" className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-stone-400" />
                  <input name="quantity" placeholder="Quantity needed" className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-stone-400" />
                </div>
                <input name="theme" placeholder="Theme or occasion" className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-stone-400" />
                <textarea name="details" rows="5" placeholder="Tell me what you’re dreaming up" className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-stone-400" />
                <button type="submit" className="mt-2 w-fit rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5">
                  Send Inquiry
                </button>
              </form>
            </div>

            <div className="rounded-[2rem] bg-rose-50 p-8 ring-1 ring-rose-100 md:p-10">
              <p className="text-sm uppercase tracking-[0.25em] text-rose-700">Contact</p>
              <div className="mt-6 space-y-5 text-sm leading-7 text-stone-700">
                <div className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-rose-100">
                  <p className="font-medium text-stone-900">Quick links</p>
                  <div className="mt-3 flex flex-col gap-2">
                    <a href="https://instagram.com/elisesweetsco" className="underline decoration-rose-300 underline-offset-4">@elisesweetsco</a>
                    <a href="elisejayy6@gmail.com" className="underline decoration-rose-300 underline-offset-4">elisejayy6@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}