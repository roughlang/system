let bootstrapGrid;function updateBootstrapGrid(){const t=window.innerWidth;t<=575?bootstrapGrid="xs":t>=576&&t<768?bootstrapGrid="sm":t>=768&&t<992?bootstrapGrid="md":t>=992&&t<1200?bootstrapGrid="lg":t>=1200&&t<1400?bootstrapGrid="xl":t>=1400&&(bootstrapGrid="xxl")}window.addEventListener("resize",updateBootstrapGrid),updateBootstrapGrid();