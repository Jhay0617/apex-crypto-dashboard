const sharedTokens = {
  accent: "#38BDF8",
  profit: "#10B981",
  loss: "#EF4444",
  devices: {
    mobile: `(min-width: 480px)`,
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    desktop: `(min-width: 1200px)`,
  },
  spacing: (val) => `${val * 0.8}rem`,
};

export const darkTheme = {
  ...sharedTokens,
  colors: {
    ...sharedTokens,
    background: "#0F172A",
    surface: "#1E293B",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
    border: "rgba(255, 255, 255, 0.1)",
  },
};

export const lightTheme = {
  ...sharedTokens,
  colors: {
    ...sharedTokens,
    background: "#F8FAFC",
    surface: "#FFFFFF",
    textPrimary: "#0F172A",
    textSecondary: "#64748B",
    border: "rgba(15, 23, 42, 0.1)",
  },
};
