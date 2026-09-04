/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
import withMDX from "@next/mdx";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseConfig = {
  /* config options here */
  reactCompiler: true,
  // Set the repository root for output file tracing to avoid
  // Next.js inferring an incorrect workspace root when multiple
  // lockfiles exist on the machine.
  outputFileTracingRoot: path.join(__dirname, ".."),
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const nextConfig = withMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // You can add remark/rehype plugins here if needed
  },
})(baseConfig);

export default nextConfig;
