export default function TalknShopCaseStudyPage() {
  const techStack = [
    "React",
    "JavaScript (ES6+)",
    "CSS3",
    "React Router DOM",
    "Node.js",
    "Express",
    "MongoDB Atlas",
    "JWT",
    "Vercel",
    "Railway",
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Postman",
    "npm",
  ];

  const keyFeatures = [
    "Dedicated online storefronts for each seller",
    "Centralized dashboard for managing products and orders",
    "Customer browsing without relying on chat conversations",
    "Authentication and role-based access for sellers",
    "Responsive storefront and admin workflows",
    "Multi-vendor SaaS architecture",
  ];

  const architectureLayers = [
    {
      title: "Frontend",
      description:
        "Built with React, JavaScript, and CSS using a modular component-based structure. React Router DOM supports seamless navigation across the storefront and dashboard.",
    },
    {
      title: "API Layer",
      description:
        "Node.js and Express.js power the backend services, handling authentication, product management, ordering flows, and store management endpoints.",
    },
    {
      title: "Data Layer",
      description:
        "MongoDB Atlas stores business data for stores, products, customers, and orders in a flexible schema designed for multiple independent vendors.",
    },
    {
      title: "Security",
      description:
        "JSON Web Tokens are used for secure authentication and access control across seller workflows and protected dashboard areas.",
    },
  ];

  const challenges = [
    "Thousands of small businesses rely on WhatsApp, Instagram, and other social platforms that are not designed for full e-commerce operations.",
    "Sellers often spend too much time answering repetitive questions, sending product images manually, checking stock, and tracking orders by hand.",
    "As businesses grow, fragmented workflows across chats, notebooks, and spreadsheets become inefficient and difficult to scale.",
  ];

  const roadmap = [
    "Expand the platform with additional seller tools and business management modules.",
    "Continue improving the storefront, ordering workflow, and store management experience.",
    "Add platform enhancements that support larger-scale multi-vendor growth over time.",
  ];

  const deliveryFocus = [
    "Responsive UI across desktop, tablet, and mobile devices",
    "Reusable components to reduce duplicated code and improve maintainability",
    "A product direction shaped around real seller workflows and customer behavior",
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#0a0a0a_0%,#111827_35%,#0f172a_100%)] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <section className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:p-10 lg:p-12">
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            Multi-vendor SaaS commerce platform
          </div>
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/50">
              Project Case Study
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              TalknShop
            </h1>
            <p className="mt-4 text-lg text-gray-300 sm:text-xl">
              Empowering small businesses to move beyond WhatsApp and Instagram selling with their own professional online storefront.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">
              TalknShop is a full-stack MERN SaaS e-commerce platform built to help small businesses, home-based entrepreneurs, and social media sellers establish their own online stores. Instead of managing products and customer orders through WhatsApp chats or Instagram direct messages, sellers can create a dedicated storefront, showcase their products, receive customer orders, and manage their business through a centralized dashboard.
            </p>
          </div>
        </section>

        <section className="mb-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Project Overview</h2>
            <div className="mt-6 space-y-4 text-gray-300">
              <p>
                TalknShop is a full-stack MERN SaaS e-commerce platform that enables multiple independent businesses to create and manage their own online stores from a single application.
              </p>
              <p>
                The platform is designed primarily for local businesses, home-based entrepreneurs, Instagram sellers, WhatsApp sellers, and small retailers who want a professional online presence without building an e-commerce website from scratch.
              </p>
              <p>
                Many small businesses start selling through WhatsApp Status, Instagram pages, or direct messages because these platforms are easy to use. However, as customer orders increase, managing products, answering repetitive queries, sharing product images, and tracking orders manually becomes increasingly difficult.
              </p>
              <p>
                TalknShop solves this problem by providing every seller with their own online storefront where customers can browse products independently, place orders, and interact with the business without relying on lengthy chat conversations. Sellers manage everything from a centralized dashboard while customers enjoy a more organized shopping experience.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Current Status</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-white/45">Stage</p>
                <p className="mt-2 text-lg font-semibold text-white">Actively under development</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-white/45">Focus</p>
                <p className="mt-2 text-lg font-semibold text-white">Authentication, seller dashboard, product management, ordering workflow, and store management</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Problem Statement</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {challenges.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-5 text-gray-300">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Why I Built TalknShop</h2>
          <div className="mt-6 space-y-4 text-gray-300">
            <p>
              I noticed that many local businesses around me were successfully selling products through WhatsApp and Instagram. While this approach works well initially, it becomes increasingly difficult to manage as customer orders grow. Sellers spend a significant amount of time replying to repetitive questions, sending product images manually, checking availability, and keeping track of orders across multiple conversations.
            </p>
            <p>
              I wanted to build a platform that simplifies this entire process by giving every seller their own professional online storefront while allowing them to manage products and customer orders from a single dashboard.
            </p>
            <p>
              At the same time, I wanted to challenge myself with a real-world software engineering project. Rather than building another CRUD application, I decided to build a multi-vendor SaaS platform where multiple businesses can operate independently within the same system. This project has helped me gain practical experience across the full MERN stack while learning how scalable web applications are designed, developed, and maintained.
            </p>
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Key Features</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature) => (
              <div key={feature} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-lg font-semibold text-white">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Technical Architecture</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {architectureLayers.map((layer) => (
              <div key={layer.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-lg font-semibold text-white">{layer.title}</p>
                <p className="mt-3 text-sm leading-6 text-gray-300">{layer.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-4 text-gray-300">
            {deliveryFocus.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Technology Stack</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Frontend",
                items: ["React", "JavaScript (ES6+)", "CSS3", "React Router DOM"],
              },
              {
                title: "Backend",
                items: ["Node.js", "Express.js"],
              },
              {
                title: "Database",
                items: ["MongoDB Atlas"],
              },
              {
                title: "Authentication & Deployment",
                items: ["JSON Web Tokens (JWT)", "Vercel", "Railway"],
              },
              {
                title: "Developer Tools",
                items: ["Git", "GitHub", "Visual Studio Code", "Postman", "npm"],
              },
            ].map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-lg font-semibold text-white">{group.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-medium text-white/90">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Recruiter Summary</h2>
          <div className="mt-6 space-y-4 text-gray-300">
            <p>
              TalknShop demonstrates my ability to design and build a production-style MERN SaaS application from the ground up. The project goes beyond basic CRUD functionality by addressing a real-world business problem faced by WhatsApp and Instagram sellers who need a better way to manage their online businesses.
            </p>
            <p>
              Through this project, I gained hands-on experience in full-stack development, REST API design, database modeling, authentication, modular application architecture, responsive UI development, and building scalable software. More importantly, it reflects my ability to think from both an engineering and product perspective while developing solutions for real users.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Future Roadmap</h2>
          <div className="mt-6 space-y-4">
            {roadmap.map((item, index) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-5 text-gray-300">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-purple-300/80">
                  Roadmap {index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
