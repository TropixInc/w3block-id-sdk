export function getEndpoint(env: string): string {
  const endpoint: Record<string, string> = {
    development: 'http://localhost:6001',
    production: 'http://blockchain-svc-app-template.blockchain-svc.svc.cluster.local',
    staging: 'https://blockchain-svc-stg.tropix.io',
  };
  return endpoint[env] || endpoint.production;
}
