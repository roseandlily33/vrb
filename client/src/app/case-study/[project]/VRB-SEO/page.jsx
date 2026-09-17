export default function VrbSeoCaseStudy() {
  return (
    <main>
      <section>
        <p>SEO Case Study</p>

        <h1>
          Building Organic Search Visibility for VRB Web Design and Development
        </h1>

        <p>
          SEO work began on August 20, 2026. The project focused on building a
          stronger technical foundation, creating intentional topic clusters,
          improving search intent alignment, strengthening internal linking and
          measuring how Google responded as new content entered the index.
        </p>
      </section>

      <section>
        <h2>Early Results</h2>

        <div>
          {earlySeoResults.map((result) => (
            <div key={result.label}>
              <p>{result.label}</p>
              <strong>{result.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Timeline</h2>

        {seoTimeline.map((item) => (
          <article key={`${item.date}-${item.title}`}>
            <div>
              <p>{item.date}</p>
              <span>{item.type}</span>
            </div>

            <h3>{item.title}</h3>

            {item.stats && (
              <div>
                {item.stats.map((stat) => (
                  <div key={stat.label}>
                    <p>{stat.label}</p>
                    <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>
            )}

            {item.details && (
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      <section>
        <h2>What I Implemented</h2>

        {implementedSeoWork.map((group) => (
          <article key={group.category}>
            <h3>{group.category}</h3>

            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <h2>SEO Experiments</h2>

        <p>
          Rather than treating each SEO change as a guaranteed ranking tactic, I
          used several changes as experiments. Each experiment started with a
          hypothesis, followed by implementation and observation through Google
          Search Console.
        </p>

        {seoExperiments.map((experiment) => (
          <article key={experiment.title}>
            <div>
              <p>Experiment</p>
              <span>{experiment.status}</span>
            </div>

            <h3>{experiment.title}</h3>

            <div>
              <h4>Hypothesis</h4>
              <p>{experiment.hypothesis}</p>
            </div>

            <div>
              <h4>What I Did</h4>

              <ul>
                {experiment.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Early Evidence</h4>

              <ul>
                {experiment.earlyEvidence.map((evidence) => (
                  <li key={evidence}>{evidence}</li>
                ))}
              </ul>
            </div>

            {experiment.caveat && (
              <div>
                <h4>Important Note</h4>
                <p>{experiment.caveat}</p>
              </div>
            )}
          </article>
        ))}
      </section>

      <section>
        <h2>Early Search Themes</h2>

        <article>
          <h3>Website Redesign + SEO</h3>

          <ul>
            <li>website redesign seo</li>
            <li>does website redesign affect seo</li>
            <li>seo and website redesign</li>
            <li>website redesign seo considerations</li>
          </ul>
        </article>

        <article>
          <h3>Website Pricing</h3>

          <ul>
            <li>average website price-related searches</li>
            <li>how much does a web page cost</li>
            <li>how much is a web page</li>
            <li>website redesign cost</li>
            <li>how much does a website cost</li>
          </ul>
        </article>

        <article>
          <h3>Website Planning and Decision-Making</h3>

          <ul>
            <li>website refresh</li>
            <li>how many pages should my website have</li>
            <li>web developer and designer</li>
            <li>redesign versus refresh-related searches</li>
          </ul>
        </article>
      </section>

      <section>
        <h2>What the Early Data Suggests</h2>

        <p>
          The first stage of the project has primarily been about discovery
          rather than high-ranking traffic. Google has expanded the number of
          queries VRB appears for and has begun testing multiple blog articles
          against relevant non-branded searches.
        </p>

        <p>
          The strongest early pattern has been around website redesign and SEO,
          followed by website pricing and broader website decision-making
          topics.
        </p>

        <p>
          These signals are still early, so the current strategy is to continue
          monitoring query movement rather than repeatedly rewriting recently
          published content.
        </p>
      </section>

      <section>
        <h2>Next Phase</h2>

        <ul>
          <li>Continue monitoring Google Search Console.</li>
          <li>Track movement of individual queries rather than only averages.</li>
          <li>Document rankings and impressions at regular checkpoints.</li>
          <li>Allow newly published articles time to stabilize.</li>
          <li>Continue building authority outside the website.</li>
          <li>Begin testing AI-search and GEO improvements.</li>
          <li>Document future off-page SEO experiments.</li>
          <li>
            Revisit the strongest-performing content once enough data exists to
            justify another optimization pass.
          </li>
        </ul>
      </section>
    </main>
  );
}