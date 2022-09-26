import React from "react";
import { MainHeading, SubHeadings } from "./Headings";

export default function Content() {
  return (
    <div className="content-about flex flex-col px-20 py-10 gap-10 mt-20 mb-40 text-white relative leading-relaxed z-40">
      <MainHeading heading={"About BlogXL"} />
      <p className="flex flex-1 font-serif text-lg mt-20">
        A blog (a contraction of the term weblog) is a type of website. It is
        usually maintained by an individual and will have regular entries of
        commentary, descriptions of events, or other material such as graphics
        or video. Entries are commonly displayed in reverse-chronological order.
        The word “blogging” means maintaining or adding content to a blog.
        People blog for many reasons. Blogs may provide commentary or news on a
        particular subject while others are like personal online diaries. In
        most cases, a blog includes text, images, and links to other blogs, Web
        pages, and other media related to its topic. Most blogs have an
        interactive format to leave comments. Some blogs may focus on art (art
        log), photographs (photo blog), sketches (sketch blog), videos (v log),
        music (MP3 blog), and audio (podcasting). Micro blogging is another type
        of blogging. It features blogs with very short posts.
      </p>
      <SubHeadings subheading={"Common Types of Blogs"} />
      <p className="flex flex-1 font-serif text-lg">
        The personal blog is the most common kind of blog. Personal bloggers
        spend a lot of time on their blog posts, even if their blog is never
        read by others. Blogs offer a means to reflect on life or works of art.
        Few personal blogs gain widespread fame and attention but some personal
        blogs do manage to win a good following. Some bloggers even land book
        contracts like the journalist Meenakshi Reddy who wrote the book, “You
        Are Here”. Micro blogging seeks to capture a moment in time. Sites, such
        as Twitter, allow bloggers to share thoughts and feelings
        instantaneously with friends and family. It is much faster than
        e-mailing or writing. This form of social media is very popular with an
        online generation which is too strapped for time to keep in touch. There
        are corporate blogs as well which are maintained for business purposes.
        Such blogs are either used internally to enhance the communication and
        culture in a corporation or externally for marketing, branding or public
        relations purposes. Question blogging is a kind of blog that answers
        questions. Questions can be submitted in the form of a submittal form,
        or through email or other means such as telephone or VOIP.
      </p>

      <p className="flex flex-1 font-serif text-lg">
        A blog which comprises links is called a link blog. Blogs with shorter
        posts and mixed media types are called tumble blogs. Blogs that are
        written on typewriters and then scanned are called typecast or typecast
        blogs. A rare type of blog hosted on the Gopher Protocol is known as a
        Ph log. Blogs may focus on particular subjects, giving rise to political
        blogs, travel blogs, house blogs, fashion blogs, project blogs,
        education blogs, niche blogs, classical music blogs, quizzing blogs and
        legal blogs (also referred to as blows) or dream logs. A blog used for
        the sole purpose of spamming is known as a Sp log but it is not a
        legitimate one. The collective community of all blogs is known as the
        blogosphere. It is not unusual for the media to use discussions in the
        blogosphere to discover public opinion on various issues. There are blog
        search engines to search blog contents. These include Blog lines, Blog
        Scope, and Technocratic. Technocratic is one of the most popular blog
        search engines. It provides current information on both popular searches
        and tags used to categorize blog postings. There are many, online
        communities that connect people to blogs and bloggers to other bloggers.
        Some of these are Blog Catalog, My Blog Log, and YUL BIog. Many blogs
        also carry advertisements which financially benefit the blogger or
        promote the blogger’s favourite causes. Blogs have become so popular
        that they have led to the rise of “fake blogs”. In such blogs, a company
        may create a fictional blog as a marketing tool to promote its products.
      </p>

      <SubHeadings subheading={"But Why Us?"} />

      <p className="flex flex-1 font-serif text-lg">
        The best ideas can change who we are. BlogXL is where those ideas take
        shape, take off, and spark powerful conversations. We’re an open
        platform where over 100 million readers come to find insightful and
        dynamic thinking. Here, expert and undiscovered voices alike dive into
        the heart of any topic and bring new ideas to the surface. Our purpose
        is to spread these ideas and deepen understanding of the world. We’re
        creating a new model for digital publishing. One that supports nuance,
        complexity, and vital storytelling without giving in to the incentives
        of advertising. It’s an environment that’s open to everyone but promotes
        substance and authenticity. And it’s where deeper connections forged
        between readers and writers can lead to discovery and growth. Together
        with millions of collaborators, we’re building a trusted and vibrant
        ecosystem fueled by important ideas and the people who think about them.
      </p>
    </div>
  );
}
