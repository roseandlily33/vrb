const colors = [
  ["Blue 900", "#243747"],
  ["Blue 800", "#2F475D"],
  ["Blue 700", "#3C5973"],
  ["Blue 500", "#6C8396"],
  ["Blue 200", "#D9E2E8"],
  ["Blue 100", "#EDF3F6"],

  ["Taupe 700", "#8C8177"],
  ["Taupe 500", "#B8AAA0"],
  ["Taupe 300", "#D4CAC0"],
  ["Taupe 100", "#F1EBE6"],
  ["Taupe 50", "#FAF7F4"],

  ["Grey 700", "#5C5C5C"],
  ["Grey 500", "#8F8F8F"],
  ["Grey 300", "#C5C5C5"],
  ["Grey 100", "#E9E9E9"],
  ["Grey 50", "#F6F6F6"],

  ["Sage 700", "#6F7F73"],
  ["Sage 500", "#9AAC9F"],
  ["Sage 300", "#BECBC1"],
  ["Sage 100", "#E8EEE9"],

  ["Clay 700", "#8F6F5F"],
  ["Clay 500", "#B99785"],
  ["Clay 300", "#DCC6BA"],
  ["Clay 100", "#F2E7E1"],

  ["Warm White", "#FCFAF7"],
  ["Cream", "#F7F2EC"],
  ["White", "#FFFFFF"],
];

const fonts = [
  ["Manrope", "Manrope"],
  ["Inter", "Inter"],
  ["Playfair Display", "Playfair Display"],
  ["Cormorant Garamond", "Cormorant Garamond"],
];

export default function StyleGuidePreview() {
  return (
    <section className="styleGuide">
      <h2>Colour Palette</h2>

      <div className="colorGrid">
        {colors.map(([name, hex]) => (
          <div className="colorCard" key={name}>
            <span
              className="colorCircle"
              style={{ backgroundColor: hex }}
            />
            <div>
              <p>{name}</p>
              <span>{hex}</span>
            </div>
          </div>
        ))}
      </div>

      <h2>Font Preview</h2>

      <div className="fontGrid">
        {fonts.map(([name, family]) => (
          <div className="fontCard" key={name}>
            <span>{name}</span>
            <h3 style={{ fontFamily: family }}>Massage</h3>
          </div>
        ))}
      </div>
    </section>
  );
}