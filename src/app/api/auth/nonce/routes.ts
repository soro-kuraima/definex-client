import { generateNonce } from 'siwe';

export async function GET() {
  return new Response(generateNonce());
}
