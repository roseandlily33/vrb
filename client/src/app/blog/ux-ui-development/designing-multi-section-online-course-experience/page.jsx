import BlogHero from "@/components/Blog/BlogHero/BlogHero";
import BlogCTA from "@/components/Blog/BlogCTA/BlogCTA";
import styles from "./page.module.css";

export const metadata = {
  title: "Designing a Better Multi-Section Online Course Experience | VRB",
  description:
    "A look at how I redesigned an online course experience with multiple sections, quizzes, progress tracking, locked states and clearer learner navigation.",
};

export default function MultiSectionCourseExperiencePage() {
  return (
    <>
      <BlogHero
        category="UX/UI & Development"
        title="Designing a Better Learning Experience for a Multi-Section Online Course"
        description="What started as a request to split one online course into multiple sections became a much bigger exercise in progression, navigation, state management and keeping complexity away from the learner."
        date="September 18, 2026"
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
            Sometimes a feature that sounds simple on paper becomes a much
            larger design and development challenge once you consider how people
            will actually use it.
          </p>

          <p>
            That was the case when I needed to introduce a new multi-section
            course structure into an existing online safety training platform.
          </p>

          <p>
            The platform already supported more than 70 online courses. Learners
            could open a course, work through a presentation and supporting
            materials, complete a quiz and receive a certificate after passing.
          </p>

          <p>
            That experience worked for the majority of the training library.
            Replacing the existing course system or forcing every course into a
            new structure would have created complexity where it was not needed.
          </p>

          <p>But one particular course needed something different.</p>

          <h2>The problem: one course no longer fit the existing structure</h2>

          <p>
            Instead of one continuous presentation followed by one final quiz,
            this course needed to be divided into several distinct sections.
          </p>

          <p>
            Each section contained a specific range of course material and ended
            with its own quiz. Learners needed to pass one section before
            continuing to the next, and only after successfully completing every
            section should the overall course be considered complete and a
            certificate become available.
          </p>

          <p>That was the technical requirement.</p>

          <p>
            The bigger design question was how to make the new structure
            immediately understandable to the learner.
          </p>

          <blockquote className={styles.blockquote}>
            Adding complexity to the system did not mean the learner should have
            to experience that complexity.
          </blockquote>

          <h2>The interface suddenly had more questions to answer</h2>

          <p>
            The original course experience had a relatively simple journey:
            review the course material, take the quiz, pass the course and
            receive a certificate.
          </p>

          <p>Multiple sections introduced an entirely new set of questions:</p>

          <ul className={styles.list}>
            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Which section am I currently working on?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>How much of the course have I completed?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>What happens after I pass this quiz?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Can I return to something I already completed?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Can I accidentally skip ahead?</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>
                If I revisit an earlier section, does that become my current
                point of progression again?
              </div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Where do I go when I am ready for the next quiz?</div>
            </li>
          </ul>

          <p>
            Rather than answering those questions through instructions scattered
            throughout the course, I wanted the interface itself to communicate
            as much of that information as possible.
          </p>

          <h2>Explaining the journey before asking someone to take it</h2>

          <p>
            The first addition was a short introductory modal when a learner
            first enters a sectioned course.
          </p>

          <p>
            Instead of expecting someone to discover the rules through trial and
            error, the modal explains the structure before they begin.
          </p>

          <p>It tells the learner that:</p>

          <ul className={styles.list}>
            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>The training is divided into multiple sections.</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>
                Each section contains course material followed by a quiz.
              </div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>A score of at least 85% is required to continue.</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Completed sections can be revisited for review.</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>
                The certificate becomes available after every section has been
                successfully completed.
              </div>
            </li>
          </ul>

          <p>
            The modal is intentionally an introduction rather than something
            that repeatedly interrupts the learner.
          </p>

          <p>
            Once it has done its job, the course interface takes over the
            responsibility of communicating progress and next steps.
          </p>

          <blockquote className={styles.blockquote}>
            Explain the system once. Then design the interface so people do not
            need the instructions again.
          </blockquote>

          <h2>Turning the side menu into a course roadmap</h2>

          <p>
            The course navigation also needed to change because the learner was
            no longer moving through one continuous experience.
          </p>

          <p>The side menu became a small roadmap for the course.</p>

          <p>
            Each section is displayed individually, with clear states showing
            whether it has been completed, is currently available or remains
            locked.
          </p>

          <p>
            That gives learners a persistent answer to two important questions:
            where am I, and what comes next?
          </p>

          <h2>
            Viewing a section and progressing through the course are not the
            same thing
          </h2>

          <p>
            This created one of the more important state-management decisions in
            the project.
          </p>

          <p>
            The section a learner is currently viewing is not necessarily the
            same as the section they have currently unlocked.
          </p>

          <p>
            Imagine a learner has completed Sections 1 and 2 and unlocked
            Section 3.
          </p>

          <p>
            If they return to Section 1 to review something, Section 1 becomes
            the section they are viewing. But Section 3 is still their actual
            point of progression.
          </p>

          <p>Those cannot be treated as the same piece of state.</p>

          <blockquote className={styles.blockquote}>
            Where someone is looking and how far they have progressed are two
            different questions.
          </blockquote>

          <p>
            The URL therefore identifies the section currently being viewed,
            while the learner&apos;s saved course progress determines how far
            they have actually progressed.
          </p>

          <p>
            A URL such as <code>?section=0</code> can display the first section,
            but it does not move the learner&apos;s saved progress backwards.
          </p>

          <p>
            This makes completed content reviewable without allowing navigation
            to rewrite progression.
          </p>

          <h2>Locked states needed to represent real permissions</h2>

          <p>
            Separating viewing state from progression also created an important
            safeguard.
          </p>

          <p>
            Future sections remain locked according to the learner&apos;s saved
            progress rather than simply trusting the section number in the URL.
          </p>

          <p>That means navigation is not just a visual treatment.</p>

          <p>
            The interface reflects the actual course state stored for that
            learner, while the backend continues to validate which section they
            are permitted to complete.
          </p>

          <p>Changing a URL should never be enough to manufacture progress.</p>

          <h2>Completed sections should still be useful</h2>

          <p>
            Once a section has been completed, it remains available for review.
          </p>

          <p>
            That was particularly important for safety training, where someone
            may want to return to earlier material and double-check information
            before continuing.
          </p>

          <p>
            But reviewing a completed section does not mean retaking its quiz.
          </p>

          <p>
            The interface identifies the section as complete and treats it as
            reviewable rather than presenting the learner with another quiz
            action.
          </p>

          <h2>Guiding learners without trapping them</h2>

          <p>
            For the learner&apos;s current section, the quiz remains available
            through the course navigation when they are ready to take it.
          </p>

          <p>
            The presentation itself contains predetermined checkpoints
            indicating when the learner should complete the section quiz.
          </p>

          <p>
            That means the interface does not need to force someone through
            every slide again simply to regain access to a quiz button.
          </p>

          <p>
            This matters particularly for returning learners. If someone leaves
            the course and comes back later, or wants to review part of their
            current section, they should not have to mechanically click through
            material they have already seen just to find their next action.
          </p>

          <blockquote className={styles.blockquote}>
            Guidance should help someone move forward. It should not make them
            fight the interface to get there.
          </blockquote>

          <h2>Progress needed to mean something</h2>

          <p>
            A course-level progress indicator was another important addition.
          </p>

          <p>
            With a single-quiz course, completion is relatively binary. The
            course is either still in progress or complete.
          </p>

          <p>
            A multi-section course has meaningful milestones between those two
            states.
          </p>

          <p>
            For a four-section course, completing one section represents 25%
            course completion. Two sections represent 50%, three represent 75%
            and completing all four represents 100%.
          </p>

          <p>
            Importantly, a section only contributes to that progress after its
            quiz has been passed.
          </p>

          <p>
            The progress bar is therefore based on completed sections rather
            than presentation slides.
          </p>

          <p>
            Slide position can tell us where someone is within a presentation.
            It cannot necessarily tell us whether they successfully completed
            that part of their training.
          </p>

          <blockquote className={styles.blockquote}>
            Progress should represent the meaningful completion event, not
            simply the easiest activity to count.
          </blockquote>

          <h2>The data model had to understand sections too</h2>

          <p>
            The interface could not support this properly without changes
            underneath it.
          </p>

          <p>
            Previously, a learner&apos;s course record could store an overall
            quiz score and answers because a normal course had one primary quiz
            attempt associated with completion.
          </p>

          <p>A sectioned course needs more granular information.</p>

          <p>
            The learner&apos;s course record now contains section progress that
            can associate a particular section with information such as:
          </p>

          <ul className={styles.list}>
            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Section order</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Quiz result</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Submitted answers</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Completion status</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Completion date</div>
            </li>
          </ul>

          <p>
            The system can therefore understand not only that a learner is
            halfway through a course, but why they are halfway through it.
          </p>

          <h2>One new course structure should not break 70 existing courses</h2>

          <p>
            This was not a new platform being built from scratch around one
            course.
          </p>

          <p>
            It was an extension of a live training platform with more than 70
            existing courses.
          </p>

          <p>
            Backward compatibility was therefore one of the biggest development
            considerations.
          </p>

          <p>
            The master course identifies whether it uses the sectioned
            structure.
          </p>

          <p>
            If it does not, the existing course and quiz experience continues to
            operate as before. If it does, the application selects the
            appropriate section and quiz while continuing to reuse as much of
            the existing course, quiz and completion infrastructure as possible.
          </p>

          <blockquote className={styles.blockquote}>
            The goal was to extend the system where the new experience needed
            it, not rebuild everything simply because one course was different.
          </blockquote>

          <h2>Keeping the course ID and learner course ID separate</h2>

          <p>
            The new structure also made an existing architectural distinction
            even more important.
          </p>

          <p>
            The platform has both a master course and an individual course
            assignment belonging to a learner.
          </p>

          <p>
            The master course ID identifies the course itself and is used to
            retrieve its content and configuration.
          </p>

          <p>
            The learner&apos;s UserCourse ID identifies that learner&apos;s
            specific assignment and contains information such as their
            progression, quiz results, answers and eventual certificate.
          </p>

          <p>
            Once multiple sections and learner-specific progression were
            introduced, keeping those identities separate became critical.
          </p>

          <h2>Quiz submission needed backend validation too</h2>

          <p>
            When a learner submits a section quiz, the frontend cannot simply
            announce that the section has been completed and move on.
          </p>

          <p>
            The submission includes information identifying the learner&apos;s
            course and the specific section being completed, along with the quiz
            result and answers.
          </p>

          <p>
            The backend verifies that the requested section belongs to the
            course and that it is actually the learner&apos;s currently
            available section before recording the result.
          </p>

          <p>
            If the learner does not achieve the required 85%, the section
            remains incomplete.
          </p>

          <p>If they pass, the next section becomes available.</p>

          <p>
            When the final section is successfully passed, the overall course
            can move into the existing completion and certificate process.
          </p>

          <h2>Reaching the final section is not the same as completing it</h2>

          <p>
            That distinction sounds small, but it matters enormously in the
            completion logic.
          </p>

          <p>
            Simply arriving at the final section cannot trigger course
            completion.
          </p>

          <p>The learner has to actually pass it.</p>

          <blockquote className={styles.blockquote}>
            Being at the end of a course and successfully completing the course
            are not the same state.
          </blockquote>

          <p>
            Successful completion, rather than merely viewing the final section,
            is therefore what triggers the certificate flow.
          </p>

          <h2>Completion also had to preserve the journey that created it</h2>

          <p>The final section introduced another subtle data problem.</p>

          <p>
            Section submission records the final section result and establishes
            that all of the sections have been passed. The existing overall
            course-completion process then handles the broader information used
            elsewhere in the platform, including completion and certificate
            data.
          </p>

          <p>
            The overall completion update could not overwrite the learner&apos;s
            newly updated section history.
          </p>

          <p>
            The fresh section progress therefore needs to remain part of the
            final learner course record.
          </p>

          <p>
            Completing the whole course should preserve the individual
            milestones that produced that completion.
          </p>

          <h2>The final screen needed to feel like course completion</h2>

          <p>
            The completion experience was considered from the same perspective
            as the rest of the interface.
          </p>

          <p>
            After several sections and several quizzes, the learner should not
            arrive at a screen that feels as though they merely completed
            another isolated quiz.
          </p>

          <p>They completed the entire course.</p>

          <p>
            The final experience can acknowledge that first, then provide a
            summary of the sections and their results before presenting the
            existing certificate and post-course actions.
          </p>

          <h2>Why I didn't build an entirely separate course player</h2>

          <p>
            It would have been possible to create a separate component, separate
            quiz system, separate completion flow and separate data model
            specifically for sectioned courses.
          </p>

          <p>But that would have introduced a lot of duplicated complexity.</p>

          <p>
            Instead, the implementation extends the pieces that already work and
            introduces differences only where the new learning experience
            actually requires them.
          </p>

          <p>The same philosophy applies to the interface.</p>

          <p>
            The learner does not need to understand the architecture behind the
            course.
          </p>

          <p>
            They need to know where they are, what they have completed, what is
            available next and what action they should take.
          </p>

          <h2>
            Making the system more sophisticated without making the experience
            harder
          </h2>

          <p>
            Looking at the finished experience, each addition has a specific
            job.
          </p>

          <ul className={styles.list}>
            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>The introductory modal explains the journey once.</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>The section navigation provides orientation.</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Locked states prevent accidental progression.</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>Completed sections remain available for review.</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>The quiz action appears when it is relevant.</div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>
                The progress bar represents meaningful course completion.
              </div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>
                The URL controls what is being viewed without rewriting actual
                learner progression.
              </div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>
                The backend validates what the learner is permitted to complete.
              </div>
            </li>

            <li>
              <span className={styles.listPixel} aria-hidden="true" />
              <div>
                The final completion experience brings the individual sections
                back together as one finished course.
              </div>
            </li>
          </ul>

          <p>
            What began as a requirement to &ldquo;split a course into
            sections&rdquo; ultimately became an exercise in designing state,
            navigation, progression, feedback and flexibility together.
          </p>

          <p>
            The most important outcome was not simply that the platform could
            technically support multiple quizzes.
          </p>

          <p>
            It was that the additional complexity of the course did not have to
            become additional complexity for the learner.
          </p>

          <blockquote className={styles.blockquote}>
            Understand where you are. Know what comes next. Always have an
            obvious path forward.
          </blockquote>
        </article>
      </section>

      <BlogCTA
        title="Need something more custom than a standard website?"
        text="VRB designs and develops custom web experiences where the interface, functionality and underlying system need to work together."
        buttonText="Explore Custom Web Development"
        buttonHref="/services/custom-web-development"
      />
    </>
  );
}
