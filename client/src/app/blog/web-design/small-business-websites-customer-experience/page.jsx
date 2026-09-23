import styles from "../../website-redesign/7-signs-your-website-needs-a-redesign/page.module.css";
import BlogHero from "../../blogSections/blogHero/blogHero";
import BlogCTA from "../../blogSections/blogCta/blogCta";
import Link from "next/link";

export const metadata = {
  title:
    "I Used 50 Small Business Websites as a Customer | VRB Web Design and Development",
  description:
    "I used 50 small business websites as a customer, not a web designer. Here’s what actually helped, what caused frustration and which design issues didn’t really matter.",
};

export default function SmallBusinessWebsiteCustomerExperiencePage() {
  return (
    <main className={styles.page}>
      <BlogHero
        eyebrow="Web Design & Strategy"
        readTime="13 min read"
        date="September 7, 2026"
        title="I Used 50 Small Business Websites as a Customer. Here’s What I Noticed."
        description="I wasn't auditing them or looking for UX problems. I was trying to find menus, compare prices, check services, see photos and decide where I actually wanted to go."
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
          <p>
            Over the past few weeks, I’ve probably visited around 50 small
            business websites while planning a trip.
          </p>

          <p>
            Restaurants, coffee shops, stores, wellness businesses, attractions
            and plenty of others.
          </p>

          <p>I wasn’t researching websites.</p>

          <p>
            I wasn’t conducting UX audits, running performance tests or
            deliberately looking for design problems. I was doing what their
            customers do: checking menus, comparing prices, looking at services,
            finding hours, figuring out locations and deciding where I actually
            wanted to go.
          </p>

          <p>
            I design and develop websites for a living, so naturally I noticed
            things I would have done differently.
          </p>

          <p>But that wasn’t actually the most interesting part.</p>

          <blockquote>
            A lot of the things I noticed as a web professional didn’t really
            matter to me as a customer.
          </blockquote>

          <p>
            Some websites weren’t particularly attractive but gave me exactly
            what I needed. Others looked perfectly fine but made something as
            simple as finding a price or booking a service unnecessarily
            difficult.
          </p>

          <p>
            And somewhere in the middle were a lot of websites that were
            simply... fine.
          </p>

          <p>
            So rather than turning this into a list of everything 50 small
            business websites are supposedly doing wrong, I wanted to look at
            something I think is much more useful:
          </p>

          <blockquote>
            What actually matters when someone is trying to use your website?
          </blockquote>

          <h2>I cared more about finding information than perfect design</h2>

          <p>
            Most of the time, I wasn’t visiting these websites to admire the
            design.
          </p>

          <p>I was trying to answer fairly basic questions.</p>

          <ul>
            <li>What do you offer?</li>
            <li>How much does it cost?</li>
            <li>What is included?</li>
            <li>Where are you located?</li>
            <li>When are you open?</li>
            <li>Do I need an appointment?</li>
            <li>How do I book?</li>
            <li>What does the place, food or experience actually look like?</li>
          </ul>

          <p>
            A lot of the businesses I found through things like Google Maps,
            social media or recommendations first.
          </p>

          <p>
            By the time I landed on their website, I already had some level of
            interest.
          </p>

          <p>
            The website didn’t necessarily need to convince me that the business
            existed. It needed to help me decide whether I wanted to go there,
            buy something or book something.
          </p>

          <p>
            Those questions eventually became part of a broader framework I use
            for thinking about small business website content. I break that down
            in{" "}
            <Link href="/blog/web-design/7-customer-questions-small-business-website">
              The 7 Customer Questions Every Small Business Website Should
              Answer
            </Link>
            .
          </p>

          <h2>Missing information bothered me more than mediocre design</h2>

          <p>This was probably one of the clearest patterns I noticed.</p>

          <p>A website can look average and still be perfectly useful.</p>

          <p>
            What became much more frustrating was when I couldn’t find the
            information I expected to be there.
          </p>

          <p>I came across things like:</p>

          <ul>
            <li>menus that appeared to be outdated</li>
            <li>prices that didn’t seem to line up properly with menu items</li>
            <li>services without enough explanation</li>
            <li>
              products or food items I had seen elsewhere that weren’t shown
              clearly on the website
            </li>
            <li>
              attractions that didn’t explain enough about what you would
              actually see or experience
            </li>
            <li>
              businesses where it wasn’t clear whether an appointment was
              required
            </li>
          </ul>

          <p>None of those are particularly exciting web design problems.</p>

          <p>They are information problems.</p>

          <blockquote>
            Having a website and having a useful website are not necessarily the
            same thing.
          </blockquote>

          <p>
            A business can technically have all the expected pages and still
            leave out the information customers actually came looking for.
          </p>

          <p>
            Deciding what information belongs together and what deserves its own
            page is part of that too. I use a simple test for that in{" "}
            <Link href="/blog/web-design/does-content-need-its-own-page">
              Does This Content Need Its Own Page?
            </Link>
            .
          </p>

          <h2>
            Pricing is contextual, but sometimes I really expect to see it
          </h2>

          <p>
            I don’t think every business needs to publish an exact price for
            everything it offers.
          </p>

          <p>
            There are plenty of services where the final cost depends on scope,
            complexity, materials, time or the customer’s specific situation.
          </p>

          <p>
            But there are also situations where hiding pricing feels
            unnecessarily difficult.
          </p>

          <p>If I’m looking at a restaurant menu, I expect current prices.</p>

          <p>
            If I’m comparing spa or salon services, I want to understand what a
            treatment costs and what is included before I get deep into the
            booking process.
          </p>

          <p>
            The more standardized a purchase is, the stranger it feels when the
            customer can’t find a price.
          </p>

          <p>
            Catering, a construction project or a highly customized professional
            service may reasonably require a quote.
          </p>

          <p>A sandwich probably does not.</p>

          <h2>Photography wasn’t decoration. It was information.</h2>

          <p>
            One of the things that influenced me the most while researching
            places was photography.
          </p>

          <p>
            Especially for restaurants, cafés, stores, spas and attractions.
          </p>

          <p>
            I didn’t want a photo simply because the page looked empty without
            one.
          </p>

          <p>I was using the photos to make a decision.</p>

          <p>
            What does the food actually look like? What is the atmosphere like?
            What kind of products are in the store? What will I see if I visit?
          </p>

          <p>
            Even customer and review photos can be incredibly useful because
            they provide another view of what the experience is actually like.
          </p>

          <blockquote>
            For some businesses, photography is part of the information, not
            just part of the decoration.
          </blockquote>

          <p>That doesn’t mean every website needs a giant gallery.</p>

          <p>
            It means that for businesses where the product, space or experience
            is visual, imagery helps answer a customer’s questions.
          </p>

          <h2>Mobile friction gets annoying incredibly quickly</h2>

          <p>
            A lot of this research happened on my phone, which made mobile
            issues very obvious.
          </p>

          <p>I encountered things like:</p>

          <ul>
            <li>horizontal scrolling</li>
            <li>awkward spacing and layouts</li>
            <li>pricing that didn’t line up properly with the correct item</li>
            <li>large forms asking for a lot of information</li>
            <li>
              cookie and privacy popups taking over almost the entire screen
            </li>
          </ul>

          <p>
            One of the things I find especially frustrating is being asked for a
            large amount of information on mobile just to get something simple,
            such as a price.
          </p>

          <p>
            Every extra interaction becomes another little step between the
            customer and the information they came looking for.
          </p>

          <p>One or two extra steps might not matter.</p>

          <p>Enough of them eventually do.</p>

          <p>
            If the main problem with an existing website is how it behaves
            across smaller screens rather than the entire site structure,{" "}
            <Link href="/package/extras/mobile-responsive-optimization">
              Mobile & Responsive Optimization
            </Link>{" "}
            can address that more directly.
          </p>

          <h2>Sometimes the website technically worked and I still gave up</h2>

          <p>
            One of the clearest examples was a wellness business I found while
            looking for a head spa treatment.
          </p>

          <p>I was genuinely interested in the service.</p>

          <p>
            But I kept going around trying to figure out exactly what was
            offered, what it cost and how I was supposed to book it.
          </p>

          <p>Eventually I stopped trying.</p>

          <p>
            The website didn’t necessarily crash. There wasn’t some dramatic
            technical failure.
          </p>

          <p>
            It simply made the process confusing enough that continuing wasn’t
            worth the effort.
          </p>

          <blockquote>
            A website can technically work and still fail to help someone
            complete what they came there to do.
          </blockquote>

          <h2>Customers don’t submit UX bug reports. They leave.</h2>

          <p>
            This is probably one of the more important things I took away from
            the experience.
          </p>

          <p>
            If someone can’t figure out how to book, can’t find the price or
            doesn’t understand what happens next, they probably aren’t going to
            contact the business and explain exactly where the user experience
            went wrong.
          </p>

          <p>They work around it.</p>

          <p>They look on Google.</p>

          <p>They check social media.</p>

          <p>They tolerate it.</p>

          <p>Or they leave.</p>

          <p>
            That means a website can have genuine customer-facing problems
            without generating obvious complaints.
          </p>

          <p>
            A business owner may never know that someone was interested enough
            to buy or book something and simply gave up somewhere along the way.
          </p>

          <p>
            That is one of the reasons a{" "}
            <Link href="/package/extras/uiux-audit">UI/UX Audit</Link> can be
            useful. It looks for friction in the experience without assuming
            that the entire website needs to be rebuilt.
          </p>

          <h2>Customers tolerate a surprising amount of mediocre UX</h2>

          <p>There also seemed to be a threshold.</p>

          <p>
            When a website is excellent, you notice because the experience feels
            unusually polished or easy.
          </p>

          <p>
            When it is average, you often don’t think about the website at all.
          </p>

          <p>
            When it is somewhat poor, you may notice the problems and keep going
            anyway.
          </p>

          <p>
            It usually takes a certain level of friction before someone actually
            gives up.
          </p>

          <p>
            That matters because not every issue deserves the same priority.
          </p>

          <blockquote>
            A problem can be real without being important enough to fix first.
          </blockquote>

          <h2>
            There were things I noticed as a designer that I didn’t care about
            as a customer
          </h2>

          <p>
            This is where the experience became particularly interesting for me.
          </p>

          <p>
            I noticed layouts I wouldn’t have chosen, weak visual hierarchy,
            awkward spacing, outdated copyright years and pages that simply
            weren’t especially polished.
          </p>

          <p>Would I change some of those things professionally?</p>

          <p>Absolutely.</p>

          <p>
            Did every one of them stop me from finding what I needed or using
            the business?
          </p>

          <p>No.</p>

          <blockquote>
            “I wouldn’t design it this way” and “this doesn’t work” are two
            different criticisms.
          </blockquote>

          <p>
            That distinction is useful because designers can see dozens of
            things they would improve on almost any website.
          </p>

          <p>
            The customer may only care about the ones that actually get in their
            way.
          </p>

          <h2>Some of the simple websites worked perfectly well</h2>

          <p>Not everything I saw was a problem.</p>

          <p>
            In fact, a lot of the basic website patterns worked exactly as I
            expected them to.
          </p>

          <p>
            Navigation labels were generally clear. Menus were often divided
            into useful categories. Most smaller websites didn’t have enough
            pages for important information to become deeply buried. Buttons
            usually went where I expected.
          </p>

          <p>
            One particularly useful pattern for local restaurants and cafés was
            keeping hours and location information in the footer.
          </p>

          <p>It isn’t innovative.</p>

          <p>It’s useful.</p>

          <p>Sometimes predictable design is exactly what a customer needs.</p>

          <p>
            That predictability is one of the reasons{" "}
            <Link href="/blog/ux-ui-development/why-website-navigation-matters-more-than-you-think">
              website navigation matters more than it might seem
            </Link>
            . Familiar patterns reduce the amount of work someone has to do just
            to move around the site.
          </p>

          <h2>Visual design still influenced me</h2>

          <p>None of this means visual design doesn’t matter.</p>

          <p>It absolutely influenced where I wanted to go.</p>

          <p>
            If two businesses offer something similar and one presents itself
            more attractively, that can change how interested I am in it.
          </p>

          <p>
            That is especially noticeable for businesses where the experience
            itself is visual, such as food, retail, beauty, wellness,
            hospitality and tourism.
          </p>

          <p>There are really two different questions:</p>

          <blockquote>
            Can I use this website?
            <br />
            <br />
            Does this website make me want what the business is selling?
          </blockquote>

          <p>
            A website can answer the first question successfully and still do
            very little for the second.
          </p>

          <h2>Good UX sometimes means giving people options</h2>

          <p>
            Another thing I appreciated was having more than one reasonable way
            to complete an action when it made sense.
          </p>

          <p>
            For example, allowing someone to book online or call the business.
          </p>

          <p>Not everyone wants to complete a task in exactly the same way.</p>

          <p>
            That doesn’t mean a website needs ten different contact methods.
          </p>

          <p>
            It means that when there are multiple sensible options, giving
            customers some flexibility can remove unnecessary friction.
          </p>

          <h2>Clear next steps matter more than clever ones</h2>

          <p>I noticed this outside of my travel research too.</p>

          <p>
            I recently completed an online voting process where you enter your
            name and phone number, receive a verification code and then need to
            enter that code to finish submitting the vote.
          </p>

          <p>
            The problem was that some people didn’t realize there was another
            step after submitting their information.
          </p>

          <p>The functionality technically existed.</p>

          <p>The process technically worked.</p>

          <p>
            But if the user doesn’t understand that they haven’t finished, the
            interaction still has a problem.
          </p>

          <p>A customer needs to understand:</p>

          <ul>
            <li>What just happened?</li>
            <li>What happens next?</li>
            <li>Am I finished?</li>
            <li>Do I need to do something else?</li>
          </ul>

          <p>
            Good website experiences don’t just provide functionality. They make
            the next step understandable.
          </p>

          <h2>An outdated-looking website isn’t automatically a bad website</h2>

          <p>
            This is something I’ve believed for a while, and using these
            websites reinforced it.
          </p>

          <p>
            Some websites weren’t particularly modern or impressive, but they
            still worked.
          </p>

          <p>
            If a café website clearly shows what it serves, how much it costs,
            when it is open and where it is located, it has accomplished quite a
            lot.
          </p>

          <p>
            Meanwhile, a newer and more visually impressive website that makes
            booking unnecessarily difficult can be much more frustrating.
          </p>

          <blockquote>
            Old isn’t automatically bad. New isn’t automatically good.
          </blockquote>

          <p>
            The important question is whether the website still works for the
            business and the people trying to use it.
          </p>

          <p>
            That is also why I would not recommend a redesign simply because a
            website looks older.{" "}
            <Link href="/blog/website-redesign/7-signs-your-website-needs-a-redesign">
              7 Signs Your Website Needs a Redesign
            </Link>{" "}
            looks at the deeper problems that make a redesign more meaningful.
          </p>

          <h2>So what actually matters?</h2>

          <p>
            After using all of these websites, the things I cared about most
            were surprisingly basic.
          </p>

          <p>I wanted to understand:</p>

          <ul>
            <li>Who are you?</li>
            <li>What do you offer?</li>
            <li>Where are you?</li>
            <li>When can I get it?</li>
            <li>Why should I choose you?</li>
            <li>How do I actually take the next step?</li>
          </ul>

          <p>
            Those questions have started shaping another framework I’m working
            on around the information every small business website should make
            clear to its customers.
          </p>

          <p>
            That framework became{" "}
            <Link href="/blog/web-design/7-customer-questions-small-business-website">
              The 7 Customer Questions Every Small Business Website Should
              Answer
            </Link>
            .
          </p>

          <p>But the larger lesson from these 50 websites was simpler.</p>

          <blockquote>
            A small business website doesn’t necessarily have to impress someone
            to work. But it does have to help them.
          </blockquote>

          <p>
            Sometimes great photography, thoughtful branding and strong design
            make the experience noticeably better.
          </p>

          <p>
            Sometimes a website is fairly average and does its job perfectly
            well.
          </p>

          <p>
            The problems I cared about most weren’t usually the ones I could
            identify because I design websites.
          </p>

          <p>
            They were the moments where I couldn’t find what I needed, couldn’t
            understand what was being offered, didn’t know what to do next or
            eventually decided it wasn’t worth continuing.
          </p>

          <p>
            And that’s probably the most useful distinction I took away from the
            experience:
          </p>

          <blockquote>
            Would I change it as a designer?
            <br />
            <br />
            Did I care as a customer?
            <br />
            <br />
            They’re not always the same question.
          </blockquote>
        </article>
      </section>

      <BlogCTA
        eyebrow="Keep reading"
        title="What should a small business website actually include?"
        description="The number of pages matters less than whether customers can find the information they need. Next, explore the questions your website should answer or see website design and development options."
        links={[
          {
            label: "The 7 Customer Questions →",
            href: "/blog/web-design/7-customer-questions-small-business-website",
          },
          {
            label: "Explore Web Design Packages →",
            href: "/package/web-design",
          },
        ]}
      />
    </main>
  );
}
