import Cards from "@/components/Blogs/Cards";
import Section from "@/components/shared/Section";
const blogs = [
  {
    id: 1,
    title: "Understanding React Server Components",
    description:
      "A deep dive into React Server Components and how they improve performance and developer experience.",
    image:
      "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
    tags: ["#react", "#server-components", "#nextjs"],
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    description:
      "A comprehensive guide on using Tailwind CSS efficiently to build modern UIs.",
    image:
      "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
    tags: ["#tailwind", "#css", "#ui"],
  },
  {
    id: 3,
    title: "Node.js Performance Optimization Tips",
    description:
      "Learn how to optimize Node.js applications for better performance and scalability.",
    image:
      "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
    tags: ["#nodejs", "#performance", "#backend"],
  },
  {
    id: 4,
    title: "Node.js Performance Optimization Tips",
    description:
      "Learn how to optimize Node.js applications for better performance and scalability.",
    image:
      "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
    tags: ["#nodejs", "#performance", "#backend"],
  },
  {
    id: 5,
    title: "Node.js Performance Optimization Tips",
    description:
      "Learn how to optimize Node.js applications for better performance and scalability.",
    image:
      "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
    tags: ["#nodejs", "#performance", "#backend"],
  },
];
const BlogsPage = () => {
  return (
    <Section
      title="Projects."
      description="Read my latest blog posts on web development, React, Node.js, and other exciting technologies."
    >
      <Cards blogs={blogs} />
    </Section>
  );
};

export default BlogsPage;
