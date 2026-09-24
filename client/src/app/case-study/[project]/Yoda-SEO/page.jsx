import { yodaSeoCaseStudy } from './seoTimeline';

const YodaSeoCaseStudy = () => {
  const data = yodaSeoCaseStudy;

  return (
    <main>
      <header>
        <p>{data.project}</p>

        <h1>{data.title}</h1>

        <p>{data.period}</p>

        <p>{data.summary}</p>
      </header>

      <section>
        <h2>Project Goals</h2>

        <ul>
          {data.goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>SEO Timeline</h2>

        {data.timeline.map((item, index) => (
          <article key={index}>
            <p>{item.date}</p>

            <h3>{item.title}</h3>

            {item.details && (
              <ul>
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            )}

            {item.stats && (
              <div>
                {item.stats.map((stat, statIndex) => (
                  <div key={statIndex}>
                    <strong>{stat.value}</strong>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            {item.pages && (
              <div>
                <h4>Pages</h4>

                <ul>
                  {item.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>{page}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.fieldsAdded && (
              <div>
                <h4>New Course Fields</h4>

                <ul>
                  {item.fieldsAdded.map((field, fieldIndex) => (
                    <li key={fieldIndex}>
                      <code>{field}</code>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.schemaTypes && (
              <div>
                <h4>Structured Data</h4>

                <ul>
                  {item.schemaTypes.map((schema, schemaIndex) => (
                    <li key={schemaIndex}>{schema}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.indexedUrls && (
              <div>
                <h4>Indexed URLs</h4>

                <ul>
                  {item.indexedUrls.map((url, urlIndex) => (
                    <li key={urlIndex}>
                      <code>{url}</code>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.excludedPageTypes && (
              <div>
                <h4>Pages Identified for Index Control</h4>

                <ul>
                  {item.excludedPageTypes.map((pageType, pageIndex) => (
                    <li key={pageIndex}>{pageType}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </section>

      <section>
        <h2>Keyword Research</h2>

        <p>
          Keyword research was conducted using Canadian search data to identify
          opportunities based on search volume keyword difficulty and search
          intent.
        </p>

        <table>
          <thead>
            <tr>
              <th>Keyword</th>
              <th>Monthly Search Volume</th>
              <th>Keyword Difficulty</th>
            </tr>
          </thead>

          <tbody>
            {data.keywordResearch.map((keyword) => (
              <tr key={keyword.keyword}>
                <td>{keyword.keyword}</td>
                <td>{keyword.volume.toLocaleString()}</td>
                <td>{keyword.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Keyword Opportunities</h2>

        {data.keywordInsights.map((insight, index) => (
          <article key={index}>
            <h3>{insight.title}</h3>

            <p>{insight.description}</p>

            {insight.comparison && (
              <table>
                <thead>
                  <tr>
                    <th>Keyword</th>
                    <th>Volume</th>
                    <th>Difficulty</th>
                  </tr>
                </thead>

                <tbody>
                  {insight.comparison.map((keyword) => (
                    <tr key={keyword.keyword}>
                      <td>{keyword.keyword}</td>
                      <td>{keyword.volume}</td>
                      <td>{keyword.difficulty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </article>
        ))}
      </section>

      <section>
        <h2>Keyword Strategy</h2>

        <article>
          <h3>Homepage</h3>

          <p>
            <strong>Primary keyword:</strong>{' '}
            {data.seoArchitecture.homepage.primaryKeyword}
          </p>

          <ul>
            {data.seoArchitecture.homepage.supportingKeywords.map(
              (keyword, index) => (
                <li key={index}>{keyword}</li>
              )
            )}
          </ul>
        </article>

        <article>
          <h3>Training</h3>

          <ul>
            {data.seoArchitecture.trainingPage.primaryKeywords.map(
              (keyword, index) => (
                <li key={index}>{keyword}</li>
              )
            )}
          </ul>
        </article>

        <article>
          <h3>Safety Products</h3>

          <p>
            <strong>Primary keyword:</strong>{' '}
            {data.seoArchitecture.shop.primaryKeyword}
          </p>

          <ul>
            {data.seoArchitecture.shop.supportingKeywords.map(
              (keyword, index) => (
                <li key={index}>{keyword}</li>
              )
            )}
          </ul>
        </article>

        <article>
          <h3>Company Training</h3>

          <p>
            <strong>Primary keyword:</strong>{' '}
            {data.seoArchitecture.companyTraining.primaryKeyword}
          </p>

          <ul>
            {data.seoArchitecture.companyTraining.supportingKeywords.map(
              (keyword, index) => (
                <li key={index}>{keyword}</li>
              )
            )}
          </ul>
        </article>

        <article>
          <h3>Digital Safety Forms</h3>

          <p>
            <strong>Primary keyword:</strong>{' '}
            {data.seoArchitecture.digitalForms.primaryKeyword}
          </p>

          <ul>
            {data.seoArchitecture.digitalForms.supportingKeywords.map(
              (keyword, index) => (
                <li key={index}>{keyword}</li>
              )
            )}
          </ul>
        </article>

        <article>
          <h3>Safety Manuals</h3>

          <p>
            <strong>Primary keyword:</strong>{' '}
            {data.seoArchitecture.manuals.primaryKeyword}
          </p>
        </article>
      </section>

      <section>
        <h2>Strategic SEO Decisions</h2>

        {data.strategicDecisions.map((decision, index) => (
          <article key={index}>
            <h3>{decision.title}</h3>

            <p>{decision.description}</p>

            {decision.examples && (
              <ul>
                {decision.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex}>{example}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      <section>
        <h2>Scaling SEO Across the Course Catalogue</h2>

        <p>
          Yoda Safety Services contains {data.courseContentModel.catalogueSize}.
          The existing course data structure was expanded so each course could
          support unique search-focused content.
        </p>

        <h3>New Course Fields</h3>

        <ul>
          {data.courseContentModel.newFields.map((field) => (
            <li key={field}>
              <code>{field}</code>
            </li>
          ))}
        </ul>

        <h3>Existing Course Data Used</h3>

        <ul>
          {data.courseContentModel.existingFieldsUsedForSeo.map((field) => (
            <li key={field}>
              <code>{field}</code>
            </li>
          ))}
        </ul>

        <h3>Course Page Structure</h3>

        <ol>
          {data.courseContentModel.pageStructure.map((section, index) => (
            <li key={index}>{section}</li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Early Results</h2>

        <p>{data.earlyResults.context}</p>

        <div>
          <div>
            <strong>{data.earlyResults.searchConsole.impressions}</strong>
            <p>Google Search Impressions</p>
          </div>

          <div>
            <strong>{data.earlyResults.searchConsole.clicks}</strong>
            <p>Organic Clicks</p>
          </div>

          <div>
            <strong>{data.earlyResults.searchConsole.ctr}</strong>
            <p>Click-Through Rate</p>
          </div>

          <div>
            <strong>{data.earlyResults.searchConsole.averagePosition}</strong>
            <p>Average Position</p>
          </div>

          <div>
            <strong>{data.earlyResults.technicalSeo.initialSiteHealth}</strong>
            <p>Initial Site Health</p>
          </div>

          <div>
            <strong>{data.earlyResults.technicalSeo.updatedSiteHealth}</strong>
            <p>Updated Site Health</p>
          </div>

          <div>
            <strong>{data.earlyResults.indexing.indexedPagesOnSeptember13}</strong>
            <p>Indexed Pages on September 13</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Before & After</h2>

        <div>
          <article>
            <h3>Before</h3>

            <ul>
              {data.beforeAfter.before.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>

          <article>
            <h3>After</h3>

            <ul>
              {data.beforeAfter.after.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section>
        <h2>Tools & Technology</h2>

        <ul>
          {data.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Ongoing Measurement</h2>

        <p>
          Because SEO results develop over time the project will continue to be
          measured at regular checkpoints.
        </p>

        {data.futureTracking.map((checkpoint, index) => (
          <article key={index}>
            <strong>{checkpoint.date}</strong>
            <p>{checkpoint.label}</p>
          </article>
        ))}

        <h3>Metrics Being Tracked</h3>

        <ul>
          {data.futureMetrics.map((metric, index) => (
            <li key={index}>{metric}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default YodaSeoCaseStudy;