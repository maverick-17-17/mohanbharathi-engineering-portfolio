export interface Skill {
  id: string;
  name: string;
  category: 'Engineering' | 'Programming & Computing' | 'Design & Media';
  level: 'Professional' | 'Moderate' | 'Somewhat Good' | 'Developing' | 'Beginner' | 'To be set';
  description: string;
  tools?: string[];
  notes?: string;
}

export const defaultSkills: Skill[] = [
  // Engineering (05)
  {
    id: 'sk-eng-1',
    name: 'Electronics',
    category: 'Engineering',
    level: 'Developing',
    description: 'Component-level exploration, prototyping and bench documentation.',
    tools: ['Multimeter', 'Bench Power Supply', 'Signal Generator', 'Oscilloscope']
  },
  {
    id: 'sk-eng-2',
    name: 'Circuit design',
    category: 'Engineering',
    level: 'Developing',
    description: 'Reading, assembling and iterating small electronic circuits.',
    tools: ['Breadboards', 'Perfboards', 'Discrete Semiconductors', 'Linear Regulators']
  },
  {
    id: 'sk-eng-3',
    name: 'Digital logic',
    category: 'Engineering',
    level: 'Developing',
    description: 'Logic gates, timer circuits and feedback-based systems.',
    tools: ['7400-Series TTL', 'NE555 Timers', 'Boolean Algebra', 'Combinational Logic']
  },
  {
    id: 'sk-eng-4',
    name: 'Hardware prototyping',
    category: 'Engineering',
    level: 'Developing',
    description: 'Building practical experiments from available components.',
    tools: ['Soldering Iron', 'Wire Strippers', 'Prototyping Jigs', 'Component Sourcing']
  },
  {
    id: 'sk-eng-5',
    name: '3D Printing',
    category: 'Engineering',
    level: 'Moderate',
    description: 'Slicing, bed leveling, and printing functional enclosures.',
    tools: ['FDM 3D Printers', 'Cura / PrusaSlicer', 'PLA / PETG', 'Mechanical Fit Tolerances']
  },

  // Programming & Computing (03)
  {
    id: 'sk-code-1',
    name: 'C Programming',
    category: 'Programming & Computing',
    level: 'Somewhat Good',
    description: 'Microcontroller-oriented programming and embedded logic.',
    tools: ['Embedded C', 'GCC', 'Memory Management', 'Bitwise Registers']
  },
  {
    id: 'sk-code-2',
    name: 'Python',
    category: 'Programming & Computing',
    level: 'Somewhat Good',
    description: 'Scripting, experimentation and data-oriented learning.',
    tools: ['Automation Scripts', 'Data Analysis', 'NumPy / Pandas', 'API Integration']
  },
  {
    id: 'sk-code-3',
    name: 'Machine Learning',
    category: 'Programming & Computing',
    level: 'Beginner',
    description: 'Early-stage exploration as part of the Data Science specialization.',
    tools: ['Scikit-Learn', 'Model Evaluation', 'Regression / Classification Basics']
  },

  // Design & Media (05)
  {
    id: 'sk-des-1',
    name: 'AutoCAD',
    category: 'Design & Media',
    level: 'Professional',
    description: 'Technical drawing and structured design workflows.',
    tools: ['2D Drafting', 'Orthographic Projections', 'Dimensioning', 'Technical Layouts']
  },
  {
    id: 'sk-des-2',
    name: 'EasyEDA',
    category: 'Design & Media',
    level: 'Moderate',
    description: 'Schematic and PCB design exploration.',
    tools: ['Schematic Capture', 'PCB Layout', 'Netlists', 'BOM Export']
  },
  {
    id: 'sk-des-3',
    name: 'Adobe Premiere Pro',
    category: 'Design & Media',
    level: 'Moderate',
    description: 'Video editing and presentation of project work.',
    tools: ['Timeline Editing', 'Audio Sync', 'Color Grading', 'Technical Demonstration Reels']
  },
  {
    id: 'sk-des-4',
    name: 'DaVinci Resolve',
    category: 'Design & Media',
    level: 'Moderate',
    description: 'Editing and colour workflows for visual documentation.',
    tools: ['Cut & Edit Pages', 'Node-based Color Grading', 'Fairlight Audio']
  },
  {
    id: 'sk-des-5',
    name: 'Photography',
    category: 'Design & Media',
    level: 'To be set',
    description: 'Developing visual documentation and observational photography.',
    tools: ['Macro Hardware Details', 'Composition', 'Exposure Control', 'Natural Lighting']
  }
];
