/** Temporary remote Unsplash URLs while GitHub MCP cannot upload binary JPGs. */
export const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const remoteImages = {
  heroBg: u("photo-1518611012118-696072aa579a", 2400),
  heroAlt: u("photo-1524594152303-9fd13543fe6e", 2400),
  portrait: u("photo-1508700929628-666bc8bd84ea"),
  studio: u("photo-1534438327276-14e5300c3a48"),
} as const;
