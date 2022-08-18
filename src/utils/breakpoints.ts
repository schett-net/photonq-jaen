const breakpoints = [600, 768, 1024, 1280, 1536];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
