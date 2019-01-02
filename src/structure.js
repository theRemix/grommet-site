export const structure = {
  externals: [{ name: 'Icons', url: 'https://grommet.io/grommet-icons/' }],
  sections: [
    {
      name: 'Layout',
      components: ['Box', 'Grid', 'Layer', 'Stack'],
    },
    {
      name: 'Type',
      components: ['Heading', 'Markdown', 'Paragraph', 'Text'],
    },
    {
      name: 'Color',
    },
    {
      name: 'Controls',
      components: [
        'Accordion',
        'Anchor',
        'Button',
        'Drop',
        'DropButton',
        'Menu',
        'Tabs',
      ],
    },
    {
      name: 'Input',
      components: [
        'CheckBox',
        'MaskedInput',
        'RadioButton',
        'RangeInput',
        'RangeSelector',
        'Select',
        'TextArea',
        'TextInput',
        'FormField',
        'Form',
      ],
    },
    {
      name: 'Visualizations',
      components: [
        'Calendar',
        'Chart',
        'Clock',
        'DataTable',
        'Diagram',
        'Distribution',
        'Meter',
        'Table',
        'WorldMap',
      ],
    },
    {
      name: 'Media',
      components: ['Carousel', 'Image', 'Video'],
    },
    {
      name: 'Utilities',
      components: [
        'AnnounceContext',
        'Collapsible',
        'Grommet',
        'InfiniteScroll',
        'Keyboard',
        'ResponsiveContext',
        'SkipLinks',
        'ThemeContext',
      ],
    },
  ],
};

export const nameToPath = name => {
  const section = structure.sections.filter(s => s.name === name)[0];
  if (section && name !== 'Color') {
    return `/components#${name}`;
  }
  const external = structure.externals.filter(e => e.name === name)[0];
  if (external) {
    return external.url;
  }
  return `/${name.toLowerCase()}`;
};

export const nextComponent = name => {
  const { sections } = structure;
  let result;
  sections.some((section, sectionIndex) => {
    if (section.components) {
      return section.components.some((component, componentIndex) => {
        if (component === name) {
          result = section.components[componentIndex + 1];
          if (!result) {
            const nextSection = sections[sectionIndex + 1];
            if (nextSection) {
              if (nextSection.components) {
                [result] = nextSection.components;
              } else {
                result = nextSection.name;
              }
            }
          }
        }
        return result;
      });
    }
    if (section.name === name) {
      const nextSection = sections[sectionIndex + 1];
      if (nextSection) {
        if (nextSection.components) {
          [result] = nextSection.components;
        } else {
          result = nextSection.name;
        }
      }
    }
    return false;
  });
  return result;
};

export const previousComponent = name => {
  const { sections } = structure;
  let result;
  sections.some((section, sectionIndex) => {
    if (section.components) {
      return section.components.some((component, componentIndex) => {
        if (component === name) {
          result = section.components[componentIndex - 1];
          if (!result) {
            const priorSection = sections[sectionIndex - 1];
            if (priorSection) {
              if (priorSection.components) {
                result =
                  priorSection.components[priorSection.components.length - 1];
              } else {
                result = priorSection.name;
              }
            }
          }
        }
        return result;
      });
    }
    if (section.name === name) {
      const priorSection = sections[sectionIndex - 1];
      if (priorSection) {
        if (priorSection.components) {
          result = priorSection.components[priorSection.components.length - 1];
        } else {
          result = priorSection.name;
        }
      }
    }
    return false;
  });
  return result;
};
