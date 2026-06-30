/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // Set the repository root for output file tracing to avoid
  // Next.js inferring an incorrect workspace root when multiple
  // lockfiles exist on the machine.
  outputFileTracingRoot: path.join(__dirname, '..'),
};

export default nextConfig;
