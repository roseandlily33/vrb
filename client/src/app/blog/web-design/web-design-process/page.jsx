import styles from "./page.module.css";
import BlogHero from "../../blogSections/blogHero/blogHero";
import BlogCTA from "../../blogSections/blogCta/blogCta";


export const metadata = {
  title: "Web Design Process: What Happens When You Hire a Web Designer? | VRB",
  description:
    "What does the web design process actually look like? Follow a website project from discovery and planning through design, development, testing, launch and post-launch support.",
};

export default function WebDesignProcessPage() {
  return (
    <>
      <BlogHero
        category="Web Design & Strategy"
        title="Web Design Process: What Actually Happens When You Hire a Web Designer?"
        description="A website does not go directly from an idea to a finished design. Here is what actually happens between the first conversation and launch."
        date="September 13, 2026"
        readTime="14 min read"
      />

      <section className={styles.articleSection}>
        <div className={styles.articlePixels} aria-hidden="true">
          <span className={`${styles.pixel} ${styles.articlePixel1}`} />
          <span className={`${styles.pixel} ${styles.articlePixel2}`} />
          <span className={`${styles.pixel} ${styles.articlePixel3}`} />
          <span className={`${styles.pixel} ${styles.articlePixel4}`} />
          <span className={`${styles.pixel} ${styles.articlePixel5}`} />
          <span className={`${styles.pixel} ${styles.articlePixel6}`} />
          <span className={`${styles.pixel} ${styles.articlePixel7}`} />
          <span className={`${styles.pixel} ${styles.articlePixel8}`} />
        </div>

        <article className={styles.article}>
          <p className={styles.intro}>
            The web design process is often explained as a perfectly straight
            line: discovery, design, development and launch.
          </p>

          <p>
            Those are the major stages of my process too. In practice, though,
            building a website is much more iterative.
          </p>

          <p>
            A design decision can change once I see it working in the browser.
            Development can expose something that sends me back to design.
            Content can change how a page should be organized. Testing can
            reveal a scenario nobody considered earlier.
          </p>

          <p>
            The process gives the project structure, but it should not prevent
            the project from changing when something better becomes obvious.
          </p>

          <blockquote className={styles.blockquote}>
            A good web design process gives the client and designer a shared
            understanding of what is being built, why it is being built and what
            the final outcome is supposed to accomplish.
          </blockquote>

          <h2>What happens when you first contact a web designer?</h2>

          <p>
            When someone contacts me about a website, I usually start with an
            email conversation.
          </p>

          <p>
            Before getting too far into the project, I want to understand what
            already exists and what the business actually needs.
          </p>

          <p>Some of the early questions can include:</p>

          <ul className={styles.list}>
            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>What is the budget?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Is there already a website?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Is there existing branding?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Are fonts and colours already established?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Are copy and photography available?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>What functionality does the website need?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>What kind of timeline are we working with?</div>
            </li>
          </ul>

          <p>
            If the project looks like a good fit, particularly for a larger
            project, the next step can be a discovery call.
          </p>

          <h2>What happens during website discovery?</h2>

          <p>
            Discovery is where I am trying to understand the direction of the
            entire project.
          </p>

          <p>
            What should the website do? What should the brand communicate? Who
            is going to use it? What does that audience care about? What
            information do they need? What pages might be necessary? What
            functionality needs to be implemented?
          </p>

          <p>
            I also like seeing examples of websites or styles the client is
            drawn to.
          </p>

          <p>
            Those examples are not there so I can copy another website. They
            help identify the visual language someone has in mind.
          </p>

          <p>
            Maybe they consistently choose bold typography. Maybe they like
            editorial layouts, muted colours, very minimal interfaces or
            image-heavy websites.
          </p>

          <p>
            That gives me something to interpret rather than asking a client to
            describe an entire visual system in design terminology.
          </p>

          <h2>Who decides how many pages the website needs?</h2>

          <p>
            One of my favourite ways to work is for a client to give me the
            information and let me figure out how it should be organized.
          </p>

          <p>
            I have seen people get stuck trying to decide exactly what should go
            on every page before they even know what pages the website needs.
          </p>

          <p>
            Usually, I can determine the structure from the content, the
            business and what customers need to find.
          </p>

          <p>
            There are common patterns. A business might need a homepage, About
            page, services, products and contact information. But those are
            starting points rather than a mandatory website formula.
          </p>

          <blockquote className={styles.blockquote}>
            You do not need to arrive knowing that you need exactly five pages.
            Give me the information first. We can figure out where it belongs.
          </blockquote>

          <h2>What if you already have a website?</h2>

          <p>
            If there is an existing website, I want to review it before deciding
            what the new one should become.
          </p>

          <p>
            I look at the navigation, existing content, imagery, page structure
            and what is currently happening across the website.
          </p>

          <p>
            That helps answer an important question: what actually needs to
            change?
          </p>

          <p>
            A redesign does not mean everything that already exists needs to be
            thrown away. Some content or structure may still work perfectly
            well.
          </p>

          <h2>What should you give your web designer before design starts?</h2>

          <p>
            The more I understand about the business, the easier it is to create
            something that actually represents it.
          </p>

          <p>Depending on the project, useful materials can include:</p>

          <ul className={styles.list}>
            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Logo files</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Existing brand colours and fonts</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Website copy</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Photography and other imagery</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Services and products</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Team information where applicable</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Hours and location information</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Social media accounts</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Examples of visual styles you like</div>
            </li>
          </ul>

          <p>Not every project starts with all of those things ready.</p>

          <p>
            If a business does not have an established colour palette, fonts or
            visual direction, I can develop those as part of the project.
            Sometimes that means exploring several directions before deciding
            what fits.
          </p>

          <h2>How does the actual website design start?</h2>

          <p>
            Before designing page after page, I need some kind of visual system.
          </p>

          <p>
            That can include typography, colours, spacing, font sizes, border
            radius, buttons, cards, interaction states and other repeated
            interface decisions.
          </p>

          <p>Even small constraints can influence the entire direction.</p>

          <p>
            I have had to design around logos that only existed inside a
            specific rectangular background, for example. Suddenly that
            background colour and shape become something the rest of the website
            has to work with.
          </p>

          <p>Those constraints are part of design too.</p>

          <blockquote className={styles.blockquote}>
            A design system is not separate from the website. It is the set of
            decisions that stops every page from feeling like it was designed on
            a different Tuesday.
          </blockquote>

          <h2>Which page gets designed first?</h2>

          <p>
            Once I have the beginnings of the style system, I usually like to
            start with the homepage, and particularly the hero.
          </p>

          <p>
            The homepage tends to establish a lot of the visual personality of
            the website.
          </p>

          <p>
            From there, it becomes easier to see how the system can expand
            across the rest of the pages.
          </p>

          <p>
            Interestingly, navigation is something I often deal with later.
            Navigation can feel intimidating to some people, but organizing it
            is one of the parts of web design that comes fairly naturally to me.
          </p>

          <h2>Do you design the entire website before development?</h2>

          <p>Not always.</p>

          <p>
            This depends heavily on the project and how the client prefers to
            work.
          </p>

          <p>
            If a client wants to review formal design files and approve the
            direction before anything is developed, I will design in Figma
            first.
          </p>

          <p>
            In that situation, I prefer showing an important page first rather
            than designing the entire website before finding out whether the
            client likes the direction.
          </p>

          <p>
            Designing one page gives us a chance to establish the language of
            the website before repeating it everywhere.
          </p>

          <p>
            On projects where I have more freedom, I actually enjoy designing
            and developing together.
          </p>

          <p>
            That works best when the underlying styles and reusable components
            are organized properly from the beginning.
          </p>

          <h2>Why doesn't the developed website look exactly like Figma?</h2>

          <p>
            Usually it is close, but I do not treat the Figma file as
            untouchable.
          </p>

          <p>A browser is a different environment.</p>

          <p>
            Once I see the real website, I might realize a particular space
            feels too large, a section needs more breathing room, a component
            does not feel quite right or something simply looked better in the
            static design than it does when the page is actually being used.
          </p>

          <p>So I change it.</p>

          <blockquote className={styles.blockquote}>
            The design file is part of the process. The website is the thing
            people actually have to use.
          </blockquote>

          <h2>How does client feedback work?</h2>

          <p>
            Once there is something to review, I send the client the relevant
            documentation or design and collect their feedback.
          </p>

          <p>
            I generally prefer feedback to be collected together rather than
            receiving one tiny change at a time.
          </p>

          <p>
            That makes it much easier to understand the feedback as a whole and
            make changes efficiently.
          </p>

          <p>
            That said, people communicate differently. Some clients work much
            better dealing with one thing at a time, and the process can adapt
            to that.
          </p>

          <p>
            My website projects typically include defined revision rounds so
            there is room to refine the design without allowing the project to
            continue indefinitely.
          </p>

          <h2>What if you change your mind halfway through?</h2>

          <p>Small changes are expected.</p>

          <p>
            Deciding halfway through the project that the entire website should
            have a completely different visual direction is another situation.
          </p>

          <p>
            At that point, many interconnected decisions may already have been
            made. Components have been designed, pages may have been built and
            the established system has been applied throughout the project.
          </p>

          <p>
            A major change in direction can therefore mean changes to the
            timeline, scope and price.
          </p>

          <p>
            That is one reason establishing the direction early is so important.
          </p>

          <h2>What actually happens during website development?</h2>

          <p>
            Once development is underway, I am turning the design and content
            into the actual website.
          </p>

          <p>
            Depending on the project, I might be working with technologies such
            as Next.js, React or Gatsby, along with CSS or styled-components for
            the interface.
          </p>

          <p>
            I build reusable components wherever they make sense rather than
            treating every page as an entirely separate piece of code.
          </p>

          <p>
            A button is a simple example. If the same button style appears
            throughout the website, it should behave like part of a system, not
            like twenty unrelated buttons that happen to look similar.
          </p>

          <p>
            The same thinking applies to cards, sections, forms, navigation,
            layouts and other repeating interface patterns.
          </p>

          <p>
            If the project needs a database, integrations or other
            functionality, that work becomes part of the development stage too.
          </p>

          <h2>When does responsive design happen?</h2>

          <p>During both design and development.</p>

          <p>
            Personally, I find it easier to begin with more space and then
            determine what needs to change as the screen gets smaller.
          </p>

          <p>
            That is simply the workflow that makes the most sense to me.
            Mobile-first is a common approach, but there is more than one way to
            arrive at a strong responsive interface.
          </p>

          <p>
            When I reduce the available space, I can ask practical questions.
            Does this still need to be visible? Should this information
            collapse? Should the layout stack? Does the navigation need to
            change?
          </p>

          <p>
            Responsive design is not just making everything physically smaller.
          </p>

          <blockquote className={styles.blockquote}>
            The screen gets smaller. The job of the page does not.
          </blockquote>

          <h2>Where does accessibility fit into web design?</h2>

          <p>
            Accessibility should be considered throughout design and development
            rather than added at the very end.
          </p>

          <p>
            Colour contrast is an obvious example. A form can technically exist
            and still be difficult to use if the labels, inputs or messages are
            difficult to read.
          </p>

          <p>
            Accessibility considerations can also affect semantic structure,
            keyboard interaction, forms, alternative text, focus states and how
            interface elements are implemented.
          </p>

          <p>
            These decisions are easier to handle when they are part of the
            system rather than something you try to repair after every page has
            already been built.
          </p>

          <h2>When does SEO happen during a website build?</h2>

          <p>
            SEO is another area I prefer to think about during the build rather
            than only after launch.
          </p>

          <p>
            Depending on the scope of the project, the work I incorporate can
            include page titles and descriptions, heading structure, image
            optimization, internal linking, structured data, robots directives,
            XML sitemaps and setting the site up in Google Search Console.
          </p>

          <p>
            Keywords and search intent can also influence how pages are
            structured and what they need to communicate.
          </p>

          <p>
            Not every web designer includes the same SEO work in a website
            project, and a properly built website is not the same thing as an
            ongoing SEO campaign.
          </p>

          <p>
            But if search matters to the project, it makes much more sense to
            consider the technical and on-page foundation while the website is
            being built.
          </p>

          <h2>What happens before a website launches?</h2>

          <p>Testing. A lot of testing.</p>

          <p>
            I want to see what happens across different screen sizes, browsers,
            devices, inputs and scenarios.
          </p>

          <p>
            Forms need to submit properly. Links need to work. Responsive
            layouts need to behave. Content needs to appear where it is supposed
            to. Interactive elements need to respond properly.
          </p>

          <p>
            The more functionality a website has, the more scenarios there are
            to test.
          </p>

          <p>
            Testing is also where some bugs finally introduce themselves. They
            are very polite that way.
          </p>

          <h2>What happens on website launch day?</h2>

          <p>
            Launch is the point where the website moves into its live
            environment, but that does not mean I press one button and
            disappear.
          </p>

          <p>
            I launch the site, deal with any issues that appear, and continue
            testing it across devices and platforms in its live environment.
          </p>

          <p>
            If the client needs to manage content themselves, training or
            instructions can also be provided depending on the project.
          </p>

          <p>
            I also like having a short post-launch support period, around two
            weeks, because real-world use can uncover small bugs or scenarios
            that were not obvious before launch.
          </p>

          <p>
            Ongoing website maintenance can continue separately after that if
            the business needs it.
          </p>

          <h2>How involved should the client be?</h2>

          <p>
            I want the client involved enough that they understand what is
            happening and feel represented by the result.
          </p>

          <p>
            They know their business. Their knowledge about their customers,
            services, products and goals is incredibly important.
          </p>

          <p>
            But there also needs to be room for me to do the job they hired me
            to do.
          </p>

          <p>
            Micromanaging every spacing decision or individual design choice
            does not necessarily create a better website.
          </p>

          <p>
            In fact, one of my favourite briefs is essentially: &ldquo;Here is
            the business. Here is what we need. Make it look good.&rdquo;
          </p>

          <p>
            That gives me the problem, the information and the goal, with room
            to determine the solution.
          </p>

          <blockquote className={styles.blockquote}>
            The client should not have to design the website for the web
            designer.
          </blockquote>

          <h2>Is the web design process always the same?</h2>

          <p>No.</p>

          <p>
            Discovery, design, development and launch are useful stages, but the
            amount of time and attention each one needs changes with the
            project.
          </p>

          <p>They can also overlap.</p>

          <p>
            I can move into development and discover something that makes me
            return to design. I can look at something the next day and decide I
            do not like it anymore. A responsive layout can reveal that a
            component needs to change everywhere.
          </p>

          <p>
            That does not mean the process has failed. It means the process is
            responding to the actual product being built.
          </p>

          <h2>So what does a good web design process look like?</h2>

          <p>
            To me, a good web design process is one where the client and
            designer can communicate clearly, both understand where the project
            is going and both have a strong understanding of the outcome they
            are working toward.
          </p>

          <p>
            The stages provide structure, but the structure should support the
            work rather than control it.
          </p>

          <p>
            Some projects need more discovery. Some need more design
            exploration. Some become development-heavy. Others move incredibly
            quickly because the content, direction and requirements are clear
            from the beginning.
          </p>

          <blockquote className={styles.blockquote}>
            A good web design process is not about following the same steps in
            exactly the same way every time. It is about keeping everyone on the
            same page while turning the right information into the right
            website.
          </blockquote>
        </article>
      </section>

      <BlogCTA
        title="Have a website project in mind?"
        text="VRB handles the design and development process from planning and page structure through design, development, testing and launch."
        buttonText="Explore the Web Design Process"
        buttonHref="/process"
      />
    </>
  );
}
