const loadCSSModule = async (id: number) => {
  console.log(id);

  try {
    // eslint-disable-next-line @next/next/no-assign-module-variable
    const module = await import(`../styles/ad${id}.module.scss`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load styles for Ad${id}`, error);
    return {};
  }
};

export { loadCSSModule };
