/**
 * Home page FAQ. Plain data with relative-only imports so the build can also reuse it for llms.txt.
 * `align` and `questionWidth` only affect the desktop layout of the accordion.
 */
export const homeFaq: {
  question: string;
  answer: string;
  align?: "start" | "center" | "end";
  questionWidth?: number;
}[] = [
  {
    question: "How much does this cost?",
    answer:
      "$449-$2499. Book a free strategy call and we will scope it against your goals before anything is billed.",
  },
  {
    question: "How fast can we start?",
    answer:
      "Usually within a week. After the free strategy call we send a scoped plan and price, and once you approve it we book your start date and the audit begins.",
    align: "end",
  },
  {
    question: "Do you work with SaaS or ecommerce?",
    answer:
      "Both. Most of our work is for DTC ecommerce brands (including Shopify stores) and B2B or B2C SaaS teams, plus service businesses that rely on their website for leads.",
    align: "end",
    questionWidth: 504,
  },
  {
    question: "Do I need a full redesign, or can you just fix what is not converting?",
    answer:
      "Usually you do not need a full redesign. The audit shows which pages and steps are losing the most revenue, and we fix those first. A redesign only makes sense when the foundation itself is holding you back.",
    align: "center",
  },
];
