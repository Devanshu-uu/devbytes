const base44 = {
  entities: {
    BlogPost: {
      filter: async () => {
        return [
          {
            id: 1,
            title: "Building DevBytes: A Modern Portfolio Journey",
            slug: "building-devbytes-portfolio",
            excerpt: "Discover the process behind creating my personal portfolio – from selecting the tech stack to implementing smooth scroll navigation and a custom blog engine.",
            content: `# Building My Digital Identity 🚀

            Creating a personal portfolio is more than just showcasing projects; it's about defining your digital presence. For **DevBytes**, I wanted a platform that was fast, visually striking, and easy to maintain.

            ## The Tech Stack

            I chose a modern stack to ensure performance and developer experience:

            - **React & Vite**: For lightning-fast development and a smooth single-page application experience.
            - **Tailwind CSS**: To build a custom, responsive design system without leaving my HTML.
            - **Lucide React**: For consistent, beautiful iconography throughout the site.
            - **React Router**: To handle seamless navigation between the portfolio and blog.

            ## Key Features

            ### 1. Smooth Scroll Navigation
            I implemented a custom scroll-spy logic in the navbar. As you scroll through sections like *About*, *Skills*, and *Projects*, the navbar automatically highlights your current location with a red accent line.

            ### 2. Dark-First Design
            The aesthetic is built on a deep dark palette (\`#0a0a0a\`) with high-contrast red accents (\`#ef4444\`). This combination creates a professional, "hacker-inspired" look that puts the focus on the content.

            ### 3. Integrated Blog
            Unlike many portfolios that link to external platforms, DevBytes features a built-in blog engine that renders Markdown, allowing me to share technical insights directly on my own domain.

            ## Design Philosophy

            I prioritized **Space Grotesk** for headings to give the site a modern, geometric feel, while using **Inter** for body text to ensure maximum readability.

            \`\`\`jsx
            // Example of the custom button style
            const CustomButton = ({ children }) => (
            <button className="bg-red-500 hover:bg-red-600 transition-all text-white px-6 py-2 rounded-xl">
            {children}
            </button>
            );
            \`\`\`

            ## What's Next?

            DevBytes is a living project. I plan to add more interactive data visualizations for my Data Science projects and refine the blog's search capabilities.

            Check out the full source code on my [GitHub](https://github.com/Devanshu-uu/devbytes)!`,
            tags: ["React", "Portfolio", "Web Dev", "Tailwind"],
            category: "Projects",
            read_time: 4,
            author: "Devanshu Mohriya",
            cover_image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
            created_date: "2024-04-29T12:00:00Z"
          }
        ];
      }
    }
  }
};

export default base44;