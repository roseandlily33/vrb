import styles from "../../website-redesign/7-signs-your-website-needs-a-redesign/page.module.css";
import BlogHero from "../../blogSections/blogHero/blogHero";
import BlogCTA from "../../blogSections/blogCta/blogCta";
import Link from "next/link";

export const metadata = {
  title: "When One User Needs More Than One Role | VRB",
  description:
    "How I approached user roles, permissions and shared functionality in a web application where managers and administrators also needed the functionality available to regular users.",
};

export default function WhenOneUserNeedsMoreThanOneRolePage() {
  return (
    <>
      <BlogHero
        category="UX/UI & Development"
        title="When One User Needs More Than One Role"
        description="User roles look simple until a manager also needs to be a user, an administrator needs access to everything below them, and permissions need to change without creating entirely separate applications."
        date="September 21, 2026"
        readTime="12 min read"
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
            User roles sound simple when you describe them as a list.
          </p>

          <p>
            A user can do one set of things. A manager can do more. An
            administrator can do everything.
          </p>

          <p>
            Then you start designing the actual application and realize that
            people do not always fit neatly inside those labels.
          </p>

          <p>
            A manager may need to manage employees, review company information
            and upload documents. But that same manager may also need to
            complete their own training as a regular user.
          </p>

          <p>
            An administrator may need complete control over the platform, but
            they can still need access to the same functionality available to
            everyone else.
          </p>

          <p>
            That creates a more interesting problem than simply asking,
            &ldquo;What role is this user?&rdquo;
          </p>
          <p>
            This is one of the challenges that comes with{" "}
            <Link href="/package/web-design/custom-platform">
              custom web application development
            </Link>
            . Once different people can interact with the same system in
            different ways, the application needs to understand more than
            whether someone is simply logged in or logged out.
          </p>

          <blockquote className={styles.blockquote}>
            A role describes someone's level of access. It does not always
            describe everything that person needs to do.
          </blockquote>

          <h2>The role system started looking more like a tree</h2>

          <p>
            When I started designing the different experiences, I realized the
            permissions made more sense as a hierarchy than as completely
            separate types of accounts.
          </p>

          <p>
            At the base is the regular user. They can access their personal
            dashboard, complete training, take quizzes, access certificates, use
            the functionality available to them and manage their own experience.
          </p>

          <p>
            A manager needs those same abilities, but also needs another layer
            of functionality for managing their company.
          </p>

          <p>
            They can manage employees and subcontractors, work with company
            forms, purchase or manage applicable training and see a higher-level
            overview of what is happening within their company.
          </p>

          <p>
            An administrator sits above that with much broader access across the
            platform, including administrative functionality that would never
            make sense for a company manager, such as newsletter management and
            system-wide controls.
          </p>

          <p>
            There is also a much more restricted subcontractor experience. That
            role exists for a very specific reason: allowing a subcontractor to
            access company forms without giving them the rest of the company's
            functionality.
          </p>

          <p>
            The result is less like four unrelated boxes and more like a tree
            where permissions expand or narrow depending on what someone
            actually needs.
          </p>

          <h2>A manager is still a user</h2>

          <p>
            This became one of the most important decisions in the architecture.
          </p>

          <p>
            It would have been possible to treat managers as an entirely
            separate kind of user.
          </p>

          <p>
            They could have had their own course logic, their own components and
            potentially even a separate login or account experience.
          </p>

          <p>But that would create duplication almost immediately.</p>

          <p>
            A manager who needs to complete their own training does not need a
            special &ldquo;manager version&rdquo; of a course.
          </p>

          <p>They need the course.</p>

          <p>
            So managers use the same learner architecture as regular users.
            Their personal course assignments work through the same system, and
            when they want to complete their own training, they can go to their
            personal dashboard.
          </p>

          <p>
            Their management capabilities exist in addition to that experience,
            not instead of it.
          </p>

          <blockquote className={styles.blockquote}>
            Shared behaviour should stay shared just because the person using it
            has additional permissions.
          </blockquote>

          <h2>Avoiding the separate-account problem</h2>

          <p>
            Separating every responsibility into a different account might make
            the role definitions look cleaner technically, but it can create a
            much messier experience for the person using the application.
          </p>

          <p>
            Imagine being responsible for managing company training and also
            needing to complete a course yourself.
          </p>

          <p>
            You should not need to log out of your manager account, sign into a
            learner account and maintain two separate identities just because
            the application decided those actions belonged to different
            categories.
          </p>

          <p>
            That would also mean maintaining duplicate logic and potentially
            duplicate components for functionality that is fundamentally the
            same.
          </p>

          <p>
            Instead, one account can expose different parts of the application
            according to what that person is allowed to do.
          </p>

          <h2>
            The user does not need to think about which role they are using
          </h2>

          <p>
            There are multiple ways for someone with additional permissions to
            move between their personal experience and the areas they manage,
            including navigation throughout the application.
          </p>

          <p>
            But I do not think the person should have to consciously think,
            &ldquo;Now I am acting as a manager&rdquo; or &ldquo;now I am acting
            as a learner.&rdquo;
          </p>

          <p>
            If they want to complete their own training, the personal dashboard
            is there.
          </p>

          <p>
            If they want to manage their company, the company functionality is
            there.
          </p>

          <p>The interface should make the appropriate pathway obvious.</p>

          <blockquote className={styles.blockquote}>
            Permissions should reflect what someone is allowed to do. The
            interface should reflect what they are actually trying to do.
          </blockquote>

          <h2>Not every permission needs to become visible UI</h2>

          <p>
            One of my preferences when designing these experiences is to avoid
            filling the interface with functionality someone cannot use.
          </p>

          <p>
            If a role does not need access to something, I generally hide it
            rather than displaying an unavailable control.
          </p>

          <p>
            A subcontractor does not need to see a collection of disabled
            management features.
          </p>

          <p>They need the company forms they are allowed to access.</p>

          <p>
            Similarly, a manager does not need administrative controls simply so
            the application can show them everything that exists.
          </p>

          <p>
            Removing irrelevant choices can make a complicated application feel
            considerably smaller.
          </p>

          <blockquote className={styles.blockquote}>
            The complexity of the application does not need to determine the
            complexity of every person's interface.
          </blockquote>

          <h2>Hiding a button is not a permission system</h2>

          <p>
            There is also an important technical distinction between what the
            interface displays and what someone is actually permitted to do.
          </p>

          <p>
            Permissions are handled on both sides of the application. This is
            also one of the areas I consider during a{" "}
            <Link href="/package/extras/website-security-review">
              website security review
            </Link>
            : what someone can see in the interface and what the system actually
            allows them to access are two different things.
          </p>
          <p>
            The frontend controls the experience. It determines which navigation
            items, actions and interfaces are appropriate for that user.
          </p>

          <p>
            But removing an administrative button from the screen does not
            secure the functionality behind that button.
          </p>

          <p>
            The backend also needs to validate whether the person making a
            request is allowed to perform that action.
          </p>

          <p>
            Routes and actions that a user is not permitted to access are
            blocked rather than relying entirely on the interface to keep them
            away.
          </p>

          <blockquote className={styles.blockquote}>
            The frontend can hide the door. The backend still needs to lock it.
          </blockquote>

          <h2>Role is only part of the permission question</h2>

          <p>
            Knowing that someone is a manager still does not tell the
            application everything it needs to know.
          </p>

          <p>It also needs to know what they manage.</p>

          <p>
            A company can have multiple managers, but being a manager does not
            mean someone should have access to every company in the system.
          </p>

          <p>
            Company membership provides another boundary around the data they
            are permitted to access.
          </p>

          <p>
            The company ID is used to keep company-specific information
            associated with the appropriate organization.
          </p>

          <p>
            This becomes especially important when the application contains
            employee information, training, forms, certificates and other
            company-specific records.
          </p>

          <p>So the permission question is not simply:</p>

          <p>
            <strong>Is this person a manager?</strong>
          </p>

          <p>It is also:</p>

          <p>
            <strong>Are they a manager of this company?</strong>
          </p>

          <h2>The middle role became the hardest one</h2>

          <p>
            Interestingly, the most difficult role has not necessarily been the
            one with the most permissions.
          </p>

          <p>It has been the manager.</p>

          <p>
            Administrators have broad access. Regular users have a much more
            focused experience.
          </p>

          <p>Managers live in the middle.</p>

          <p>
            They need some functionality that administrators have, but not all
            of it. They also need the functionality of a normal user.
          </p>

          <p>
            That makes it easier for an edge case to appear where something was
            originally considered an administrative feature but a manager also
            legitimately needs access to it.
          </p>

          <p>
            It has made role checks an important part of adding new
            functionality.
          </p>

          <p>
            When something new is introduced, the question is not only whether
            the feature works.
          </p>

          <p>I also need to consider:</p>

          <ul className={styles.list}>
            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Which roles should see it?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Which roles should be able to use it?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Which data should each role be able to access?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>
                Does company membership create an additional restriction?
              </div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>
                Is this shared functionality or does this role genuinely need
                something different?
              </div>
            </li>
          </ul>

          <h2>New roles are a good test of the original architecture</h2>

          <p>
            The subcontractor role was introduced later in the application's
            development in response to a client need.
          </p>

          <p>Its requirements were much narrower than the existing roles.</p>

          <p>
            A subcontractor needed access to company forms, but did not need the
            broader management functionality available to managers.
          </p>

          <p>
            This is one of the reasons I prefer thinking about what someone
            actually needs to do rather than treating a role name as the
            architecture itself.
          </p>

          <p>
            Applications change. New users appear. Existing responsibilities
            change. A role system that only makes sense for the exact users the
            application has today can become difficult to extend later.
          </p>

          <h2>Shared components still need context</h2>

          <p>
            Sharing functionality does not mean every role has to receive an
            identical interface in every situation.
          </p>
          <p>
            This is also where a well-planned{" "}
            <a href="/package/extras/design-system-component-library">
              design system and component library
            </a>{" "}
            becomes useful. Shared patterns can remain consistent across the
            application without requiring every user or every situation to
            receive an identical interface.
          </p>

          <p>
            Sometimes it makes sense to reuse the same component and expose
            different actions depending on permissions.
          </p>

          <p>
            Other times the context is different enough that a separate
            component is cleaner.
          </p>

          <p>
            I do not think there needs to be a rigid rule that every shared
            feature must use one component or that every role deserves its own.
          </p>

          <p>
            The better question is whether sharing the implementation actually
            reduces unnecessary duplication without making the component
            difficult to understand.
          </p>

          <h2>
            The biggest mistake is making roles more complicated than they need
            to be
          </h2>

          <p>
            Role systems can become complicated very quickly because there are
            so many possible combinations of people, permissions and actions.
          </p>

          <p>
            That does not mean every possible distinction needs its own role,
            dashboard, login and collection of components.
          </p>

          <p>
            My preference is to start with what people need to do, share what
            can reasonably be shared and restrict the functionality that
            actually needs to be restricted.
          </p>

          <p>
            The underlying implementation can use roles, boolean permissions,
            company relationships and backend validation to make those
            decisions.
          </p>

          <p>
            The person using the application does not need to know about any of
            that.
          </p>

          <h2>A good permission system should almost disappear</h2>

          <p>
            When this is working properly, I do not think someone should be
            particularly aware that a large permission system exists behind the
            interface.
          </p>
          <p>
            When an application has grown over time, this is also something a{" "}
            <Link href="/package/extras/ui-ux-audit">UI/UX audit</Link> can help
            uncover: whether different users are being shown the right
            information, actions and pathways for what they actually need to
            accomplish.
          </p>

          <p>They should sign in and see the things they are allowed to do.</p>

          <p>
            They should not see irrelevant functionality. They should not need a
            second account to perform another part of their job. They should not
            have to understand why another type of user sees something
            different.
          </p>

          <p>They should simply be able to do their work.</p>

          <blockquote className={styles.blockquote}>
            The system can understand roles. The user should only have to
            understand what they can do next.
          </blockquote>
        </article>
      </section>

      <BlogCTA
        title="Building something with more than one type of user?"
        text="VRB designs and develops custom web applications where user roles, permissions, workflows and interfaces need to work together without making the experience unnecessarily complicated."
        buttonText="Explore Custom Web Development"
        buttonHref="/package/web-design/custom-platform"
      />
    </>
  );
}
